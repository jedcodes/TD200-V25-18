import { User } from "firebase/auth";
import { PressableProps, TextInputProps } from "react-native";

export type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isloading: boolean;
  signIn: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; message?: string }>;
  signUp: (
    email: string,
    password: string,
    name: string
  ) => Promise<{ success: boolean; message?: string }>;
  signOut: () => void;
};

export interface InputFieldProps extends TextInputProps {
  label?: string;
  icon?: any;
  iconRight?: any;
  secureTextEntry?: boolean;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
  className?: string;
}

export interface CustomButtonProps extends PressableProps {
  title: string;
  IconLeft?: any;
  IconRight?: any;
  iconColor?: string;
  className?: string;
  isLoading?: boolean;
}
