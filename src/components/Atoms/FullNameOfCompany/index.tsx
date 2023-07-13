import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { companyNameDataMap } from "../../Data/MapsData";
import { COLORS } from "../../../colors";
import { FullNameOfCompanies } from "../../../enums";
import { JSX, SymbolProps } from "../../../types";

export const FullNameOfCompany = (props: SymbolProps): JSX => {
  const companyFullName: FullNameOfCompanies = companyNameDataMap[props.symbol];

  return (
    <View style={styles.companyNameContainer}>
      <Text style={styles.companyFullName}>{companyFullName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  companyNameContainer: {
    flex: 1,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  companyFullName: {
    textAlign: "center",
    color: COLORS.white,
    fontWeight: "bold",
    justifyContent: "center",
    fontSize: 16,
    letterSpacing: 1.1,
  },
});
