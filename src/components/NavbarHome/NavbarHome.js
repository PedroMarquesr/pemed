"use client";
import { Box, Flex, Image, Button, Text } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import LinkNavbar from "../LinkNavbar/LinkNavbar";

export default function NavbarHome() {
  const pathname = usePathname();
  const router = useRouter();

  const isLoginPage = pathname === "/login";

  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width={"100%"}
        opacity={"100%"}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          transition="all 0.2s ease-in-out"
          _hover={{
            transform: "scale(0.8)",
          }}
        >
          <Image
            ml="2"
            src="/logo.png"
            boxSize="90px"
            borderRadius="full"
            fit="cover"
            alt="logotipo"
          />
          <Text
            bgGradient="linear(to-r, #1f55ad, rgb(0,152,139))"
            bgClip="text"
            fontSize="4xl"
            fontWeight="extrabold"
            ml="4"
          >
            PEMED
          </Text>
        </Flex>

        <Flex>
          <Flex color="black">
            <LinkNavbar>Sobre</LinkNavbar>
            <LinkNavbar href="https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos">
              Acesso CMED
            </LinkNavbar>
            <LinkNavbar href="https://consultas.anvisa.gov.br/#/">
              Acesso ANVISA
            </LinkNavbar>
          </Flex>

          {isLoginPage ? (
            <Button
              bg="#181818"
              // ml="2"
              size="sm"
              fontWeight="semibold"
              boxShadow="md"
              color="white"
              _hover={{
                color: "white",
                bg: "rgba(19,92,254,255)",
              }}
              onClick={() => router.push("/")}
            >
              Voltar
            </Button>
          ) : (
            <Button
              bg="#181818"
              // ml="2"
              size="sm"
              fontWeight="semibold"
              boxShadow="md"
              color="white"
              _hover={{
                color: "white",
                bg: "rgba(19,92,254,255)",
              }}
              onClick={() => router.push("/login")}
            >
              <Text>Login</Text>
            </Button>
          )}
        </Flex>
      </Flex>
    </>
  );
}
