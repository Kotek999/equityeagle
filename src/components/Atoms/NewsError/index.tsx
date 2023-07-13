import textData from "../../../../textData.json";
import { View, Text, StyleSheet } from "react-native";
import { screenHeight } from "../../../helpers/dimensions";
import { COLORS } from "../../../colors";
import { JSX } from "../../../types";

export const NewsError = (): JSX => {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{textData.value.noNews}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  value: {
    padding: screenHeight / 14,
    width: "100%",
    textAlign: "center",
    alignSelf: "center",
    color: COLORS.white,
    fontSize: 16,
    lineHeight: 30,
    fontFamily: "Lato",
    letterSpacing: 1.1,
  },
});
