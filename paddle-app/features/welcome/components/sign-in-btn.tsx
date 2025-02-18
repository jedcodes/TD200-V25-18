import { useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";

export default function SignInButton() {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.push("/(public)/sign-in")}
      className="flex-row justify-center items-center p-4 rounded-full bg-primary-light-blue w-[20%]"
    >
      <Text className="text-black">Sign in</Text>
    </Pressable>
  );
}
