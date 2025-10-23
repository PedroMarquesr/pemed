"use client"

import React from "react"
import { useState } from "react"

import {
  Box,
  Flex,
  Button,
  Input,
  Text,
  CloseButton,
  Field,
  NativeSelect,
  Switch,
} from "@chakra-ui/react"
import { FaPlus } from "react-icons/fa"

export default function MedModal1({ data, setData }) {
  const addInputForNewActiveIngredient = () => {
    setData({
      ...data,
      activeIngredients: [
        ...data.activeIngredients,
        { ingredient: "", concentration: "" },
      ],
    })
  }

  let codItem = "MED12345"

  return (
    <Flex w={"100%"}>
      <Box flex="1" borderRadius="md">
        <Box p={4}>
          <Field.Root>
            <Field.Label
              fontSize="sm"
              fontWeight="bold"
              color="gray.700"
              mb={2}
            >
              Selecione a categoria regulatória:
            </Field.Label>
            <NativeSelect.Root>
              <NativeSelect.Field
                value={data.regulatoryCategory}
                onChange={(e) =>
                  setData({ ...data, regulatoryCategory: e.target.value })
                }
                unstyled
                width="100%"
                bg="white"
                boxShadow="md"
                color="black"
                borderRadius="md"
                border="1px solid #2b4d52ff"
                px="3"
                py="2"
                _hover={{
                  borderColor: "#5d8288c4",
                }}
              >
                <option value="">Selecione</option>
                <option value="baixo-risco">Baixo Risco</option>
                <option value="biologico">Biológico</option>
                <option value="dinamizado">Dinamizado</option>
                <option value="especifico">Específico</option>
                <option value="fitoterapico">Fitoterápico</option>
                <option value="gases-medicinais">Gases Medicinais</option>
                <option value="generico">Genérico</option>
                <option value="novo">Novo</option>
                <option value="similar">Similar</option>
                <option value="radiofarmaco">Rádiofármaco</option>
                <option value="produto-terapia-avancada">
                  Produto de Terapia Avançada
                </option>
              </NativeSelect.Field>
            </NativeSelect.Root>
          </Field.Root>
        </Box>

        {data.regulatoryCategory === "novo" ||
        data.regulatoryCategory === "similar" ||
        data.regulatoryCategory === "biologico" ||
        data.regulatoryCategory === "produto-terapia-avancada" ||
        data.regulatoryCategory === "radiofarmaco" ? (
          <Box p={4}>
            <Field.Root>
              <Field.Label
                fontSize="sm"
                fontWeight="bold"
                color="gray.700"
                mb={2}
              >
                Nome comercial:
              </Field.Label>
              <Input
                value={data.brandName}
                onChange={(e) =>
                  setData({ ...data, brandName: e.target.value.toUpperCase() })
                }
                width="100%"
                boxShadow="md"
                bg="white"
                color="black"
                borderRadius="md"
                border="1px solid #2b4d52ff"
                px="3"
                py="2"
                _hover={{ borderColor: "#5d8288c4" }}
                placeholder="Digite o nome comercial"
              />
            </Field.Root>
          </Box>
        ) : (
          data.regulatoryCategory && (
            <>
              <Flex
                p={4}
                gap={4}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Field.Root>
                  <Flex alignItems="center" gap={4} justifyContent={"center"}>
                    <Field.Label
                      fontSize="sm"
                      fontWeight="bold"
                      color="gray.700"
                    >
                      Contém nome comercial?
                    </Field.Label>
                    <Switch.Root
                      checked={data.hasBrandName}
                      onCheckedChange={(e) =>
                        setData({ ...data, hasBrandName: e.checked })
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

              {data.hasBrandName && (
                <Box p={4}>
                  <Field.Root>
                    <Field.Label
                      fontSize="sm"
                      fontWeight="bold"
                      color="gray.700"
                      mb={2}
                    >
                      Nome comercial:
                    </Field.Label>
                    <Input
                      value={data.brandName}
                      onChange={(e) =>
                        setData({
                          ...data,
                          brandName: e.target.value.toUpperCase(),
                        })
                      }
                      width="100%"
                      boxShadow="md"
                      bg="white"
                      color="black"
                      borderRadius="md"
                      border="1px solid #2b4d52ff"
                      px="3"
                      py="2"
                      _hover={{ borderColor: "#5d8288c4" }}
                      placeholder="Digite o nome comercial"
                    />
                  </Field.Root>
                </Box>
              )}
            </>
          )
        )}
        {data.activeIngredients.map((item, index) => (
          <Flex
            key={index}
            alignItems="center"
            justifyContent="flex-start"
            p={4}
            gap={4}
          >
            <Box flex="2">
              <Field.Root>
                <Field.Label
                  fontSize="sm"
                  fontWeight="bold"
                  color="gray.700"
                  mb={2}
                >
                  Princípio ativo {index + 1}:
                </Field.Label>
                <Input
                  value={item.ingredient}
                  onChange={(e) => {
                    const updated = [...data.activeIngredients]
                    updated[index].ingredient = e.target.value.toUpperCase()
                    setData({ ...data, activeIngredients: updated })
                  }}
                  placeholder="Digite o princípio ativo"
                  width="100%"
                  bg="white"
                  boxShadow="md"
                  borderRadius="md"
                  border="1px solid #2b4d52ff"
                  px="3"
                  py="2"
                  _hover={{ borderColor: "#5d8288c4" }}
                />
              </Field.Root>
            </Box>

            <Box flex="1">
              <Field.Root>
                <Field.Label
                  fontSize="sm"
                  fontWeight="bold"
                  color="gray.700"
                  mb={2}
                >
                  Dosagem/Concentração:
                </Field.Label>
                <Input
                  value={item.concentration}
                  onChange={(e) => {
                    const updated = [...data.activeIngredients]
                    updated[index].concentration = e.target.value.toUpperCase()
                    setData({ ...data, activeIngredients: updated })
                  }}
                  placeholder="Ex: 500mg, 5%, 100UI/ml"
                  width="100%"
                  bg="white"
                  boxShadow="md"
                  borderRadius="md"
                  border="1px solid #2b4d52ff"
                  px="3"
                  py="2"
                  _hover={{ borderColor: "#5d8288c4" }}
                />
              </Field.Root>
            </Box>
            <Box alignSelf="flex-end" pb="1">
              <CloseButton
                opacity="40%"
                boxShadow="md"
                bg="rgba(24,24,24,255)"
                size="xs"
                colorScheme="red"
                onClick={() => {
                  const updated = data.activeIngredients.filter(
                    (_, i) => i !== index
                  )
                  setData({ ...data, activeIngredients: updated })
                }}
                _hover={{
                  opacity: "100%",
                  bg: "red",
                  transform: "translateY(-3px)",
                  transition: "transform 0.2s ease",
                }}
              />
            </Box>
          </Flex>
        ))}
        <Flex px={4} flex="1" alignItems="center" gap={2}>
          <Text fontSize="sm" fontWeight="bold" color="gray.700">
            Adicionar princípio ativo
          </Text>
          <Button
            boxShadow="md"
            size="xs"
            bg="rgba(24,24,24,255)"
            onClick={() => addInputForNewActiveIngredient()}
            color="rgba(223,223,223,255)"
            _hover={{
              bg: "rgba(19,92,254,255)",
              transform: "translateY(-3px)",
              transition: "transform 0.2s ease",
            }}
          >
            <FaPlus />
          </Button>
        </Flex>

        <Box p={4}>
          <Field.Root>
            <Field.Label
              fontSize="sm"
              fontWeight="bold"
              color="gray.700"
              mb={2}
            >
              Fabricante:
            </Field.Label>
            <Input
              value={data.manufacturer}
              onChange={(e) =>
                setData({ ...data, manufacturer: e.target.value.toUpperCase() })
              }
              width="100%"
              bg="white"
              boxShadow="md"
              color="black"
              borderRadius="md"
              border="1px solid #2b4d52ff"
              px="3"
              py="2"
              _hover={{
                borderColor: "#5d8288c4",
              }}
              placeholder="Digite o nome do fabricante"
            />
          </Field.Root>
        </Box>
      </Box>

      <Flex
        flexDirection={"column"}
        flex="1"
        alignItems="center"
        justifyContent="center"
        p={4}
      >
        <Text fontSize="xl" fontWeight="bold" color="gray.700" mb={2}>
          Código do item
        </Text>
        <Text
          textAlign={"center"}
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
  )
}
