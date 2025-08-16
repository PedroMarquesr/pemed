"use client";

import { Text, Flex, Button } from "@chakra-ui/react";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

import Modal1 from "./Modal1";

export default function registration() {
  const [currentStep, SetCurrentStep] = useState(1);
  const [data, setData] = useState({});

  return (
    <Flex flexDirection={"column"}>
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
      <Button
        boxShadow={"md"}
        bg={"rgba(24,24,24,255)"}
        onClick={() => SetCurrentStep(currentStep + 1)}
        color={"rgba(223,223,223,255)"}
        _hover={{ bg: "rgba(19,92,254,255)", w: "7vw" }}
      >
        Continuar
      </Button>
    </Flex>
  );
}
