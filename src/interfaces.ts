import { Symbols, Products } from "./enums";
import { OnPress, JSX, OpenType, FactsData, ItemType } from "./types";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

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
  onBackdropPress: OnPress
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
  children: React.ReactNode
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
  trendValue: string;
}

export interface StatusItemProps {
  status: number;
  onPress: OnPress
}

export interface ModalNavbarProps {
  openModalWithChart: OnPress;
  children: React.ReactNode;
  closeModal: OnPress
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
  trendValue: string;
  placeValue: number;
  isInfoIcon: boolean;
  onPress?: OnPress;
  symbol: Symbols;
  symbolValue?: string;
  maxOpenValue: OpenType;
}

export interface DaysWithChartProps {
  onChangePeriod: ((value: string) => number);
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