import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

const SignUpSchema = yup.object({
  name: yup.string().required("Informe seu nome."),
  email: yup.string().required("Informe seu email.").email("Email inválido."),
  password: yup
    .string()
    .required("Informe a senha.")
    .min(8, "A senha deve ter no mínimo 8 dígitos."),
  password_confirm: yup
    .string()
    .required("Confirme sua senha.")
    .oneOf([yup.ref("password")], "As senhas não confere."),
});

type FormeDataType = yup.InferType<typeof SignUpSchema>;

export function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormeDataType>({
    resolver: yupResolver(SignUpSchema),
  });

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSignUp(data: FormeDataType) {
    console.log(data);
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={16}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          resizeMethod="auto"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />
          <Text color={"gray.100"} fontSize={"sm"}>
            Treine sua mente e seu corpo
          </Text>
        </Center>

        <Center>
          <Heading
            color={"gray.100"}
            mb={6}
            fontSize={"xl"}
            fontFamily={"heading"}
          >
            Crie sua conta
          </Heading>

          <Controller
            control={control}
            name="name"
            render={(event) => (
              <Input
                placeholder="Nome"
                onChangeText={event.field.onChange}
                value={event.field.value}
                errorMessage={errors.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={(event) => (
              <Input
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={event.field.onChange}
                value={event.field.value}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={(event) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                onChangeText={event.field.onChange}
                value={event.field.value}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password_confirm"
            render={(event) => (
              <Input
                placeholder="Confirmar senha"
                secureTextEntry
                onChangeText={event.field.onChange}
                value={event.field.value}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType="send"
                errorMessage={errors.name?.message}
              />
            )}
          />

          <Button
            title="Criar e acessar"
            onPress={handleSubmit(handleSignUp)}
          />

          <Button
            title="Voltar para login"
            variant={"outline"}
            mt={12}
            onPress={handleGoBack}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
