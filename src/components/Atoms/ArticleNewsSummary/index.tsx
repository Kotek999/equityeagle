import { Text, View, StyleSheet } from "react-native";
import { JSX, ArticleNewsSummaryProps } from "../../../types";
import { COLORS } from "../../../colors";
import { screenWidth } from "../../../helpers/dimensions";

export const ArticleNewsSummary = (props: ArticleNewsSummaryProps): JSX => {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{String(props.summary)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    backgroundColor: COLORS.boxGraylightGray,
  },
  value: {
    alignSelf: "flex-start",
    textAlign: "left",
    padding: 20,
    color: COLORS.white,
    fontSize: 16,
    fontFamily: "Lato",
    letterSpacing: 1.1,
  },
});
