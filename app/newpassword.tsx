import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { postApi } from "@/constants/API";
import { useLoader } from "@/providers/LoaderContext";
import { useAlert } from "@/providers/AlertContext";

export default function NewPassword() {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const { token } = useLocalSearchParams();
  const { showLoader, hideLoader } = useLoader();
  const { showAlert } = useAlert();

  const handleAction = async () => {
    if (password !== rePassword) {
      return showAlert("error", "Password not matched!");
    }
    showLoader();
    try {
      const loginRes = await postApi(
        "/apis/auth/rider/forget-password",
        undefined,
        {
          token: token,
          password: password,
        }
      );
      router.replace({
        pathname: "/login",
      });
      hideLoader();
      showAlert("success", "Password changed");
    } catch (error: any) {
      hideLoader();
      console.log(error.response.data);
      const errorMessage =
        error?.response?.data?.error || "An unexpected error occurred";
      showAlert("error", errorMessage);
    }
  };

  return (
    <ScrollView style={styles.bodyContainer}>
      <TouchableOpacity
        style={{ marginTop: 35 }}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="left" size={20} color="white" />
      </TouchableOpacity>
      <View style={styles.headerContainer}>
        <Image
          source={require("../assets/images/loginimg.png")}
          //style={styles.profileImage}
        />
      </View>
      <Text style={{ fontSize: 20, color: "white" }}>New Password</Text>
      <Text style={{ fontSize: 12, color: "white", marginTop: 10 }}>
        "Sign in to Green Bangla and access a world of sustainable{" "}
      </Text>
      <Text style={{ fontSize: 12, color: "white", marginVertical: 3 }}>
        solutions at your fingertips. Join us in building a greener,{" "}
      </Text>
      <Text style={{ fontSize: 12, color: "white", marginBottom: 10 }}>
        cleaner Bangladesh!"
      </Text>
      <TextInput
        placeholder="New Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true} // This makes the text input secure
        style={styles.input}
      />
      <TextInput
        placeholder="Re-type Password"
        value={rePassword}
        onChangeText={setRePassword}
        secureTextEntry={true} // This makes the text input secure
        style={styles.input}
      />
      {/* Submit Button */}
      <TouchableOpacity
        onPress={handleAction}
        style={styles.submitButton}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      {/* Sign Up Link */}
      <View style={styles.signUpContainer}>
        <Text style={{ color: "white", fontSize: 13 }}>
          Don’t have any account?{" "}
        </Text>
        <TouchableOpacity onPress={()=>router.push("/login")}>
          <Text style={styles.signUpText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    backgroundColor: "#224B26", // Body background color
    flex: 1,
    padding: 7,
  },
  headerContainer: {
    //backgroundColor: '#091242', // Matches body background color
    //paddingVertical: 20,
    marginTop: 20,
    marginBottom: 30,
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    color: "white",
  },
  textStyle: {
    fontSize: 12,
    alignSelf: "center",
    color: "white",
    textAlign: "center",
    marginHorizontal: 10,
    marginTop: 10,
  },
  submitButton: {
    backgroundColor: "#FFB82B",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
    marginTop: 20,
  },
  submitButtonText: {
    color: "#000000",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 12,
    color: "#000",
    height: 40,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signUpText: {
    color: "#F6B426", // Change this color to your preferred color
    fontWeight: "bold",
  },
});
