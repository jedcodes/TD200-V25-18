import CustomButton from "@/components/CustomButton";
import ScrollWrapper from "@/components/ScrollWrapper";
import TextInputField from "@/components/TextInputField";
import { useAuth } from "@/providers/auth-provider";
import { Link, useRouter } from "expo-router";
import { useRef } from "react";
import { View, Text } from "react-native";
import { heightPercentageToDP as hp } from "smh-react-native-responsive-screen";

export default function SignIn() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const router = useRouter();
  const { signIn } = useAuth();

  async function handleSignIn() {
    const { success } = await signIn(emailRef.current, passwordRef.current);
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
          placeholder="Enter mail"
          icon={"mail"}
          onChangeText={(value) => (emailRef.current = value)}
        />
        <TextInputField
          placeholder="Enter password"
          icon={"lock"}
          onChangeText={(value) => (passwordRef.current = value)}
        />
        <CustomButton
          onPress={handleSignIn}
          title="Sign In"
          className="bg-primary-blue rounded-full"
        />
        <View className="flex-row w-full justify-end">
          <Link href={"/(public)/sign-up"}>
            <Text>Dont have an account? Register.</Text>
          </Link>
        </View>
      </View>
    </ScrollWrapper>
  );
}
