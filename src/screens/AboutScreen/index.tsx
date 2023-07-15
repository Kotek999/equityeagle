import { useEffect, useState } from "react";
import { View } from "react-native";
import { Header } from "../../components/Atoms/Header";
import { NavigationScreenProps } from "../../../rootTypeList";
import { SCREEN } from "../../../routes";
import { JSX, OnPress, SliderDataType, ArticleDataType } from "../../types";
import { Footer } from "../../components/Molecules/Footer";
import { NewsContent } from "../../components/Organisms/NewsContent";
import { fetchNewsData } from "../../helpers/functions/fetchNewsData";
import { getSliderData } from "../../helpers/functions/getSliderData";

export const AboutScreen = ({
  navigation,
}: NavigationScreenProps<SCREEN.About>): JSX => {
  const [isNewsLoading, setIsNewsLoading] = useState<boolean>(true);
  const [articles, setArticles] = useState<ArticleDataType>();
  const [fetchError, setFetchError] = useState<unknown>();

  const onClickGoToMainScreen: OnPress = (): void =>
    navigation.navigate(SCREEN.Main);

  useEffect(() => {
    fetchNewsData({ setArticles, setIsNewsLoading, setFetchError });
  }, []);

  const data: SliderDataType[] = getSliderData(articles || [], navigation);

  return (
    <View style={{ flex: 1 }}>
      <Header isCogIconSelected onPress={onClickGoToMainScreen} />
      <NewsContent
        isNewsLoading={isNewsLoading}
        fetchError={fetchError}
        data={data}
      />
      <Footer isAboutScreen />
    </View>
  );
};
