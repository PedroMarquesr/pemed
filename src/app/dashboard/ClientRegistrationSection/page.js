"use client";

import { Flex, Separator } from "@chakra-ui/react";
import PageHeader from "../components/PageHeader/PageHeader";
import ContextHeader from "../components/ContextHeader/ContextHeader";
import SectionContainer from "../components/SectionContainer/SectionContainer";
import TitleGroupLabel from "../components/TitleGroupLabel/TitleGroupLabel";
import DefaultInput from "../components/DefaultInput/DefaultInput";
import DefaultCombobox from "../components/DefaultCombobox/DefaultCombobox";
import SaveButton from "../components/SaveButton/SaveButton";
import DetailText from "../SupplierRegistrationSection/components/DetailText/DetailText";
import AlertDefault from "@/components/AlertDefault/AlertDefault";

import { v4 as uuidv4 } from "uuid";

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
import { useState, useEffect } from "react";

import { IoPersonAddOutline } from "react-icons/io5";

export default function ClientRegistrationSection() {
  const [showSucessAlert, setShowSucessAlert] = useState(false);
  const [count, setCount] = useState(0);
  const [data, setData] = useState({
    idClientForUser: "",
    legalName: "", //Nome/Razão Social
    tradeName: "", // Nome Fantasia
    cnpj: "",
    contact: {
      department: "",
      email: "",
      phone: "",
      contactPerson: "",
    },
    address: {
      postalCode: "",
      street: "",
      neighborhood: "",
      number: "",
      complement: "",

      city: "",
      state: "",
    },
    clientType: "",
    additionalInfo: "",
    isActive: true,
  });

  const clientsType = [
    { label: "Pessoa física", value: "Pessoa física" },
    { label: "Hospital", value: "Hospital" },
    { label: "Clínica", value: "Clínica" },
    { label: "Laboratório", value: "Laboratório" },
    { label: "Consultório", value: "Consultório" },
    { label: "Outro", value: "Outro" },
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
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const coll = collection(db, "clients");
        const snapshot = await getCountFromServer(coll);

        const count = snapshot.data().count;
        const newId = "CLI-" + (count + 1).toString().padStart(4, "0");

        setCount(count);
        console.log(snapshot.data().count);

        setData((prev) => ({
          ...prev,
          idClientForUser: newId,
        }));
      } catch (error) {
        console.log("Erro ao buscar contagem de clientes:", error);
      }
    };
    fetchItems();
  }, []);

  const saveData = async () => {
    try {
      const docId = uuidv4();
      await setDoc(doc(db, "clients", docId), {
        ...data,
        id: docId,
        createAt: serverTimestamp(),
      });

      setShowSucessAlert(true);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.error("Erro ao salvar cliente", error);
      alert("Erro ao salvar cliente. Por favor, tente novamente.");
    }
  };

  const checkRequiredFields = () => {
    let isRequired = false;
    if (
      !data.legalName ||
      !data.cnpj ||
      !data.contact.email ||
      !data.contact.phone ||
      !data.contact.contactPerson ||
      !data.address.postalCode ||
      !data.address.state ||
      !data.address.city ||
      !data.address.neighborhood ||
      !data.address.number ||
      !data.address.street ||
      !data.clientType
    ) {
      isRequired = true;
      console.log(" falta o objeto");
      return isRequired;
    } else {
      return;
    }
  };
  return (
    <>
      <PageHeader
        title={"Cadastro de cliente"}
        descriptionSection={"Cadastre novos clientes no sistema"}
      />
      <SectionContainer>
        <ContextHeader
          title={"Informações do Cliente"}
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
        <TitleGroupLabel title={"Contato"} />

        <Flex>
          <DefaultInput
            labelName={"E-mail *"}
            inputType={"mail"}
            setData={(e) =>
              setData({
                ...data,
                contact: {
                  ...data.contact,
                  email: e.target.value,
                },
              })
            }
          />

          <DefaultInput
            labelName={"Telefone *"}
            inputType={"text"}
            setData={(e) =>
              setData({
                ...data,
                contact: {
                  ...data.contact,
                  phone: e.target.value,
                },
              })
            }
          />

          <DefaultInput
            labelName={"Responsável"}
            setData={(e) =>
              setData({
                ...data,
                contact: {
                  ...data.contact,
                  contactPerson: e.target.value.toUpperCase(),
                },
              })
            }
          />
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
            comboboxLabel={"Tipo de cliente *"}
            list={clientsType}
            setData={(value) => {
              setData({
                ...data,
                clientType: value,
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
        <SaveButton
          onclick={saveData}
          id={data.idClientForUser}
          isRequired={checkRequiredFields()}
        >
          {showSucessAlert && (
            <Flex p={5}>
              <AlertDefault
                message={`Cliente ${data.legalName} cadastrado com sucesso! - Cod: ${data.idClientForUser}`}
                alertTitle={"Sucesso"}
                alertInfo={"success"}
              />
            </Flex>
          )}
          <DetailText title={"Razão Social:"} detailText={data.legalName} />
          <DetailText title={"Nome fantasia:"} detailText={data.tradeName} />
          <DetailText title={"CNPJ:"} detailText={data.cnpj} />

          <Separator mb={4} />
          <DetailText title={"E-mail:"} detailText={data.contact.email} />
          <DetailText title={"Telefone:"} detailText={data.contact.phone} />
          <DetailText
            title={"Responsável:"}
            detailText={data.contact.contactPerson}
          />
          <Separator mb={4} />
          <DetailText title={"CEP:"} detailText={data.address.postalCode} />
          <DetailText title={"Logradouro:"} detailText={data.address.street} />
          <DetailText title={"Número:"} detailText={data.address.number} />
          <DetailText
            title={"Complemento:"}
            detailText={data.address.complement}
            optionalField
          />
          <DetailText
            title={"Bairro:"}
            detailText={data.address.neighborhood}
          />
          <DetailText title={"Cidade:"} detailText={data.address.city} />
          <DetailText title={"Estado:"} detailText={data.address.state} />
          <Separator mb={4} />

          <DetailText title={"Tipo de cliente:"} detailText={data.clientType} />
          <DetailText
            title={"Observações:"}
            detailText={data.additionalInfo}
            optionalField
          />
        </SaveButton>
      </SectionContainer>
      ;
    </>
  );
}
