"use client"

import {
  Box,
  Input,
  Fieldset,
  Flex,
  For,
  NativeSelect,
  Field,
  Stack,
  Text,
  VStack,
  Select,
  Button,
} from "@chakra-ui/react"
import { useState } from "react"

export default function ItemRegistration() {
  const categories = {
    Medicamento: {
      tipo: ["Medicamento comum", "Medicamento especial"],
      formaFarmaceutica: {
        formaSolida: [
          "Comprimido",
          "Cápsula",
          "Drágea",
          "Granulado",
          "Supositório",
        ],
        formaLiquida: ["Solução", "Suspensão", "Emulsão", "Injetável"],
        formaSemissólida: ["Pomada", "Pasta", "Creme", "Gel", "Loção"],
        FormaGasosa: ["Aerossol", "Inalador"],
        FormaEspecial: ["Adesivo", "Implante", "Comprimido Sublingual"],
      },
    },
    Material: {
      tipo: ["Descartavel", "Curativo", "Equipamento"],
    },
  }
  const [nome, setNome] = useState("")
  const [tipoSelecionado, setTipoSelecionado] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("")
  const [formaFarmaceuticaSelecionada, setFormaFarmaceuticaSelecionada] =
    useState("")

  const handleSave = () => {
    const dados = {
      nome,
      categoria: categoriaSelecionada,
      tipo: tipoSelecionado,
      formaFarmaceutica: formaFarmaceuticaSelecionada,
    }
    console.log("Item cadastrado:", dados)
  }
  return (
    <Box>
      <Text>Cadastro de produtos</Text>

      <VStack spacing={4} align="start">
        <Fieldset.Root>
          <Stack>
            <Fieldset.Legend>Informações do produto</Fieldset.Legend>
            <Fieldset.HelperText>
              Insira as informações do produto abaixo.
            </Fieldset.HelperText>
          </Stack>

          <Fieldset.Content>
            {/* Categoria */}

            <Fieldset.Legend>Categoria do produto</Fieldset.Legend>

            <NativeSelect.Root>
              <NativeSelect.Field
                placeholder="Selecione a categoria"
                value={categoriaSelecionada}
                onChange={(e) => {
                  setCategoriaSelecionada(e.target.value)
                  setTipoSelecionado("")
                  setFormaFarmaceuticaSelecionada("")
                }}
              >
                <For each={Object.keys(categories)}>
                  {(categoria) => (
                    <option key={categoria} value={categoria}>
                      {categoria}
                    </option>
                  )}
                </For>
              </NativeSelect.Field>

              {categoriaSelecionada === "Medicamento" && (
                <NativeSelect.Field
                  placeholder="Selecione o tipo"
                  value={tipoSelecionado}
                  onChange={(e) => setTipoSelecionado(e.target.value)}
                >
                  <For each={categories.Medicamento.tipo}>
                    {(tipo) => (
                      <option key={tipo} value={tipo}>
                        {tipo}
                      </option>
                    )}
                  </For>
                </NativeSelect.Field>
              )}
            </NativeSelect.Root>
          </Fieldset.Content>
        </Fieldset.Root>
      </VStack>
      <Text>{categoriaSelecionada}</Text>
    </Box>
  )
}
