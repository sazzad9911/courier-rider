import { Redirect, Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

<<<<<<< Updated upstream
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
=======
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useAuth } from "@/providers/AuthContext";
>>>>>>> Stashed changes

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { user } = useAuth();

<<<<<<< Updated upstream
  //return <Redirect href={"/login"}/>
=======
  if (!user) {
    return <Redirect href={"/login"} />;
  }
>>>>>>> Stashed changes

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
<<<<<<< Updated upstream
        tabBarStyle: {
          backgroundColor: '#091242',
          borderTopEndRadius: 8,
          borderTopStartRadius: 8,
          paddingBottom: 5,
          paddingTop: 5,
          height: 55, // Adjusted height for better alignment
        },
        tabBarInactiveTintColor: '#fff',
        tabBarItemStyle: {
          justifyContent: 'flex-start', // Align content to the top of the tab item
          alignItems: 'center', // Center horizontally
        },
        tabBarIconStyle: {
          //marginBottom: -5, // Move icon upwards
        },
        tabBarLabelStyle: {
          fontSize: 11, // Adjust font size as needed
          paddingTop: 0, // Remove padding above the label
        },
=======
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
>>>>>>> Stashed changes
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
<<<<<<< Updated upstream
          title: 'Dashboard',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="dashboard" color={color} size={24} />
=======
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
>>>>>>> Stashed changes
          ),
        }}
      />
      <Tabs.Screen
        name="pickup"
        options={{
<<<<<<< Updated upstream
          title: 'Pick Up',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="checkcircle" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="delivery"
        options={{
          title: 'Delivery',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="truck-delivery-outline"
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="myarea"
        options={{
          title: 'My Area',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="google-maps" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="fraudmark"
        options={{
          title: 'Fraud Mark',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="checkcircle" size={24} color={color} />
=======
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
>>>>>>> Stashed changes
          ),
        }}
      />
    </Tabs>
  );
}
