import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import Header from "../components/header";
import { useColorScheme } from "@/hooks/useColorScheme";
import { LoaderProvider } from "@/providers/LoaderContext";
import { AlertProvider } from "@/providers/AlertContext";
import { AuthProvider } from "@/providers/AuthContext";
import BackHeader from "@/components/BackHeader";
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
      <StatusBar style="light" />
      <AuthProvider>
        <LoaderProvider>
          <AlertProvider>
            <Stack initialRouteName="login">
              <Stack.Screen
                name="(tabs)"
                options={{ header: () => <Header /> }}
              />
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
              <Stack.Screen
                name="profile"
                options={{
                  //headerStyle: { backgroundColor: '#091242' },
                  //headerTintColor: '#fff', // Sets the header text color to white
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="editprofile"
                options={{
                  //headerStyle: { backgroundColor: '#091242' },
                  //headerTintColor: '#fff', // Sets the header text color to white
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="updatepass"
                options={{
                  //headerStyle: { backgroundColor: '#091242' },
                  //headerTintColor: '#fff', // Sets the header text color to white
                  headerShown: false,
                }}
              />
               <Stack.Screen
                name="parceldetails"
                options={{
                  //headerStyle: { backgroundColor: '#091242' },
                  //headerTintColor: '#fff', // Sets the header text color to white
                  header:()=><BackHeader/>
                }}
              />

              <Stack.Screen name="+not-found" />
            </Stack>
          </AlertProvider>
        </LoaderProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
