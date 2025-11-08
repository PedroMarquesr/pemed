"use client";
import { Flex, Text, Separator } from "@chakra-ui/react";

export default function ContextHeader({ title, icon, iconColor, subTitle }) {
  return (
    <>
      <Flex flexDirection={"column"} p={"4"} pl={"10"}>
        <Flex alignItems={"center"}>
          <Text fontSize={"lg"} pr={"1"} color={iconColor}>
            {icon}
          </Text>
          <Text fontWeight={"semibold"} fontSize={"lg"} pl={"3"}>
            {title}
          </Text>
        </Flex>

        <Flex>
          <Text color={"#52575c"}>{subTitle}</Text>
        </Flex>
      </Flex>
      <Separator size="md" borderColor="gray.300" p={"4"} />
    </>
  );
}
