import React, { useState, useEffect, useRef } from "react";
import { View, Text, ScrollView } from "react-native";
import { MainScreenProps } from "../../../rootTypeList";
import { SCREEN } from "../../../routes";
import { JSX } from "../../types";
import { screenWidth } from "../../helpers/dimensions";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const MainScreen = ({ navigation }: MainScreenProps): JSX => {
  const insets = useSafeAreaInsets();

  interface Data {
    "Meta Data": {
      "1. Information": string;
      "2. Symbol": string;
      "3. Last Refreshed": string;
      "4. Interval": string;
      "5. Output Size": string;
      "6. Time Zone": string;
    };
    "Time Series (5min)": {
      [date: string]: {
        "1. open": string;
        "2. high": string;
        "3. low": string;
        "4. close": string;
        "5. volume": string;
      };
    };
    [key: string]: any;
  }

  const StockData = () => {
    const [symbol, setSymbol] = useState<string>("");
    const [maxOpen, setMaxOpen] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const mountedRef = useRef<boolean>(false);
    const [trend, setTrend] = useState<string>("");

    const trendUpdate = (data: any): string => {
      let prevHighValue: number | null = null;
      let prevLowValue: number | null = null;

      for (let key in data) {
        const high: number = parseFloat(data[key]["2. high"]);
        const low: number = parseFloat(data[key]["3. low"]);

        if (prevHighValue !== null && high > prevHighValue) {
          return "high";
        } else if (prevLowValue !== null && low < prevLowValue) {
          return "low";
        }

        prevHighValue = high;
        prevLowValue = low;
      }

      return "No change";
    };

    const apiUrl: string =
      "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo";

    useEffect(() => {
      if (!mountedRef.current) {
        mountedRef.current = true;
        const fetchData = async () => {
          try {
            // for IBM we have values (because it's a demo), for the rest, you need to provide the key.
            const response = await fetch(apiUrl);
            const data: Data = await response.json();
            setSymbol(data["Meta Data"]["2. Symbol"]);
            const timeSeriesData: Record<
              string,
              { "1. open": string; "2. high": string; "3. low": string }
            > = data["Time Series (5min)"];

            const date = "2023-04-06 20:00:00";
            const dataForDate: any =
              data["Time Series (5min)"][date] ?? undefined;

            if (dataForDate) {
              console.log(dataForDate);
            } else {
              console.log(`No data found for the date ${date}`);
            }

            let maxOpen: number | null = null;
            for (let key in timeSeriesData) {
              const open: number = parseFloat(timeSeriesData[key]["1. open"]);
              if (maxOpen === null || open > maxOpen) {
                maxOpen = open;
              }
            }

            const newTrend = trendUpdate(data["Time Series (5min)"]);
            setTrend(newTrend);

            setMaxOpen(maxOpen);

            setIsLoading(false);
            // console.log(data);
            // console.log(symbol);
            // console.log(maxOpen);
          } catch (error) {
            console.error("An error occurred while fetching the data.", error);
          }
        };
        fetchData();
        // let interval = setInterval(() => {
        //   fetchData();
        //   console.log("data refreshed")
        // }, 300000);
        // fetchData();
        // return () => clearInterval(interval);
      }
    }, []);
    console.log("Trend:", trend);

    return (
      <View>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <View>
            <Text>Name: {symbol}</Text>
            <Text>Max Open (value): {maxOpen}</Text>
            <Text>Trend: {trend}</Text>
          </View>
        )}
      </View>
    );
  };

  // Status Codes:

  //1XX - Informational
  //2XX - Success   - (good)
  //3XX - Redirection
  //4XX - Client Error (bad)
  //5XX - Server Error

  // const symbol = "AAPL";

  return (
    <View
      style={{
        alignItems: "center",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop: 0,
        width: "100%",
        backgroundColor: "#263238",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: screenWidth - 20,
          paddingTop: insets.top + 20,
          backgroundColor: "#263238",
          top: 0,
        }}
      >
        <Text style={{ color: "white", fontSize: 23, marginBottom: 10 }}>
          Main Screen
        </Text>
        <MaterialCommunityIcons
          name="close"
          size={32}
          color="red"
          onPress={() => navigation.push(SCREEN.Home)}
        />
      </View>
      <Box
        w={screenWidth - 20}
        h={50}
        m={4}
        radius={14}
        style={{
          backgroundColor: "#37d67a",
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Text>Position</Text>
          <Text>Icon</Text>
          <Text>Name</Text>
          <Text>Value</Text>
          <Text>Increase / Decrease</Text>
        </View>
      </Box>
      <ScrollView
        style={{ bottom: 0, marginBottom: 40, marginTop: 0 }}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {Array.from(Array(1)).map((_, index) => (
          <View key={index}>
            <Box
              w={screenWidth - 20}
              h={50}
              m={4}
              radius={14}
              style={{ backgroundColor: "#455a64", top: 20, margin: 10 }}
            />
            <StockData />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
