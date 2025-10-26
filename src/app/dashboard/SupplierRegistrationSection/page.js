"use client";
import { Flex, Text, Box, Button } from "@chakra-ui/react";

import PageHeader from "../components/PageHeader/PageHeader";
import SectionContainer from "../components/SectionContainer/SectionContainer";
import TitleGroupLabel from "../components/TitleGroupLabel/TitleGroupLabel";
import ContextHeader from "../components/ContextHeader/ContextHeader";
import DefaultInput from "../components/DefaultInput/DefaultInput";

import {
  setDoc,
  doc,
  collection,
  serverTimestamp,
  getCountFromServer,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "@/components/libs/firebaseInit";

import { v4 as uuidv4 } from "uuid";

import { useState, useEffect } from "react";

import { IoPersonAddOutline } from "react-icons/io5";

export default function SupplierRegistrationSection() {
  const [data, setData] = useState({
    idSupplierForUser: "",
    legalName: "", //Nome/Razão Social
    tradeName: "", // Nome Fantasia
    cnpj: "",
    stateResgistration: "", // Inscrição estadual

    email: "",
    phone: "",
    contactPerson: "",

    address: {
      postalCode: "",
      street: "",
      number: "",
      complement: "",

      city: "",
      state: "",
    },

    additionalInfo: "",
    isActive: true,
  });

  const saveData = async () => {
    try {
      const docId = uuidv4();
      await setDoc(doc(db, "suppliers", docId), {
        ...data,
        id: docId,
        createdAt: serverTimestamp(),
      });
      alert(
        `Fornecedor ${data.legalName || "sem nome"} cadastrado com sucesso!`
      );
    } catch (error) {
      console.error("Erro ao salvar fornecedor:", error);
      alert("Erro ao salvar fornecedor. Tente novamente.");
    }
  };

  return (
    <>
      <PageHeader
        title={"Cadastro de fornecedores"}
        descriptionSection={"Cadastre novos fornecedores no sistema"}
      />

      <SectionContainer>
        <ContextHeader
          title={"Informações do Fornecedor"}
          icon={<IoPersonAddOutline />}
          iconColor={"blue"}
        />
        <TitleGroupLabel title={"Dados Básicos"} />
        <Flex>
          <DefaultInput
            labelName={"Nome/Razão Social *"}
            p={"2"}
            setData={(e) =>
              setData({
                ...data,
                legalName: e.target.value.toUpperCase(),
              })
            }
          />
          <DefaultInput
            labelName={"Nome Fantasia"}
            setData={(e) =>
              setData({
                ...data,
                tradeName: e.target.value.toUpperCase(),
              })
            }
          />
          <DefaultInput
            labelName={"CNPJ *"}
            setData={(e) =>
              setData({
                ...data,
                cnpj: e.target.value.toUpperCase(),
              })
            }
          />
        </Flex>
        <Flex>
          <DefaultInput
            labelName={"Inscrição estadual *"}
            setData={(e) =>
              setData({
                ...data,
                stateResgistration: e.target.value.toUpperCase(),
              })
            }
          />
          <DefaultInput display={"none"} />
          <DefaultInput display={"none"} />
        </Flex>
        <TitleGroupLabel title={"Contato"} />
        <Flex>
          <DefaultInput labelName={"E-mail *"} inputType={"mail"} />
          <DefaultInput labelName={"Telefone *"} inputType={"number"} />
          <DefaultInput labelName={"Responsável"} />
        </Flex>
        <TitleGroupLabel title={"Endereço"} />

        <Flex>
          <DefaultInput labelName={"CEP *"} inputType={"number"} />
          <DefaultInput labelName={"Logradouro"} inputType={"number"} />
          <DefaultInput labelName={"Número"} inputType={"number"} />
        </Flex>

        <Flex>
          <DefaultInput labelName={"Complemento"} inputType={"text"} />
          <DefaultInput labelName={"Bairro *"} inputType={"text"} />
          <DefaultInput labelName={"Cidade *"} inputType={"text"} />
        </Flex>

        <Flex>
          <DefaultInput labelName={"Estado *"} inputType={"text"} />
          <DefaultInput display={"none"} />
          <DefaultInput display={"none"} />
        </Flex>
        <TitleGroupLabel title={"Informações Adicionais"} />
        <Flex>
          <DefaultInput labelName={"Estado *"} inputType={"text"} />
          <DefaultInput
            labelName={"Obersavações"}
            inputType={"textarea"}
            height={"20"}
          />
        </Flex>
        <Button onClick={() => saveData()}>
          <Text>Salvar</Text>
        </Button>
        {JSON.stringify(data)}
      </SectionContainer>
    </>
  );
}
