"use client";

import { Flex, Text, Image } from "@chakra-ui/react";
import { BsStars } from "react-icons/bs";

export default function HeaderHome() {
  return (
    <>
      <Flex border={"1px solid red"} flexDirection={"column"}>
        <Flex
          p={"2"}
          bgColor={"rgb(229,243,245)"}
          borderRadius={"30px"}
          border={"1px solid rgb(197,220,244)"}
          width={"30%"}
          mb={"4px"}
        >
          <Text color={"rgb(19,92,254)"} pr={"2"}>
            <BsStars />
          </Text>
          <Text color={"rgb(98,109,122)"} fontFamily={""}>
            Gestão Inteligente de Medicamentos
          </Text>
        </Flex>

        <Flex justifyContent={"space-between"}>
          <Flex>
            {" "}
            <Text textStyle={"5xl"} color={"black"} fontWeight={"bolder"}>
              Gerencie seu Estoque Farmacêutico com Inteligência
            </Text>
          </Flex>

          <Image src="./pills-header.jpeg" alt="pills" width={"50%"} />
        </Flex>
      </Flex>
    </>
  );
}
