import * as React from "react";
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

  async function fetchData(symbol: string, apiKey: string): Promise<any> {
    const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`;

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(
          `An error occurred while retrieving data from the ALPHA VANTAGE website, error status code: ${response.status}.`
        );
      }

      // Status Codes:

      //1XX - Informational
      //2XX - Success   - (good)
      //3XX - Redirection
      //4XX - Client Error (bad)
      //5XX - Server Error

      // General Data -->

      // const data = await response.json();
      // return data;

      // Information about the symbol -->

      // const data = await response.json();
      // const stockData = data["Meta Data"];
      // for (let key in stockData) {
      //   if (key === "2. Symbol") {
      //     console.log(stockData[key]);
      //   }
      // }
      // return stockData;

      // Main Information -->

      const data = await response.json();
      const timeSeriesData = data["Time Series (5min)"];
      for (let key in timeSeriesData) {
        if (key === "2023-04-06 11:35:00") {
          console.log(timeSeriesData[key]);
          console.log(response.status);
        }
      }
      return timeSeriesData;
    } catch (error) {
      console.error("An error occurred while displaying the symbol.");
      throw error;
    }
  }

  // const symbol = "AAPL";
  // const apiKey = "SNJTSSXQOWN6LMN8";

  // fetchData(symbol, apiKey)
  //   .catch((error) => {
  //     console.error("An error occurred while fetching the data.", error);
  //   });

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
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
