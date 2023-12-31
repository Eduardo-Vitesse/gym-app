import { HStack, Heading, VStack, Text } from "native-base";

export function HistoryCard() {
  return (
    <HStack
      w={"full"}
      px={5}
      py={4}
      mb={3}
      bgColor={"gray.600"}
      rounded={"md"}
      alignContent={"center"}
      justifyContent={"space-between"}
    >
      <VStack mr={5} flex={1}>
        <Heading
          color={"white"}
          fontSize={"md"}
          fontFamily={"heading"}
          textTransform={"capitalize"}
          numberOfLines={1}
        >
          Costas
        </Heading>
        <Text color={"gray.100"} fontSize={"lg"} numberOfLines={1}>
          Puxada frontal
        </Text>
      </VStack>
      <Text color={"gray.300"} fontSize={"md"}>
        08:56
      </Text>
    </HStack>
  );
}
