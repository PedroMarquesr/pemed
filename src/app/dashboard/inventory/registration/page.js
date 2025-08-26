"use client"

import { Link, Box, Text, Flex, Button, Heading } from "@chakra-ui/react"
import { useState } from "react"
import { GoArrowLeft } from "react-icons/go"

import Modal1 from "./Modal1"
import MedModal2 from "./Modal2Components/MedModal2"
import MatModal2 from "./Modal2Components/MatModal2"
import MedModal3 from "./Modal3Components/MedModal3"
import MatModal3 from "./Modal3Components/MatModal3"

export default function Registration() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectOption, setSelectOption] = useState("Medicamento")

  const [data, setData] = useState({
    tipoItem: "",
    contemNomeComercial: false,
    categoriaRegulatoria: "",
    nomeComercial: "",
    activeIngredients: [{ principio: "", concentracao: "" }],
    principioAtivo: "",
    fabricante: "",
    classificacaoDeRisco: "",
    composicaoPrincipal: "",
    composicaoPrincipalOutros: "",
    dimensaoOuCarateristica: "",
    dimensaoOuCarateristicaOutro: "",
    especificacaoDimensaoReferencia: "",
    forma: "",
    unidadeFornecimento: "",
    contemRegistroAnvisa: null,
    contemNotificacaoSimplificada: null,
    refNormativaNotificacaoSimplificada: "",
    registroAnvisa: null,
    validadeRegistro: null,
    classeFarmaceutica: "",
    validadeTotalDoMedicamento: "",
    codigoCmed: null,
    viaAdministracao: "",
    qtdPorEmbalagem: 0,
    dosagem: "",
    termolabil: false,
    faixaTemperatura: "",
    controlado: false,
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
        {JSON.stringify(data)}

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
      ) : (
        renderModal3(selectOption)
      )}
      <Flex justifyContent={"end"} gap={3}>
        {currentStep >= 2 && currentStep <= 3 && (
          <Button
            isDisabled={currentStep > 3}
            boxShadow={"md"}
            bg={currentStep > 3 ? "green.500" : "rgba(24,24,24,255)"}
            onClick={() => setCurrentStep(currentStep - 1)}
            color={"rgba(223,223,223,255)"}
            _hover={
              currentStep <= 3
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
          bg={currentStep > 3 ? "green.500" : "rgba(24,24,24,255)"}
          onClick={() => setCurrentStep(currentStep + 1)}
          color={"rgba(223,223,223,255)"}
          _hover={
            currentStep <= 3
              ? {
                  bg: "rgba(19,92,254,255)",
                  transform: "translateY(-3px)",
                  transition: "transform 0.2s ease",
                }
              : {}
          }
        >
          {currentStep < 3 ? "Continuar" : currentStep === 3 ? "Salvar" : "✓"}
        </Button>
      </Flex>
    </>
  )
}
