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
import { router } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useAlert } from "@/providers/AlertContext";
import { useLoader } from "@/providers/LoaderContext";
import { useAuth } from "@/providers/AuthContext";
import { getApi } from "@/constants/API";

export default function ForgetPassword() {
  const navigation = useNavigation();
  const [phone, setPhone] = useState("");
  const { showAlert } = useAlert();
  const { showLoader, hideLoader } = useLoader();

  const handleAction = async () => {
    showLoader();
    try {
      const loginRes = await getApi(
        "/apis/auth/rider/forget-password",
        undefined,
        {
          phoneNumber: phone,
        }
      );
      //console.log(loginRes.data.key)
      router.replace({
        pathname: "/verifyotp",
        params: { key: loginRes.data.key },
      });
      hideLoader();
      showAlert("success", "OTP has send");
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
        style={{ marginTop: 35, flexDirection: "row" }}
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
      <Text style={{ fontSize: 20, color: "white" }}>Forget Password</Text>
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
        placeholder="Phone Number"
        value={phone}
        keyboardType="number-pad"
        onChangeText={setPhone}
        style={styles.input}
      />
      {/* Submit Button */}
      <TouchableOpacity
        onPress={() => handleAction()}
        style={styles.submitButton}
      >
        <Text style={styles.submitButtonText}>Next</Text>
      </TouchableOpacity>
      {/* Sign Up Link */}
      <View style={styles.signUpContainer}>
        <Text style={{ color: "white", fontSize: 13 }}>
          Don’t have any account?{" "}
        </Text>
        <TouchableOpacity
          onPress={() => router.push({ pathname: "/contactsupport" })}
        >
          <Text style={styles.signUpText}>Contact Support</Text>
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
