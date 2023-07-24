import { Text, View, StyleSheet } from "react-native";
import { JSX, ArticleNewsAuthorsProps } from "../../../types";
import { COLORS } from "../../../colors";

export const ArticleNewsAuthors = (props: ArticleNewsAuthorsProps): JSX => {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{`Author of News - ${props.authors}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    padding: 10,
  },
  value: {
    textAlign: "left",
    color: COLORS.white,
    fontFamily: "Lato",
  },
});
