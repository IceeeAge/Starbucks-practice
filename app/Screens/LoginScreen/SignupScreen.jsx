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

export default function SignupScreen() {
  const navigation = useNavigation();
  const signUpNav = useNavigation();

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.LogoContainer}>
          <Image
            source={require("../../../assets/images/logo.jpg")}
            style={styles.image}
          />
        </View>
        <Text style={styles.textlogin}>Sign up Account</Text>

        <View>
          <TextInput placeholder="User Name" style={styles.input} />

          <TextInput placeholder="Email" style={styles.input} />

          <TextInput placeholder="Password" style={styles.input}
          secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button
        }
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
           Sign Up
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
          <Text>You Already have an account?</Text>
          <TouchableOpacity
          onPress={() => {
            signUpNav.goBack("LoginScreen");
          }}
          >
            <Text style={{ color: "#003B93", fontSize: 20 ,}}>Login now</Text>
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
