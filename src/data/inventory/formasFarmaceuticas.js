const formasFarmaceuticas = {
  Comprimido: ["Unidade"],
  Cápsula: ["Unidade"],
  Drágea: ["Unidade"],
  Pastilha: ["Unidade"],
  Pó: ["Envelope", "Frasco"],
  Granulado: ["Envelope", "Frasco"],

  Creme: ["Bisnaga", "Pote"],
  Pomada: ["Bisnaga", "Pote"],
  Gel: ["Bisnaga", "Pote"],
  Loção: ["Frasco"],
  Xampu: ["Frasco"],

  "Solução oral": ["Frasco"],
  "Solução injetável": ["Ampola", "Frasco-ampola"],
  "Solução tópica": ["Frasco", "Frasco conta-gotas", "Spray"],
  "Colírio (solução oftálmica)": ["Frasco conta-gotas"],

  "Soro fisiológico": ["Bolsa"],
  "Soluções parenterais (IV)": ["Bolsa", "Frasco"],

  "Suspensão oral": ["Frasco"],
  "Suspensão injetável": ["Frasco-ampola"],
  Xarope: ["Frasco"],

  Aerosol: ["Frasco", "Spray"],
  "Inalador / Nebulizador": ["Frasco", "Ampola"],

  "Adesivo transdérmico": ["Unidade"],
  Supositório: ["Unidade"],
  Óvulo: ["Unidade"],
};

export default formasFarmaceuticas;
