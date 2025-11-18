"use client";

import { Flex } from "@chakra-ui/react";

export default function ContainerForm({
  gap = 4,
  index,
  mr,
  children,
  ...props
}) {
  return (
    <Flex
      w="100%"
      key={index}
      alignItems="center"
      justifyContent="flex-start"
      pl={4}
      pr={4}
      mr={mr}
      gap={gap}
      py={2}
      {...props}
    >
      {children}
    </Flex>
  );
}
