"use client";

import React, { useEffect } from "react";
import ComboboxForFetch from "../components/ComboboxForFetch/ComboboxForFetch";
import InputForRegistrer from "../components/InputForRegistrer/InputForRegistrer";
import ContainerForm from "../components/ContainerForm/ContainerForm";
import SelectForRegistrer from "../components/SelectForRegistrer/SelectForRegistrer";
import { regulatoryCategories } from "../constants/regulatoryCategories";

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
  Container,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

export default function MedModal1({ data, setData }) {
  const addInputForNewActiveIngredient = () => {
    setData({
      ...data,
      activeIngredients: [
        ...data.activeIngredients,
        { ingredient: "", concentration: "" },
      ],
    });
  };

  return (
    <Flex w={"100%"}>
      <Box flex="1" borderRadius="md">
        <Box p={4}>
          <SelectForRegistrer
            label={"Selecione a categoria regulatória "}
            value={data.regulatoryCategory}
            onChange={(e) =>
              setData({ ...data, regulatoryCategory: e.target.value })
            }
          >
            {regulatoryCategories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </SelectForRegistrer>
        </Box>
        {data.regulatoryCategory === "novo" ||
        data.regulatoryCategory === "similar" ||
        data.regulatoryCategory === "biologico" ||
        data.regulatoryCategory === "produto-terapia-avancada" ||
        data.regulatoryCategory === "radiofarmaco" ? (
          <Box p={4}>
            <InputForRegistrer
              label={"Nome comercial:"}
              value={data.brandName}
              onChange={(e) =>
                setData({
                  ...data,
                  hasBrandName: true,
                  brandName: e.target.value.toUpperCase(),
                })
              }
            />
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
                  <InputForRegistrer
                    label={"Nome comercial:"}
                    value={data.brandName}
                    onChange={(e) =>
                      setData({
                        ...data,
                        hasBrandName: true,
                        brandName: e.target.value.toUpperCase(),
                      })
                    }
                  />
                </Box>
              )}
            </>
          )
        )}
        {data.activeIngredients.map((item, index) => (
          <>
            <ContainerForm>
              <InputForRegistrer
                label={`Princípio ativo ${index + 1}`}
                value={item.ingredient}
                onChange={(e) => {
                  const updated = [...data.activeIngredients];
                  updated[index].ingredient = e.target.value.toUpperCase();
                  setData({ ...data, activeIngredients: updated });
                }}
                mr={"5px"}
              />
              <InputForRegistrer
                label={`Dosagem/Concentração:`}
                value={item.concentration}
                onChange={(e) => {
                  const updated = [...data.activeIngredients];
                  updated[index].concentration = e.target.value.toUpperCase();
                  setData({ ...data, activeIngredients: updated });
                }}
              />{" "}
              <Box alignSelf="flex-end" pb="6">
                <CloseButton
                  ml={"20%"}
                  opacity="40%"
                  boxShadow="md"
                  bg="rgba(24,24,24,255)"
                  size="xs"
                  colorScheme="red"
                  onClick={() => {
                    const updated = data.activeIngredients.filter(
                      (_, i) => i !== index
                    );
                    setData({ ...data, activeIngredients: updated });
                  }}
                  _hover={{
                    opacity: "100%",
                    bg: "red",
                    transform: "translateY(-3px)",
                    transition: "transform 0.2s ease",
                  }}
                />
              </Box>
            </ContainerForm>
          </>
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

        <ComboboxForFetch
          labelName={"Fabricante:"}
          collectionName="suppliers"
          labelForList="tradeName"
          placeholder="Selecione o fabricante"
          onSelectItem={(item) => {
            setData({ ...data, manufacturer: item.label });
          }}
        />
      </Box>
    </Flex>
  );
}
