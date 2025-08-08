"use client";
import { Box, Flex, Text, Link, Button, Image } from "@chakra-ui/react";

export default function Menu() {
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      bg={"#a7ceda"}
      height={"100vh"}
      width={"100vw"}
      scrollWidth={"0"}
      color={"#000"}
      gap={10}
    >
      <Box>
        <Text mt={20}>Menu</Text>
      </Box>
      <Box color={"black"} fontSize={"xl"} textAlign={"center"} gap={10}>
        <Box
          p={2}
          px={100}
          m={2}
          backdropBlur={"10px"}
          bg={"teal.800"}
          borderRadius={10}
          shadow={"md"}
          _hover={{ bg: "teal.600", color: "white", cursor: "pointer" }}
        >
          <Link color={"whiteAlpha.800"}> CADASTRO DE ITEM </Link>
        </Box>
        <Box
          p={2}
          m={2}
          backdropBlur={"10px"}
          bg={"teal.800"}
          borderRadius={10}
          shadow={"md"}
          _hover={{ bg: "teal.600", color: "white", cursor: "pointer" }}
        >
          <Link color={"whiteAlpha.800"}> EXIBIÇÃO DE ESTOQUE </Link>
        </Box>
        <Box
          p={2}
          m={2}
          backdropBlur={"10px"}
          bg={"teal.800"}
          borderRadius={10}
          shadow={"md"}
          _hover={{
            bg: "teal.600",
            color: "white",
            cursor: "pointer",
            transitionDuration: "0.9s",
          }}
        >
          <Link color={"whiteAlpha.800"}> ENTRADA E SAÍDA </Link>
        </Box>
        <Box
          p={2}
          m={2}
          backdropBlur={"10px"}
          bg={"teal.800"}
          borderRadius={10}
          shadow={"md"}
          _hover={{ bg: "teal.600", color: "white", cursor: "pointer" }}
        >
          <Link color={"whiteAlpha.800"}> RELATÓRIOS </Link>
        </Box>
      </Box>
    </Flex>
  );
}
