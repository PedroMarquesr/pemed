"use client";
import React from "react";
import { Flex, Input, Text, Box, Field, Switch } from "@chakra-ui/react";
import { FaSyringe } from "react-icons/fa";

export default function MatModal2({ data, setData }) {
  return (
    <Flex
      flexDirection="column"
      bg="white"
      borderRadius="md"
      my={5}
      w="100%"
      boxShadow="xl"
    >
      <Flex alignItems="center" gap={2} p={4}>
        <FaSyringe color="rgba(19,92,254,255)" size={20} />
        <Text color="black" fontWeight="bold" fontSize="lg">
          Classificação
        </Text>
      </Flex>
      <Flex
        border="1px solid green"
        p={4}
        gap={4}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Field.Root>
          <Flex alignItems="center" gap={4} justifyContent={"center"}>
            <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
              Contém registro Anvisa
            </Field.Label>
            <Switch.Root
              checked={data.contemRegistroAnvisa}
              onCheckedChange={(e) =>
                setData({ ...data, contemRegistroAnvisa: e.checked })
              }
              colorPalette="blue"
              size="lg"
            >
              <Switch.HiddenInput />
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
            </Switch.Root>
          </Flex>
        </Field.Root>
      </Flex>
      {data.contemRegistroAnvisa && (
        <Flex
          p={4}
          gap={4}
          justifyContent="space-between"
          border={"1px solid red"}
        >
          <Field.Root flex="1" minW="0">
            <Field.Label fontWeight="semibold">Registro ANVISA</Field.Label>
            <Input
              placeholder="Digite o registro"
              maxLength={11}
              bg="white"
              boxShadow="md"
              border="1px solid #2b4d52ff"
              _hover={{ borderColor: "#5d8288c4" }}
            />
          </Field.Root>

          <Field.Root flex="1" minW="0">
            <Field.Label fontWeight="semibold">
              Validade do Registro
            </Field.Label>
            <Input
              type="date"
              bg="white"
              boxShadow="md"
              border="1px solid #2b4d52ff"
              _hover={{ borderColor: "#5d8288c4" }}
            />
          </Field.Root>
        </Flex>
      )}

      <Flex p={4} gap={4} justifyContent="space-between">
        <Field.Root flex="1" minW="0">
          <Field.Label fontWeight="semibold">Classe farmacêutica</Field.Label>
          <Input
            placeholder="Insira a classe"
            bg="white"
            boxShadow="md"
            border="1px solid #2b4d52ff"
            _hover={{ borderColor: "#5d8288c4" }}
          />
        </Field.Root>

        <Field.Root flex="1" minW="0">
          <Field.Label>Validade total do medicamento: </Field.Label>
          <Input
            bg="white"
            boxShadow="md"
            border="1px solid #2b4d52ff"
            _hover={{ borderColor: "#5d8288c4" }}
          />
        </Field.Root>
      </Flex>

      <Flex p={4}>
        <Field.Root width="100%">
          <Field.Label fontWeight="semibold">Forma farmacêutica</Field.Label>
          <Input
            placeholder="Insira a forma farmacêutica"
            bg="white"
            boxShadow="md"
            border="1px solid #2b4d52ff"
            _hover={{ borderColor: "#5d8288c4" }}
            maxWidth="500px"
          />
        </Field.Root>
      </Flex>
    </Flex>
  );
}
