import * as React from "react";
import { View, StyleSheet } from "react-native";
import { HomeScreenProps } from "../../../../rootTypeList";
import { SCREEN } from "../../../../routes";
import { Text, Button } from "@react-native-material/core";
import SafeArea from "../../commons/SafeArea";
import Gradient from "../../commons/Gradient";
import { JSX } from "../../../types";

export default function HomeScreen({ navigation }: HomeScreenProps): JSX {
  return (
    <SafeArea>
      <Gradient>
        <View style={styles.container}>
          <Text style={styles.sloganTitle} variant="h5">
            {/* In this place, there will be a logo */}
            Maximize your profits with our stock analysis tools!
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              color="white"
              title="Go to main"
              style={styles.button}
              onPress={() => navigation.push(SCREEN.Main)}
            />
          </View>
        </View>
      </Gradient>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
  },
  sloganTitle: {
    textAlign: "center",
    justifyContent: "flex-start",
    fontWeight: "bold",
    fontFamily: "Lato",
    color: "white",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  button: {
    width: "50%",
    backgroundColor: "#fbc02d",
  },
});
