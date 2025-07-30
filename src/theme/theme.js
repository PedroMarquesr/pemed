import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  // Suas personalizações aqui
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
        fontFamily: "'Inter', sans-serif", // Exemplo com fonte customizada
      },
    },
  },
  colors: {
    brand: {
      100: "#86efac", // Exemplo de paleta customizada
      500: "#22c55e",
    },
  },
});

export default theme;
