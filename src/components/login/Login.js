"use client"

import {
  Box,
  Flex,
  Field,
  Link,
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
      flexDirection={"column"}
      position="relative"
      flex="1"
      height="100vh"
      width="100vw"
      overflowX="hidden"
      alignItems="center"
      pt={"100px"}
      pb={"100px"}
      bg={"#a7ceda"}
    >
      <Flex
        border={"1px solid #ccc"}
        borderRadius={"8px"}
        p={6}
        width={"400px"}
        alignItems={"center"}
        flexDirection={"column"}
        color={"Black"}
      >
        <Box>
          <Image src="/logo.png" alt="Logo Pemed" width={90} />
        </Box>{" "}
        <Box>
          <Text>Pemed</Text>
        </Box>
        <Box>
          <Text color={"gray.800"} fontSize={"small"} fontStyle={"italic"}>
            Sistema de Gestão Farmaceutica
          </Text>
        </Box>
        <Box>
          <Text>Entrar</Text>
        </Box>
        <Box gap={"60"}>
          <Field.Root>
            <Field.Label>
              Email
              <Field.RequiredIndicator />
            </Field.Label>
            <Input
              _placeholder={{ color: "gray.800" }}
              placeholder="Endereço de email"
            />
          </Field.Root>
          <Field.Root width={350} pt={2}>
            <Field.Label>
              Senha
              <Field.RequiredIndicator />
            </Field.Label>
            <Input
              placeholder="Endereço de email"
              _hover={{
                borderColor: "blue.500",
              }}
              _placeholder={{ color: "gray.400" }}
            />
          </Field.Root>

          <Flex
            pt={4}
            pr={"0"}
            pl={"0"}
            justifyContent={"space-between"}
            width={350}
          >
            <Checkbox.Root pl={0}>
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>Lembrar-me</Checkbox.Label>
            </Checkbox.Root>
            <HStack>
              <Button height={5} variant="outline">
                Esqueci minha senha
              </Button>
            </HStack>
          </Flex>

          <Button width={350} mt={4} colorScheme="blue">
            Entrar
          </Button>
          <Button
            width={350}
            mt={4}
            variant="outline"
            leftIcon={
              <Image src="/google-icon.png" alt="Google" boxSize="20px" />
            }
          >
            Entrar com Google
          </Button>
        </Box>
      </Flex>
    </Flex>
  )
}
