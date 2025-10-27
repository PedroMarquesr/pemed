"use client"

import { Flex, Separator } from "@chakra-ui/react"
import PageHeader from "../components/PageHeader/PageHeader"
import ContextHeader from "../components/ContextHeader/ContextHeader"
import SectionContainer from "../components/SectionContainer/SectionContainer"
import TitleGroupLabel from "../components/TitleGroupLabel/TitleGroupLabel"
import DefaultInput from "../components/DefaultInput/DefaultInput"

import { v4 as uuidv4 } from "uuid"

import { fetchAddressByCep } from "@/utils/fetchAddressByCep"

import {
  setDoc,
  doc,
  collection,
  serverTimestamp,
  getCountFromServer,
  getDoc,
  getDocs,
} from "firebase/firestore"
import { db } from "@/components/libs/firebaseInit"
import { useState, useEffect } from "react"

//ICON
import { IoPersonAddOutline } from "react-icons/io5"

export default function ClientRegistrationSection() {
  const [data, setData] = useState({
    idClientForUser: "",
    legalName: "", //Nome/Razão Social
    tradeName: "", // Nome Fantasia
    cnpj: "",

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
    clientType: "",
    additionalInfo: "",
    isActive: true,
  })

  const clientsType = [
    { label: "Pessoa física", value: "Pessoa física" },
    { label: "Hospital", value: "Hospital" },
    { label: "Clínica", value: "Clínica" },
    { label: "Laboratório", value: "Laboratório" },
    { label: "Consultório", value: "Consultório" },
    { label: "Outro", value: "Outro" },
  ]

  // const handleCepBlur = async () => {
  //     try {
  //       const result = await fetchAddressByCep(data.address.postalCode)
  //       console.log("Cep digitado:", result)
  //       setData((prevData) => ({
  //         ...prevData,
  //         address: {
  //           ...prevData.address,
  //           ...result,
  //         },
  //       }))
  //     } catch (error) {
  //       console.log(error)
  //     }
  // }

  const saveData = async () => {
    try {
      const docId = uuidv4()
      await setDoc(doc(db, "clients", docId), {
        ...data,
        id: docId,
        createAt: serverTimestamp(),
      })
      alert(
        `Cliente ${data.legalName} cadastrado com sucesso! - Cod: ${data.idClientForUser}`
      )
      window.location.reload()
    } catch (error) {
      console.error("Erro ao salvar cliente", error)
      alert("Erro ao salvar cliente. Por favor, tente novamente.")
    }
  }
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
      </SectionContainer>
    </>
  )
}
