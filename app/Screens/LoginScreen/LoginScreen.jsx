import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen() {
  const navigation = useNavigation();
  const signNav = useNavigation();

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.LogoContainer}>
          <Image
            source={require("../../../assets/images/logo.jpg")}
            style={styles.image}
          />
        </View>
        <Text style={styles.textlogin}>Login Your Account</Text>

        <View>
          <TextInput placeholder="Email" style={styles.input} />

          <TextInput placeholder="Password" style={styles.input}
          secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button}
        onPress={() => {
          navigation.navigate("TabNavigation");
        }}
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
            Login
          </Text>
        </TouchableOpacity>
        {/* <Button
        title="Login"
        onPress={() => {
          navigation.navigate("TabNavigation");
        }}
      /> */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text>You don't have an account?</Text>
          <TouchableOpacity
          onPress={() => {
            signNav.navigate("SignupScreen");
          }}
          >
            <Text style={{ color: "#003B93", fontSize: 20 }}>Sign up now</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  LogoContainer: {
    height: 270,
    backgroundColor: "#116242",
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 174,
  },
  textlogin: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  input: {
    height: 59,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 328,
    borderColor: "#ccc",
    marginTop: 30,
    borderRadius: 10,
  },
  button: {
    height: 60,
    paddingHorizontal: 1,
    borderWidth: 1,
    backgroundColor: "#000000",
    marginTop: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
  },
});
