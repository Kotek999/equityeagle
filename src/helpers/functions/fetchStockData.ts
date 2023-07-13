import textData from "../../../textData.json";
import { getStockAPI } from "./getAPI";
import { maxOpenUpdate } from "./maxOpenUpdate";
import { trendUpdate } from "./trendUpdate";
import { openForDateUpdate } from "./openForDateUpdate";
import { FetchStockDataProps } from "../../interfaces";

export const fetchStockData = async (
  props: FetchStockDataProps
): Promise<void> => {
  const stockAPI: string = getStockAPI(props.stockSymbol);

  try {
    const response: Response = await fetch(stockAPI);
    props.stockData = await response.json();

    if (response.status !== 0) {
      const statusCode: number = response.status;
      props.setStatus(statusCode);
    }

    const stockData: Record<
      string,
      {
        "1. open": string;
        "2. high": string;
        "3. low": string;
      }
    > = props.stockData["Time Series (5min)"];

    props.setMaxOpen(maxOpenUpdate(stockData));
    props.setTrend(trendUpdate(stockData));

    props.setData(props.stockData);
    props.setRefreshData(props.stockData);

    if (props.openForDate != null) {
      props.setOpenForDate([
        openForDateUpdate(stockData, 7),
        openForDateUpdate(stockData, 14),
        openForDateUpdate(stockData, 21),
        openForDateUpdate(stockData, 28),
      ]);
    } else {
      console.log(textData.value.errorWithFetch);
    }

    props.setIsDataLoading(false);
  } catch (error) {
    props.setFetchError(error);
  }
};
