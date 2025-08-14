export const categories = {
  medicamento: {
    tipo: ["Medicamento comum", "Medicamento especial"],
    formaFarmaceutica: {
      formaSolida: [
        "Comprimido",
        "Cápsula",
        "Drágea",
        "Granulado",
        "Supositório",
      ],
      formaLiquida: ["Solução", "Suspensão", "Emulsão", "Injetável"],
      formaFrasco: ["Frasco", "Frasco-ampola", "Frasco-borracha"],
      formaSemissolida: ["Pomada", "Pasta", "Creme", "Gel", "Loção"],
      formaGasosa: ["Aerossol", "Inalador"],
      formaEspecial: ["Adesivo", "Implante", "Comprimido sublingual"],
    },
    ggrem: "",
    registroAnvisa: {
      temRegistro: false,
      numeroRegistro: "",
      validadeRegistro: null,
    },
    embalagem: {
      primaria: 0 /*Quantidade de caixas por caixa de embarque*/,
      secundaria: 0 /*Quantidade de unidades por embalagem*/,
    },
    marca: { nomeMarca: "", categoriaRegulatoia: "" },
    fabricante: { nomeFabricante: "", cnpjFabricante: "" },
  },
  material: {
    tipo: ["Descartável", "Curativo", "Equipamento"],
    registroAnvisa: {
      temRegistro: false,
      numeroRegistro: null,
    },
  },
}
