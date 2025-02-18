import { ReactNode } from "react";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ScreenWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function ScreenWrapper({
  children,
  className,
}: ScreenWrapperProps) {
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={{ paddingTop: top }}
      className={`${className} flex-1 bg-white px-4`}
    >
      {children}
    </View>
  );
}
