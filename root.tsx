import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { JSX } from "./src/types";
import { HomeScreen } from "./src/screens/HomeScreen";
import { MainScreen } from "./src/screens/MainScreen";
import { RootStackParamList } from "./rootTypeList";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = (): JSX => {
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
};
