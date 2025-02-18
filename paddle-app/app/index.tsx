import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Text } from "react-native";
import { heightPercentageToDP as hp } from "smh-react-native-responsive-screen";

export default function Welcome() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace("/(public)/welcome");
    }, 2000);
  }, []);
  return (
    <View className="flex-1 justify-center items-center">
      <Text style={{ fontSize: hp(4) }} className="font-semibold">
        Paddle For Ocean
      </Text>
    </View>
  );
}
