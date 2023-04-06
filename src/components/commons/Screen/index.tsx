import * as React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { ChildProps } from "../../../interfaces";
import { JSX } from "../../../types";
import { StatusBar } from "expo-status-bar";

export default function Screen({ children }: ChildProps): JSX {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {children}
      </ScrollView>
      <StatusBar backgroundColor="black" style="light" />
    </SafeAreaView>
  );
}
