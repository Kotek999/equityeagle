import textData from "../../../../textData.json";
import { Text, View, StyleSheet } from "react-native";
import { JSX, ArticleNewsAuthorsProps } from "../../../types";
import { COLORS } from "../../../colors";
import { ArticleIcon } from "../ArticleIcon";
import { AnimateText } from "../AnimateText";

export const ArticleNewsAuthors = (props: ArticleNewsAuthorsProps): JSX => {
  return (
    <View style={styles.container}>
      <AnimateText left style={styles.value}>
        <Text>{textData.value.authorOfNewsTitle}</Text>
        <ArticleIcon name="circle-small" color={COLORS.textGray} />
        <Text>{props.authors}</Text>
      </AnimateText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.newsBoxGray,
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
