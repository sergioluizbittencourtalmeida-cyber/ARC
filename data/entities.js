// ============================================================================
// A.R.C. — BANCO DE DADOS DE ENTIDADES (DADOS FICTÍCIOS)
// ============================================================================
// Edite ou adicione entidades aqui. Cada entidade gera automaticamente sua
// página individual via classified/entity.html?id=<codigo>
// ============================================================================

window.ARC_ENTITIES = [
  {
    id: "ARC-001",
    designation: "ARC-001",
    name: "O Espelho Vazio",
    classification: "Organismo não identificado",
    threat: "HIGH",
    status: "UNDER INVESTIGATION",
    lastLocation: "Setor 7 — Instalação de Contenção Delta",
    firstIdentified: "1998-03-14",
    description: "Organismo de aparência humanoide com proporções anatômicas irregulares. A estrutura física parece inconsistente com padrões biológicos conhecidos. A pele apresenta textura variável, alternando entre superfície opaca e aspecto membranoso sob diferentes condições de iluminação.",
    behavior: "Exibe comportamento passivo quando observado diretamente, mas registros de câmeras de segurança mostram movimentos rápidos e fora do ângulo de visão do operador. Não emite sons audíveis, mas sensores captam vibrações de baixa frequência (17-19 Hz) em sua proximidade.",
    capabilities: [
      "Alteração de proporções físicas em tempo real",
      "Absorção de luz ambiente em um raio de ~3 metros",
      "Imunidade parcial a métodos convencionais de contenção física"
    ],
    incidents: [
      { date: "2023-11-02", summary: "Três agentes de campo relataram descrições fisicamente incompatíveis do mesmo indivíduo após exposição prolongada." },
      { date: "2024-01-17", summary: "Câmera de contenção capturou entidade fora de sua célula sem sinais de arrombamento. Não foi localizada após 4 horas de buscas." }
    ],
    containment: "Célula de contenção padrão revestida com material não-refletivo. Iluminação constante acima de 200 lux. Proibido o uso de espelhos ou superfícies refletivas dentro da instalação. Acesso restrito a nível 3.",
    witnessReports: [
      "Parecia uma pessoa, mas algo estava errado. Os braços não doíam nos lugares certos.",
      "Olhei para ele e meus olhos doíam. Não era dor de cansaço. Era como se minha visão não soubesse o que estava vendo.",
      "Eu juro que era meu irmão. Mas ele não piscava. Nunca piscava."
    ],
    additionalPhotos: [
      { id: "CAM-04/F-0281", desc: "Câmera de segurança — sala de observação, 03:14" },
      { id: "FIELD-ARC001-B", desc: "Foto de campo — corredor do setor 7, recuperada após incidente" }
    ],
    notes: "A identificação visual sozinha não é considerada um método confiável para confirmar a identidade do organismo. Relatórios conflitantes sugerem que a aparência varia de acordo com o observador."
  },
  {
    id: "ARC-002",
    designation: "ARC-002",
    name: "A Segunda Pele",
    classification: "Organismo simbiótico",
    threat: "CRITICAL",
    status: "CONTAINED",
    lastLocation: "Célula de Biocontenção Estrita — Nível 4",
    firstIdentified: "2012-07-22",
    description: "Organismo capaz de utilizar corpos humanos e animais como revestimento externo. Quando não hospedado, apresenta forma gelatinosa translúcida de consistência variável. Sob microscopia, a estrutura celular não corresponde a nenhum reino biológico conhecido.",
    behavior: "Busca hospedeiros inconscientes ou sob baixo estresse. Uma vez aderido ao corpo, assume o controle motor e imita comportamentos humanos com precisão alarmante, embora pequenos deslizes (falha em piscar, respiração irregular) sejam observados em gravações detalhadas.",
    capabilities: [
      "Aderência e integração com tecido biológico hospedeiro",
      "Imitação comportamental e vocal de humanos",
      "Regeneração rápida do revestimento externo"
    ],
    incidents: [
      { date: "2015-04-10", summary: "Agente de campo relatou colega de equipe agindo de forma estranha após missão. Exames revelaram ausência de sinais vitais no indivíduo por 36 horas antes da detecção." },
      { date: "2019-09-03", summary: "Tentativa de extração falhou. O hospedeiro entrou em colapso e o organismo se separou em múltiplos fragmentos antes da contenção." }
    ],
    containment: "Câmara de biocontenção nível 4, atmosfera controlada, temperatura mantida abaixo de 10°C para retardar atividade metabólica. Trajes de isolamento obrigatórios. Nenhum contato físico direto sem autorização de nível 4.",
    witnessReports: [
      "Era ela. Mas os olhos... não pareciam os dela.",
      "Ele não respirava. Eu olhei no peito e não havia movimento nenhum."
    ],
    additionalPhotos: [
      { id: "LAB-002-X", desc: "Amostra externa ao hospedeiro — laboratório de análise" },
      { id: "AUTOPSY-002", desc: "Registro de autópsia — hospedeiro de teste (identidade censurada)" }
    ],
    notes: "Documentos internos indicam que pelo menos dois funcionários da A.R.C. podem ter sido substituídos antes da identificação da entidade. Investigação em andamento."
  },
  {
    id: "ARC-003",
    designation: "ARC-003",
    name: "O Multiplicador",
    classification: "Fenômeno espacial anômalo",
    threat: "UNKNOWN",
    status: "UNDER INVESTIGATION",
    lastLocation: "Zona de exclusão — Floresta de Pinheiros, Região Norte",
    firstIdentified: "2005-11-30",
    description: "Fenômeno que se manifesta como múltiplas instâncias de um mesmo indivíduo humano aparecendo simultaneamente em locais diferentes. Não há ligação física visível entre as instâncias. Cada instância afirma ser a 'original'.",
    behavior: "As instâncias não interagem entre si quando colocadas na mesma sala. Testes de DNA mostram resultados idênticos em todas as instâncias, mas impressões digitais divergem ligeiramente após 72 horas de manifestação.",
    capabilities: [
      "Manifestação simultânea de múltiplas cópias de um mesmo sujeito",
      "Deslocamento espacial não linear entre instâncias",
      "Desvanecimento espontâneo após período variável"
    ],
    incidents: [
      { date: "2008-02-19", summary: "Testemunhos relatam o mesmo homem em três cidades diferentes no mesmo dia. Todas as instâncias foram entrevistadas e forneceram depoimentos compatíveis sobre uma rotina diária comum." },
      { date: "2016-06-11", summary: "Instância capturada desapareceu de uma cela selada. Duas horas depois, uma nova instância apareceu na recepção da instalação, afirmando ter estado em casa o dia inteiro." }
    ],
    containment: "Monitoramento remoto apenas. Nenhuma instância deve ser mantida em contato físico com outra. Protocolo de isolamento imediato em caso de manifestação em instalação da A.R.C.",
    witnessReports: [
      "Vi meu pai saindo de casa às 8h. Às 8h15 ele estava no posto de gasolina a 40 km de distância. Era o mesmo rosto.",
      "Não sei qual deles é o verdadeiro. Todos lembram da minha infância."
    ],
    additionalPhotos: [
      { id: "SURV-003-1", desc: "Vigilância — mesmo indivíduo em dois locais, mesmo timestamp" },
      { id: "SURV-003-2", desc: "Foto de campo — instâncias lado a lado, sem interação" }
    ],
    notes: "Alguns registros sugerem ligação com eventos de massa relatados em jornais locais como 'visitas' ou 'aparições'. Origem desconhecida."
  },
  {
    id: "ARC-004",
    designation: "ARC-004",
    name: "O Sussurrador Estático",
    classification: "Entidade de origem não determinada",
    threat: "MODERATE",
    status: "CONTAINED",
    lastLocation: "Sala de contenção acústica — Subsolo 3",
    firstIdentified: "1987-10-01",
    description: "Entidade associada a aparelhos eletrônicos antigos, especialmente televisores e rádios de tubo. Não possui forma física fixa. Manifesta-se como distorção de sinal, voz entre ruídos estáticos e imagens sobrepostas em telas desligadas.",
    behavior: "Comunica-se por meio de sinais de áudio distorcidos. Falantes afirmam ouvir mensagens coerentes em português, inglês e outros idiomas, mas gravações analisadas pela A.R.C. contêm apenas ruído branco. A entidade parece responder a perguntas feitas em voz alta perto de aparelhos ligados.",
    capabilities: [
      "Manipulação de sinais eletrônicos de áudio/vídeo",
      "Projeção de voz através de dispositivos eletrônicos",
      "Aparição em telas de aparelhos desligados"
    ],
    incidents: [
      { date: "1991-05-14", summary: "Família relata televisão ligada sozinha às 3h da manhã mostrando imagens de um quarto que não existia em sua casa. Nenhum aparelho estava conectado à rede." },
      { date: "2003-12-21", summary: "Operador de rádio amador captou transmissão com coordenadas geográficas. Equipes da A.R.C. foram ao local e encontraram apenas um aparelho de rádio antigo, ligado, sem fonte de energia." }
    ],
    containment: "Armazenado em sala blindada contra eletromagnetismo. Aparelhos eletrônicos proibidos a menos de 10 metros. Testes de comunicação supervisionados por nível 2.",
    witnessReports: [
      "A televisão estava desligada. Vi meu rosto na tela, mas eu não estava em casa.",
      "Ouvi minha mãe chamando meu nome pelo rádio. Minha mãe morreu há dez anos."
    ],
    additionalPhotos: [
      { id: "TV-004-A", desc: "Televisor analógico — imagem capturada durante manifestação" },
      { id: "RADIO-004-B", desc: "Aparelho de rádio recuperado no local do incidente 2003" }
    ],
    notes: "Interpretações religiosas sugerem ligação com fenômenos espirituais. A A.R.C. mantém posição neutra, classificando como fenômeno de origem não determinada."
  },
  {
    id: "ARC-005",
    designation: "ARC-005",
    name: "A Figura do Corredor",
    classification: "Humanoide anômalo",
    threat: "LOW",
    status: "CONTAINED",
    lastLocation: "Instalação de contenção de baixo risco — Ala Oeste",
    firstIdentified: "2019-01-08",
    description: "Humanoide de aproximadamente 2,3 metros de altura, membros desproporcionalmente longos e rosto sem características definíveis. Veste roupas civis variadas, aparentemente coletadas de diferentes períodos e locais. Não apresenta órgãos internos visíveis em exames de imagem.",
    behavior: "Permanece imóvel por longos períodos, geralmente em cantos ou corredores. Não reage a estímulos sonoros, visuais ou táteis. Quando observado através de câmeras, sua posição muda entre frames sem movimento registrado.",
    capabilities: [
      "Deslocamento fora do campo de observação direta",
      "Ausência de resposta a estímulos externos",
      "Imunidade a métodos convencionais de restrição física"
    ],
    incidents: [
      { date: "2020-03-15", summary: "Funcionário de limpeza relatou figura em corredor vazio da instalação. Câmeras de segurança não registraram presença, mas sensor de movimento foi acionado três vezes em 10 minutos." },
      { date: "2022-07-09", summary: "Entidade encontrada fora de sua cela durante inspeção de rotina. Estava de pé em frente a uma porta trancada, olhando para a fechadura. Nenhuma chave ou ferramenta foi encontrada." }
    ],
    containment: "Quarto padrão de contenção, sem janelas. Câmeras de vigilância com gravação contínua. Proibido entrar na cela sem acompanhamento de pelo menos dois agentes.",
    witnessReports: [
      "Ele estava lá, no fim do corredor. Quando piscamos, não estava mais.",
      "Não tem rosto. É como se o rosto estivesse apagado."
    ],
    additionalPhotos: [
      { id: "CAM-12-005", desc: "Câmera de corredor — figura próxima à porta de serviço" },
      { id: "CELL-005-INSIDE", desc: "Interior da cela — entidade imóvel no canto" }
    ],
    notes: "Baixa ameaça direta, mas efeito psicológico sobre funcionários relatado em múltiplos casos. Sessões de aconselhamento oferecidas ao pessoal exposto."
  }
];

// Índice rápido por código (preenchido na inicialização)
window.ARC_ENTITIES_BY_ID = {};
window.ARC_ENTITIES.forEach(function(e) {
  window.ARC_ENTITIES_BY_ID[e.id] = e;
});
