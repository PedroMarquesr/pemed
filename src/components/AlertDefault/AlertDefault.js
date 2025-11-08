"use client";

import { Flex, Alert, Text, CloseButton, Stack } from "@chakra-ui/react";

export default function AlertDefault({
  message,
  alertTitle,
  alertInfo,
  size,
  width,
  padding,
  height,
}) {
  return (
    <>
      <Alert.Root
        status={alertInfo}
        variant="solid"
        size={size}
        w={width}
        m={"7px"}
        h={height}
      >
        <Alert.Indicator />
        <Flex flexDirection={"column"}>
          <Alert.Title>{alertTitle}</Alert.Title>
          <Alert.Description>{message}</Alert.Description>
        </Flex>
      </Alert.Root>
    </>
  );
}
