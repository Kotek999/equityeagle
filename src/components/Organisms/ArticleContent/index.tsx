import { View, StyleSheet } from "react-native";
import { JSX } from "../../../types";
import { Divider } from "../../../components/Atoms/Divider";
import { NewsScrollView as ArticleScrollView } from "../../../components/Atoms/NewsScrollView";
import { ArticleNewsTitle } from "../../../components/Atoms/ArticleNewsTitle";
import { ArticleNewsAuthors } from "../../../components/Atoms/ArticleNewsAuthors";
import { ArticleNewsImageWithDate } from "../../../components/Atoms/ArticleNewsImageWithDate";
import { ArticleNewsSummary } from "../../../components/Atoms/ArticleNewsSummary";
import { ArticleContentProps } from "../../../interfaces";

export const ArticleContent = (props: ArticleContentProps): JSX => {
  return (
    <ArticleScrollView>
      <View style={styles.container}>
        <View>
          <ArticleNewsTitle title={props.title} />
          <ArticleNewsAuthors authors={props.authors} />
          <Divider />
          <ArticleNewsImageWithDate source={props.source} time={props.time} />
        </View>
        <ArticleNewsSummary summary={props.summary} />
      </View>
    </ArticleScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
