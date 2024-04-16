import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Category() {
  const orderNav = useNavigation();
  return (
    <ScrollView style={{ padding: 20 }}>
      <View style={styles.container}>
        <View style={{ paddingTop: 20 }}>
          <Text style={styles.text}>
            Answer a few questions to find something new
          </Text>
        </View>
        <TouchableOpacity style={styles.subContainer}
        onPress={() => orderNav.navigate("OrderScreen")}
        >
          <Text
            style={{
              padding: 10,
              fontWeight: "bold",
              fontSize: 20,
              position: "absolute",
              marginTop: 20,
            }}
          >
            Iced
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 17 }}>Cool off and uplift</Text>
            <Image
              source={require("../../../assets/images/ice.png")}
              style={{ width: 100, height: 100, borderRadius: 20 }}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.subContainer}
         onPress={() => orderNav.navigate("OrderScreen")}
        >
          <Text
            style={{
              padding: 10,
              fontWeight: "bold",
              fontSize: 20,
              position: "absolute",
              marginTop: 20,
            }}
          >
            Hot
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 17 }}>Warm up and get going</Text>
            <Image
              source={require("../../../assets/images/hot.png")}
              style={{ width: 100, height: 100, borderRadius: 20 }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 480,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginBottom: 20,
  },
  text: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
    margin: 20,
  },
  subContainer: {
    height: 160,
    backgroundColor: "#D4E9E2",
    borderRadius: 20,
    margin: 10,
  },
});
