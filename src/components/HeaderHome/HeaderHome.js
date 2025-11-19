"use client";

import { Flex, Text, Image } from "@chakra-ui/react";
import { BsStars } from "react-icons/bs";

export default function HeaderHome() {
  return (
    <>
      <Flex flexDirection={"column"} mt={"8"} mb={"8"}>
        <Flex
          p={"2"}
          bgColor={"rgb(229,243,245)"}
          borderRadius={"30px"}
          border={"1px solid rgb(197,220,244)"}
          width={"30%"}
        >
          <Text color={"rgb(19,92,254)"} pr={"2"}>
            <BsStars />
          </Text>
          <Text color={"rgb(98,109,122)"} fontFamily={""}>
            Gestão Inteligente de Medicamentos
          </Text>
        </Flex>

        <Flex justifyContent={"space-between"}>
          <Flex flexDirection={"column"} justifyContent={"space-evenly"}>
            {" "}
            <Text textStyle={"5xl"} color={"black"} fontWeight={"bolder"}>
              Gerencie seu{" "}
              <Text
                as="span"
                style={{
                  background:
                    "linear-gradient(to right, rgb(5,68,105), rgb(0,152,139))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Estoque Farmacêutico
              </Text>{" "}
              com Inteligência
            </Text>
            <Text
              color={"rgb(95,105,116)"}
              textStyle={"xl"}
              textAlign={"justify"}
              pr={"3"}
            >
              Controle total sobre medicamentos, fornecedores e validades.
              Otimize sua gestão e tome decisões baseadas em dados reais.
            </Text>
          </Flex>

          <Image
            src="./pills-header.jpeg"
            alt="pills"
            width={"50%"}
            borderRadius={"md"}
          />
        </Flex>
      </Flex>
    </>
  );
}
