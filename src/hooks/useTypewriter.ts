"use client";

import { useCallback, useEffect, useState } from "react";
import { TerminalLine } from "@/types";

interface UseTypewriterOptions {
  lines: TerminalLine[];
  typingSpeed?: number;
  lineDelay?: number;
  onComplete?: () => void;
}

interface DisplayedLine extends TerminalLine {
  displayedText: string;
  isComplete: boolean;
}

export function useTypewriter({
  lines,
  typingSpeed = 35,
  lineDelay = 400,
  onComplete,
}: UseTypewriterOptions) {
  const [displayedLines, setDisplayedLines] = useState<DisplayedLine[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const reset = useCallback(() => {
    setDisplayedLines([]);
    setCurrentLineIndex(0);
    setCurrentCharIndex(0);
    setIsComplete(false);
  }, []);

  useEffect(() => {
    reset();
  }, [lines, reset]);

  useEffect(() => {
    if (isComplete || lines.length === 0) return;

    const currentLine = lines[currentLineIndex];
    if (!currentLine) {
      setIsComplete(true);
      onComplete?.();
      return;
    }

    if (currentLine.type === "output" || currentLine.type === "success" || currentLine.type === "error" || currentLine.type === "info") {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [
          ...prev,
          { ...currentLine, displayedText: currentLine.text, isComplete: true },
        ]);
        setCurrentLineIndex((i) => i + 1);
        setCurrentCharIndex(0);
      }, lineDelay);
      return () => clearTimeout(timer);
    }

    if (currentCharIndex < currentLine.text.length) {
      const timer = setTimeout(() => {
        const partial = currentLine.text.slice(0, currentCharIndex + 1);
        setDisplayedLines((prev) => {
          const updated = [...prev];
          const existing = updated.find((_, i) => i === currentLineIndex);
          if (existing) {
            updated[currentLineIndex] = {
              ...existing,
              displayedText: partial,
            };
          } else {
            updated.push({
              ...currentLine,
              displayedText: partial,
              isComplete: false,
            });
          }
          return updated;
        });
        setCurrentCharIndex((c) => c + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setDisplayedLines((prev) => {
        const updated = [...prev];
        if (updated[currentLineIndex]) {
          updated[currentLineIndex] = {
            ...updated[currentLineIndex],
            isComplete: true,
          };
        }
        return updated;
      });
      setCurrentLineIndex((i) => i + 1);
      setCurrentCharIndex(0);
    }, lineDelay);
    return () => clearTimeout(timer);
  }, [
    currentLineIndex,
    currentCharIndex,
    lines,
    typingSpeed,
    lineDelay,
    isComplete,
    onComplete,
  ]);

  const isTyping =
    !isComplete &&
    currentLineIndex < lines.length &&
    (currentCharIndex < (lines[currentLineIndex]?.text.length ?? 0) ||
      displayedLines.length <= currentLineIndex);

  return { displayedLines, isTyping, isComplete, reset };
}
