"use client";
import { Flex, Text, Box, Button } from "@chakra-ui/react";
import { use, useState, useEffect } from "react";

import OverviewSection from "../OverviewSection/OverviewSection.js";
import TagChooseControl from "@/app/dashboard/InventoryControlPage/components/TagChooseControl/TagChooseControl.js";

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
      <Flex
        borderRadius={"md"}
        boxShadow={"sm"}
        mb="6"
        justifyContent="space-around"
      >
        <TagChooseControl
          active={activeTab === "visaoGeral"}
          choose={"Visão Geral"}
          onClick={() => handleTabClick("visaoGeral")}
        />
        <TagChooseControl
          active={activeTab === "entrada"}
          choose={"Entrada"}
          onClick={() => handleTabClick("entrada")}
        />
        <TagChooseControl
          active={activeTab === "saida"}
          choose={"Saída"}
          onClick={() => handleTabClick("saida")}
        />
        <TagChooseControl
          active={activeTab === "inventario"}
          choose={"Inventário"}
          onClick={() => handleTabClick("inventario")}
        />
      </Flex>
      {renderControl()}
    </Flex>
  );
}
