"use client";

export default function ChooseControl() {
  const [activeTab, setActiveTab] = useState("visaoGeral");

  const handleTabClick = (choose) => {
    setActiveTab(choose);
  };

  const renderControl = () => {
    switch (activeTab) {
      case "visaoGeral":
        return <Text>Visão Geral</Text>;
      case "entrada":
        return <Text>Entrada</Text>;
      case "saida":
        return <Text>Saída</Text>;
      case "inventario":
        return <Text>Inventário</Text>;
      default:
        return <Text>Default</Text>;
    }
  };

  return (
    <Flex>
      <Flex mb="6" justifyContent="space-around">
        <Button onClick={() => handleTabClick("visaoGeral")}>
          Visão Geral
        </Button>
        <Button onClick={() => handleTabClick("entrada")}>Entrada</Button>
        <Button onClick={() => handleTabClick("saida")}>Saída</Button>
        <Button onClick={() => handleTabClick("inventario")}>Inventário</Button>
      </Flex>
      {renderControl()}
    </Flex>
  );
}
