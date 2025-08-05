"use client";
import { Box, Flex, Text, Link, Button, Image } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box bg="gray.800" color="white" py={1} width={"100vw"} overflow="hidden">
      <Flex align="center" justify="space-between" maxW="1200px" mx="auto">
        <Image src="/logo.png" alt="Logo" height={"20"} borderRadius={"md"} />
        <Flex align="center">
          <Link href="/" mx={4}>
            Home
          </Link>
          <Link href="/about" mx={4}>
            Sobre Nós
          </Link>
          <Link href="/contact" mx={4}>
            Contato
          </Link>
          <Link href="/login" mx={4}>
            Login
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
