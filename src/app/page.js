"use client";

import { Button } from "@chakra-ui/react";
import { Group } from "@chakra-ui/react";
import { Alert } from "@chakra-ui/react";

export default function Home() {
  return (
    <div style={{ padding: "10px 50px" }}>
      <Button size="xs" colorScheme="blue">
        Clique !
      </Button>
      <Group colorScheme={"blue"}>
        <div
          style={{ backgroundColor: "blue", width: "100px", height: "100px" }}
        />
        <div
          style={{ backgroundColor: "blue", width: "100px", height: "100px" }}
        />
      </Group>
      <Alert.Root>
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>Erro</Alert.Title>
          <Alert.Description> Azul</Alert.Description>
        </Alert.Content>
      </Alert.Root>
    </div>
  );
}
