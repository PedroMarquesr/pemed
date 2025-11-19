"use client";

import { Flex, Text, Image, List, Box } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

export default function WhyChoosePemed() {
  return (
    <>
      <Flex justifyContent={"space-between"} mt={"8"}>
        <Flex flexDirection={"column"} justifyContent={"space-evenly"}>
          {" "}
          <Text textStyle={"4xl"} color={"black"} fontWeight={"bolder"}>
            Por que escolher o{" "}
            <Text as="span" color={"rgb(14,106,226)"}>
              PEMED?
            </Text>{" "}
          </Text>
          <Text
            color={"rgb(95,105,116)"}
            textStyle={"xl"}
            textAlign={"justify"}
            pr={"3"}
          >
            Nossa plataforma foi desenvolvida pensando nas necessidades reais de
            farmácias e distribuidoras
          </Text>
          <Flex flexDirection={"column"}>
            <List.Root color={"rgb(95,105,116)"} unstyled>
              <List.Item>
                <Flex alignContent={"center"} alignItems={"center"}>
                  <Text pr={"1"}>
                    <FaCheckCircle />
                  </Text>
                  <Text>Redução de perdas por vencimento</Text>{" "}
                </Flex>
              </List.Item>
              <List.Item>
                <Flex alignContent={"center"} alignItems={"center"}>
                  <Text pr={"1"}>
                    <FaCheckCircle />
                  </Text>
                  <Text>Otimização do espaço físico</Text>
                </Flex>
              </List.Item>
              <List.Item>
                <Flex alignContent={"center"} alignItems={"center"}>
                  <Text pr={"1"}>
                    <FaCheckCircle />
                  </Text>
                  <Text>Decisões baseadas em dados</Text>
                </Flex>
              </List.Item>
              <List.Item>
                <Flex alignContent={"center"} alignItems={"center"}>
                  <Text pr={"1"}>
                    <FaCheckCircle />
                  </Text>
                  <Text> Conformidade regulatória garantida</Text>
                </Flex>
              </List.Item>
              <List.Item>
                <Flex alignContent={"center"} alignItems={"center"}>
                  <Text pr={"1"}>
                    <FaCheckCircle />
                  </Text>

                  <Text> Aumento da eficiência operacional</Text>
                </Flex>
              </List.Item>
            </List.Root>
          </Flex>
        </Flex>
        <Box position="relative" width="70%" height="auto">
          <Image
            src="./pemed-benefits-image.jpeg"
            bgColor={"red"}
            alt="pills"
            width={"70%"}
            borderRadius={"md"}
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            width="70%"
            height="100%"
            bgColor="blue.500"
            opacity="0.3"
            zIndex="1"
          />
        </Box>
      </Flex>
    </>
  );
}
