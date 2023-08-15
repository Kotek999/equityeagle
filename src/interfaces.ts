import { Dispatch, SetStateAction } from "react";
import { ListRenderItem } from "react-native";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { Symbols, Products } from "./enums";
import {
  OnPress,
  JSX,
  OpenType,
  FactsData,
  ItemType,
  SliderDataType,
  DataValue,
  ArticlesType,
  FieldType,
  TopicsType,
  ArticleNewsType,
  ArticleSourceType,
  ChildType,
  RenderItemType,
} from "./types";

export interface ChildProps {
  children: React.ReactNode;
}

export interface NoContentProps {
  symbol: Symbols | Products;
}

export interface Data {
  "Meta Data": {
    "1. Information": string;
    "2. Symbol": string;
    "3. Last Refreshed": string;
    "4. Interval": string;
    "5. Output Size": string;
    "6. Time Zone": string;
  };
  "Time Series (5min)": Record<
    string,
    { "1. open": string; "2. high": string; "3. low": string }
  >;
}

export interface ModalContentProps {
  maxOpenValue: number;
  trendValue: string;
  symbol: Symbols;
  openModalWithChart: OnPress;
  closeModal: OnPress;
}

export interface ModalContentWithChartProps {
  maxOpenValue: number;
  symbol: Symbols;
  symbolValue: string;
  trendValue: string;
  placeValue: number;
  closeModalWithChart: OnPress;
  openForDateIndex0: number;
  openForDateIndex1: number;
  openForDateIndex2: number;
  openForDateIndex3: number;
}

export interface ModalProps {
  symbol: Symbols;
  openModalWithChart: OnPress;
  closeModal: OnPress;
  value: JSX;
}

export interface StockDataProps {
  symbol: Symbols;
  isStatusExist: boolean;
  onModalOpened: Function;
  place: number;
}

export interface ModalStatusProps {
  isVisible: boolean;
  onBackdropPress: OnPress;
}

export interface ContentSwitcherProps {
  symbol: Symbols;
  isName: boolean;
}

export interface ChartWithContentProps {
  onPress: OnPress;
  symbolValue: string;
  placeValue: number;
  symbol: Symbols;
  maxOpenValue: number;
  trendValue: string;
  valuesOfData: number;
  onChangePeriod: Function;
  children: React.ReactNode;
}

export interface StockItemsProps {
  isStatusExist: boolean;
  onModalOpened: Function;
}

export interface StockContainerProps {
  isDataLoading: boolean;
  data: Data | undefined;
  refreshData: Data | undefined;
  onPress: OnPress;
  place: number;
  symbol: Symbols;
  maxOpenValue: OpenType;
  trendValue: JSX;
}

export interface StatusItemProps {
  status: number;
  onPress: OnPress;
}

export interface ModalNavbarProps {
  openModalWithChart: OnPress;
  children: React.ReactNode;
  closeModal: OnPress;
}

export interface ModalContainerProps {
  methodRef: React.Ref<BottomSheetModalMethods>;
  children: React.ReactNode;
}

export interface InterestingFactsDataProps {
  data: FactsData[];
  index: number;
}

export interface FetchedDataAreaProps {
  trendValue: React.ReactNode;
  placeValue: number;
  isInfoIcon: boolean;
  onPress?: OnPress;
  symbol: Symbols;
  symbolValue?: string;
  maxOpenValue: OpenType;
}

export interface DaysWithChartProps {
  onChangePeriod: Function;
  children: React.ReactNode;
}

export interface ChartModalNavbarProps {
  onPress: OnPress;
  symbolValue: string;
}

export interface ChartProps {
  onPress: OnPress;
  periodValue: string;
  averageValue: number;
  data: ItemType[] | undefined;
}

export interface BoxOfCurrentCompanyProps {
  placeValue: number;
  symbol: Symbols;
  symbolValue: string;
  maxOpenValue: number;
  trendValue: string;
}

export interface DateValueType {
  (
    time: string | undefined,
    subFirst: number,
    subSecond: number,
    maxLength?: number,
    fill?: string
  ): string;
}

export interface NewsSliderProps {
  isNewsLoading: boolean;
  fetchError: unknown;
  data: SliderDataType[];
  renderItem: RenderItemType;
}

export interface ArticleData {
  authors: string[];
  banner_image: string;
  category_within_source: string;
  overall_sentiment_label: string;
  overall_sentiment_score: number;
  source: string;
  source_domain: string;
  summary: string;
  ticker_sentiment: TickerSentiment[];
  time_published: string;
  title: string;
  topics: Topic[];
  url: string;
  feed: ArticleData[];
}

interface TickerSentiment {
  relevance_score: string;
  ticker: string;
  ticker_sentiment_label: string;
  ticker_sentiment_score: string;
}

export interface Topic {
  relevance_score: string;
  topic: string;
}

export interface FetchNewsData {
  setArticles: Dispatch<SetStateAction<ArticleData[] | undefined>>;
  setIsNewsLoading: Dispatch<SetStateAction<boolean>>;
  setFetchError: Dispatch<unknown>;
}

export interface FetchStockDataProps {
  stockData: Data;
  stockSymbol: Symbols;
  setStatus: Dispatch<SetStateAction<number>>;
  setMaxOpen: Dispatch<SetStateAction<OpenType>>;
  setTrend: Dispatch<SetStateAction<JSX>>;
  setData: DataValue;
  setRefreshData: DataValue;
  openForDate: OpenType[];
  setOpenForDate: Dispatch<SetStateAction<OpenType[]>>;
  setIsDataLoading: Dispatch<SetStateAction<boolean>>;
  setFetchError: Dispatch<unknown>;
}

export interface ArticleIconProps {
  name: string;
  color: string;
}

export interface ArticleTopicProps {
  topic?: TopicsType | Topic[] | string;
  source?: ArticlesType | FieldType;
}

export interface ArticleContentProps {
  title: FieldType;
  authors: string[] | "unknown" | undefined;
  source: ArticleSourceType;
  time: FieldType;
  summary: FieldType;
}

export interface ScrollViewProps {
  isMarginExist: boolean;
  children: ChildType;
}
