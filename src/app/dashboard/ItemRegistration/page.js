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
        FormaLiquida: ["Solução", "Suspensão", "Emulsão", "Injetável"],
        FormaSemissólida: ["Pomada", "Pasta", "Creme", "Gel", "Loção"],
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
          <Fieldset.Legend>Categoria:</Fieldset.Legend>
          <NativeSelect.Root>
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
                  <option key={categoria} value={categoria}>
                    {categoria}
                  </option>
                )}
              </For>
            </NativeSelect.Field>
          </NativeSelect.Root>

          {categoriaSelecionada === "Medicamento" && (
            <>
              <Fieldset.Legend>Tipo:</Fieldset.Legend>
              <NativeSelect.Root>
                <NativeSelect.Field
                  placeholder="Selecione o tipo"
                  value={tipoSelecionado}
                  onChange={(e) => {
                    setTipoSelecionado(e.target.value);
                    setFormaFarmaceuticaSelecionada("");
                  }}
                >
                  <For each={categories.Medicamento.tipo}>
                    {(tipo) => (
                      <option key={tipo} value={tipo}>
                        {tipo}
                      </option>
                    )}
                  </For>
                </NativeSelect.Field>
              </NativeSelect.Root>
            </>
          )}

          {tipoSelecionado && categoriaSelecionada === "Medicamento" && (
            <>
              <Fieldset.Legend>Forma Farmacêutica:</Fieldset.Legend>
              <NativeSelect.Root>
                <NativeSelect.Field
                  placeholder="Selecione a forma"
                  value={formaFarmaceuticaSelecionada}
                  onChange={(e) =>
                    setFormaFarmaceuticaSelecionada(e.target.value)
                  }
                >
                  <For
                    each={Object.entries(
                      categories.Medicamento.formaFarmaceutica
                    ).flatMap(([forma, opcoes]) =>
                      opcoes.map((opcao) => ({ grupo: forma, valor: opcao }))
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
            </>
          )}

          {/* Select para categoria "Material" (opcional) */}
          {categoriaSelecionada === "Material" && (
            <>
              <Fieldset.Legend>Tipo de Material:</Fieldset.Legend>
              <NativeSelect.Root>
                <NativeSelect.Field
                  value={tipoSelecionado}
                  onChange={(e) => setTipoSelecionado(e.target.value)}
                >
                  <For each={categories.Material.tipo}>
                    {(tipo) => (
                      <option key={tipo} value={tipo}>
                        {tipo}
                      </option>
                    )}
                  </For>
                </NativeSelect.Field>
              </NativeSelect.Root>
            </>
          )}
        </Fieldset.Content>
      </Fieldset.Root>
    </Box>
  );
}
