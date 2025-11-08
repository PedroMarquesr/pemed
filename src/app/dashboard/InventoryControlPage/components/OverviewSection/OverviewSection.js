"use client";
import { Flex, Text } from "@chakra-ui/react";
import CardOverview from "./components/CardOverview/CardOverview";

export default function OverviewSection() {
  return (
    <Flex flexDirection="column" borderRadius="md" my={5} w="100%">
      <Flex justifyContent={"space-between"}>
        <CardOverview
          titleCard={"Total de itens ativos"}
          icon="totalActiveItems"
        />
        <CardOverview
          cardColor="#E45C20"
          titleCard={"Estoque Baixo"}
          icon={"lowStock"}
        />
        <CardOverview
          cardColor="#BD2E40"
          titleCard={"Estoque Crítico"}
          icon={"criticalStock"}
        />
        <CardOverview
          cardColor="#D68D27"
          titleCard={"Vencendo em 12 meses"}
          icon={"dueDateInMonths"}
        />
      </Flex>
    </Flex>
  );
}
