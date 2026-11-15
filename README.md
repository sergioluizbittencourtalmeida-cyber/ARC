# A.R.C. — Anomalous Research & Containment

Portal institucional de uma organização fictícia de investigação e contenção de anomalias, dentro de um universo de **Analog Horror**.

## Estrutura do Projeto

```
Analog Horror/
├── index.html                      # Portal público (Home)
├── about.html                      # Sobre a organização
├── departments.html                # Departamentos
├── public-info.html                # GLOBAL MONITORING NETWORK — central pública de eventos monitorados
├── event-geo-001.html              # Detalhe público: evento geológico
├── event-atm-014.html              # Detalhe público: evento atmosférico
├── event-pop-022.html              # Detalhe público: evento populacional
├── event-bio-031.html              # Detalhe público: evento biológico
├── event-seis-042.html             # Detalhe público: evento sísmico
├── contact.html                    # Contato institucional
├── signin.html                     # Autenticação — Etapa 1 (usuário/senha)
├── auth.html                       # Autenticação — Etapa 2 (código de autorização)
├── README.md                       # Este arquivo
├── config/
│   └── auth-config.js              # Credenciais de demonstração (hashes SHA-256)
├── css/
│   ├── public.css                  # Estilos do portal público
│   ├── restricted.css              # Estilos da área restrita
│   └── auth.css                    # Estilos de autenticação
├── js/
│   ├── auth.js                     # Sistema de autenticação de duas etapas
│   └── app.js                      # Navegação, guarda de rotas, utilitários
├── data/
│   ├── entities.js                 # Banco de dados de entidades (5+ registros)
│   ├── incidents.js                # Relatórios de incidentes
│   ├── documents.js                # Documentos confidenciais (com redações)
│   ├── evidence.js                 # Evidências fotográficas (metadados)
│   └── personnel.js                # Registros de pessoal
└── classified/                     # Área restrita (após autenticação)
    ├── index.html                  # Dashboard
    ├── entities.html               # Banco de entidades (lista)
    ├── entity.html                 # Registro individual de entidade
    ├── incidents.html              # Relatórios de incidentes (lista)
    ├── incident.html               # Relatório individual
    ├── field-ops.html              # Operações de campo
    ├── research.html               # Documentos de pesquisa
    ├── evidence.html               # Galeria de evidências
    ├── personnel.html              # Registros de pessoal
    ├── restricted.html             # Arquivos restritos
    ├── document.html               # Visualizador de documento
    └── communications.html         # Comunicações internas
```

## Como executar

O site é totalmente estático (HTML, CSS, JavaScript puro). Não requer servidor nem dependências externas.

1. Abra a pasta `Analog Horror`.
2. Duplo-clique em `index.html` para acessar o portal público.
3. Para acessar a área restrita, clique em **SIGN IN** e use as credenciais de demonstração:
   - Usuário: `agent.arc`
   - Senha: `arc2024`
   - Código de autorização: `ARC-7741`

## Configuração de credenciais

Edite o arquivo `config/auth-config.js` para alterar o usuário, senha e código de autorização de demonstração. As senhas são armazenadas como **hash SHA-256**, nunca em texto puro.

Para gerar novos hashes:

```bash
node -e "const crypto = require('crypto'); console.log(crypto.createHash('sha256').update('SUA_SENHA').digest('hex'));"
```

## Autenticação

O sistema utiliza autenticação de duas etapas:
1. **Etapa 1**: Usuário e senha (verificação contra hash SHA-256).
2. **Etapa 2**: Código de autorização (verificação contra hash SHA-256).

A sessão é armazenada em `sessionStorage` e expira após 1 hora (configurável em `auth-config.js`).

## Universo Analog Horror

O site começa como um portal governamental profissional e gradualmente revela elementos perturbadores através de:
- Informações contraditórias entre documentos.
- Fotografias cuja descrição não corresponde à imagem.
- Funcionários com identidades incompatíveis em registros diferentes.
- Arquivos com observações como "DO NOT REPRODUCE THIS IMAGE".
- Registros de contenção inconsistentes.
- Comunicações internas sugerindo que a própria A.R.C. não compreende completamente as entidades.

## Tecnologias

- HTML5, CSS3, JavaScript (ES5 compatível, sem dependências).
- Criptografia Web Crypto API (SHA-256) para autenticação demonstrativa.
- Layout responsivo para desktop e mobile.
- Sem uso de serviços externos, bancos de dados reais ou credenciais de terceiros.

## Aviso

A A.R.C. é uma organização inteiramente fictícia, criada para fins de ficção e entretenimento no gênero Analog Horror. Não há relação com governos, instituições reais ou credenciais de terceiros.