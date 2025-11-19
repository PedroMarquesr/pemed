"use client";

import { Flex, Text, Image, List, Box } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

import ItemList from "./components/itemList/itemList";

export default function WhyChoosePemed() {
  return (
    <>
      <Flex justifyContent={"space-between"} mt={"8"}>
        <Flex flexDirection={"column"} justifyContent={"space-evenly"}>
          {" "}
          <Text textStyle={"4xl"} color={"black"} fontWeight={"bolder"}>
            Por que escolher o{" "}
            <Text as="span" color={"rgb(14,106,226)"}>
              PEMED?
            </Text>{" "}
          </Text>
          <Text
            color={"rgb(95,105,116)"}
            textStyle={"xl"}
            textAlign={"justify"}
            pr={"3"}
          >
            Nossa plataforma foi desenvolvida pensando nas necessidades reais de
            farmácias e distribuidoras
          </Text>
          <Flex flexDirection={"column"}>
            <List.Root color={"rgb(95,105,116)"} unstyled>
              <ItemList itemText={"Redução de perdas por vencimento"} />
              <ItemList itemText={"Otimização do espaço físico"} />
              <ItemList itemText={"Decisões baseadas em dados"} />
              <ItemList itemText={"Conformidade regulatória garantida"} />
              <ItemList itemText={"Aumento da eficiência operacional"} />
            </List.Root>
          </Flex>
        </Flex>
        <Flex
          position="relative"
          width="70%"
          height="auto"
          justifyContent={"center"}
        >
          <Image
            src="./pemed-benefits-image.jpeg"
            bgColor={"red"}
            alt="pills"
            width={"95%"}
            borderRadius={"md"}
          />
          <Flex
            position="absolute"
            width="95%"
            height="100%"
            bgColor="blue.400"
            opacity="0.3"
            zIndex="1"
          ></Flex>
        </Flex>
      </Flex>
    </>
  );
}
