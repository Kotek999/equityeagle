import * as React from "react";
import isIOS from "../../../helpers/rulesOfDevice/isIOS";
import { SafeAreaView, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../../colors";
import { JSX, ScreenProps } from "../../../types";

export const Screen = (props: ScreenProps): JSX => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {!props.isHeaderExist ? (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {props.children}
        </ScrollView>
      ) : (
        <>{props.children}</>
      )}
      <StatusBar
        hidden={false}
        backgroundColor={COLORS.dark}
        style={isIOS() ? "dark" : "light"}
      />
    </SafeAreaView>
  );
};
