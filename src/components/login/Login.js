"use client"

import { Global } from "@emotion/react"
import BtnGoogle from "../btnGoogle/BtnGoogle.js"
import useStore from "../globalStates/store.js"
import {
  Box,
  Flex,
  Field,
  Button,
  Input,
  Checkbox,
  Text,
  Image,
} from "@chakra-ui/react"
import { useEffect } from "react"

export default function Login() {
  const { user } = useStore()
  useEffect(() => {
    const createUser = async () => {
      if (user && user.uid) {
        console.log("Usuário logado:", user)
      }
    }

    createUser()
  }, [user])
  return (
    <>
      <Global
        styles={`
          /* Travar scroll horizontal na página toda */
          html, body, #__next {
            width: 100%;
            max-width: 100%;
            overflow-x: hidden;
          }

          *, *::before, *::after { box-sizing: border-box; }


          img, svg, video, canvas {
            max-width: 100%;
            height: auto;
            display: block;
          }

        `}
      />

      <Flex
        as="main"
        my="20px"
        flexDirection="column"
        height="100vh"
        w="full"
        maxW="100%"
        overflowX="clip"
        alignItems="center"
        justifyContent="center"
        bg="gray.50"
        margin={0}
      >
        <Flex
          border="1px solid"
          borderColor="gray.200"
          bg="white"
          boxShadow="md"
          borderRadius="8px"
          p={6}
          w="100%"
          maxW="400px"
          alignItems="center"
          flexDirection="column"
          color="gray.700"
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
            <Text color="gray.500" fontSize="sm" fontStyle="italic">
              Sistema de Gestão Farmacêutica
            </Text>
          </Box>

          <Box mb={4}>
            <Text fontSize="lg" fontWeight="medium">
              Entrar
            </Text>
          </Box>

          <Flex flexDirection="column" alignItems="center" w="100%">
            <Field.Root w="100%">
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

            <Field.Root w="100%" pt={4}>
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
              w="100%"
              justifyContent="space-between"
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
                fontSize="sm"
                variant="link"
                color="blue.500"
                _hover={{ color: "blue.600" }}
              >
                Esqueci minha senha
              </Button>
            </Flex>

            <Button
              w="100%"
              mt={6}
              colorScheme="blue"
              _hover={{ bg: "blue.600" }}
            >
              Entrar
            </Button>

            <BtnGoogle />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
