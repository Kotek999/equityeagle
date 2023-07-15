import { Text, View } from "react-native";
import { JSX, ArticleDataType } from "../../types";
import { getArticleData } from "../../helpers/functions/articleDataService";
import { NavigationScreenProps } from "../../../rootTypeList";
import { SCREEN } from "../../../routes";

export const ArticleScreen = ({
  route,
}: NavigationScreenProps<SCREEN.Article>): JSX => {
  const data: ArticleDataType = getArticleData();
  const index: number = route.params.index;
  const title: string | undefined = data && data[index].title;

  return (
    <View
      style={{
        padding: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Text>Article nr: {index}</Text>
      <Text style={{ color: "lime", fontSize: 20 }}>{title}</Text>
    </View>
  );
};
