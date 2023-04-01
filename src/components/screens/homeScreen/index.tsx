import * as React from "react";
import { View, Text, Button } from "react-native";
import { HomeScreenProps } from "../../../../rootTypeList";
import { SCREEN } from "../../../../routes";

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{fontSize: 20, fontWeight: "600", margin: 20}}>Home Screen</Text>
      <Button
        title="Go to Main"
        onPress={() => navigation.push(SCREEN.Main)}
      />
    </View>
  );
}
