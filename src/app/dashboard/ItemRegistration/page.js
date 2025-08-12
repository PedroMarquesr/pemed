"use client";

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
      <Text>Cadastro de item</Text>

      <Fieldset.Root>
        <Fieldset.Legend>Informações do produto</Fieldset.Legend>

        <Fieldset.Content>
          {/* Categoria */}

          <Fieldset.Legend pb={0} mb={-2}>
            Categoria:
          </Fieldset.Legend>

          <NativeSelect.Root mt={-2} w={300}>
            <NativeSelect.Field
              placeholder="Selecione a categoria"
              value={categoriaSelecionada}
              onChange={(e) => {
                setCategoriaSelecionada(e.target.value);
                setTipoSelecionado("");
                setFormaFarmaceuticaSelecionada("");
              }}
            >
              <For each={Object.keys(categories)}>
                {(categoria) => (
                  <option h={10} key={categoria} value={categoria}>
                    {categoria}
                  </option>
                )}
              </For>
            </NativeSelect.Field>
          </NativeSelect.Root>
          <Fieldset.Legend pb={0} mb={-2}>
            Tipo:
          </Fieldset.Legend>
          <NativeSelect.Root mt={-2} w={300}>
            {categoriaSelecionada === "Medicamento" ? (
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
            ) : (
              <NativeSelect.Field>
                <For each={categories.Material.tipo}>
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
    </Box>
  );
}
