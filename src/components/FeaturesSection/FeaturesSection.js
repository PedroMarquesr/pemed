"use client";

import { Flex, Text } from "@chakra-ui/react";
import { Global } from "@emotion/react";

import CardFeature from "./components/CardFeature/CardFeature";

export default function FeaturesSection() {
  return (
    <>
      <Global
        styles={`
              html, body, #__next {
                width: 100%;
                max-width: 100%;
                overflow-x: hidden;
              }
              *, *::before, *::after { box-sizing: border-box; }
              img, svg, video, canvas {
                max-width: 100%;
                height: auto;
                display: block;
              }
            `}
      />
      <Flex flexDirection={"column"} alignItems={"center"}>
        <Text textStyle={"3xl"} color={"black"} fontWeight={"bolder"} pb={"3"}>
          Recursos que{" "}
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
            Transformam sua Gestão
          </Text>
        </Text>
        <Text color={"rgb(95,105,116)"} textStyle={"xl"} textAlign={"justify"}>
          {" "}
          Tudo que você precisa para gerenciar seu estoque farmacêutico com
          eficiência e segurança
        </Text>

        <Flex
          justifyContent="space-around"
          width="100%"
          maxW="1200px"
          mt="7"
          wrap="wrap"
        >
          <CardFeature />
          <CardFeature />
          <CardFeature />
        </Flex>
        <Flex justifyContent="space-around" width="100%" maxW="1200px" mt="7">
          {" "}
          <CardFeature />
          <CardFeature />
          <CardFeature />
        </Flex>
      </Flex>
    </>
  );
}
