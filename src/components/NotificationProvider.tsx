"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBell,
  FaCodeBranch,
  FaRocket,
  FaServer,
  FaTimes,
} from "react-icons/fa";
import { devNotifications } from "@/data/notifications";
import { DevNotification, NotificationIcon } from "@/types";

const iconMap: Record<NotificationIcon, React.ComponentType<{ className?: string }>> = {
  deploy: FaRocket,
  git: FaCodeBranch,
  npm: FaServer,
  bell: FaBell,
  api: FaServer,
};

interface Toast extends DevNotification {
  toastId: string;
}

interface NotificationContextValue {
  showNotification: (message?: string) => void;
}

const NotificationContext = createContext<NotificationContextValue>({
  showNotification: () => {},
});

export function useNotifications() {
  return useContext(NotificationContext);
}

const MIN_INTERVAL = 20000;
const MAX_INTERVAL = 40000;
const TOAST_DURATION = 5000;
const MAX_TOASTS = 2;

export default function NotificationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const usedIds = useRef<Set<string>>(new Set());
  const timeoutRefs = useRef<Map<string, ReturnType<typeof setTimeout>>>(
    new Map()
  );

  const removeToast = useCallback((toastId: string) => {
    setToasts((prev) => prev.filter((t) => t.toastId !== toastId));
    const timeout = timeoutRefs.current.get(toastId);
    if (timeout) {
      clearTimeout(timeout);
      timeoutRefs.current.delete(toastId);
    }
  }, []);

  const showNotification = useCallback(
    (message?: string) => {
      setToasts((prev) => {
        if (prev.length >= MAX_TOASTS) return prev;

        let notification: DevNotification;
        if (message) {
          notification = {
            id: "custom",
            message,
            icon: "bell",
          };
        } else {
          const available = devNotifications.filter(
            (n) => !usedIds.current.has(n.id)
          );
          const pool =
            available.length > 0 ? available : devNotifications;
          if (available.length === 0) usedIds.current.clear();
          notification =
            pool[Math.floor(Math.random() * pool.length)];
          usedIds.current.add(notification.id);
        }

        const toastId = `${notification.id}-${Date.now()}`;
        const toast: Toast = { ...notification, toastId };

        const timeout = setTimeout(() => {
          removeToast(toastId);
        }, TOAST_DURATION);
        timeoutRefs.current.set(toastId, timeout);

        return [...prev, toast];
      });
    },
    [removeToast]
  );

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      showNotification();
    }, 8000);

    const scheduleNext = () => {
      const delay =
        MIN_INTERVAL + Math.random() * (MAX_INTERVAL - MIN_INTERVAL);
      return setTimeout(() => {
        showNotification();
        timerRef.current = scheduleNext();
      }, delay);
    };

    const timerRef = { current: null as ReturnType<typeof setTimeout> | null };
    const startTimer = setTimeout(() => {
      timerRef.current = scheduleNext();
    }, 15000);

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(startTimer);
      if (timerRef.current) clearTimeout(timerRef.current);
      const timeouts = timeoutRefs.current;
      timeouts.forEach((t) => clearTimeout(t));
    };
  }, [showNotification]);

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-3 pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => {
            const Icon = iconMap[toast.icon];
            return (
              <motion.div
                key={toast.toastId}
                initial={{ opacity: 0, x: 80, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 80, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="pointer-events-auto flex items-center gap-3 bg-surface-elevated border border-terminal-purple/20 rounded-xl px-4 py-3 shadow-2xl max-w-sm backdrop-blur-md"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-terminal-purple/20 flex items-center justify-center">
                  <Icon className="text-terminal-purple text-sm" />
                </div>
                <p className="text-sm text-foreground font-mono flex-1">
                  {toast.message}
                </p>
                <button
                  onClick={() => removeToast(toast.toastId)}
                  className="text-muted hover:text-foreground transition-colors flex-shrink-0"
                  aria-label="Fechar notificação"
                >
                  <FaTimes className="text-xs" />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </NotificationContext.Provider>
  );
}
