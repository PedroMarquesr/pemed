"use client";

import { Flex, Text } from "@chakra-ui/react";
import { Global } from "@emotion/react";

import CardFeature from "./components/CardFeature/CardFeature";

import { FaBox, FaShieldAlt } from "react-icons/fa";
import { IoMdTime, IoIosNotificationsOutline } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdGraphicEq } from "react-icons/md";

import {
  SlideFromLeft,
  TypewriterText,
  SlideFromRight,
  FloatUp,
  ScaleIn,
  FlipIn,
} from "@/components/animations/ScrollAnimations";

export default function FeaturesSection({ id }) {
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
      <Flex flexDirection={"column"} alignItems={"center"} id={id}>
        <SlideFromLeft>
          <Text
            textStyle={"4xl"}
            color={"black"}
            fontWeight={"bolder"}
            pb={"3"}
          >
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
        </SlideFromLeft>

        <TypewriterText>
          <Text
            color={"rgb(95,105,116)"}
            textStyle={"xl"}
            textAlign={"justify"}
          >
            Tudo que você precisa para gerenciar seu estoque farmacêutico com
            eficiência e segurança
          </Text>
        </TypewriterText>

        <Flex
          justifyContent="space-around"
          width="100%"
          maxW="1200px"
          mt="7"
          wrap="wrap"
          gap="6"
        >
          <SlideFromLeft delay={0.1}>
            <CardFeature
              icon={<FaBox />}
              iconColor={"rgb(28,98,254)"}
              bgIconColor={"rgb(232,240,255)"}
              titleFeature={"Gestão de Estoque"}
              subTitleFeature={
                "Controle completo de entradas e saídas com monitoramento em tempo real"
              }
            />
          </SlideFromLeft>

          <FloatUp delay={0.2}>
            <CardFeature
              icon={<IoMdTime />}
              iconColor={"rgb(55,174,163)"}
              bgIconColor={"rgb(232,245,244)"}
              titleFeature={"Controle de Validade"}
              subTitleFeature={
                "Alertas automáticos para medicamentos próximos ao vencimento"
              }
            />
          </FloatUp>

          <SlideFromRight delay={0.3}>
            <CardFeature
              icon={<IoDocumentTextOutline />}
              iconColor={"rgb(28,98,254)"}
              bgIconColor={"rgb(232,240,255)"}
              titleFeature={"Gestão de Lotes"}
              subTitleFeature={
                "Rastreabilidade completa de todos os lotes e fornecedores"
              }
            />
          </SlideFromRight>
        </Flex>

        <Flex
          justifyContent="space-around"
          width="100%"
          maxW="1200px"
          mt="7"
          wrap="wrap"
          gap="6"
        >
          <ScaleIn delay={0.4}>
            <CardFeature
              icon={<MdGraphicEq />}
              iconColor={"rgb(55,174,163)"}
              bgIconColor={"rgb(232,245,244)"}
              titleFeature={"Relatórios Inteligentes"}
              subTitleFeature={
                "Análises detalhadas e insights sobre seu estoque farmacêutico"
              }
            />
          </ScaleIn>

          <FlipIn delay={0.5}>
            <CardFeature
              icon={<FaShieldAlt />}
              iconColor={"rgb(28,98,254)"}
              bgIconColor={"rgb(232,240,255)"}
              titleFeature={"Conformidade ANVISA"}
              subTitleFeature={
                "Sistema adequado às normas e regulamentações vigentes"
              }
            />
          </FlipIn>

          <FloatUp delay={0.6}>
            <CardFeature
              icon={<IoIosNotificationsOutline />}
              iconColor={"rgb(55,174,163)"}
              bgIconColor={"rgb(232,245,244)"}
              titleFeature={"Notificações"}
              subTitleFeature={
                "Alertas personalizados para eventos críticos do seu estoque"
              }
            />
          </FloatUp>
        </Flex>
      </Flex>
    </>
  );
}
