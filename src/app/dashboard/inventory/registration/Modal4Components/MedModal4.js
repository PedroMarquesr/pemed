"use client"
import React from "react"

import {
  Flex,
  Badge,
  Input,
  Box,
  Switch,
  Text,
  SimpleGrid,
  Field,
  NativeSelect,
  Grid,
  GridItem,
} from "@chakra-ui/react"

import { FaSyringe } from "react-icons/fa"

export default function MedModal4({ data, setData }) {
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
            columnGap={1}
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
              {data.activeIngredients?.map((item, index) => (
                <React.Fragment key={index}>
                  <Box borderTop={"1px dashed gray"}>
                    <Text fontSize="md" color="gray.600">
                      Princípio ativo:
                    </Text>
                  </Box>

                  <Box borderTop={"1px dashed gray"}>
                    <Text fontSize="md" color="black" fontWeight="semibold">
                      {item.ingredient}
                    </Text>
                  </Box>

                  <Box borderBottom={"1px dashed gray"}>
                    <Text fontSize="md" color="gray.600">
                      Dosagem/Concentração:
                    </Text>
                  </Box>
                  <Box borderBottom={"1px dashed gray"}>
                    <Text fontSize="md" color="black" fontWeight="semibold">
                      {item.concentration}
                    </Text>
                  </Box>
                </React.Fragment>
              ))}
            </>

            <>
              <Text fontSize="md" color="gray.600">
                Categoria Regulatória:
              </Text>
              <Text fontSize="md" color="black" fontWeight="semibold">
                {data.regulatoryCategory}
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
          </SimpleGrid>
        </Box>
      </Flex>
    </Flex>
  )
}
