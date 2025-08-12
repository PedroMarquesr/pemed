"use client"

import {
  Box,
  Flex,
  Input,
  Fieldset,
  For,
  Radio,
  RadioGroup,
  NativeSelect,
  Stack,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react"
import { useState } from "react"

export default function ItemRegistration() {
  const categories = {
    medicamento: {
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
        formaFrasco: ["Frasco", "Frasco-ampola", "Frasco-borracha"],
        formaSemissolida: ["Pomada", "Pasta", "Creme", "Gel", "Loção"],
        formaGasosa: ["Aerossol", "Inalador"],
        formaEspecial: ["Adesivo", "Implante", "Comprimido sublingual"],
      },
      ggrem: "",
      registroAnvisa: {
        temRegistro: false,
        numeroRegistro: "",
        validadeRegistro: null,
      },
      embalagem: {
        primaria: 0 /*Quantidade de caixas por caixa de embarque*/,
        secundaria: 0 /*Quantidade de unidades por embalagem*/,
        bister: { contemBlister: false, quantUndPorBlister: 0 },
      },
      marca: { nomeMarca: "", categoriaRegulatoia: "" },
      fabricante: { nomeFabricante: "", cnpjFabricante: "" },
    },
    material: {
      tipo: ["Descartável", "Curativo", "Equipamento"],
      registroAnvisa: {
        temRegistro: false,
        numeroRegistro: null,
      },
    },
  }

  const [nome, setNome] = useState("")
  const [tipoSelecionado, setTipoSelecionado] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("")
  const [formaFarmaceuticaSelecionada, setFormaFarmaceuticaSelecionada] =
    useState("")
  const [embalagemPrimariaInserida, setEmbalagemPrimariaInserida] = useState(0)
  const [embalagemSecundariaInserida, setEmbalagemSecundariaInserida] =
    useState(0)
  const [contemBlister, setContemBlister] = useState(false)
  const [quantidadePorBlisterInserida, setQuantidadePorBlisterInserida] =
    useState(0)
  const [registroInserido, setRegistroInserido] = useState("")
  const [validadeRegistroInserida, setValidadeRegistroInserida] = useState("")
  const [marcaInserida, setMarcaInserida] = useState("")
  const [fabricanteInserido, setFabricanteInserido] = useState("")
  const [ggremInserido, setGgremInserido] = useState("")

  const handleSave = () => {
    const dados = {
      nome,
      categoria: categoriaSelecionada,
      tipo: tipoSelecionado,
      formaFarmaceutica: formaFarmaceuticaSelecionada,
      registroAnvisa: {
        numeroRegistro: registroInserido,
        temRegistro: !!registroInserido,
        validadeRegistro: validadeRegistroInserida,
      },
      ggrem: ggremInserido,
      embalagem: {
        primaria: embalagemPrimariaInserida,
        secundaria: embalagemSecundariaInserida,
      },
      marca: marcaInserida,
      fabricante: fabricanteInserido,
    }
    console.log("Item cadastrado:", dados)
  }

  return (
    <Box color="gray.700">
      <Text fontWeight="bold" fontSize="xl">
        Cadastro de item
      </Text>

      <Fieldset.Root>
        <Fieldset.Legend color="gray.500">
          Informações do produto
        </Fieldset.Legend>
        <Fieldset.Content>
          <VStack align="start" spacing={4}>
            {/* Categoria */}
            <Box w="100%">
              <Fieldset.Legend color="gray.700">Categoria:</Fieldset.Legend>
              <NativeSelect.Root w={"40%"}>
                <NativeSelect.Field
                  boxShadow="md"
                  rounded="md"
                  placeholder="Selecione a categoria"
                  color="white"
                  bg={"gray.800"}
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
              </NativeSelect.Root>
            </Box>

            {/* Tipo */}
            {categoriaSelecionada && (
              <Box w="100%">
                <Fieldset.Legend color="gray.700">Tipo:</Fieldset.Legend>
                <NativeSelect.Root w={"40%"}>
                  <NativeSelect.Field
                    boxShadow="md"
                    rounded="md"
                    color="white"
                    bg={"gray.800"}
                    placeholder="Selecione o tipo"
                    value={tipoSelecionado}
                    onChange={(e) => setTipoSelecionado(e.target.value)}
                  >
                    <For
                      each={
                        categoriaSelecionada === "medicamento"
                          ? categories.medicamento.tipo
                          : categories.material.tipo
                      }
                    >
                      {(tipo) => (
                        <option key={tipo} value={tipo}>
                          {tipo}
                        </option>
                      )}
                    </For>
                  </NativeSelect.Field>
                </NativeSelect.Root>
              </Box>
            )}
            {categoriaSelecionada === "medicamento" && (
              <>
                <Box w="100vw">
                  <Fieldset.Legend color="gray.700">
                    Forma Farmacêutica:
                  </Fieldset.Legend>
                  <NativeSelect.Root w={"40%"}>
                    <NativeSelect.Field
                      justifyContent={"center"}
                      boxShadow="md"
                      rounded="md"
                      color="white"
                      bg={"gray.800"}
                      placeholder="Selecione a forma farmaceutica"
                      value={formaFarmaceuticaSelecionada}
                      onChange={(e) =>
                        setFormaFarmaceuticaSelecionada(e.target.value)
                      }
                    >
                      <For
                        each={Object.entries(
                          categories.medicamento.formaFarmaceutica
                        ).flatMap(([grupo, opcoes]) =>
                          opcoes.map((opcao) => ({ grupo, valor: opcao }))
                        )}
                      >
                        {({ grupo, valor }) => (
                          <option key={valor} value={valor}>
                            {valor} ({grupo})
                          </option>
                        )}
                      </For>
                    </NativeSelect.Field>
                  </NativeSelect.Root>
                </Box>
                <Flex
                  w={"40%"}
                  justifyContent={"space-between"}
                  alignItems={"start"}
                >
                  <Box>
                    <Fieldset.Legend color="gray.700">
                      Registro da Anvisa:
                    </Fieldset.Legend>
                    <Fieldset.Root>
                      <Input
                        w={"100%"}
                        boxShadow="md"
                        rounded="md"
                        color="white"
                        bg={"gray.800"}
                        value={registroInserido}
                        placeholder="Insira apenas números:"
                        maxLength={"11"}
                        onChange={(e) => setRegistroInserido(e.target.value)}
                      />
                    </Fieldset.Root>

                    <Fieldset.Legend color="gray.700">GGREM:</Fieldset.Legend>
                    <Fieldset.Root>
                      <Input
                        w={"100%"}
                        boxShadow="md"
                        rounded="md"
                        color="white"
                        bg={"gray.800"}
                        value={ggremInserido}
                        placeholder="Insira apenas números:"
                        maxLength={"15"}
                        onChange={(e) => setGgremInserido(e.target.value)}
                      />
                    </Fieldset.Root>
                  </Box>
                  <Box justifyContent={"center"} w={"350px"}>
                    <Fieldset.Legend color="gray.700">Marca: </Fieldset.Legend>
                    <Fieldset.Root>
                      <Input
                        boxShadow="md"
                        rounded="md"
                        color="white"
                        bg={"gray.800"}
                        value={marcaInserida}
                        placeholder="Insira 'GENERICO' para medicamentos genéricos"
                        onChange={(e) => setMarcaInserida(e.target.value)}
                      />
                    </Fieldset.Root>
                    <Fieldset.Legend color="gray.700">
                      Fabricante:{" "}
                    </Fieldset.Legend>
                    <Fieldset.Root>
                      <Input
                        boxShadow="md"
                        rounded="md"
                        color="white"
                        bg={"gray.800"}
                        value={fabricanteInserido}
                        onChange={(e) => setFabricanteInserido(e.target.value)}
                      />
                    </Fieldset.Root>
                  </Box>
                </Flex>
                <Flex justifyContent={"space-between"} w={"40%"}>
                  <Box>
                    <Fieldset.Legend color="gray.700">
                      Quantidade por caixa de embarque:
                    </Fieldset.Legend>
                    <Fieldset.Root>
                      <Input
                        boxShadow="md"
                        rounded="md"
                        color="white"
                        bg={"gray.800"}
                        value={embalagemPrimariaInserida}
                        onChange={(e) =>
                          setEmbalagemPrimariaInserida(e.target.value)
                        }
                      />
                    </Fieldset.Root>
                    <Fieldset.Legend color="gray.700">
                      Quantidade por embalagem:
                    </Fieldset.Legend>
                    <Fieldset.Root>
                      <Input
                        boxShadow="md"
                        rounded="md"
                        color="white"
                        bg={"gray.800"}
                        value={embalagemSecundariaInserida}
                        onChange={(e) =>
                          setEmbalagemSecundariaInserida(e.target.value)
                        }
                      />
                    </Fieldset.Root>
                  </Box>
                  <Box border="1px solid gray" p={4} borderRadius="md" w="50%">
                    <RadioGroup.Root
                      value={contemBlister}
                      onChange={setContemBlister}
                    >
                      <RadioGroup.Item key="sim" value="sim">
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemIndicator />
                        <RadioGroup.ItemText>
                          Sim, contém blister
                        </RadioGroup.ItemText>
                      </RadioGroup.Item>

                      <RadioGroup.Item key="nao" value="nao">
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemIndicator />
                        <RadioGroup.ItemText>
                          Não contém blister
                        </RadioGroup.ItemText>
                      </RadioGroup.Item>
                    </RadioGroup.Root>
                  </Box>
                </Flex>
              </>
            )}
          </VStack>
        </Fieldset.Content>
      </Fieldset.Root>

      <Button
        mt={4}
        color={"whiteAlpha.900"}
        colorScheme="blue"
        bg={"gray.700"}
        onClick={handleSave}
        _hover={{ borderColor: "blue.300" }}
      >
        Salvar
      </Button>
    </Box>
  )
}
