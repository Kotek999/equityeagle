import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  BackHandler,
  Alert,
  ActivityIndicator,
} from "react-native";
import { JSX } from "../../types";
import { screenWidth } from "../../helpers/dimensions";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const MainScreen = (): JSX => {
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
    "Time Series (5min)": Record<
      string,
      { "1. open": string; "2. high": string; "3. low": string }
    >;
  }

  const StockData: React.FC<{ symbol: string }> = ({ symbol }) => {
    const [maxOpen, setMaxOpen] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [trend, setTrend] = useState<string>("");
    const mountedRef = useRef<boolean>(false);

    const maxOpenUpdate = (timeSeriesData: Data["Time Series (5min)"]) => {
      let maxOpen: number | null = null;
      for (let key in timeSeriesData) {
        const open: number = parseFloat(timeSeriesData[key]["1. open"]);
        if (maxOpen === null || open > maxOpen) {
          maxOpen = open;
        }
      }
      return maxOpen;
    };

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

      return "N/A";
    };

    // Status Codes:

    //1XX - Informational
    //2XX - Success   - (good)
    //3XX - Redirection
    //4XX - Client Error (bad)
    //5XX - Server Error

    useEffect(() => {
      if (!mountedRef.current) {
        mountedRef.current = true;
        // for MSFT we have values (because it's a demo), for the rest, you need to provide the key.
        const fetchData = async (): Promise<any> => {
          const apiUrl: string = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=demo`;

          try {
            const response = await fetch(apiUrl);
            const data: Data = await response.json();
            setMaxOpen(maxOpenUpdate(data["Time Series (5min)"]));
            setTrend(trendUpdate(data["Time Series (5min)"]));
            setIsLoading(false);
            // console.log(data);
            console.log(
              `The current status of the ALPHA VANTAGE website is: ${response.status}. `
            );
            return data;
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
    }, [symbol]);

    return (
      <View>
        {isLoading ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Text style={{ color: "white", marginRight: 20 }}>Loading...</Text>
            <ActivityIndicator size="small" color="#b6843a" />
          </View>
        ) : (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Text style={{ flex: 1, textAlign: "center" }}>1.</Text>
              <Text style={{ flex: 1, textAlign: "center" }}>Icon</Text>
              <Text style={{ flex: 1, textAlign: "center" }}>{symbol}</Text>
              <Text style={{ flex: 1, textAlign: "center" }}>
                {maxOpen !== null ? maxOpen.toFixed(2) : "N/A"}
              </Text>
              <Text style={{ flex: 1, textAlign: "center" }}>{trend}</Text>
            </View>
          </>
        )}
      </View>
    );
  };

  const symbols = ["AAPL", "MSFT", "GOOGL", "TSLA"];

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
          justifyContent: "space-between",
          paddingTop: insets.top + 20,
          width: screenWidth - 24,
          marginBottom: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 23, fontFamily: "Lato" }}>
            Main Screen
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons
            name="logout"
            size={32}
            color="#d32f2f"
            onPress={() => {
              Alert.alert(
                "Exit",
                "Are you sure you want to exit the app?",
                [
                  { text: "Cancel", style: "cancel" },
                  { text: "OK", onPress: () => BackHandler.exitApp() },
                ],
                { cancelable: false }
              );
            }}
          />
        </View>
      </View>
      <Box
        w={screenWidth - 20}
        h={50}
        m={4}
        radius={14}
        style={{
          // backgroundColor: "#b6843a", the same color as button
          backgroundColor: "#00d084",
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
          <Text
            style={{
              flex: 1,
              textAlign: "center",
              color: "white",
              textTransform: "uppercase",
              fontFamily: "Lato",
            }}
          >
            Place
          </Text>
          <Text
            style={{
              flex: 1,
              textAlign: "center",
              color: "white",
              textTransform: "uppercase",
              fontFamily: "Lato",
            }}
          >
            Icon
          </Text>
          <Text
            style={{
              flex: 1,
              textAlign: "center",
              color: "white",
              textTransform: "uppercase",
              fontFamily: "Lato",
            }}
          >
            Name
          </Text>
          <Text
            style={{
              flex: 1,
              textAlign: "center",
              color: "white",
              textTransform: "uppercase",
              fontFamily: "Lato",
            }}
          >
            Value
          </Text>
          <Text
            style={{
              flex: 1,
              textAlign: "center",
              color: "white",
              textTransform: "uppercase",
              fontFamily: "Lato",
            }}
          >
            Trend
          </Text>
        </View>
      </Box>
      <ScrollView
        style={{ bottom: 0, marginBottom: 40, marginTop: 0 }}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <React.Fragment>
          {symbols.map((symbol, i) => (
            <Box
              key={`box-${i}`}
              w={screenWidth - 20}
              h={50}
              m={4}
              radius={14}
              style={{
                backgroundColor: "#455a64",
                justifyContent: "center",
                marginBottom: 10,
                top: 20,
              }}
            >
              <StockData key={`stockData-${i}`} symbol={symbol} />
            </Box>
          ))}
        </React.Fragment>
      </ScrollView>
    </View>
  );
};
