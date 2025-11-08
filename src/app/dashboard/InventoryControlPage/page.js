"use client";

import { Link, Box, Text, Flex, Button, Heading } from "@chakra-ui/react";
import { use, useState, useEffect } from "react";
import ChooseControl from "@/app/dashboard/InventoryControlPage/components/ChooseControl/ChooseControl.js";

import { GoArrowLeft } from "react-icons/go";
import { FaDownload } from "react-icons/fa";

import { setDoc, doc, collection, serverTimestamp } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

import { db } from "@/components/libs/firebaseInit";

export default function IventoryControlPage() {
  return (
    <>
      <Flex flexDirection={"column"}>
        <Flex mb="9" justifyContent="space-between" alignItems="center">
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Flex justifyContent={"space-between"}>
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
              <Flex ml={"5"} flexDirection="column" textAlign="-moz-initial">
                {" "}
                <Text
                  color="black"
                  fontSize="3xl"
                  fontWeight="700"
                  textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)"
                >
                  Controle de Estoque
                </Text>
                <Text color="gray.600" fontWeight="light">
                  Gestão de entrada e saída de itens
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Button
            color={"white"}
            bg={"black"}
            borderRadius={"sm"}
            _hover={{
              bg: "rgba(19,92,254,255)",
              color: "white",
              transform: "translateY(-3px)",
              transition: "transform 0.2s ease",
            }}
          >
            <FaDownload fontSize="small" />
            <Text fontSize="medium" ml="2">
              Exportar relatório
            </Text>
          </Button>
        </Flex>
        <ChooseControl />
      </Flex>
    </>
  );
}
