import { View, Text } from "react-native";
import React from "react";
import LoginScreen from "../Screens/LoginScreen/LoginScreen";
import HomeScreen from "../Screens/Home/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OrderScreen from "../Screens/OrderScreen/OrderScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import { Entypo } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor:"#116242", // COLOR OF ICON
    }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Home
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="OrderScreen" component={OrderScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Drinks
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Feather name="coffee" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen}
      options={{
        tabBarLabel: ({ color }) => (
          <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
            Profile
          </Text>
        ),
        tabBarIcon: ({ color, size }) => (
          <Feather name="user" size={size} color={color} />
        ),
      }}
    />
    </Tab.Navigator>
  );
}
