import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import Btn from "../components/Btn";
import InputField from "../components/InputField";
import PasswordInput from "../components/PasswordInput";
import Title from "../components/Title";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/Index";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

type Props = {
  navigation: StackNavigationProp<RootStackParams, "Categories">;
};

export default function SignUp({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const authData = useAuth();

  const onPressHandler = () => {
    authData.signUp(name, email, password);
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.loginContainer}>
          <Title title={"Sign Up"} />
          <InputField data={name} setData={setName} placeholder="Name" />
          <InputField data={email} setData={setEmail} placeholder="Email" />
          <PasswordInput password={password} setPassword={setPassword} />
          <Btn btnText="Sign Up" onPress={onPressHandler} />
        </View>
      </KeyboardAvoidingView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  loginContainer: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
