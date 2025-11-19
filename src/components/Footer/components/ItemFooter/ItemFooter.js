"use client";

import { Flex, Text, List, Link } from "@chakra-ui/react";
export default function ItemFooter({
  itemLink,
  href,
  itemText,
  icon,
  isBlank,
}) {
  return (
    <>
      <List.Item>
        <Text
          fontStyle={"italic"}
          textAlign={"justify"}
          fontSize={"small"}
          pr={"5"}
        >
          {itemText}
        </Text>
        <Link
          p={"0"}
          fontSize={"small"}
          href={href}
          target={isBlank ? "_blank" : "_self"}
        >
          {itemLink}
        </Link>
      </List.Item>
    </>
  );
}
