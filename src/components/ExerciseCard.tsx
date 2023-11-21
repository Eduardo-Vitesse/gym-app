import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { HStack, Heading, Image, Text, VStack, Icon } from "native-base";
import { Entypo } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {};

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bgColor={"gray.500"}
        alignItems={"center"}
        p={2}
        pr={4}
        rounded={"md"}
        mb={3}
      >
        <Image
          source={{
            uri: "https://imgs.search.brave.com/eqZ7k4UmvoatLZQAZ5fV_xuLohTCRSTJvDrR4PFKcLg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/YXRsZXRpcy5jb20u/YnIvYXRsZXRpcy13/ZWJzaXRlL2Jhc2Uv/YTJmL2RiZS8yNWIv/cGVnYWRhLXN1cGlu/YWRhLmpwZw",
          }}
          alt=""
          w={16}
          h={16}
          rounded={"md"}
          mr={4}
          resizeMode={"cover"}
        />
        <VStack flex={1}>
          <Heading fontSize={"lg"} color={"white"}>
            Remada unilateral
          </Heading>
          <Text fontSize={"sm"} color={"gray.200"} mt={1} numberOfLines={2}>
            3 series x 12 repetições
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color={"gray.300"} />
      </HStack>
    </TouchableOpacity>
  );
}