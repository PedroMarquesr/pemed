"use client"
import React from "react"

import { Flex, Badge, Box, Text, SimpleGrid, GridItem } from "@chakra-ui/react"

import { FaSyringe } from "react-icons/fa"

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
                <Text fontSize="md" color="gray.600">
                  Modelo oficial do registro:
                </Text>
                <Text fontSize="md" color="black" fontWeight="semibold">
                  {data.anvisaModel}
                </Text>
              </>
            ) : (
              <>
                <GridItem colSpan={2}>
                  <Flex alignItems="center" justifyContent={"center"} gap={2}>
                    <Badge colorPalette="cyan" variant="solid">
                      {" "}
                      Item sujeito a notificação simplificada
                    </Badge>
                  </Flex>
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
                Risco de classificação:
              </Text>
              <Text fontSize="md" color="black" fontWeight="semibold">
                {data.riskClassification}
              </Text>
            </>

            <>
              <Text fontSize="md" color="gray.600">
                Composição principal:
              </Text>
              {data.mainComposition === "Outros" ? (
                <Text fontSize="md" color="black" fontWeight="semibold">
                  {data.otherMainComposition}
                </Text>
              ) : (
                <Text fontSize="md" color="black" fontWeight="semibold">
                  {data.mainComposition}
                </Text>
              )}
            </>
          </SimpleGrid>
        </Box>
        <Box bg={"gray.200"} p={7} borderRadius="md" w={"50%"}>
          <Box textAlign={"center"} mb="3">
            <Text fontWeight="semibold" textStyle="2xl" pb={2}>
              Especificações técnicas
            </Text>
          </Box>

          <SimpleGrid columns={2} rowGap={3} columnGap={6}>
            <>
              <Text fontSize="md" color="gray.600">
                Dimensão/Característica{" "}
              </Text>
              {data.dimensionOrCharacteristic === "Outro" ? (
                <Text fontSize="md" color="black" fontWeight="semibold">
                  {data.otherDimensionOrCharacteristic} -
                  {data.dimensionReferenceSpecification}
                </Text>
              ) : (
                <Text fontSize="md" color="black" fontWeight="semibold">
                  {data.dimensionOrCharacteristic} -{" "}
                  {data.dimensionReferenceSpecification}
                </Text>
              )}
            </>

            <>
              <Text fontSize="md" color="gray.600">
                Unidade de fornecimento:
              </Text>
              <Text fontSize="md" color="black" fontWeight="semibold">
                {`${data.supplyUnit} ( ${data.packageQuantity} por embalagem )`}
              </Text>
            </>
          </SimpleGrid>
        </Box>
      </Flex>
    </Flex>
  )
}
