import { ArticleData } from "../../interfaces";
import { SCREEN } from "../../../routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../rootTypeList";

export const getSliderData = (
  articles: ArticleData[],
  navigation: NativeStackNavigationProp<RootStackParamList, SCREEN.About>
) => {
  return articles.map((article, i) => ({
    article: {
      id: String(i + 1),
      time: article.time_published,
      title: article.title,
      image: { uri: article.banner_image },
      onPress: () => navigation.navigate(SCREEN.Article, { index: i }),
    },
  }));
};
