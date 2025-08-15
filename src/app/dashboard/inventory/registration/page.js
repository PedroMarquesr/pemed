"use client"

import { Link, Box, Text, Flex, Button, Heading } from "@chakra-ui/react"
import { useState } from "react"
import { GoArrowLeft } from "react-icons/go"

import Modal1 from "./Modal1"

export default function registration() {
  const [currentStep, SetCurrentStep] = useState(1)
  const [data, setData] = useState({})

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
          <Text
            color={"gray.600"}
            fontWeight={"light"}
            textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)"
          >
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
            <Text fontSize={"lg"} bold={"md"}>
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
      <Modal1 />
      <Flex justifyContent={"end"}>
        <Button
          isDisabled={currentStep > 3}
          boxShadow={"md"}
          bg={currentStep > 3 ? "green.500" : "rgba(24,24,24,255)"}
          onClick={() => SetCurrentStep(currentStep + 1)}
          color={"rgba(223,223,223,255)"}
          _hover={
            currentStep < 3
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
