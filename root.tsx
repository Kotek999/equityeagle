import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { JSX } from "./src/types";
import { HomeScreen } from "./src/screens/HomeScreen";
import { MainScreen } from "./src/screens/MainScreen";
import { AboutScreen } from "./src/screens/AboutScreen";
import { RootStackParamList } from "./rootTypeList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
            animation: "fade",
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Main"
          options={{
            title: "Main",
            headerShown: false,
            animation: "slide_from_bottom",
          }}
          component={MainScreen}
        />
        <Stack.Screen
          name="About"
          options={{
            title: "About",
            headerShown: false,
            animation: "slide_from_right",
          }}
          component={AboutScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
