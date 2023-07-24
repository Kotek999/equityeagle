import { ReactNode, Dispatch, SetStateAction } from "react";
import { ImageSourcePropType } from "react-native";
import { Products, Symbols } from "./enums";
import { Data, ArticleData, Topic, ArticleTopicProps } from "./interfaces";

export type JSX = JSX.Element;

export type ChildType = ReactNode;

export type OnPress = () => void;

export type ButtonProps = {
  onPress: OnPress;
  title: string;
};

export type ChildProps = {
  children: ChildType;
  isMarginExist?: boolean;
};

export type NoContentProps = {
  symbol: Symbols | Products;
};

// for images
export type SourceType = {
  uri: string;
};

export type Chech<T> = Record<string, T>;

export type ChechProps<T> = {
  source: T;
};
//

export type FactsData = {
  label: string;
  content: string;
};

// for chart
type LabelText = {
  color: string;
  width: number;
};

export type ItemType = {
  value?: number;
  labelTextStyle?: LabelText;
  labelComponent: Function;
  label: String;
};

export type DateForType = {
  day7: string;
  day14: string;
  day21: string;
  day28: string;
  day0: string;
};

export type ChipDataType = {
  label: string;
  day: number;
};

export type CategoriesType = {
  title: string;
};

export type OpenValuesType = {
  openCurrent: number;
  open7: number;
  open14: number;
  open21: number;
  open28: number;
};

export type AverageForDayType = {
  value: number;
  count: number;
};

export type OpenForType = string | number;

export type OpenType = number | null;

export type ChartDataProps = {
  data: ItemType[];
};

export type ContextType = {
  status: number;
  setStatus: Dispatch<SetStateAction<number>>;
};

export type CodesType = {
  value: string;
  description: string;
  icon: {
    name: string;
    color: string;
  };
};

export type SymbolProps = {
  symbol: Symbols;
};

export type ProductProps = {
  productName: string;
};

export type InterestingFactsProps = {
  data: FactsData[];
};

export type IconType = {
  name: string;
  color: string;
};

export type CurrentStatusProps = {
  status: number;
};

export type DataProviderProps = {
  children: ChildType;
};

export type ColorsType = {
  white: string;
  gray: string;
  lightGray: string;
  lime: string;
  gold: string;
  yellow: string;
  red: string;
  mainGray: string;
  badgeDark: string;
  dark: string;
  textGray: string;
  textVersion: string;
  boxGraylightGray: string;
  iconDataYellow: string;
  iconDataRed: string;
  iconDataGreen: string;
  iconLightGreen: string;
  iconRed: string;
  iconLightRed: string;
  iconGold: string;
  opacityDark: string;
  dividerLightGray: string;
  chartLime: string;
  chartFillGreen: string;
  chartFillLightGreen: string;
  blank: string;
};

export type TrendIconProps = {
  name: string;
  color: string;
};

export type ApiType = {
  url: {
    part1: string;
    part2: string;
    news: string;
  };
  testKey: string;
  key: string;
};

export type IconProps = {
  name: string;
  onPress: OnPress;
};

export type HeaderProps = ArticleTopicProps & {
  onPress: OnPress;
  isCogIconSelected?: boolean;
  isArticleScreen: boolean;
  isCogIcon: boolean;
};

export type FooterProps = {
  isAboutScreen: boolean;
};

export type TimeValuesType = {
  time: {
    hour: string;
    minutes: string;
  };
};

export type DateValuesType = TimeValuesType & {
  date: {
    year: string;
    month: string;
    day: string;
  };
};

export type SliderDataType = {
  article: {
    id: string;
    time: string | undefined;
    title: string | undefined;
    image: ImageSourcePropType;
    onPress: () => void;
  };
};

export type RenderArticleImageProps = {
  item: SliderDataType;
};

export type NewsScrollViewProps = {
  children: ChildType;
};

export type QuotesType = {
  title: string;
  author: string;
  position: string;
};

export type DataValue = Dispatch<SetStateAction<Data | undefined>>;

export type ArticleDataType = ArticleData[] | undefined;

export type FieldType = string | undefined;

export type TopicsType = Topic[] | undefined;

export type ArticleNewsType = {
  time: FieldType;
  authors: string[] | undefined;
  source: FieldType;
  topics: TopicsType;
  image: { uri: FieldType };
  title: FieldType;
  summary: FieldType;
};

export type ArticlesType = {
  field: ArticleNewsType;
};

export type ArticleDateProps = {
  time: FieldType;
};

export type ArticleSourceType =
  | {
      uri: FieldType;
    }
  | ImageSourcePropType;

export type ArticleNewsTitleProps = {
  title: ArticleNewsType | undefined | string;
};

export type ArticleNewsSummaryProps = {
  summary: FieldType;
};

export type ArticleNewsImageWithDateProps = ArticleDateProps & {
  source: ArticleSourceType;
};

export type ArticleNewsAuthorsProps = {
  authors: ArticleNewsType | undefined | string[];
};
