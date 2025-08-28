"use client";
import React from "react";

import {
  Flex,
  Input,
  Box,
  Switch,
  Text,
  SimpleGrid,
  Field,
  NativeSelect,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import { FaSyringe } from "react-icons/fa";

export default function MatModal4({ data, setData }) {
  return (
    <Flex
      flexDirection="column"
      bg="white"
      borderRadius="md"
      my={5}
      w="100%"
      boxShadow="xl"
    >
      <Flex alignItems="center" justifyContent="center" gap={2} p={4}>
        <FaSyringe color="rgba(19,92,254,255)" size={20} />
        <Text color="black" fontWeight="bold" fontSize="lg">
          Revisão de informações{" "}
        </Text>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        p={4}
        flexDirection={"column"}
        gap={5}
      >
        <Box bg={"gray.200"} p={7} borderRadius="md" w={"50%"}>
          <Box textAlign={"center"} mb="3">
            <Text fontWeight="semibold" textStyle="2xl" pb={2}>
              Identificação básica
            </Text>
          </Box>

          <SimpleGrid
            columns={2}
            rowGap={3}
            columnGap={6}
            justifyContent={"center"}
          >
            {data.brandName && (
              <>
                <Text fontSize="md" color="gray.600">
                  Nome Comercial (MARCA):
                </Text>
                <Text fontSize="md" color="black" fontWeight="semibold">
                  {data.brandName}
                </Text>
              </>
            )}
            <>
              <Text fontSize="md" color="gray.600">
                Nome técnico:
              </Text>
              <Text fontSize="md" color="black" fontWeight="semibold">
                {data.technicalName}
              </Text>
            </>

            <>
              <Text fontSize="md" color="gray.600">
                Fabricante:
              </Text>
              <Text fontSize="md" color="black" fontWeight="semibold">
                {data.manufacturer}
              </Text>
            </>
          </SimpleGrid>
        </Box>
        <Box bg={"gray.200"} p={7} borderRadius="md" w={"50%"}>
          <Box textAlign={"center"} mb="3">
            <Text fontWeight="semibold" textStyle="2xl" pb={2}>
              Classificação
            </Text>
          </Box>

          <SimpleGrid columns={2} rowGap={3} columnGap={6}>
            {data.hasAnvisaRegistration ? (
              <>
                <Text fontSize="md" color="gray.600">
                  Código de Registro na Anvisa:
                </Text>
                <Text fontSize="md" color="black" fontWeight="semibold">
                  {data.anvisaRegistrationCode}
                </Text>
              </>
            ) : (
              <>
                <GridItem colSpan={2}>
                  <Text fontSize="md" color="red.600" fontWeight="bold">
                    Item sujeito a notificação simplificada
                  </Text>
                </GridItem>
                <Text fontSize="md" color="gray.600">
                  Normativa aplicável:
                </Text>
                <Text fontSize="md" color="black" fontWeight="semibold">
                  {data.simplifiedNotificationReference}
                </Text>
              </>
            )}
            <>
              <Text fontSize="md" color="gray.600">
                Nome técnico:
              </Text>
              <Text fontSize="md" color="black" fontWeight="semibold">
                {data.technicalName}
              </Text>
            </>

            <>
              <Text fontSize="md" color="gray.600">
                Fabricante:
              </Text>
              <Text fontSize="md" color="black" fontWeight="semibold">
                {data.manufacturer}
              </Text>
            </>
          </SimpleGrid>
        </Box>
      </Flex>
    </Flex>
  );
}
