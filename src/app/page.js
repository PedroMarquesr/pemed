"use client";

import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";

export default function Home() {
  return (
    <Provider>
      <Box position="relative" height="100vh" width="100vw" overflow="hidden">
        <Box
          position="absolute"
          width="100%"
          height="100%"
          zIndex={-1}
          _before={{
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(38, 136, 167, 0.4)",
          }}
        >
          <Image
            src="/login-illustration-pemed.png"
            alt="Imagem de fundo"
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </Box>

        <Flex
          minHeight="100vh"
          width="100vw"
          zIndex={1}
          position="relative"
          padding={5}
        >
          <Box flex="1">
            <Image
              src="/login-illustration-pemed.png"
              objectFit="fill"
              width="100%"
              height="100%"
            />
          </Box>

          <Flex
            width="50%"
            height={"100vh"}
            bg="rgba(31, 150, 94, 0.6)"
            color="white"
            direction="column"
            justify="center"
            align="center"
          >
            <Text fontSize="2xl" mb={8}>
              Login
            </Text>
            <Box>
              <Text fontSize="xl">Ícone de login do Google</Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Provider>
  );
}
