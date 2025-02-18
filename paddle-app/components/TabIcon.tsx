import { View, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
export default function TabIcon({
  focused,
  icon,
}: {
  focused: boolean;
  icon: any;
}) {
  return (
    <View className={`items-center justify-center gap-2`}>
      <Feather name={icon} size={22} color={focused ? "#7AB2D3" : "black"} />
    </View>
  );
}
