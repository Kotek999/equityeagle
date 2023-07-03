import React, { Fragment } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { JSX } from "../../../types";
import { FetchedDataArea } from "../FetchedDataArea";
import { StockContainerProps } from "../../../interfaces";
import { COLORS } from "../../../colors";

export const StockContainer = (props: StockContainerProps): JSX => {
  return (
    <View>
      {props.isDataLoading && !props.data && !props.refreshData ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingValue}>Loading...</Text>
          <ActivityIndicator size="small" color={COLORS.yellowColor} />
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
          <Text style={styles.refreshValue}>
            Data is being refreshed, please wait...
          </Text>
          <MaterialCommunityIcons
            name="database-refresh"
            size={20}
            color={COLORS.iconDataYellowColor}
          />
        </View>
      ) : (
        <View style={styles.dataContainer}>
          <Text style={styles.noDataValue}>No data</Text>
          <MaterialCommunityIcons
            name="database-eye-off"
            size={20}
            color={COLORS.iconDataRedColor}
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
    color: COLORS.whiteColor,
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
    color: COLORS.whiteColor,
    fontFamily: "Lato",
    letterSpacing: 1.1,
  },
  noDataValue: {
    right: 20,
    textAlign: "center",
    color: COLORS.whiteColor,
    fontFamily: "Lato",
    letterSpacing: 1.1,
  },
});
