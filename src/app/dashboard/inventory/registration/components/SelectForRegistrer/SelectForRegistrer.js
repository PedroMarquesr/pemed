"use client";

import { NativeSelect, Field, Flex } from "@chakra-ui/react";
import { Children } from "react";

export default function SelectForRegistrer({
  label,
  children,
  value,
  onChange,
  mb,
}) {
  return (
    <>
      <Field.Root>
        <Field.Label fontSize="sm" fontWeight="bold" color="gray.700" mb={2}>
          {label}
        </Field.Label>
        <NativeSelect.Root>
          <NativeSelect.Field
            unstyled
            value={value}
            onChange={onChange}
            width="50%"
            bg="white"
            boxShadow="md"
            color="black"
            borderRadius="md"
            border="1px solid #2b4d52ff"
            px="3"
            py="2"
            mb={mb}
            _hover={{
              borderColor: "#5d8288c4",
            }}
          >
            {children}
          </NativeSelect.Field>
        </NativeSelect.Root>
      </Field.Root>
    </>
  );
}
