import { useFonts } from "expo-font";
import { Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";

import { AuthProvider, useAuth } from "@/providers/auth-provider";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function InitialLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }

    // Her bruker jeg segments for å hente ut hvilken gruppe brukeren er i. Så bruker jeg inAuthGroup for å sjekke om brukeren er i gruppen authenticated. Hvis brukeren er autentisert og ikke i gruppen authenticated, så sender jeg brukeren til dashboard. Hvis brukeren ikke er autentisert og er i gruppen authenticated, så sender jeg brukeren til sign-in. Dette sørger for at brukeren blir sendt til riktig side basert på om de er autentisert eller ikke.
    const inAuthGroup = segments[0] === "(authenticated)";
    if (isAuthenticated && !inAuthGroup) {
      router.replace("/(authenticated)/(tabs)/dashboard");
    } else if (!isAuthenticated && inAuthGroup) {
      router.replace("/(public)/sign-in");
    }
  }, [loaded, isAuthenticated]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(public)" options={{ headerShown: false }} />
      <Stack.Screen name="(authenticated)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <InitialLayout />
    </AuthProvider>
  );
}
