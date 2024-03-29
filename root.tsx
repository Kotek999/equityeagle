import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { JSX } from "./src/types";
import { SCREEN } from "./routes";
import { COLORS } from "./src/colors";
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
        initialRouteName={SCREEN.Home}
        screenOptions={{ contentStyle: { backgroundColor: COLORS.white } }}
      >
        <Stack.Screen
          name={SCREEN.Home}
          options={{
            title: SCREEN.Home,
            headerShown: false,
            animation: "fade",
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name={SCREEN.Main}
          options={{
            title: SCREEN.Main,
            headerShown: false,
            animation: "slide_from_bottom",
          }}
          component={MainScreen}
        />
        <Stack.Screen
          name={SCREEN.About}
          options={{
            title: SCREEN.About,
            headerShown: false,
          }}
          component={AboutScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
