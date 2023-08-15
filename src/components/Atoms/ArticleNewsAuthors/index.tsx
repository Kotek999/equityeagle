import textData from "../../../../textData.json";
import { Text, View, StyleSheet } from "react-native";
import { JSX, ArticleNewsAuthorsProps } from "../../../types";
import { COLORS } from "../../../colors";
import { ArticleIcon } from "../ArticleIcon";

export const ArticleNewsAuthors = (props: ArticleNewsAuthorsProps): JSX => {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{textData.value.authorOfNewsTitle}</Text>
      <ArticleIcon name="circle-small" color={COLORS.textGray} />
      <Text style={styles.value}>{props.authors}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 10,
  },
  value: {
    textAlign: "left",
    color: COLORS.textGray,
    fontFamily: "Lato",
  },
});
