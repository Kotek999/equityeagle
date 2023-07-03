import React, {
  Fragment,
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";
import { JSX, OpenType } from "../../../types";
import { Data } from "../../../interfaces";
import Toast from "react-native-toast-message";
import { maxOpenUpdate } from "../../../helpers/functions/maxOpenUpdate";
import { openForDateUpdate } from "../../../helpers/functions/openForDateUpdate";
import { trendUpdate } from "../../../helpers/functions/trendUpdate";
import { StockContainer } from "../../../components/Atoms/StockContainer";
import { DataContext } from "../../Atoms/Context";
import { Text } from "react-native";
import { ContextType } from "../../../types";
import { StockDataProps } from "../../../interfaces";
import { getAPI } from "../../../helpers/functions/getAPI";

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

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Data refreshed",
    });
  };

  useEffect(() => {
    const fetchData = async (data: Data): Promise<void> => {
      const stockAPI: string = getAPI(props.symbol);

      try {
        const response: Response = await fetch(stockAPI);
        data = await response.json();

        if (response.status !== 0) {
          const statusCode: number = response.status;
          setStatus(statusCode);
        }

        const stockData: Record<
          string,
          {
            "1. open": string;
            "2. high": string;
            "3. low": string;
          }
        > = data["Time Series (5min)"];

        setMaxOpen(maxOpenUpdate(stockData));
        setTrend(trendUpdate(stockData));

        setData(data);
        setRefreshData(data);

        if (openForDate != null) {
          setOpenForDate([
            openForDateUpdate(stockData, 7),
            openForDateUpdate(stockData, 14),
            openForDateUpdate(stockData, 21),
            openForDateUpdate(stockData, 28),
          ]);
        } else {
          console.log("error");
        }

        setIsDataLoading(false);
      } catch (error) {
        // console.error(
        //   `An error occurred while fetching the data. For symbol: ${props.symbol}`
        // );
        // console.error("An error occurred while fetching the data.", error);
      }
    };
    fetchData(data as Data);

    // if (!mountedRef.current) {
    //   mountedRef.current = true;
    //   fetchData(data as Data);
    //   let interval = setInterval(() => {
    //     setRefreshData(data);
    //     fetchData(data as Data);
    //     console.log("data refreshed");
    //     showToast();
    //     setIsDataLoading(false);
    //   }, 30000);
    //   return () => clearInterval(interval);
    // }
  }, [props.symbol]);

  return (
    <Fragment>
      {props.isStatusExist ? <Text>Wartość: {status} </Text> : null}
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
