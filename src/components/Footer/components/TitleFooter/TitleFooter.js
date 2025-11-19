"use client";
import { Flex, Image, Text } from "@chakra-ui/react";

export default function TitleFooter({ textTitle }) {
  return (
    <>
      <Flex
        justifyContent={"start"}
        alignItems={"center"}
        textAlign={"center"}
        h={"25%"}
        pl={"0"}
      >
        <Text
          display="flex"
          alignItems="initial"
          fontSize="lg"
          fontWeight="bold"
        >
          {textTitle}
        </Text>{" "}
      </Flex>
    </>
  );
}
