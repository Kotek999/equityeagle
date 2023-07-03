import { Products, Symbols } from "./enums";

export type JSX = JSX.Element;

export type OnPress = () => void;

export type ButtonProps = {
  onPress: OnPress;
  title: string;
};

export type ChildProps = {
  children: React.ReactNode;
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
  setStatus: React.Dispatch<React.SetStateAction<number>>;
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
  children: React.ReactNode;
};

export type ColorsType = {
  whiteColor: string;
  grayColor: string;
  lightGrayColor: string;
  limeColor: string;
  goldColor: string;
  yellowColor: string;
  redColor: string;
  mainGrayColor: string;
  darkColor: string;
  textGrayColor: string;
  boxGraylightGrayColor: string;
  iconDataYellowColor: string;
  iconDataRedColor: string;
  iconDataGreenColor: string;
  iconLightGreenColor: string;
  iconRedColor: string;
  iconLightRedColor: string;
  iconGoldColor: string;
  opacityDarkColor: string;
  dividerLightGrayColor: string;
  chartLimeColor: string;
  chartFillGreenColor: string;
  chartFillLightGreenColor: string;
  blankColor: string;
};

export type TrendIconProps = {
  name: string;
  color: string;
};

export type ApiType = {
  url: {
    part1: string;
    part2: string;
  };
  key: string;
};
