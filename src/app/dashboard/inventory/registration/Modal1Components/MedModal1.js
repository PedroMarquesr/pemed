"use client";

import React from "react";
import {
  Box,
  Flex,
  Button,
  Text,
  CloseButton,
  Field,
  Switch,
  Container,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

import ComboboxForFetch from "../components/ComboboxForFetch/ComboboxForFetch";
import InputForRegistrer from "../components/InputForRegistrer/InputForRegistrer";
import ContainerForm from "../components/ContainerForm/ContainerForm";
import SelectForRegistrer from "../components/SelectForRegistrer/SelectForRegistrer";

import { regulatoryCategories } from "../constants/regulatoryCategories";

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

  const handleRegulatoryCategoryChange = (e) => {
    setData({ ...data, regulatoryCategory: e.target.value });
  };

  const handleBrandNameChange = (e) => {
    setData({
      ...data,
      hasBrandName: true,
      brandName: e.target.value.toUpperCase(),
    });
  };

  const handleIngredientChange = (index, field, value) => {
    const updated = [...data.activeIngredients];
    updated[index][field] = value.toUpperCase();
    setData({ ...data, activeIngredients: updated });
  };

  const removeIngredient = (index) => {
    const updated = data.activeIngredients.filter((_, i) => i !== index);
    setData({ ...data, activeIngredients: updated });
  };

  const alwaysShowBrandName = [
    "novo",
    "similar",
    "biologico",
    "produto-terapia-avancada",
    "radiofarmaco",
  ];

  const shouldAlwaysShowBrandName = alwaysShowBrandName.includes(
    data.regulatoryCategory
  );

  return (
    <Flex w="100%">
      <Box flex="1" borderRadius="md">
        <ContainerForm>
          <SelectForRegistrer
            label="Selecione a categoria regulatória"
            value={data.regulatoryCategory}
            onChange={handleRegulatoryCategoryChange}
          >
            {regulatoryCategories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </SelectForRegistrer>
        </ContainerForm>

        {shouldAlwaysShowBrandName ? (
          <ContainerForm>
            <InputForRegistrer
              label="Nome comercial:"
              value={data.brandName}
              onChange={handleBrandNameChange}
            />
          </ContainerForm>
        ) : (
          data.regulatoryCategory && (
            <>
              <ContainerForm>
                <Field.Root>
                  <Flex alignItems="center" gap={4} justifyContent="center">
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
              </ContainerForm>

              {data.hasBrandName && (
                <ContainerForm>
                  <InputForRegistrer
                    label="Nome comercial:"
                    value={data.brandName}
                    onChange={handleBrandNameChange}
                  />
                </ContainerForm>
              )}
            </>
          )
        )}

        {data.activeIngredients.map((item, index) => (
          <ContainerForm key={index} gap={2}>
            <InputForRegistrer
              label={`Princípio ativo ${index + 1}`}
              value={item.ingredient}
              onChange={(e) =>
                handleIngredientChange(index, "ingredient", e.target.value)
              }
              flex="1"
            />

            <InputForRegistrer
              label="Dosagem/Concentração:"
              value={item.concentration}
              onChange={(e) =>
                handleIngredientChange(index, "concentration", e.target.value)
              }
              flex="1"
            />

            <Box alignSelf="flex-end" pb={6}>
              <CloseButton
                ml="20%"
                opacity="40%"
                boxShadow="md"
                bg="rgba(24,24,24,255)"
                size="xs"
                colorScheme="red"
                onClick={() => removeIngredient(index)}
                _hover={{
                  opacity: "100%",
                  bg: "red",
                  transform: "translateY(-3px)",
                  transition: "transform 0.2s ease",
                }}
              />
            </Box>
          </ContainerForm>
        ))}

        <ContainerForm>
          <Text fontSize="sm" fontWeight="bold" color="gray.700">
            Adicionar princípio ativo
          </Text>
          <Button
            boxShadow="md"
            size="xs"
            bg="rgba(24,24,24,255)"
            onClick={addInputForNewActiveIngredient}
            color="rgba(223,223,223,255)"
            _hover={{
              bg: "rgba(19,92,254,255)",
              transform: "translateY(-3px)",
              transition: "transform 0.2s ease",
            }}
          >
            <FaPlus />
          </Button>
        </ContainerForm>

        <ContainerForm>
          <ComboboxForFetch
            labelName="Fabricante:"
            collectionName="suppliers"
            labelForList="tradeName"
            placeholder="Selecione o fabricante"
            onSelectItem={(item) => {
              setData({ ...data, manufacturer: item.label });
            }}
          />
        </ContainerForm>
      </Box>
    </Flex>
  );
}
