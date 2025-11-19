"use client";

import { Flex, Text, List, Link, Separator, Image } from "@chakra-ui/react";
import ItemFooter from "./components/ItemFooter/ItemFooter";
import TitleFooter from "./components/TitleFooter/TitleFooter";

export default function Footer() {
  return (
    <>
      <Flex
        mt={"2%"}
        paddingX="10%"
        paddingY="2%"
        bgColor={"rgb(17,24,39)"}
        flexDirection={"column"}
        width={"100%"}
        gap={"3"}
      >
        <Flex mb={"10"} gapX={"3"}>
          <Flex flex={"1"} pr={"3"}>
            <Flex flex={"1"}></Flex>

            <List.Root unstyled>
              <Flex
                justifyContent={"initial"}
                alignItems={"center"}
                gap={"2"}
                h={"35%"}
                pb={"2"}
                mb={"3"}
              >
                <Image src="/logo.png" alt="Logo Pemed" width={"12"} />
                <Text
                  display="flex"
                  alignItems="center"
                  fontSize="lg"
                  fontWeight="bold"
                  margin={0}
                >
                  PEMED
                </Text>
              </Flex>
              <ItemFooter
                itemText={
                  "Gestão inteligente de medicamentos e estoque farmacêutico"
                }
              />
            </List.Root>
          </Flex>
          <Flex flex={"1"}></Flex>

          <Flex flex={"1"} pr={"3"}>
            <List.Root unstyled>
              <TitleFooter textTitle={"Produto"} />
              <ItemFooter itemLink={"Recursos"} href={"#top"} />
              <ItemFooter itemLink={"Preços"} />
              <ItemFooter itemLink={"Demonstração"} />
            </List.Root>
          </Flex>
          <Flex flex={"1"}></Flex>

          <Flex flex={"1"} pr={"3"}>
            <List.Root unstyled>
              <TitleFooter textTitle={"Empresa"} />
              <ItemFooter itemLink={"Sobre"} href="/#recursos" />
              <ItemFooter itemLink={"Contato"} />
              <ItemFooter itemLink={"Blog"} />
            </List.Root>
          </Flex>
          <Flex flex={"1"}></Flex>

          <Flex flex={"1"}>
            <List.Root unstyled>
              <TitleFooter textTitle={"Regulamentações"} />
              <ItemFooter
                itemLink={"ANVISA"}
                isBlank={true}
                href={"https://consultas.anvisa.gov.br/#/"}
              />
              <ItemFooter
                itemLink={"CMED"}
                isBlank={true}
                href={
                  "https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos"
                }
              />
            </List.Root>
          </Flex>
        </Flex>
        <Separator />
        <Flex justifyContent={"center"} pt={"1%"}>
          <Text>© 2025 PEMED. Todos os direitos reservados.</Text>
        </Flex>
      </Flex>
    </>
  );
}
