"use client";

import { Box, Flex, Text, Link, Input, Button, Image } from "@chakra-ui/react";

export default function Login() {
  return (
    <Box position="relative" flex="1" width="100vw" overflow="hidden">
      <Box
        position="absolute"
        width="100vw"
        height="100%"
        overflow="hidden"
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
          alignContent={"Center"}
        />
      </Box>

      {/* Conteúdo principal */}
      <Flex
        minHeight="100%"
        width="100%"
        zIndex={1}
        position="relative"
        padding={5}
      >
        <Box flex="1">
          <Image
            alt="Ilustração de login"
            bg={"#e0f4fb"}
            borderRadius="8px 10px 0 0"
            src="/login-illustration-pemed.png"
            objectFit="contain"
            width="100%"
            height="100%"
          />
        </Box>

        <Flex
          borderRadius={8}
          width={{ base: "100%", md: "50%" }}
          height="100vh"
          bg="rgba(31, 150, 94, 0.6)"
          color="white"
          direction="column"
          justify="center"
          align="center"
        >
          <Text
            borderRadius={8}
            bgColor="rgba(2, 23, 22, 0.3)"
            px={8}
            py={2}
            fontSize="2xl"
            mb={8}
            fontWeight="bold"
          >
            Login
          </Text>

          <Box width="100%" maxWidth="400px">
            <Button
              width="100%"
              size="lg"
              variant="outline"
              bg="white"
              color="gray.800"
              _hover={{ bg: "gray.100" }}
              _active={{ bg: "gray.200" }}
            >
              Entrar com Google
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
