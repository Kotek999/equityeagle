import textData from "../../../../textData.json";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { Fragment } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { FetchedDataArea } from "../FetchedDataArea";
import { COLORS } from "../../../colors";
import { StockContainerProps } from "../../../interfaces";
import { JSX } from "../../../types";

export const StockContainer = (props: StockContainerProps): JSX => {
  return (
    <View>
      {props.isDataLoading && !props.data && !props.refreshData ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingValue}>{textData.value.loading}</Text>
          <ActivityIndicator size="small" color={COLORS.yellow} />
        </View>
      ) : props.data && props.refreshData ? (
        <Fragment>
          <FetchedDataArea
            isInfoIcon={true}
            onPress={props.onPress}
            placeValue={props.place}
            symbol={props.symbol}
            maxOpenValue={props.maxOpenValue}
            trendValue={props.trendValue}
          />
        </Fragment>
      ) : !props.refreshData ? (
        <View style={styles.dataContainer}>
          <Text style={styles.refreshValue}>{textData.value.dataRefresh}</Text>
          <MaterialCommunityIcons
            name="database-refresh"
            size={20}
            color={COLORS.iconDataYellow}
          />
        </View>
      ) : (
        <View style={styles.dataContainer}>
          <Text style={styles.noDataValue}>{textData.value.noData}</Text>
          <MaterialCommunityIcons
            name="database-eye-off"
            size={20}
            color={COLORS.iconDataRed}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  loadingValue: {
    color: COLORS.white,
    marginRight: 20,
    letterSpacing: 1.1,
  },
  dataContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  refreshValue: {
    right: 5,
    textAlign: "center",
    color: COLORS.white,
    fontFamily: "Lato",
    letterSpacing: 1.1,
  },
  noDataValue: {
    right: 20,
    textAlign: "center",
    color: COLORS.white,
    fontFamily: "Lato",
    letterSpacing: 1.1,
  },
});
