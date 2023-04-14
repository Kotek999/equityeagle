import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  BackHandler,
  Alert,
  Linking,
  ActivityIndicator,
  Image,
  ImageSourcePropType,
  ImageURISource,
  Platform,
} from "react-native";
import { JSX } from "../../types";
import { screenWidth } from "../../helpers/dimensions";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Badge, Box } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import isIOS from "../../helpers/rulesOfDevice/isIOS";
import { logoTitle } from "../../helpers/imageRequirements";

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

  const StockData: React.FC<{ symbol: string; place: number }> = ({
    symbol,
    place,
  }) => {
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

        const up: any = () => (
          <MaterialCommunityIcons name="trending-up" size={32} color="lime" />
        );

        const down: any = () => (
          <MaterialCommunityIcons name="trending-down" size={32} color="red" />
        );

        if (prevHighValue !== null && high > prevHighValue) {
          return up;
        } else if (prevLowValue !== null && low < prevLowValue) {
          return down;
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
            // console.log(
            //   `The current status of the ALPHA VANTAGE website is: ${response.status}. `
            // );
            return data;
          } catch (error) {
            console.error("An error occurred while fetching the data.", error);
          }
        };

        // fetchData();

        // let interval = setInterval(() => {
        //   fetchData();
        //   console.log("data refreshed")
        // }, 300000);
        // fetchData();
        // return () => clearInterval(interval);
      }
    }, [symbol]);

    const iconAAPL = require("../../assets/icons/AAPL.png");
    const iconMSFT = require("../../assets/icons/MSFT.png");
    const iconGOOGL = require("../../assets/icons/GOOGL.png");
    const iconTSLA = require("../../assets/icons/TSLA.png");
    const iconNVDA = require("../../assets/icons/NVDA.png");
    const iconDPZ = require("../../assets/icons/DPZ.png");
    const iconCAT = require("../../assets/icons/CAT.png");
    const iconEA = require("../../assets/icons/EA.png");
    const iconNFLX = require("../../assets/icons/NFLX.png");
    const iconSPCE = require("../../assets/icons/SPCE.png");

    interface IconProps {
      source: ImageSourcePropType;
    }

    const Icon = ({ source }: IconProps): JSX => {
      return (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Image
            source={source}
            resizeMode="contain"
            resizeMethod="auto"
            style={{ width: isIOS() ? "100%" : 50, height: 35 }}
          />
        </View>
      );
    };

    type IconType = {
      uri: string;
    };

    const symbolChecker = (symbol: string): JSX.Element | string => {
      const iconMap: Record<string, IconType> = {
        AAPL: iconAAPL,
        MSFT: iconMSFT,
        GOOGL: iconGOOGL,
        TSLA: iconTSLA,
        NVDA: iconNVDA,
        DPZ: iconDPZ,
        CAT: iconCAT,
        EA: iconEA,
        NFLX: iconNFLX,
        SPCE: iconSPCE,
      };

      const source = iconMap[symbol];

      return source ? <Icon source={source} /> : "N/A";
    };

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
            {/* <Text style={{ color: "white", marginRight: 20 }}>Loading...</Text> */}
            {/* <ActivityIndicator size="small" color="#b6843a" /> */}
            <Text style={{ flex: 1, textAlign: "center", color: "white" }}>
              1.
            </Text>
            <Text style={{ flex: 1, textAlign: "center", color: "white" }}>
              Icon
            </Text>
            <Text
              style={{
                flex: 1,
                textAlign: "center",
                color: "white",
                textTransform: "uppercase",
              }}
            >
              symbol
            </Text>
            <Text style={{ flex: 1, textAlign: "center", color: "white" }}>
              N/A
            </Text>
            <Text style={{ flex: 1, textAlign: "center", color: "white" }}>
              N/A
            </Text>
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
              <Text
                style={{
                  flex: 1,
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Lato",
                }}
              >{`${place}.`}</Text>
              <Text style={{ flex: 1, textAlign: "center" }}>
                {symbolChecker(symbol)}
              </Text>
              <Text
                style={{
                  flex: 1,
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Lato",
                }}
              >
                {symbol}
              </Text>
              <Text
                style={{
                  flex: 1,
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Lato",
                }}
              >
                {maxOpen !== null ? maxOpen.toFixed(2) : "N/A"}
              </Text>
              <Text
                style={{
                  flex: 1,
                  textAlign: "center",
                  color:
                    trend === "low"
                      ? "red"
                      : "lime" && trend === "N/A"
                      ? "white"
                      : "white",
                }}
              >
                {trend}
              </Text>
            </View>
          </>
        )}
      </View>
    );
  };

  const symbols = [
    "AAPL",
    "MSFT",
    "GOOGL",
    "TSLA",
    "NVDA",
    "DPZ",
    "CAT",
    "EA",
    "NFLX",
    "SPCE",
  ];
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
          <Image
            resizeMode="contain"
            resizeMethod="auto"
            style={{ width: screenWidth / 2, height: 40 }}
            source={logoTitle}
            alt="titleOfLogo"
          />
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
                  {
                    text: "OK",
                    onPress: () => {
                      if (Platform.OS === "ios") {
                        Linking.openURL("app-settings:");
                      } else {
                        BackHandler.exitApp();
                      }
                    },
                  },
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
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          alignContent: "center",
          alignSelf: "flex-start",
          marginBottom: 10,
        }}
      >
        <Badge
          style={{ marginLeft: 10 }}
          labelStyle={{ color: "#abb8c3" }}
          label="Data refreshed every 5 minutes"
          color="#263238"
        />
      </View>
      <ScrollView
        style={{ bottom: 0, marginBottom: 40, marginTop: 0 }}
        contentContainerStyle={{ paddingBottom: 40, width: screenWidth }}
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
                left: 5,
              }}
            >
              <StockData key={`stockData-${i}`} symbol={symbol} place={i + 1} />
            </Box>
          ))}
        </React.Fragment>
      </ScrollView>
    </View>
  );
};
