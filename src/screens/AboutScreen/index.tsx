import { useEffect, useState } from "react";
import { View } from "react-native";
import { Header } from "../../components/Atoms/Header";
import { NavigationScreenProps } from "../../../rootTypeList";
import { SCREEN } from "../../../routes";
import { JSX, OnPress, SliderDataType } from "../../types";
import { Footer } from "../../components/Molecules/Footer";
import { NewsContent } from "../../components/Organisms/NewsContent";
import { ArticleData } from "../../interfaces";
import { fetchNewsData } from "../../helpers/functions/fetchNewsData";

export const AboutScreen = ({
  navigation,
}: NavigationScreenProps<SCREEN.About>): JSX => {
  const [isNewsLoading, setIsNewsLoading] = useState<boolean>(true);
  const [articles, setArticles] = useState<ArticleData[] | undefined>();
  const [fetchError, setFetchError] = useState<unknown>();

  const onClickGoToMainScreen: OnPress = (): void =>
    navigation.navigate(SCREEN.Main);

  useEffect(() => {
    fetchNewsData({ setArticles, setIsNewsLoading, setFetchError });
  }, []);

  const sliderData: SliderDataType[] = (articles || []).map(
    (article: ArticleData, i: number) => ({
      article: {
        id: String(i + 1),
        time: article.time_published,
        title: article.title,
        image: { uri: article.banner_image },
        onPress: () => console.log(`image: ${i + 1}`),
      },
    })
  );

  return (
    <View style={{ flex: 1 }}>
      <Header isCogIconSelected onPress={onClickGoToMainScreen} />
      <NewsContent
        isNewsLoading={isNewsLoading}
        fetchError={fetchError}
        data={sliderData}
      />
      <Footer isAboutScreen />
    </View>
  );
};
