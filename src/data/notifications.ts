import { DevNotification } from "@/types";

export const devNotifications: DevNotification[] = [
  { id: "1", message: "Deploy em produção concluído ✓", icon: "deploy" },
  { id: "2", message: "git push origin main — 3 commits enviados", icon: "git" },
  { id: "3", message: "Nova integração: gateway de pagamento ativo", icon: "api" },
  { id: "4", message: "npm run build — 0 erros, 0 warnings", icon: "npm" },
  { id: "5", message: "Candidatura recebida — Formosa RH", icon: "bell" },
  { id: "6", message: "Webhook processado com sucesso", icon: "api" },
  { id: "7", message: "Migration executada: create_agendamentos", icon: "deploy" },
  { id: "8", message: "PR #42 aprovado e mergeado", icon: "git" },
  { id: "9", message: "Cache Redis invalidado — performance +40%", icon: "npm" },
  { id: "10", message: "Novo agendamento — Nandana Terapias", icon: "bell" },
];
