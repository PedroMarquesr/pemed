"use client"

import {
  Box,
  Flex,
  Field,
  Button,
  Input,
  HStack,
  Checkbox,
  Text,
  Image,
} from "@chakra-ui/react"

export default function Login() {
  return (
    <Flex
      my={"20px"}
      flexDirection="column"
      height="100vh"
      width="100vw"
      alignItems="center"
      justifyContent="center"
      bg="gray.50" // Fundo claro e neutro
      margin={0}
    >
      <Flex
        border={"1px solid"}
        borderColor="gray.200" // Borda suave
        bg="white" // Fundo branco para o card
        boxShadow="md" // Sombra suave
        borderRadius={"8px"}
        p={6}
        width={"400px"}
        alignItems={"center"}
        flexDirection={"column"}
        color="gray.700" // Texto escuro mas não preto puro
      >
        <Box>
          <Image src="/logo.png" alt="Logo Pemed" width={90} />
        </Box>
        <Box mt={2}>
          <Text fontSize="xl" fontWeight="bold" color="blue.600">
            Pemed
          </Text>
        </Box>
        <Box mb={4}>
          <Text color={"gray.500"} fontSize={"sm"} fontStyle={"italic"}>
            Sistema de Gestão Farmacêutica
          </Text>
        </Box>
        <Box mb={4}>
          <Text fontSize="lg" fontWeight="medium">
            Entrar
          </Text>
        </Box>
        <Flex flexDirection={"column"} alignItems={"center"} width="100%">
          <Field.Root width="100%">
            <Field.Label fontSize="sm" color="gray.600">
              Email
              <Field.RequiredIndicator />
            </Field.Label>
            <Input
              placeholder="Endereço de email"
              _placeholder={{ color: "gray.400" }}
              borderColor="gray.300"
              _hover={{ borderColor: "blue.300" }}
            />
          </Field.Root>
          <Field.Root width="100%" pt={4}>
            <Field.Label fontSize="sm" color="gray.600">
              Senha
              <Field.RequiredIndicator />
            </Field.Label>
            <Input
              type="password"
              placeholder="Insira sua senha"
              _placeholder={{ color: "gray.400" }}
              borderColor="gray.300"
              _hover={{ borderColor: "blue.300" }}
            />
          </Field.Root>

          <Flex
            pt={4}
            width="100%"
            justifyContent={"space-between"}
            alignItems="center"
          >
            <Checkbox.Root colorScheme="blue">
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label fontSize="sm" color="gray.600">
                Lembrar-me
              </Checkbox.Label>
            </Checkbox.Root>
            <Button
              fontSize={"sm"}
              variant="link"
              color="blue.500"
              _hover={{ color: "blue.600" }}
            >
              Esqueci minha senha
            </Button>
          </Flex>

          <Button
            width="100%"
            mt={6}
            colorScheme="blue" // Azul consistente
            _hover={{ bg: "blue.600" }}
          >
            Entrar
          </Button>
          <Button
            width="100%"
            mt={4}
            leftIcon={
              <Image src="/google_icon.png" alt="Google" boxSize="20px" />
            }
            _hover={{ bg: "black", color: "white" }}
          >
            Entrar com Google
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
