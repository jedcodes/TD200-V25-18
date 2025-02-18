import { ReactNode } from "react";
import { View, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ScrollWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollWrapper({
  children,
  className,
}: ScrollWrapperProps) {
  const { top } = useSafeAreaInsets();
  return (
    <ScrollView
      style={{ paddingTop: top }}
      className={`flex-1 px-4 ${className}`}
    >
      {children}
    </ScrollView>
  );
}
