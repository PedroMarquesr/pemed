"use client";
import React from "react";
import { Box, Popover, Portal, Image, Field, Flex } from "@chakra-ui/react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import InputForRegistrer from "../InputForRegistrer/InputForRegistrer";

export default function InputWithInfo({
  label,
  value,
  onChange,
  placeholder = "",
  imageSrc,
  popoverWidth = "50vw",
}) {
  return (
    <Field.Root w="100%">
      <Flex alignItems="center" mb={1}>
        <Field.Label fontSize="sm" fontWeight="bold" color="gray.700">
          {label}
        </Field.Label>
        <Popover.Root positioning={{ placement: "right" }} size={"xs"}>
          <Popover.Trigger asChild>
            <Box
              pl={1}
              as="span"
              cursor="pointer"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              color="gray.500"
              _hover={{ color: "blue.500" }}
            >
              <BsFillInfoCircleFill size={16} />
            </Box>
          </Popover.Trigger>
          <Portal>
            <Popover.Positioner>
              <Popover.Content w={popoverWidth} maxW="90vw">
                <Popover.Arrow />
                <Popover.Body w={popoverWidth}>
                  <Image
                    src={imageSrc}
                    w="100%"
                    objectFit="contain"
                    borderRadius="md"
                  />
                </Popover.Body>
              </Popover.Content>
            </Popover.Positioner>
          </Portal>
        </Popover.Root>
      </Flex>
      <InputForRegistrer
        label=""
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Field.Root>
  );
}
