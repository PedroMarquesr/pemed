"use client";

import { Flex } from "@chakra-ui/react";

export default function ContainerForm({ gap, index, mr, children, ...props }) {
  return (
    <>
      <Flex
        w={"100%"}
        key={index}
        alignItems="center"
        justifyContent="flex-start"
        pl={4}
        mr={mr}
        gap={gap}
      >
        {children}
      </Flex>
    </>
  );
}
