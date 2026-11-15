// ============================================================================
// A.R.C. — CONFIGURAÇÃO DE AUTENTICAÇÃO (DEMONSTRATIVA LOCAL)
// ============================================================================
// Edite os valores abaixo para alterar usuário, senha e código de autorização.
// SENHAS E CÓDIGOS NÃO SÃO ARMAZENADOS EM TEXTO PURO: utilizam hash SHA-256.
// Para gerar novos hashes, execute:
//   node -e "const crypto = require('crypto'); console.log(crypto.createHash('sha256').update('SUA_SENHA').digest('hex'));"
//
// Credenciais de demonstração:
//   Usuário: agent.arc
//   Senha:   arc2024
//   Código:  ARC-7741
// ============================================================================

window.ARC_CONFIG = {
  // Versão do sistema interno
  version: "ARC-SYS v4.2.1 (Classified)",

  // Usuário de demonstração
  demoUsername: "agent.arc",

  // Hash SHA-256 da senha de demonstração (senha real: arc2024)
  demoPasswordHash: "4be06fbe866bcbbaf91b4d1f0677765031bea160399487fd69d71c25b0d345da",

  // Hash SHA-256 do código de autorização de segunda etapa (código real: ARC-7741)
  authCodeHash: "f3e24eb106491d07c4d0a8ae6867b4f8f2958af7fab3eb00c2c085f87f192328",

  // Tempo de expiração da sessão em milissegundos (1 hora)
  sessionTimeout: 3600000,

  // Mensagens institucionais de acesso negado
  messages: {
    invalidCredentials: "Credenciais inválidas. Acesso negado.",
    accountLocked: "Conta bloqueada por múltiplas tentativas falhas. Tente novamente em 15 minutos.",
    invalidCode: "Código de autorização inválido ou expirado.",
    sessionExpired: "Sessão expirada. Faça login novamente.",
    unauthorized: "Você não possui autorização para acessar este arquivo."
  }
};

// ============================================================================
// FIM DA CONFIGURAÇÃO
// ============================================================================
