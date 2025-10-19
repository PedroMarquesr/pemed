"use client";
import { Flex, Text, Box, Button } from "@chakra-ui/react";
import { use, useState, useEffect } from "react";

import OverviewSection from "../OverviewSection/OverviewSection.js";

export default function ChooseControl() {
  const [activeTab, setActiveTab] = useState("visaoGeral");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderControl = () => {
    switch (activeTab) {
      case "visaoGeral":
        return <OverviewSection />;
      case "entrada":
        return <Text>Entrada</Text>;
      case "saida":
        return <Text>Saída</Text>;
      case "inventario":
        return <Text>Inventário</Text>;
      default:
        return <Text>Default</Text>;
    }
  };

  return (
    <Flex flexDirection={"column"}>
      <Flex mb="6" justifyContent="space-around" border={"1px solid red"}>
        <Button
          h={"6%"}
          bg={"#F5F5F5"}
          flex={"1"}
          border={"1px solid red"}
          onClick={() => handleTabClick("visaoGeral")}
        >
          Visão Geral
        </Button>
        <Button
          h={"6%"}
          bg={"#F5F5F5"}
          flex={"1"}
          onClick={() => handleTabClick("entrada")}
        >
          Entrada
        </Button>
        <Button
          h={"6%"}
          bg={"#F5F5F5"}
          flex={"1"}
          onClick={() => handleTabClick("saida")}
        >
          Saída
        </Button>
        <Button
          h={"6%"}
          bg={"#F5F5F5"}
          flex={"1"}
          onClick={() => handleTabClick("inventario")}
        >
          Inventário
        </Button>
      </Flex>
      {renderControl()}
    </Flex>
  );
}
