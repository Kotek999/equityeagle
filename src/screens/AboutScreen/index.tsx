import { useEffect, useState } from "react";
import { View, ListRenderItem } from "react-native";
import { Header } from "../../components/Atoms/Header";
import { NavigationScreenProps } from "../../../rootTypeList";
import { SCREEN } from "../../../routes";
import {
  JSX,
  OnPress,
  SliderDataType,
  ArticleDataType,
  ItemArticleProps,
} from "../../types";
import { Footer } from "../../components/Molecules/Footer";
import { NewsContent } from "../../components/Organisms/NewsContent";
import { fetchNewsData } from "../../helpers/functions/fetchNewsData";
import { getSliderData } from "../../helpers/functions/getSliderData";
import { Screen } from "../../components/Atoms/Screen";
import { RenderArticleImage } from "../../components/Atoms/RenderArticleImage";

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

  const renderItem: ListRenderItem<unknown> | null | undefined = (({
    item,
  }: ItemArticleProps) => <RenderArticleImage item={item} />) as
    | ListRenderItem<unknown>
    | null
    | undefined;

  return (
    <Screen isHeaderExist>
      <View style={{ flex: 1 }}>
        <Header
          isCogIcon
          isCogIconSelected
          isArticleScreen={false}
          onPress={onClickGoToMainScreen}
        />
        <NewsContent
          isNewsLoading={isNewsLoading}
          fetchError={fetchError}
          data={data}
          renderItem={renderItem}
        />
        <Footer isAboutScreen />
      </View>
    </Screen>
  );
};
