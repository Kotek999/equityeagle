import * as React from "react";
import isIOS from "../../../helpers/rulesOfDevice/isIOS";
import { SafeAreaView, ScrollView } from "react-native";
import { JSX, ChildProps } from "../../../types";
import { StatusBar } from "expo-status-bar";

export const Screen = (props: ChildProps): JSX => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {props.children}
      </ScrollView>
      <StatusBar
        hidden={false}
        backgroundColor="#152127"
        style={isIOS() ? "light" : "light"}
      />
    </SafeAreaView>
  );
};
