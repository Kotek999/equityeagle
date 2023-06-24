export type JSX = JSX.Element;

export type OnPress = () => void;

export type ButtonProps = {
  onPress: OnPress;
  title: string;
};

// for images
export type SourceType = {
  uri: string;
};

export type Check<T> = Record<string, T>;

export type CheckProps<T> = {
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
