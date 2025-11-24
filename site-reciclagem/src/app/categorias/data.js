export const categorias = [
  {
    id: "eletronicos",
    nome: "Eletrônicos",
    descricao: "Computadores, smartphones, tablets e outros dispositivos eletrônicos",
    beneficios: [
      "Recuperação de metais valiosos como ouro, prata e cobre",
      "Redução de resíduos em aterros sanitários",
      "Evita contaminação por mercúrio e chumbo",
      "Possibilita reuso de componentes ainda funcionais"
    ],
    comoDescartar: [
      "Leve para pontos de coleta autorizados de lixo eletrônico",
      "Procure fabricantes que possuem programas de reciclagem",
      "Consulte a prefeitura pela lista de centros de reciclagem"
    ]
  },
  {
    id: "plastico",
    nome: "Plástico",
    descricao: "Garrafas, embalagens, sacos e outros produtos plásticos",
    beneficios: [
      "Reduz a quantidade de plástico em oceanos",
      "Economia de energia na produção de novos plásticos",
      "Diminui extração de petróleo",
      "Pode ser transformado em novos produtos duráveis"
    ],
    comoDescartar: [
      "Lave e seque os recipientes plásticos",
      "Deposite na coleta seletiva ou recicladores",
      "Identifique o símbolo de reciclagem no produto"
    ]
  },
  {
    id: "papel",
    nome: "Papel e Papelão",
    descricao: "Jornais, revistas, caixas e embalagens de papel",
    beneficios: [
      "Preserva árvores e florestas",
      "Reduz emissões de CO2",
      "Economia de água e energia",
      "Diminui poluição em aterros sanitários"
    ],
    comoDescartar: [
      "Mantenha seco e protegido da chuva",
      "Separe vidros e metais do papel",
      "Empilhe e leve para coleta ou recicladores"
    ]
  },
  {
    id: "vidro",
    nome: "Vidro",
    descricao: "Garrafas, potes, copos e outros produtos de vidro",
    beneficios: [
      "Vidro é infinitamente reciclável",
      "Reduz extração de areia e minerais",
      "Economia significativa de energia",
      "Não causa contaminação em aterros"
    ],
    comoDescartar: [
      "Lave os recipientes de vidro",
      "Proteja-se de vidro quebrado",
      "Separe vidros de cores diferentes se o reciclador indicar",
      "Deposite em locais apropriados"
    ]
  },
  {
    id: "metal",
    nome: "Metal",
    descricao: "Latas de alumínio, aço, cobre e outras ligas metálicas",
    beneficios: [
      "Metais são 100% recicláveis",
      "Economia de energia na refusão",
      "Reduz impacto da mineração",
      "Alto valor econômico"
    ],
    comoDescartar: [
      "Lave e seque as latas",
      "Esmague latas para economizar espaço",
      "Separe de outros materiais",
      "Leve para recicladores ou coleta seletiva"
    ]
  },
  {
    id: "bateria",
    nome: "Baterias e Pilhas",
    descricao: "Pilhas, baterias de smartphones, powerbanks e fontes",
    beneficios: [
      "Evita contaminação de solo e água",
      "Recupera matérias-primas valiosas",
      "Protege a saúde pública",
      "Reduz riscos de vazamento de ácidos"
    ],
    comoDescartar: [
      "Procure pontos de coleta de baterias",
      "Muitos supermercados e lojas eletrônicas recebem baterias",
      "Armazene em local seco e seguro",
      "Nunca descarte em lixo comum"
    ]
  }
]

export function getCategoria(id) {
  return categorias.find(cat => cat.id === id)
}
