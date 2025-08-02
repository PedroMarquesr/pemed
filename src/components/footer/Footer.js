"use client";
import { Box, Flex, Text, Link, Imput, Button } from "@chakra-ui/react";
import { RxBoxModel } from "react-icons/rx";

export default function Footer() {
  return (
    <Box bg="gray.800" color="white" py={8} width={"100vw"} overflow={"hidden"}>
      <Flex justify={"space-around"}>
        <Box>
          <Text
            textDecoration={"underline"}
            textStyle={"xl"}
            fontWeight={"bold"}
          >
            Pemed
          </Text>
          <Text fontSize={"italic"}>
            Gestão inteligente de insumos médicos e medicamentos
          </Text>
        </Box>
        <Box>
          <Text textDecoration="underline" textStyle="xl" fontWeight="bold">
            Links Rápidos
          </Text>
          <Flex flexDirection="Column">
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
