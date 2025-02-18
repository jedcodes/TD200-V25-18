import ScreenWrapper from "@/components/ScreenWrapper";
import SignInButton from "@/features/welcome/components/sign-in-btn";
import { useRouter } from "expo-router";
import { View, Text, Pressable, Image } from "react-native";
import { heightPercentageToDP as hp } from "smh-react-native-responsive-screen";

export default function welcome() {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <View className="px-4 ">
        <View className="flex-row w-full justify-end">
          <SignInButton />
        </View>
        <Image
          source={require("@/assets/images/welcome.png")}
          resizeMode="contain"
          style={{ width: "100%", height: hp(40) }}
        />
      </View>
      <View className="pb-12 mx-4 justify-end flex-1">
        <Pressable
          onPress={() => router.push("/(authenticated)/(tabs)/dashboard")}
          style={{ height: hp(5) }}
          className="flex-row w-full justify-center items-center bg-primary-light-blue rounded-full"
        >
          <Text style={{ fontSize: hp(2.5) }} className="font-bold">
            Get started
          </Text>
        </Pressable>
      </View>
    </ScreenWrapper>
  );
}
