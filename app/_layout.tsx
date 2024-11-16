import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import Header from "../components/header";
import { useColorScheme } from "@/hooks/useColorScheme";
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isReady, setIsReady] = useState(false);
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      if (loaded) {
        await SplashScreen.hideAsync();
        setIsReady(true);
      }
    }
    prepare();
  }, [loaded]);

  if (!isReady) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style="light"  />

      <Stack initialRouteName="login">
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="forgetpassword"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="verifyotp"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="newpassword"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="contactsupport"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="(tabs)" options={{ header: () => <Header /> }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      
    </ThemeProvider>
  );
}
