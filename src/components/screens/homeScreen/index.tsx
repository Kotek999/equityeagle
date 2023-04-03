import * as React from "react";
import { View, StyleSheet, Image, ImageSourcePropType } from "react-native";
import { HomeScreenProps } from "../../../../rootTypeList";
import { SCREEN } from "../../../../routes";
import { Text, Button, Surface, Stack } from "@react-native-material/core";
import SafeArea from "../../commons/SafeArea";
import Gradient from "../../commons/Gradient";
import { JSX } from "../../../types";

export default function HomeScreen({ navigation }: HomeScreenProps): JSX {
  const source: ImageSourcePropType = require("../../../../assets/logo/eelogo.png");
  return (
    <SafeArea>
      <Gradient>
        <View style={styles.container}>
          <Stack center style={styles.imgWithSloganContainer}>
            <Surface
              // elevation={0} changing value
              category="medium"
              style={{ backgroundColor: "transparent" }}
            >
              <Image style={styles.img} source={source} alt="logo" />
              <Text style={styles.sloganTitle} variant="h5">
                Maximize your profits with our stock analysis tools!
              </Text>
            </Surface>
          </Stack>
          <View style={styles.buttonContainer}>
            <Button
              titleStyle={{ fontSize: 15 }}
              color="black"
              title="Go to main"
              variant="contained"
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
  imgWithSloganContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  img: {
    width: 120,
    height: 160,
    margin: 20,
    alignSelf: "center",
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
    backgroundColor: "#b6843a",
  },
});
