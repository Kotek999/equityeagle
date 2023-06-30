import * as React from "react";
import { View, StyleSheet } from "react-native";
import { JSX, SymbolProps } from "../../../types";
import { screenWidth } from "../../../helpers/dimensions";
import { Badge } from "@react-native-material/core";
import { FullNameOfCompany } from "../../../components/Atoms/FullNameOfCompany";
import { COLORS } from "../../../colors";

export const NameOfCompany = (props: SymbolProps): JSX => {
  return (
    <View style={styles.nameOfCompanyContainer}>
      <View style={styles.nameContainer}>
        <Badge
          style={styles.badgeContent}
          label={<FullNameOfCompany symbol={props.symbol} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nameOfCompanyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  badgeContent: {
    width: screenWidth / 2,
    height: 50,
    borderRadius: 10,
    backgroundColor: COLORS.opacityDarkColor,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});
