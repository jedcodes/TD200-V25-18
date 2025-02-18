import { InputFieldProps } from "@/types";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import { heightPercentageToDP as hp } from "smh-react-native-responsive-screen";
import Feather from "@expo/vector-icons/Feather";

export default function TextInputField({
  label,
  icon,
  iconRight,
  secureTextEntry = false,
  labelStyle,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...props
}: InputFieldProps) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View
        style={{ height: hp(6), borderCurve: "continuous", borderWidth: 0.6 }}
        className={`flex-row bg-neutral-200 rounded-2xl px-4 items-center gap-4 border-neutral-400 ${containerStyle}`}
      >
        {icon && <Feather name={icon} size={hp(2.7)} color={"gray"} />}
        <TextInput
          placeholderTextColor={"gray"}
          autoCapitalize="none"
          style={{ fontSize: hp(2) }}
          className={`flex-1 font-interSemiBold text-neutral-600 ${inputStyle}`}
          secureTextEntry={secureTextEntry}
          {...props}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
