"use client";
import { Input, Field } from "@chakra-ui/react";

export default function InputEntry({
  labelName,
  placeholder,
  inputType,
  width,
  display,
}) {
  return (
    <Field.Root flex="1" p="10">
      <Field.Label
        fontSize="sm"
        fontWeight="bold"
        color="gray.700"
        display={display}
      >
        {labelName}{" "}
      </Field.Label>
      <Input
        placeholder={placeholder}
        w={width}
        maxLength={11}
        type={inputType}
        bg="white"
        boxShadow="md"
        border="1px solid #2b4d52ff"
        _hover={{ borderColor: "#5d8288c4" }}
        display={display}
      />
    </Field.Root>
  );
}
