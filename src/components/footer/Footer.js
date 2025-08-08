"use client";
import { Box, Flex, Text, Link, Imput, Button } from "@chakra-ui/react";
import { RxBoxModel } from "react-icons/rx";

export default function Footer() {
  return (
    <Box bg="gray.800" color="white" py={8} width={"100vw"} overflow={"hidden"} mt={0}>
      <Flex justify={"center"}>
        <Box mr={"60"}>
          <Text
            textDecoration={"underline"}
            textStyle={"xl"}
            fontWeight={"bold"}
            fontSize={"md"}
          >
            Pemed
          </Text>
          <Text fontStyle={"italic"} fontSize={"sm"}>
            Gestão inteligente de insumos médicos e medicamentos
          </Text>
        </Box>
        <Box>
          <Text
            textDecoration="underline"
            textStyle="xl"
            fontSize={"md"}
            fontWeight="bold"
          >
            Links Rápidos
          </Text>
          <Flex flexDirection="Column" fontSize={"sm"}>
            <Link fontStyle="italic">Sobre nós</Link>
            <Link fontStyle="italic">Contato</Link>
            <Link fontStyle="italic">Termos de uso</Link>
          </Flex>
        </Box>
      </Flex>
      <Box>
        <Text fontSize="sm" textAlign="center">
          © {new Date().getFullYear()} Pemed. Todos os direitos reservados.
        </Text>
      </Box>
    </Box>
  );
}
