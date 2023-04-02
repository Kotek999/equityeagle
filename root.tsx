import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { JSX } from "./src/types";
import HomeScreen from "./src/components/screens/HomeScreen";
import MainScreen from "./src/components/screens/MainScreen";

const Stack = createNativeStackNavigator();

export default function RootStack(): JSX {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          name="Home"
          options={{
            title: "Home",
            headerShown: false,
            animation: "slide_from_left",
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Main"
          options={{
            title: "Main",
            headerShown: false,
            animation: "slide_from_right",
          }}
          component={MainScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
