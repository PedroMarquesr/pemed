"use client";
import { Input, Field } from "@chakra-ui/react";

export default function DefaultInput({
  labelName,
  placeholder,
  inputType,
  width,
  height,
  display,
  setData,
  maxLength,
  onBlur,
  value,
}) {
  return (
    <Field.Root flex="1" pl="10" pb={"8"} pr={"10"}>
      <Field.Label fontSize="sm" color="gray.700" display={display}>
        {labelName}{" "}
      </Field.Label>
      <Input
        _focus={{ border: "1px solid rgba(19,92,254,255)" }}
        placeholder={placeholder}
        w={width}
        h={height}
        maxLength={maxLength}
        type={inputType}
        bg="white"
        boxShadow="md"
        border="1px solid #2b4d52ff"
        _hover={{ borderColor: "rgba(19,92,254,255)" }}
        display={display}
        onChange={setData}
        onBlur={onBlur}
        value={value}
      />
    </Field.Root>
  );
}
