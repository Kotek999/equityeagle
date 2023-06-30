import * as React from "react";
import { View, StyleSheet } from "react-native";
import { JSX } from "../../../types";
import { screenWidth } from "../../../helpers/dimensions";
import { Box } from "@react-native-material/core";
import { Divider } from "../../../components/Atoms/Divider";
import { FetchedDataArea } from "../FetchedDataArea";
import { BoxOfCurrentCompanyProps } from "../../../interfaces";
import { COLORS } from "../../../colors";

export const BoxOfCurrentCompany = (props: BoxOfCurrentCompanyProps): JSX => {
  return (
    <View>
      <Divider />
      <View style={styles.currentCompanyContainer}>
        <Box
          w={screenWidth - 40}
          h={50}
          mt={20}
          mb={20}
          radius={14}
          style={styles.boxAreaContainer}
        >
          <FetchedDataArea
            isInfoIcon={false}
            placeValue={props.placeValue}
            symbol={props.symbol}
            symbolValue={props.symbolValue}
            maxOpenValue={props.maxOpenValue}
            trendValue={props.trendValue}
          />
        </Box>
      </View>
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  currentCompanyContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  boxAreaContainer: {
    backgroundColor: COLORS.boxGraylightGrayColor,
    justifyContent: "center",
  },
});
