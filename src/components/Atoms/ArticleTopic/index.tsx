import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { COLORS } from "../../../colors";
import { JSX } from "../../../types";
import { ArticleIcon } from "../ArticleIcon";
import { ArticleTopicProps } from "../../../interfaces";

export const ArticleTopic = (props: ArticleTopicProps): JSX => {
  return (
    <Text style={styles.value}>
      {String(props.topic)}
      <ArticleIcon name="slash-forward" color={COLORS.yellow} />{" "}
      {String(props.source)}
    </Text>
  );
};

const styles = StyleSheet.create({
  value: {
    right: 10,
    color: COLORS.white,
    fontSize: 16,
    fontFamily: "Lato",
    letterSpacing: 0.4,
  },
});
