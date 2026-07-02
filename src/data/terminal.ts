import { TerminalScenario } from "@/types";

export const terminalScenarios: TerminalScenario[] = [
  {
    id: "laravel",
    title: "API Laravel — Nandana",
    lines: [
      { type: "input", text: "php artisan route:list --path=api/v1" },
      { type: "output", text: "GET    api/v1/agendamentos" },
      { type: "output", text: "POST   api/v1/agendamentos" },
      { type: "output", text: "POST   api/v1/pagamentos/webhook" },
      { type: "output", text: "GET    api/v1/planos" },
      { type: "success", text: "✓ 12 rotas encontradas" },
    ],
  },
  {
    id: "curl",
    title: "Teste de API REST",
    lines: [
      { type: "input", text: 'curl -X POST api.formosarh.com/vagas \\' },
      { type: "input", text: '  -H "Authorization: Bearer ***" \\' },
      { type: "input", text: '  -d \'{"titulo": "Dev Back-End"}\'' },
      { type: "output", text: "HTTP/1.1 201 Created" },
      { type: "output", text: '{"id": 847, "status": "publicada"}' },
      { type: "success", text: "✓ Vaga criada com sucesso" },
    ],
  },
  {
    id: "git",
    title: "Git Workflow",
    lines: [
      { type: "input", text: "git checkout -b feat/pagamentos-nandana" },
      { type: "output", text: "Switched to a new branch 'feat/pagamentos-nandana'" },
      { type: "input", text: "git commit -m 'feat: integração gateway Stripe'" },
      { type: "output", text: "[feat/pagamentos-nandana a3f2c1d] feat: integração gateway Stripe" },
      { type: "input", text: "git push origin feat/pagamentos-nandana" },
      { type: "success", text: "✓ Branch enviada — PR aberto" },
    ],
  },
  {
    id: "docker",
    title: "Docker Compose",
    lines: [
      { type: "input", text: "docker compose up -d" },
      { type: "output", text: "Creating portfolio_app ... done" },
      { type: "output", text: "Creating portfolio_mysql ... done" },
      { type: "output", text: "Creating portfolio_redis ... done" },
      { type: "info", text: "Attaching to portfolio_app" },
      { type: "success", text: "✓ Ambiente local rodando em :8000" },
    ],
  },
  {
    id: "deploy",
    title: "Deploy",
    lines: [
      { type: "input", text: "npm run build" },
      { type: "output", text: "▲ Next.js 15.1.4" },
      { type: "output", text: "Creating an optimized production build ..." },
      { type: "output", text: "Compiled successfully" },
      { type: "input", text: "vercel --prod" },
      { type: "success", text: "✓ Deploy: https://portfolio-silvio.vercel.app" },
    ],
  },
];
