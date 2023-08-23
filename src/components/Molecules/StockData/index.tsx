import textData from "../../../../textData.json";
import Toast from "react-native-toast-message";
import React, {
  Fragment,
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";
import { Text } from "react-native";
import { StockContainer } from "../../../components/Atoms/StockContainer";
import { DataContext } from "../../Atoms/Context";
import { fetchStockData } from "../../../helpers/functions/fetchStockData";
import { Symbols } from "../../../enums";
import {
  Data,
  StockDataProps,
  FetchStockDataProps as DataItemsProps,
} from "../../../interfaces";
import { JSX, OpenType, ContextType } from "../../../types";

const StockData = (props: StockDataProps): JSX => {
  const { status, setStatus }: ContextType =
    useContext<ContextType>(DataContext);

  const [maxOpen, setMaxOpen] = useState<OpenType>(null);

  const [openForDate, setOpenForDate] = useState<OpenType[]>([
    null,
    null,
    null,
  ]);

  const [isDataLoading, setIsDataLoading] = useState<boolean>(true);
  const [trend, setTrend] = useState<JSX>(<></>);
  const mountedRef = useRef<boolean>(false);

  const [data, setData] = useState<Data>();
  const [refreshData, setRefreshData] = useState<Data>();
  const [fetchError, setFetchError] = useState<unknown>();

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Data refreshed",
    });
  };

  const stockData: Data = data as Data;
  const stockSymbol: Symbols = props.symbol;

  const dataItems: DataItemsProps = {
    stockData,
    stockSymbol,
    setStatus,
    setMaxOpen,
    setTrend,
    setData,
    setRefreshData,
    openForDate,
    setOpenForDate,
    setIsDataLoading,
    setFetchError,
  };

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      fetchStockData(dataItems);
      let timeOut: number = 1800000;
      let interval = setInterval(() => {
        setRefreshData(data);
        fetchStockData(dataItems);
        showToast();
        setIsDataLoading(false);
      }, timeOut);
      return () => clearInterval(interval);
    }
  }, [props.symbol]);

  return (
    <Fragment>
      {props.isStatusExist && (
        <Text>{`${textData.value.statusTitle}${status}`}</Text>
      )}
      <StockContainer
        isDataLoading={isDataLoading}
        data={data}
        refreshData={refreshData}
        onPress={() => {
          props.onModalOpened(
            props.symbol,
            props.place,
            maxOpen,
            openForDate[0],
            openForDate[1],
            openForDate[2],
            openForDate[3],
            trend
          );
        }}
        place={props.place}
        symbol={props.symbol}
        maxOpenValue={maxOpen}
        trendValue={trend}
      />
    </Fragment>
  );
};

export { StockData, DataContext };
