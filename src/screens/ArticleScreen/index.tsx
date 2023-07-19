import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text, View, Image, ImageSourcePropType } from "react-native";
import {
  JSX,
  ArticleDataType,
  OnPress,
  DateValuesType,
} from "../../types";
import { getArticleData } from "../../helpers/functions/articleDataService";
import { NavigationScreenProps } from "../../../rootTypeList";
import { SCREEN } from "../../../routes";
import { Header } from "../../components/Atoms/Header";
import { ArticleData, Topic } from "../../interfaces";
import { COLORS } from "../../colors";
import { getDateValue } from "../../helpers/functions/getDateValue";
import { screenWidth } from "../../helpers/dimensions";
import { Divider } from "../../components/Atoms/Divider";
import { NewsScrollView as ArticleScrollView } from "../../components/Atoms/NewsScrollView";
import { Fragment } from "react";

export const ArticleScreen = ({
  route,
  navigation,
}: NavigationScreenProps<SCREEN.Article>): JSX => {
  const articleData: ArticleDataType = getArticleData();

  const index: number = route.params.index;

  const article: ArticleData | undefined = articleData && articleData[index];

  type FieldType = string | undefined;

  type TopicsType = Topic[] | undefined;

  type ArticlesType = {
    field: {
      time: FieldType;
      authors: string[] | undefined;
      source: FieldType;
      topics: TopicsType;
      image: { uri: FieldType };
      title: FieldType;
      summary: FieldType;
    };
  };

  const articles: ArticlesType = {
    field: {
      time: article?.time_published,
      authors: article?.authors,
      source: article?.source,
      topics: article?.topics,
      image: { uri: article?.banner_image },
      title: article?.title,
      summary: article?.summary,
    },
  };

  const topic: TopicsType = articles.field.topics;

  const onClickGoToAboutScreen: OnPress = (): void =>
    navigation.navigate(SCREEN.About);


  const Icon = (): JSX => (
    <MaterialCommunityIcons
      name="slash-forward"
      size={16}
      color={COLORS.yellow}
    />
  );

  const DotIcon = (): JSX => (
    <MaterialCommunityIcons
      name="circle-small"
      size={16}
      color={COLORS.textGray}
    />
  );

  const getArticleDate = (time: FieldType): JSX => {
    const dateValues: DateValuesType = {
      date: {
        year: getDateValue(time, 0, 4),
        month: getDateValue(time, 4, 6),
        day: getDateValue(time, 6, 8),
      },
      time: {
        hour: getDateValue(time, 9, 11),
        minutes: getDateValue(time, 11, 13),
      },
    };

    const articleTime: string = `${dateValues.time.hour}:${dateValues.time.minutes}`;
    const articleDate: string = `${dateValues.date.day}.${dateValues.date.month}.${dateValues.date.year}`;

    return (
      <Fragment>
        <DotIcon />
        <Text>{articleDate}</Text> <DotIcon />
        <Text>{articleTime}</Text>
      </Fragment>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.mainGray }}>
      <Header
        isArticleScreen
        isCogIcon={false}
        onPress={onClickGoToAboutScreen}
      />
      <ArticleScrollView>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          {/* level 1 - category, time, title */}
          <View
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              alignContent: "center",
              alignSelf: "flex-start",
            }}
          >
            <Text
              style={{
                padding: 20,
                color: COLORS.white,
                fontSize: 16,
                fontFamily: "Lato",
                letterSpacing: 0.4,
              }}
            >
              {topic && topic[0].topic} <Icon /> {articles.field.source}
            </Text>
            <Divider />
            <Text
              style={{
                textAlign: "left",
                padding: 20,
                color: COLORS.white,
                fontSize: 18,
                fontWeight: "bold",
                letterSpacing: 1.1,
              }}
            >
              {articles.field.title}
            </Text>
          </View>

          {/* level 2 - image */}
          <View>
            <Image
              resizeMode="contain"
              resizeMethod="auto"
              source={articles.field.image as ImageSourcePropType}
              style={{
                justifyContent: "center",
                width: screenWidth,
                height: 250,
                borderRadius: 5,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: 10,
              }}
            >
              <Text
                style={{
                  textAlign: "right",
                  color: COLORS.textGray,
                  fontFamily: "Lato",
                }}
              >
                {articles.field.authors}
                {getArticleDate(articles.field.time)}
              </Text>
            </View>
            <Divider />
          </View>
          {/* level 3 - content, authors */}
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                alignSelf: "flex-start",
                textAlign: "left",
                padding: 20,
                color: COLORS.white,
                fontSize: 16,
                fontFamily: "Lato",
                letterSpacing: 1.1,
              }}
            >
              {articles.field.summary}
            </Text>
          </View>
        </View>
      </ArticleScrollView>
    </View>
  );
};
