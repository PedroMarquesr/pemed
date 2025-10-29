"use client";
import { Flex, Text, Box, Button } from "@chakra-ui/react";

import PageHeader from "../components/PageHeader/PageHeader";
import SectionContainer from "../components/SectionContainer/SectionContainer";
import TitleGroupLabel from "../components/TitleGroupLabel/TitleGroupLabel";
import ContextHeader from "../components/ContextHeader/ContextHeader";
import DefaultInput from "../components/DefaultInput/DefaultInput";
import DefaultCombobox from "../components/DefaultCombobox/DefaultCombobox";
import SaveButton from "../components/SaveButton/SaveButton";

import { fetchAddressByCep } from "@/utils/fetchAddressByCep";

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
      neighborhood: "",
      number: "",
      complement: "",

      city: "",
      state: "",
    },
    suplierType: "",
    additionalInfo: "",
    isActive: true,
  });

  const suppliersType = [
    { label: "Distribuidora", value: "distribuidora" },
    { label: "Laboratório", value: "laboratorio" },
  ];

  const handleCepBlur = async () => {
    try {
      const result = await fetchAddressByCep(data.address.postalCode);
      console.log("Cep digitado:", result);
      setData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          ...result,
        },
      }));
    } catch (error) {
      console.log(error);
    }
  };

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
          <DefaultInput
            labelName={"E-mail *"}
            inputType={"mail"}
            setData={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
          />
          <DefaultInput
            labelName={"Telefone *"}
            inputType={"text"}
            setData={(e) =>
              setData({
                ...data,
                phone: e.target.value,
              })
            }
          />
          <DefaultInput labelName={"Responsável"} />
        </Flex>
        <TitleGroupLabel title={"Endereço"} />

        <Flex>
          <DefaultInput
            labelName={"CEP *"}
            inputType={"number"}
            onBlur={handleCepBlur}
            setData={(e) =>
              setData({
                ...data,
                address: {
                  ...data.address,
                  postalCode: e.target.value,
                },
              })
            }
          />
          <DefaultInput
            labelName={"Logradouro"}
            inputType={"text"}
            value={data.address.street}
            setData={(e) =>
              setData({
                ...data,
                address: {
                  ...data.address,
                  street: e.target.value,
                },
              })
            }
          />
          <DefaultInput
            labelName={"Número"}
            inputType={"number"}
            setData={(e) =>
              setData({
                ...data,
                address: {
                  ...data.address,
                  number: e.target.value,
                },
              })
            }
          />
        </Flex>

        <Flex>
          <DefaultInput
            labelName={"Complemento"}
            inputType={"text"}
            value={data.address.complement}
            setData={(e) =>
              setData({
                ...data,
                address: {
                  ...data.address,
                  complement: e.target.value,
                },
              })
            }
          />
          <DefaultInput
            labelName={"Bairro *"}
            inputType={"text"}
            value={data.address.neighborhood}
            setData={(e) =>
              setData({
                ...data,
                address: {
                  ...data.address,
                  neighborhood: e.target.value,
                },
              })
            }
          />
          <DefaultInput
            labelName={"Cidade *"}
            inputType={"text"}
            value={data.address.city}
            setData={(e) =>
              setData({
                ...data,
                address: {
                  ...data.address,
                  city: e.target.value,
                },
              })
            }
          />
        </Flex>

        <Flex>
          <DefaultInput
            labelName={"Estado *"}
            inputType={"text"}
            value={data.address.state}
            setData={(e) =>
              setData({
                ...data,
                address: {
                  ...data.address,
                  state: e.target.value.toUpperCase(),
                },
              })
            }
          />
          <DefaultInput display={"none"} />
          <DefaultInput display={"none"} />
        </Flex>
        <TitleGroupLabel title={"Informações Adicionais"} />
        <Flex>
          <DefaultCombobox
            list={suppliersType}
            setData={(value) => {
              setData({
                ...data,
                suplierType: value,
              });
            }}
          />
          <DefaultInput
            labelName={"Observações"}
            inputType={"textarea"}
            height={"20"}
            setData={(e) =>
              setData({
                ...data,
                additionalInfo: e.target.value,
              })
            }
          />
        </Flex>
        <SaveButton onclick={saveData} />
        {JSON.stringify(data)}
      </SectionContainer>
    </>
  );
}
