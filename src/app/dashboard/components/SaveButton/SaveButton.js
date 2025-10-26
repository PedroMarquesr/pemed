"use client";

import { Button, Flex } from "@chakra-ui/react";

export default function SaveButton({ onclick }) {
  return (
    <Flex textAlign={"center"} justifyContent={"center"}>
      <Button
        p={"6"}
        mr={"2"}
        w={"15%"}
        bg={"#181818"}
        fontWeight={"semibold"}
        fontSize={"md"}
        boxShadow={"md"}
        onClick={onclick}
        color={"white"}
        _hover={{
          color: "white",
          bg: "rgba(19,92,254,255)",
          // transform: "translateY(-3px)",
          // transition: "transform 0.2s ease",
        }}
      >
        Salvar{" "}
      </Button>
    </Flex>
  );
}
