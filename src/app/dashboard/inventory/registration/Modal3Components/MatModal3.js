"use client"
import React from "react"

import {
  Flex,
  Input,
  Box,
  Switch,
  Text,
  Field,
  NativeSelect,
} from "@chakra-ui/react"
import formasFarmaceuticas from "@/data/inventory/formasFarmaceuticas.js"
import viaAdministracao from "@/data/inventory/viaAdministracao.js"
import { useState } from "react"

import { FaSyringe } from "react-icons/fa"

export default function MatModal3({ data, setData }) {
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
          Especificações Técnicas
        </Text>
      </Flex>
      <Flex p={4} gap={4} justifyContent="space-between">
        <Field.Root flex="1" minW="0">
          <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
            Dimensão / Característica
          </Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field
              unstyled
              value={data.dimensaoOuCarateristica}
              onChange={(e) => {
                setData({ ...data, dimensaoOuCarateristica: e.target.value })
              }}
              width="100%"
              bg="white"
              boxShadow="md"
              color="black"
              borderRadius="md"
              border="1px solid #2b4d52ff"
              px={3}
              py={2}
              _hover={{
                borderColor: "#5d8288c4",
              }}
            >
              <option value={""}>Selecione</option>
              <option value="Altura">Altura (ex: 8 cm)</option>
              <option value="Área">
                Área (ex: 10 cm², 2 m² — usado em compressas, campos cirúrgicos)
              </option>
              <option value="Bitola/Calibre">
                Bitola/Calibre (ex: 18G, 25G — agulhas, cateteres)
              </option>
              <option value="Capacidade">
                Capacidade (ex: 10 L, 50 mL — usado em bolsas, frascos,
                coletores)
              </option>
              <option value="Circunferência">
                Circunferência (ex: tubos, cateteres)
              </option>
              <option value="Comprimento">
                Comprimento (ex: 20 cm, 1,5 m)
              </option>
              <option value="Comprimento útil">
                Comprimento útil (ex: 30 cm parte utilizável, comum em
                sondas/tubos)
              </option>
              <option value="Diâmetro">Diâmetro (ex: 2 mm, 3 cm)</option>
              <option value="Espaçamento">
                Espaçamento (ex: 0,2 mm entre linhas, usado em eletrodos,
                grades)
              </option>
              <option value="Espessura">Espessura (ex: 0,5 mm)</option>
              <option value="Espessura de camada">
                Espessura de camada (ex: 50 µm — curativos, adesivos especiais)
              </option>
              <option value="Largura">Largura (ex: 10 cm)</option>
              <option value="Número de unidades">
                Número de unidades (ex: 100 unidades, 1 par, caixa com 50)
              </option>

              <option value="Peso/Massa">
                Peso/Massa (ex: 2 g, 50 mg, 1 kg)
              </option>
              <option value="Tamanho genérico">
                Tamanho genérico (P, M, G, GG)
              </option>
              <option value="Viscosidade">
                Viscosidade (ex: 10 cP — em soluções específicas)
              </option>
              <option value="Volume">Volume (ex: 500 mL, 1 L, 5 µL)</option>

              <option value="Outro">Outro</option>
            </NativeSelect.Field>
          </NativeSelect.Root>
        </Field.Root>
        <Box flex="1">
          {data.dimensaoOuCarateristica === "Outro" && (
            <Field.Root flex="1" minW="0">
              <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
                Insira a dimensão ou característica principal:
              </Field.Label>
              <Input
                value={data.dimensaoOuCarateristicaOutro}
                onChange={(e) =>
                  setData({
                    ...data,
                    dimensaoOuCarateristicaOutro: e.target.value,
                  })
                }
                placeholder="Insira a composição principal"
                bg="white"
                boxShadow="md"
                border="1px solid #2b4d52ff"
                _hover={{ borderColor: "#5d8288c4" }}
              />
            </Field.Root>
          )}
        </Box>
      </Flex>
      <Flex p={4} gap={4} justifyContent="space-between">
        <Field.Root flex="1">
          <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
            Especifique a dimensão ou referência
          </Field.Label>
          <Input
            value={data.especificacaoDimensaoReferencia}
            onChange={(e) =>
              setData({
                ...data,
                especificacaoDimensaoReferencia: e.target.value,
              })
            }
            placeholder="Ex: 3 cm, 50 mL, 2 g, P, 23x3…"
            bg="white"
            boxShadow="md"
            border="1px solid #2b4d52ff"
            _hover={{ borderColor: "#5d8288c4" }}
          />
        </Field.Root>
        <Box flex="1"></Box>
      </Flex>
      <Flex p={4} gap={4} justifyContent={"space-between"}>
        <Field.Root>
          <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
            Quantidade de unidades por embalagem
          </Field.Label>
          <Input
            value={data.qtdPorEmbalagem}
            onChange={(e) =>
              setData({
                ...data,
                qtdPorEmbalagem: Number(e.target.value),
              })
            }
            placeholder="Apenas números"
            maxLength={4}
            bg="white"
            boxShadow="md"
            border="1px solid #2b4d52ff"
            _hover={{ borderColor: "#5d8288c4" }}
          />
        </Field.Root>
        <Field.Root>
          <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
            Dosagem/Concentração
          </Field.Label>
          <Input
            value={data.dosagem}
            onChange={(e) => setData({ ...data, dosagem: e.target.value })}
            placeholder="Ex: 500mg, 5%, 100UI/ml"
            maxLength={11}
            bg="white"
            boxShadow="md"
            border="1px solid #2b4d52ff"
            _hover={{ borderColor: "#5d8288c4" }}
          />
        </Field.Root>
      </Flex>
      <Flex
        p={4}
        gap={4}
        justifyContent={"flex-start"}
        flexDirection={"column"}
      >
        <Flex flexDirection={"row"}>
          <Field.Root>
            <Flex alignItems="center" gap={4}>
              <Field.Label>Medicamento controlado ?</Field.Label>
              <Switch.Root
                checked={data.controlado}
                onCheckedChange={(e) =>
                  setData({ ...data, controlado: e.checked })
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
        <Box>
          <Field.Root>
            <Flex alignItems="center" gap={4}>
              <Field.Label>Medicamento termolábil ?</Field.Label>
              <Switch.Root
                checked={data.termolabil}
                onCheckedChange={(e) =>
                  setData({ ...data, termolabil: e.checked })
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
        </Box>
        {data.termolabil && (
          <>
            <Flex>
              <Field.Root flex="1">
                <Field.Label>
                  Informe a faixa de temperatura indicada
                </Field.Label>
                <Input
                  value={data.faixaTemperatura}
                  onChange={(e) =>
                    setData({ ...data, faixaTemperatura: e.target.value })
                  }
                  placeholder="Exemplo: 8°C a 12°C"
                  width="100%"
                  bg="white"
                  boxShadow="md"
                  color="black"
                  borderRadius="md"
                  border="1px solid #2b4d52ff"
                  _hover={{
                    borderColor: "#5d8288c4",
                  }}
                />
              </Field.Root>
              <Box flex="1" minW="0"></Box>
            </Flex>
          </>
        )}
      </Flex>
    </Flex>
  )
}
