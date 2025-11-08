"use client";

import { Button, Text } from "@chakra-ui/react";

export default function TagChooseControl({ choose, active, onClick }) {
  return (
    <>
      <Button
        h={"5vh"}
        bg={active ? "white" : "#dddadaff"}
        flex={"1"}
        onClick={onClick}
        border={"2px solid #dddadaff"}
      >
        <Text fontSize={"xl"} fontWeight={"-moz-initial"}>
          {choose}
        </Text>
      </Button>
    </>
  );
}
