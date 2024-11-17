import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const PendingScreen = () => (
  <View style={styles.container}>
    <ScrollView>
      <TouchableOpacity onPress={()=>router.push("/parceldetails")} style={styles.card}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "gray" }}>Tracking Code: 1674932</Text>
          <Text>19 Nov 2024</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 5,
          }}
        >
          <Text>MD Safiul Alam</Text>
          <Text>1 KG</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 12 }}>Lalbug, Dhaka</Text>
          <Text style={{ color: "#3EB94A" }}>Processing</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  </View>
);

const ReceivedScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Received Orders</Text>
  </View>
);

export default function Pickup() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "pending", title: "Pending" },
    { key: "received", title: "Received" },
  ]);

  const renderScene = SceneMap({
    pending: PendingScreen,
    received: ReceivedScreen,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: Dimensions.get("window").width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: "gray" }} // Green indicator
          style={{ backgroundColor: "#091242", height: 35 }} // Smaller height for tab bar
          labelStyle={{ color: "#fff", fontWeight: "bold", fontSize: 12 }} // Smaller font size
          tabStyle={{ height: 35, paddingVertical: 0 }} // Adjust tab height and padding
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#224B26",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 5,
    height: 80,
    marginTop: 10,
  },
});
