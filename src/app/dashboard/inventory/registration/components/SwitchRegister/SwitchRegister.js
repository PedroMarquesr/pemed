"use client";

import { Switch, Field, Flex } from "@chakra-ui/react";

export default function SwitchRegister({ checked, onCheckedChange, label }) {
  return (
    <>
      <Field.Root>
        <Flex alignItems="center" gap={4} justifyContent={"center"}>
          <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
            {label}
          </Field.Label>
          <Switch.Root
            checked={checked}
            onCheckedChange={onCheckedChange}
            colorPalette="blue"
            size="lg"
          >
            <Switch.HiddenInput />
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
          </Switch.Root>
        </Flex>
      </Field.Root>
    </>
  );
}
