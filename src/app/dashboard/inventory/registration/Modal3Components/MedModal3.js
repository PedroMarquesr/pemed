"use client";
import React from "react";
import { Flex, Field, Switch, Box } from "@chakra-ui/react";

// Componentes reutilizáveis
import InputForRegistrer from "../components/InputForRegistrer/InputForRegistrer";
import ContainerForm from "../components/ContainerForm/ContainerForm";
import SelectForRegistrer from "../components/SelectForRegistrer/SelectForRegistrer";
import TransactionItemTitle from "@/app/dashboard/InventoryControlPage/components/MovingSection/components/TransactionItemTitle/TransactionItemTitle";
import ExibitionCodeItem from "@/app/dashboard/InventoryControlPage/components/ExibitionCodeItem/ExibitionCodeItem";
import { LuPackage, LuSyringe, LuThermometer } from "react-icons/lu";

export default function MedModal3({ data, setData }) {
  return (
    <Flex
      flexDirection="column"
      bg="white"
      borderRadius="md"
      my={5}
      w="100%"
      boxShadow="xl"
    >
      <Flex alignItems="center" gap={2} justifyContent={"space-between"}>
        <TransactionItemTitle
          icon={<LuPackage />}
          iconColor={"rgb(23,95,254)"}
          title={"Embalagem e Características"}
        />
        <ExibitionCodeItem data={data} />
      </Flex>

      <ContainerForm>
        <SelectForRegistrer
          label="Tipo de embalagem"
          value={data.packagingType}
          onChange={(e) => setData({ ...data, packagingType: e.target.value })}
        >
          <option value="">Selecione o tipo</option>
          <option value="primary">Primária</option>
          <option value="secondary">Secundária</option>
          <option value="tertiary">Terciária</option>
        </SelectForRegistrer>

        <InputForRegistrer
          label="Material da embalagem"
          value={data.packagingMaterial}
          onChange={(e) =>
            setData({
              ...data,
              packagingMaterial: e.target.value.toUpperCase(),
            })
          }
          placeholder="Ex: Vidro, Plástico, etc."
        />
      </ContainerForm>

      <ContainerForm>
        <InputForRegistrer
          label="Quantidade por embalagem"
          value={data.quantityPerPackage}
          onChange={(e) =>
            setData({ ...data, quantityPerPackage: e.target.value })
          }
          type="number"
          placeholder="Ex: 10, 20, 30..."
        />

        <InputForRegistrer
          label="Volume/Conteúdo (ml, mg, etc.)"
          value={data.packageContent}
          onChange={(e) =>
            setData({ ...data, packageContent: e.target.value.toUpperCase() })
          }
          placeholder="Ex: 100ml, 500mg..."
        />
      </ContainerForm>

      <ContainerForm>
        <InputForRegistrer
          label="Via de administração"
          value={data.administrationRoute}
          onChange={(e) =>
            setData({
              ...data,
              administrationRoute: e.target.value.toUpperCase(),
            })
          }
          placeholder="Ex: Oral, Intravenosa, Subcutânea..."
        />

        <InputForRegistrer
          label="Forma farmacêutica"
          value={data.pharmaceuticalForm}
          onChange={(e) =>
            setData({
              ...data,
              pharmaceuticalForm: e.target.value.toUpperCase(),
            })
          }
          placeholder="Ex: Comprimido, Solução, Cápsula..."
        />
      </ContainerForm>

      <ContainerForm>
        <Field.Root>
          <Flex alignItems="center" gap={4}>
            <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
              Contém componente adicional
            </Field.Label>
            <Switch.Root
              checked={data.hasAdditionalComponent}
              onCheckedChange={(e) =>
                setData({ ...data, hasAdditionalComponent: e.checked })
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

      {data.hasAdditionalComponent && (
        <ContainerForm>
          <InputForRegistrer
            label="Componente adicional"
            value={data.additionalComponent}
            onChange={(e) =>
              setData({
                ...data,
                additionalComponent: e.target.value.toUpperCase(),
              })
            }
            placeholder="Descreva o componente"
          />
        </ContainerForm>
      )}

      <ContainerForm>
        <Field.Root>
          <Flex alignItems="center" gap={4}>
            <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
              <LuSyringe style={{ display: "inline", marginRight: "8px" }} />
              Medicamento controlado
            </Field.Label>
            <Switch.Root
              checked={data.isControlled}
              onCheckedChange={(e) =>
                setData({ ...data, isControlled: e.checked })
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

      {data.isControlled && (
        <ContainerForm>
          <SelectForRegistrer
            label="Portaria/Regulamentação de controle"
            value={data.controlRegulation}
            onChange={(e) =>
              setData({ ...data, controlRegulation: e.target.value })
            }
          >
            <option value="">Selecione a regulamentação</option>
            <option value="portaria-344-98">
              Portaria 344/98 - Lista A1 (Entorpecentes)
            </option>
            <option value="portaria-344-98-a2">
              Portaria 344/98 - Lista A2 (Entorpecentes)
            </option>
            <option value="portaria-344-98-b1">
              Portaria 344/98 - Lista B1 (Psicotrópicos)
            </option>
            <option value="portaria-344-98-b2">
              Portaria 344/98 - Lista B2 (Psicotrópicos)
            </option>
            <option value="portaria-344-98-c1">
              Portaria 344/98 - Lista C1 (Antimicrobianos)
            </option>
            <option value="portaria-344-98-c2">
              Portaria 344/98 - Lista C2 (Antimicrobianos)
            </option>
            <option value="portaria-599-2022">
              Portaria 599/2022 - Outros controlados
            </option>
            <option value="rdc-222-2018">
              RDC 222/2018 - Medicamentos especiais
            </option>
            <option value="lei-11343-2006">
              Lei 11.343/2006 - Drogas ilícitas
            </option>
            <option value="outra">Outra regulamentação</option>
          </SelectForRegistrer>

          {data.controlRegulation === "outra" && (
            <InputForRegistrer
              label="Especificar regulamentação"
              value={data.specificControlRegulation}
              onChange={(e) =>
                setData({
                  ...data,
                  specificControlRegulation: e.target.value.toUpperCase(),
                })
              }
              placeholder="Ex: Portaria XXX/XXXX, RDC XXX/XXXX..."
            />
          )}
        </ContainerForm>
      )}

      <ContainerForm>
        <Field.Root>
          <Flex alignItems="center" gap={4}>
            <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
              <LuThermometer
                style={{ display: "inline", marginRight: "8px" }}
              />
              Medicamento termolábil
            </Field.Label>
            <Switch.Root
              checked={data.isThermolabile}
              onCheckedChange={(e) =>
                setData({ ...data, isThermolabile: e.checked })
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

      {data.isThermolabile && (
        <ContainerForm>
          <InputForRegistrer
            label="Temperatura de conservação"
            value={data.conservationTemperature}
            onChange={(e) =>
              setData({
                ...data,
                conservationTemperature: e.target.value.toUpperCase(),
              })
            }
            placeholder="Ex: 2°C a 8°C"
          />

          <InputForRegistrer
            label="Condições especiais de armazenamento"
            value={data.specialStorageConditions}
            onChange={(e) =>
              setData({
                ...data,
                specialStorageConditions: e.target.value.toUpperCase(),
              })
            }
            placeholder="Descreva as condições"
          />
        </ContainerForm>
      )}
    </Flex>
  );
}
