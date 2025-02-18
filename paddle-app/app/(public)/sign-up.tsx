import CustomButton from "@/components/CustomButton";
import ScrollWrapper from "@/components/ScrollWrapper";
import TextInputField from "@/components/TextInputField";
import { useAuth } from "@/providers/auth-provider";
import { Link, useRouter } from "expo-router";
import React, { useRef } from "react";
import { View, Text, Alert } from "react-native";
import { heightPercentageToDP as hp } from "smh-react-native-responsive-screen";

export default function SignUp() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const { signUp, isloading } = useAuth();
  const router = useRouter();

  async function handleSignUp() {
    console.log(nameRef.current, emailRef.current, passwordRef.current);
    if (!nameRef.current || !emailRef.current || !passwordRef.current) {
      Alert.alert("Sign Up", "Please fill all fields");
    }
    const { success } = await signUp(
      emailRef.current,
      nameRef.current,

      passwordRef.current
    );
    if (success) {
      router.replace("/(authenticated)/(tabs)/dashboard");
    }
  }
  return (
    <ScrollWrapper>
      <View className="my-10">
        <Text
          style={{ fontSize: hp(2) }}
          className="font-interExtraBold tracking-wider text-secondary"
        >
          Paddle for Ocean
        </Text>
        <Text
          style={{ fontSize: hp(3) }}
          className="font-interSemiBold tracking-wider text-primary-blue"
        >
          Welcome Back
        </Text>
      </View>
      <View className="gap-10">
        <TextInputField
          placeholder="Enter name"
          icon={"user"}
          onChangeText={(value) => (nameRef.current = value)}
        />
        <TextInputField
          placeholder="Enter mail"
          icon={"mail"}
          onChangeText={(value) => (emailRef.current = value)}
        />
        <TextInputField
          placeholder="Enter password"
          icon={"lock"}
          onChangeText={(value) => (passwordRef.current = value)}
          secureTextEntry
        />
        <CustomButton
          onPress={handleSignUp}
          isLoading={isloading}
          title="Create account"
          className="bg-primary-blue rounded-full"
        />
        <View className="flex-row w-full justify-end">
          <Link href={"/(public)/sign-in"}>
            <Text>Already have an account? Sign in.</Text>
          </Link>
        </View>
      </View>
    </ScrollWrapper>
  );
}
