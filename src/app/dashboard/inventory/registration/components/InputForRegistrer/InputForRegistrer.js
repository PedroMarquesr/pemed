"use client";

import { Box, Flex, Text, Field, Input } from "@chakra-ui/react";

export default function InputForRegistrer({
  label,
  value,
  onChange,
  mr,
  placeholder,
}) {
  return (
    <>
      <Field.Root w={"25%"} mr={mr}>
        <Field.Label fontSize="sm" fontWeight="bold" color="gray.700" mb={1}>
          {label}
        </Field.Label>
        <Input
          value={value}
          onChange={onChange}
          width="100%"
          boxShadow="md"
          bg="white"
          mb={5}
          color="black"
          borderRadius="md"
          border="1px solid #2b4d52ff"
          _hover={{ borderColor: "#5d8288c4" }}
          placeholder={placeholder}
        />
      </Field.Root>
    </>
  );
}
