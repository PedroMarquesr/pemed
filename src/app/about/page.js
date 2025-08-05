"use client";
import { Image, Box, Text, Heading, Flex } from "@chakra-ui/react";

export default function Page() {
  return (
    <Box px={6} py={10}  mx="auto" bg={"#a7ceda"} width={"100vw"} height={"100vh"}>
      <Flex 
        direction={{ base: "column", md: "row" }} 
        gap={8} 
        align="stretch" 
      >
       
        <Box 
          flex={{ md: 1 }} 
          minW="0"
                    pl={"20"}

        >
          <Image
            src="/aboutImage.jpg"
            alt="Sobre a Pemed"
            width="100%"
            height="75%"
            objectFit="fill"
            borderRadius="xl"
            
            

          />
        </Box>

        <Flex 
          flex={{ md: 1 }} 
          direction="column"
          alignContent="space-evenly"
          color={"black"}
          height={"469.52"}
          pr={"20"}
            border={"1px solid black"}
          textAlign={"justify"}

>
          <Heading as="h2" size="xl" mb={4}>
            Pemed
          </Heading>
      <Text fontSize="lg" mb={4}>
        A <strong>Pemed</strong> é uma plataforma digital desenvolvida para
        otimizar a gestão de estoque de medicamentos em clínicas, hospitais e
        farmácias. Nossa missão é oferecer uma solução prática, segura e
        eficiente para o controle de insumos farmacêuticos, reduzindo perdas,
        prevenindo falhas e promovendo um atendimento mais ágil.
      </Text>
      <Text fontSize="lg" mb={4}>
        Com foco em usabilidade e automação, a Pemed permite que profissionais
        da saúde acompanhem o estoque em tempo real, recebam alertas de validade
        e reposição, e gerem relatórios detalhados para tomadas de decisão.
      </Text>
      <Text fontSize="lg">
        Mais do que uma ferramenta, a Pemed é um compromisso com a excelência na
        gestão de medicamentos e com a saúde das pessoas.
      </Text>
      </Flex>
      </Flex>
    </Box>
  );
}
