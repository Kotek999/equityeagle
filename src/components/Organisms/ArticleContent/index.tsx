import { View, StyleSheet } from "react-native";
import { JSX } from "../../../types";
import { NewsScrollView as ArticleScrollView } from "../../../components/Atoms/NewsScrollView";
import { ArticleNewsTitle } from "../../../components/Atoms/ArticleNewsTitle";
import { ArticleNewsAuthors } from "../../../components/Atoms/ArticleNewsAuthors";
import { ArticleNewsImageWithDate } from "../../../components/Atoms/ArticleNewsImageWithDate";
import { ArticleNewsSummary } from "../../../components/Atoms/ArticleNewsSummary";
import { ArticleContentProps } from "../../../interfaces";
import { ArticleNewsLink } from "../../Atoms/ArticleNewsLink";

export const ArticleContent = (props: ArticleContentProps): JSX => {
  return (
    <ArticleScrollView>
      <View style={styles.container}>
        <View>
          <ArticleNewsTitle title={props.title} />
          <ArticleNewsAuthors authors={props.authors} />
          <ArticleNewsImageWithDate source={props.source} time={props.time} />
        </View>
        <ArticleNewsSummary summary={props.summary} />
        <ArticleNewsLink url={props.url} />
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
