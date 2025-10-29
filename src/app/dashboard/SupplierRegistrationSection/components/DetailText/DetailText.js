"use client";

import { Flex, Text } from "@chakra-ui/react";

export default function DetailText({
  title,
  titleColor,
  detailText,
  optionalField,
}) {
  return (
    <Flex>
      <Text color={titleColor} fontWeight={"bold"} mr={2}>
        {title}
      </Text>
      <Text
        color={
          optionalField
            ? detailText === ""
              ? "yellow.500"
              : "green.500"
            : detailText === ""
            ? "red.500"
            : "green.500"
        }
      >
        {optionalField
          ? detailText === ""
            ? "Campo opcional não preenchido"
            : detailText
          : detailText === ""
          ? "Campo obrigatório não preenchido"
          : detailText}
      </Text>
    </Flex>
  );
}
