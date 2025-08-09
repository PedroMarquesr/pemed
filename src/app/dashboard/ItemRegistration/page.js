"use client";
import {
  Box,
  Input,
  Fieldset,
  Flex,
  FormControl,
  For,
  NativeSelect,
  FormHelperText,
  FormLabel,
  Field,
  Stack,
  Text,
  VStack,
  Select,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

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
  };
  const [nome, setNome] = useState("");
  const [tipoSelecionado, setTipoSelecionado] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [formaFarmaceuticaSelecionada, setFormaFarmaceuticaSelecionada] =
    useState("");

  const handleSave = () => {
    const dados = {
      nome,
      categoria: categoriaSelecionada,
      tipo: tipoSelecionado,
      formaFarmaceutica: formaFarmaceuticaSelecionada,
    };
    console.log("Item cadastrado:", dados);
  };
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
              <NativeSelect.Field>
                <For each={["Medicamento", "Material"]}>
                  {(item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  )}
                </For>
              </NativeSelect.Field>
            </NativeSelect.Root>
            <Field.Root>
              {/* Nome */}

              <Fieldset.Legend>Nome do produto</Fieldset.Legend>

              <Input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite o nome do produto: Ex: Benzetacil/Benzilpenicilina"
              />
            </Field.Root>
          </Fieldset.Content>
        </Fieldset.Root>
      </VStack>
    </Box>
  );
}
