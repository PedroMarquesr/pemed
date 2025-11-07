"use client";

import { Flex, Alert, Text, CloseButton } from "@chakra-ui/react";

export default function AlertDefault({ message, alertTitle, alertInfo }) {
  return (
    <>
      <Alert.Root status={alertInfo} title={alertTitle}>
        <Alert.Indicator />
        <Alert.Title>{message}</Alert.Title>
        <CloseButton pos="relative" top="-2" insetEnd="-2" />
      </Alert.Root>
    </>
  );
}
