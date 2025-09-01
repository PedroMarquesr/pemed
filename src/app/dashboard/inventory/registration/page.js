"use client"

import { Link, Box, Text, Flex, Button, Heading } from "@chakra-ui/react"
import { use, useState, useEffect } from "react"
import { GoArrowLeft } from "react-icons/go"
import { setDoc, doc, collection, serverTimestamp } from "firebase/firestore"
import { v4 as uuidv4 } from "uuid"

import Modal1 from "./Modal1"
import MedModal2 from "./Modal2Components/MedModal2"
import MatModal2 from "./Modal2Components/MatModal2"
import MedModal3 from "./Modal3Components/MedModal3"
import MatModal3 from "./Modal3Components/MatModal3"
import MedModal4 from "./Modal4Components/MedModal4"
import MatModal4 from "./Modal4Components/MatModal4"
import { db } from "@/components/libs/firebaseInit"

export default function Registration() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectOption, setSelectOption] = useState("")

  const [data, setData] = useState({
    itemType: "",
    hasBrandName: false,
    regulatoryCategory: "",
    brandName: "",
    technicalName: "",
    activeIngredients: [{ ingredient: "", concentration: "" }],
    manufacturer: "",
    riskClassification: "",
    mainComposition: "",
    otherMainComposition: "",
    dimensionOrCharacteristic: "",
    otherDimensionOrCharacteristic: "",
    dimensionReferenceSpecification: "",
    contentVolume: "",
    dosageForm: "",
    supplyUnit: "",
    hasAdditionalComponents: false,
    additionalComponents: "",
    hasAnvisaRegistration: true,
    hasSimplifiedNotification: false,
    simplifiedNotificationReference: "",
    anvisaRegistrationCode: "",
    registrationValidity: "",
    anvisaPresentation: "",
    anvisaModel: "",
    therapeuticClass: "",
    totalDrugValidity: "",
    cmedGgremCode: "",
    administrationRoute: "",
    packageQuantity: 0,
    isThermolabile: false,
    temperatureRange: "",
    isControlledSubstance: false,
  })

  const renderModal2 = () => {
    if (currentStep === 2) {
      return selectOption === "Medicamento" ? (
        <MedModal2 data={data} setData={setData} />
      ) : (
        <MatModal2 data={data} setData={setData} />
      )
    }
  }
  const renderModal3 = () => {
    if (currentStep === 3) {
      return selectOption === "Medicamento" ? (
        <MedModal3 data={data} setData={setData} />
      ) : (
        <MatModal3 data={data} setData={setData} />
      )
    }
  }
  const renderModal4 = () => {
    if (currentStep === 4) {
      return selectOption === "Medicamento" ? (
        <MedModal4 data={data} setData={setData} />
      ) : (
        <MatModal4 data={data} setData={setData} />
      )
    }
  }

  useEffect(() => {
    const saveData = async () => {
      const docId = uuidv4(10)
      const collectionRef = collection(db, "inventoryItems")
      await setDoc(doc(db, "inventoryItems", docId), {
        ...data,
        id: docId,
        createdAt: serverTimestamp(),
      })
    }
    if (currentStep === 4) {
      console.log("Entrou no if", currentStep)
      saveData()
    }
  }, [currentStep, data])

  return (
    <>
      <Flex mb={"9"}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Link href="/dashboard">
            <Button
              _hover={{
                color: "gray",
                textDecoration: "underline",
                transform: "translateY(-3px)",
                transition: "transform 0.2s ease",
              }}
            >
              <GoArrowLeft fontSize="small" />
              <Text fontSize="medium">Voltar</Text>
            </Button>
          </Link>
        </Flex>

        <Flex
          ml={"3"}
          pt={"0"}
          mt={"0"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Text
            color="black"
            fontSize={"3xl"}
            fontWeight={"700"}
            lineHeight={"0"}
            textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)"
          >
            Cadastro de item
          </Text>
          <Text color={"gray.600"} fontWeight={"light"} textShadow="xs">
            Cadastre medicamentos e materiais no sistema
          </Text>
        </Flex>
      </Flex>
      <Flex justifyContent={"center"}>
        <Flex justifyContent="center" alignItems="center">
          <Flex
            boxShadow={"md"}
            justifyContent="center"
            alignItems="center"
            fontWeight={"bold"}
            borderRadius="50%"
            w="50px"
            h="50px"
            bg={"rgba(19,92,254,255)"}
          >
            <Text
              fontSize={"lg"}
              bold={"md"}
              color={
                currentStep >= 1 ? "rgb(188, 188, 189)" : "rgba(77,81,90,255)"
              }
            >
              {currentStep > 1 ? "✓" : "1"}
            </Text>
          </Flex>
          <Flex
            w="4vw"
            h="4px"
            bg={currentStep >= 2 ? "rgba(19,92,254,255)" : "rgb(188,188,189)"}
            mr="5"
            transition="all 0.3s ease"
            _hover={{ transform: "scale(1.05)" }}
          ></Flex>

          <Flex
            boxShadow={"md"}
            justifyContent="center"
            alignItems="center"
            fontWeight={"bold"}
            borderRadius="50%"
            w="50px"
            h="50px"
            bg={currentStep >= 2 ? "rgba(19,92,254,255)" : "rgb(188,188,189)"}
          >
            <Text
              fontSize={"lg"}
              bold={"md"}
              color={
                currentStep >= 2 ? "rgb(188, 188, 189)" : "rgba(77,81,90,255)"
              }
            >
              {currentStep > 2 ? "✓" : "2"}
            </Text>
          </Flex>
          <Flex
            w="4vw"
            h="4px"
            bg={currentStep >= 3 ? "rgba(19,92,254,255)" : "rgb(188,188,189)"}
            mr="5"
            transition="all 0.3s ease"
            _hover={{ transform: "scale(1.05)" }}
          ></Flex>
          <Flex
            boxShadow={"md"}
            justifyContent="center"
            alignItems="center"
            fontWeight={"bold"}
            borderRadius="50%"
            w="50px"
            h="50px"
            bg={currentStep >= 3 ? "rgba(19,92,254,255)" : "rgb(188,188,189)"}
          >
            <Text
              fontSize={"lg"}
              bold={"md"}
              color={
                currentStep >= 3 ? "rgb(188, 188, 189)" : "rgba(77,81,90,255)"
              }
            >
              {currentStep > 3 ? "✓" : "3"}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      {currentStep === 1 ? (
        <Modal1
          selectOption={selectOption}
          setSelectOption={setSelectOption}
          data={data}
          setData={setData}
        />
      ) : currentStep === 2 ? (
        renderModal2(selectOption)
      ) : currentStep === 3 ? (
        renderModal3(selectOption)
      ) : currentStep === 4 ? (
        renderModal4(selectOption)
      ) : null}
      <Flex justifyContent={"end"} gap={3}>
        {currentStep >= 2 && currentStep <= 4 && (
          <Button
            isDisabled={currentStep > 4}
            boxShadow={"md"}
            bg={"rgba(24,24,24,255)"}
            onClick={() => setCurrentStep(currentStep - 1)}
            color={"rgba(223,223,223,255)"}
            _hover={
              currentStep <= 4
                ? {
                    bg: "rgba(19,92,254,255)",
                    transform: "translateY(-3px)",
                    transition: "transform 0.2s ease",
                  }
                : {}
            }
          >
            Voltar
          </Button>
        )}

        <Button
          isDisabled={currentStep > 3}
          boxShadow={"md"}
          bg={currentStep > 4 ? "green.500" : "rgba(24,24,24,255)"}
          onClick={() => setCurrentStep(currentStep + 1)}
          color={"rgba(223,223,223,255)"}
          _hover={
            currentStep <= 4
              ? {
                  bg: "rgba(19,92,254,255)",
                  transform: "translateY(-3px)",
                  transition: "transform 0.2s ease",
                }
              : {}
          }
        >
          {currentStep < 4 ? "Continuar" : currentStep === 4 ? "Salvar" : "✓"}
        </Button>
      </Flex>
      {JSON.stringify(data)}
    </>
  )
}
