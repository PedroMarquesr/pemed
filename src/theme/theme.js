import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
        fontFamily: "'Inter', sans-serif", 
      },
    },
  },
  colors: {
    brand: {
      100: "#86efac", 
      500: "#22c55e",
    },
  },
});

export default theme;
