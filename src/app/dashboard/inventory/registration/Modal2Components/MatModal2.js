"use client";
import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { FaSyringe } from "react-icons/fa";

import ContainerForm from "../components/ContainerForm/ContainerForm";
import InputForRegistrer from "../components/InputForRegistrer/InputForRegistrer";
import SwitchRegister from "../components/SwitchRegister/SwitchRegister";
import SelectForRegistrer from "../components/SelectForRegistrer/SelectForRegistrer";
import InputWithInfo from "../components/InputWithInfo/InputWithInfo";

export default function MatModal2({ data, setData }) {
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
          Classificação
        </Text>
      </Flex>
      <ContainerForm>
        <SwitchRegister
          label="Contém registro completo na Anvisa"
          checked={data.hasAnvisaRegistration}
          onCheckedChange={(e) =>
            setData({ ...data, hasAnvisaRegistration: e.checked })
          }
        />
      </ContainerForm>

      {data.hasAnvisaRegistration && (
        <>
          <ContainerForm>
            <InputForRegistrer
              label="Registro ANVISA"
              value={data.anvisaRegistrationCode}
              onChange={(e) =>
                setData({
                  ...data,
                  anvisaRegistrationCode: e.target.value.toUpperCase(),
                })
              }
              placeholder="Digite o registro"
              maxLength={13}
            />
          </ContainerForm>

          <ContainerForm>
            <InputWithInfo
              label="Insira o modelo oficial do item (anvisa):"
              value={data.anvisaModel}
              onChange={(e) =>
                setData({
                  ...data,
                  anvisaModel: e.target.value.toUpperCase(),
                })
              }
              placeholder=""
              imageSrc="/inventory/officialModal.jpg"
              popoverWidth="50vw"
            />
          </ContainerForm>
        </>
      )}

      <ContainerForm>
        <SwitchRegister
          label="Sujeito a notificação simplificada"
          checked={data.hasSimplifiedNotification}
          onCheckedChange={(e) =>
            setData({
              ...data,
              hasSimplifiedNotification: e.checked,
            })
          }
        />
      </ContainerForm>

      {data.hasSimplifiedNotification && (
        <ContainerForm>
          <InputForRegistrer
            label="Referência normativa (RDC aplicável)"
            value={data.simplifiedNotificationReference}
            onChange={(e) =>
              setData({
                ...data,
                simplifiedNotificationReference: e.target.value.toUpperCase(),
              })
            }
            placeholder="RDC xx/xxxx"
          />
        </ContainerForm>
      )}

      <ContainerForm>
        <SelectForRegistrer
          label="Classificação de Risco:"
          value={data.riskClassification}
          onChange={(e) =>
            setData({ ...data, riskClassification: e.target.value })
          }
        >
          <option value={""}>Selecione</option>
          <option value={"Classe I"}>Classe I (Baixo Risco)</option>
          <option value={"Classe II"}>Classe II (Médio Risco)</option>
          <option value={"Classe III"}>Classe III (Alto Risco)</option>
          <option value={"Classe IV"}>Classe IV (Máximo Risco)</option>
        </SelectForRegistrer>
      </ContainerForm>

      <ContainerForm>
        <SelectForRegistrer
          label="Composição principal:"
          value={data.mainComposition}
          onChange={(e) =>
            setData({ ...data, mainComposition: e.target.value })
          }
        >
          <option value={""}>Selecione</option>
          <option value={"Látex"}>Látex</option>
          <option value={"Polipropileno"}>Polipropileno</option>
          <option value={"PVC"}>PVC</option>
          <option value={"Silicone"}>Silicone</option>
          <option value={"Algodão"}>Algodão</option>
          <option value={"Aço inoxidável"}>Aço inoxidável</option>
          <option value={"vidro"}>Vidro</option>
          <option value={"Outros"}>Outros</option>
        </SelectForRegistrer>

        {data.mainComposition === "Outros" && (
          <InputForRegistrer
            label="Insira a composição principal:"
            value={data.otherMainComposition}
            onChange={(e) =>
              setData({
                ...data,
                otherMainComposition: e.target.value.toUpperCase(),
              })
            }
            placeholder="Insira a composição principal"
          />
        )}
      </ContainerForm>
    </Flex>
  );
}
