import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepetitionsSvg from "@assets/repetitions.svg";

import { Button } from "@components/Button";

export function Exercise() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <VStack px={8} pt={12} bg={"gray.600"}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name="arrow-left" color={"green.500"} size={6} />
        </TouchableOpacity>
        <HStack
          alignItems={"center"}
          justifyContent={"space-between"}
          mt={4}
          mb={8}
        >
          <Heading color={"gray.100"} fontSize={"lg"} flexShrink={1}>
            Puxada frontal
          </Heading>
          <HStack alignItems={"center"}>
            <BodySvg />
            <Text color={"gray.200"} ml={1} textTransform={"capitalize"}>
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>
      <ScrollView>
        <VStack p={8}>
          <Image
            source={{
              uri: "https://imgs.search.brave.com/eqZ7k4UmvoatLZQAZ5fV_xuLohTCRSTJvDrR4PFKcLg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/YXRsZXRpcy5jb20u/YnIvYXRsZXRpcy13/ZWJzaXRlL2Jhc2Uv/YTJmL2RiZS8yNWIv/cGVnYWRhLXN1cGlu/YWRhLmpwZw",
            }}
            alt=""
            w={"full"}
            h={80}
            mb={3}
            resizeMode={"cover"}
            rounded={"lg"}
          />

          <Box bgColor={"gray.600"} rounded={"md"} pb={4} px={4}>
            <HStack
              alignItems={"center"}
              justifyContent={"space-around"}
              mb={6}
              mt={5}
            >
              <HStack>
                <SeriesSvg />
                <Text color={"gray.200"} ml={2}>
                  3 Series
                </Text>
              </HStack>
              <HStack>
                <RepetitionsSvg />
                <Text color={"gray.200"} ml={2}>
                  12 Repetições
                </Text>
              </HStack>
            </HStack>
            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
