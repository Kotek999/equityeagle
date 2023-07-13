import textData from "../../../../textData.json";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { COLORS } from "../../../colors";
import { JSX } from "../../../types";

export const NewsSpinner = (): JSX => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.yellow} />
      <Text style={styles.value}>{textData.value.newsLoading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 40,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  value: {
    top: 10,
    color: COLORS.white,
    fontSize: 16,
    fontFamily: "Lato",
    letterSpacing: 1.1,
  },
});
