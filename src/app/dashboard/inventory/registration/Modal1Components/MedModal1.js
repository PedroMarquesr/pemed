"use client";

import React, { useState } from "react";

import { Box, Flex, Input, Text, Field, NativeSelect } from "@chakra-ui/react";

export default function MedModal1() {
  const [selectedCategory, setSelectedCategory] = useState("Genérico");
  let codItem = "MED12345";
  return (
    <Flex w={"100%"}>
      <Box flex="1" p="4" borderRadius="md">
        <Field.Root>
          <Field.Label
            fontSize="sm"
            fontWeight="semibold"
            color="gray.700"
            mb={2}
          >
            {" "}
            Selecione a categoria regulatória:
          </Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              unstyled
              boxShadow={"md"}
              mb={"4"}
              width="25vw"
              bg="white"
              color="black"
              borderRadius="md"
              border={"1px, solid, #2b4d52ff"}
              px="3"
              py="2"
              _hover={{
                borderColor: "#5d8288c4",
              }}
            >
              <option value="baixo-risco">Baixo Risco</option>
              <option value="biologico">Biológico</option>
              <option value="dinamizado">Dinamizado</option>
              <option value="especifico">Específico</option>
              <option value="fitoterapico">Fitoterápico</option>
              <option value="gases-medicinais">Gases Medicinais</option>
              <option value="generico">Genérico</option>
              <option value="novo">Novo</option>
              <option value="similar">Similar</option>{" "}
              <option value="radiofarmaco">Rádiofármaco</option>
              <option value="produto-terapia-avancada">
                Produto de Terapia Avançada
              </option>
              <option value="radiofarmaco">Radiofármaco</option>
            </NativeSelect.Field>
          </NativeSelect.Root>
        </Field.Root>

        {(selectedCategory === "novo" ||
          selectedCategory === "similar" ||
          selectedCategory === "biologico" ||
          selectedCategory === "produto-terapia-avancada" ||
          selectedCategory === "radiofarmaco") && (
          <Box mt="4">
            <Field.Root>
              <Field.Label
                fontSize="sm"
                fontWeight="semibold"
                color="gray.700"
                mb={2}
              >
                Nome comercial:
              </Field.Label>
              <Input
                width="35vw"
                boxShadow={"md"}
                bg="white"
                mb={"4"}
                color="black"
                borderRadius="md"
                border={"1px, solid, #2b4d52ff"}
                px="3"
                py="2"
                _hover={{
                  borderColor: "#5d8288c4",
                }}
                placeholder="Digite o nome comercial"
              />
            </Field.Root>
          </Box>
        )}
        <Box>
          <Field.Root>
            <Field.Label
              fontSize="sm"
              fontWeight="semibold"
              color="gray.700"
              mb={2}
            >
              Pincípio ativo:
            </Field.Label>
            <Input
              width="35vw"
              bg="white"
              boxShadow={"md"}
              mb={"4"}
              color="black"
              borderRadius="md"
              border={"1px, solid, #2b4d52ff"}
              px="3"
              py="2"
              _hover={{
                borderColor: "#5d8288c4",
              }}
              placeholder="Digite o princípio ativo"
            />
          </Field.Root>

          <Field.Root>
            <Field.Label
              fontSize="sm"
              fontWeight="semibold"
              color="gray.700"
              mb={2}
            >
              Fabricante:
            </Field.Label>
            <Input
              width="35vw"
              bg="white"
              boxShadow={"md"}
              mb={"4"}
              color="black"
              borderRadius="md"
              border={"1px, solid, #2b4d52ff"}
              px="3"
              py="2"
              _hover={{
                borderColor: "#5d8288c4",
              }}
              placeholder="Digite o princípio ativo"
            />
          </Field.Root>
        </Box>
      </Box>

      <Flex
        flexDirection={"column"}
        flex="1"
        alignItems="center"
        justifyContent="center"
      >
        <Text
          justifyContent={"left"}
          fontSize="xl"
          fontWeight="semibold"
          color="gray.700"
          mb={2}
        >
          Código do item
        </Text>
        <Text
          textAlign={"center"}
          justifyContent={"center"}
          alignItems={"center"}
          border={"2px solid #0c142e"}
          p={"4px"}
          width="10vw"
          boxShadow={"md"}
          borderRadius="md"
        >
          {codItem}
        </Text>
      </Flex>
    </Flex>
  );
}
