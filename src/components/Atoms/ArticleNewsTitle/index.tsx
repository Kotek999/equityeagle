import { Text, View, StyleSheet } from "react-native";
import { JSX, ArticleNewsTitleProps } from "../../../types";
import { COLORS } from "../../../colors";
import { screenWidth } from "../../../helpers/dimensions";

export const ArticleNewsTitle = (props: ArticleNewsTitleProps): JSX => {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{String(props.title)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    alignContent: "center",
    alignSelf: "center",
    width: screenWidth,
    backgroundColor: COLORS.boxGraylightGray,
  },
  value: {
    textAlign: "left",
    padding: 14,
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1.1,
  },
});
