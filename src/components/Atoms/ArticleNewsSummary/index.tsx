import { Text, View, StyleSheet } from "react-native";
import { JSX, ArticleNewsSummaryProps } from "../../../types";
import { COLORS } from "../../../colors";
import { screenWidth } from "../../../helpers/dimensions";
import { AnimateView } from "../AnimateView";

export const ArticleNewsSummary = (props: ArticleNewsSummaryProps): JSX => {
  return (
    <View style={styles.container}>
      <AnimateView up={false}>
        <Text style={styles.value}>{String(props.summary)}</Text>
      </AnimateView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    backgroundColor: COLORS.mainGray,
  },
  value: {
    alignSelf: "flex-start",
    textAlign: "left",
    padding: 20,
    color: COLORS.white,
    fontSize: 16,
    fontFamily: "Lato",
    letterSpacing: 1.3,
  },
});
