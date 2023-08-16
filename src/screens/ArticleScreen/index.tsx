import { View, ImageSourcePropType } from "react-native";
import {
  JSX,
  ArticleDataType,
  OnPress,
  TopicsType,
  ArticlesType,
  FieldType,
  AuthorsType,
  ArticleNewsType,
  ArticleSourceType,
} from "../../types";
import { getArticleData } from "../../helpers/functions/articleDataService";
import { NavigationScreenProps } from "../../../rootTypeList";
import { SCREEN } from "../../../routes";
import { Header } from "../../components/Atoms/Header";
import { ArticleData } from "../../interfaces";
import { ArticleContent } from "../../components/Organisms/ArticleContent";
import { Screen } from "../../components/Atoms/Screen";
import { imageNotExist as articleImageNotExist } from "../../helpers/imageRequirements";
import { Footer } from "../../components/Molecules/Footer";

export const ArticleScreen = ({
  route,
  navigation,
}: NavigationScreenProps<SCREEN.Article>): JSX => {
  const articleData: ArticleDataType = getArticleData();

  const index: number = route.params.index;

  const article: ArticleData | undefined = articleData && articleData[index];

  const articles: ArticlesType = {
    field: {
      time: article?.time_published,
      authors: article?.authors,
      source: article?.source,
      topics: article?.topics,
      image: { uri: article?.banner_image },
      title: article?.title,
      summary: article?.summary,
      url: article?.url,
    },
  };

  const field: ArticleNewsType = articles.field;

  const articleNews: ArticleNewsType = {
    time: field.time,
    authors: field.authors,
    source: field.source,
    topics: field.topics,
    image: field.image,
    title: field.title,
    summary: field.summary,
    url: field.url,
  };

  const articleTopic: TopicsType = articleNews.topics;

  const articleSource: ImageSourcePropType | undefined | FieldType =
    articleNews.image.uri;

  const source: ArticleSourceType =
    articleSource === null || articleSource === ""
      ? articleImageNotExist
      : articleNews.image;
  const topic: string | TopicsType = articleTopic && articleTopic[0].topic;

  const authors: AuthorsType =
    articleNews.authors?.length === 0 ? "unknown" : articleNews.authors;

  const onClickGoToAboutScreen: OnPress = (): void =>
    navigation.navigate(SCREEN.About);

  return (
    <Screen isHeaderExist>
      <View style={{ flex: 1 }}>
        <Header
          isArticleScreen
          isCogIcon={false}
          topic={topic}
          source={articleNews.source}
          onPress={onClickGoToAboutScreen}
        />
        <ArticleContent
          title={articleNews.title}
          authors={authors}
          source={source}
          time={articleNews.time}
          summary={articleNews.summary}
          url={articleNews.url}
        />
        <Footer isAboutScreen />
      </View>
    </Screen>
  );
};
