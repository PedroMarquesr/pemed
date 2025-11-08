"use client";
import { Flex, Text, Separator } from "@chakra-ui/react";

export default function TitleGroupLabel({ title, subTitle }) {
  return (
    <>
      <Flex flexDirection={"column"} p={"4"} pl={"10"}>
        <Flex alignItems={"center"}>
          <Text fontWeight={"semibold"} fontSize={"lg"} color={"gray.600"}>
            {title}
          </Text>
        </Flex>
        <Flex>
          <Text color={"#52575c"}>{subTitle}</Text>
        </Flex>
        <Separator size="md" borderColor="gray.200" mt={2} />
      </Flex>
    </>
  );
}
