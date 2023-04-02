import * as React from "react";
import { View, Text, Button } from "react-native";
import { MainScreenProps } from "../../../../rootTypeList";
import { SCREEN } from "../../../../routes";
import { JSX } from "../../../types";

export default function MainScreen({ navigation }: MainScreenProps): JSX {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "600", margin: 20 }}>
        Main Screen
      </Text>
      <Button title="Go to Home" onPress={() => navigation.push(SCREEN.Home)} />
    </View>
  );
}
