import { View, Text, Pressable, ActivityIndicator } from "react-native";
import React from "react";
import { CustomButtonProps } from "@/types";
import Feather from "@expo/vector-icons/Feather";

export default function CustomButton({
  title,
  IconLeft,
  IconRight,
  iconColor,
  isLoading,
  onPress,
  className,
}: CustomButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`p-5 mb-5 flex-row items-center justify-center ${className}`}
    >
      {IconLeft && <Feather name={IconLeft} color={iconColor} />}
      {isLoading ? (
        <ActivityIndicator size={"large"} color={"#FCFCFC"} />
      ) : (
        <Text className={`text-2xl font-semibold text-white `}>{title}</Text>
      )}
      {IconRight && <Feather name={IconRight} color={iconColor} />}
    </Pressable>
  );
}
