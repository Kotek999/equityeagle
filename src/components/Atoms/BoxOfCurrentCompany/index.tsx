import * as React from "react";
import { View, StyleSheet } from "react-native";
import { screenWidth } from "../../../helpers/dimensions";
import { Box } from "@react-native-material/core";
import { Divider } from "../../../components/Atoms/Divider";
import { FetchedDataArea } from "../FetchedDataArea";
import { COLORS } from "../../../colors";
import { BoxOfCurrentCompanyProps } from "../../../interfaces";
import { JSX } from "../../../types";

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
    backgroundColor: COLORS.boxGraylightGray,
    justifyContent: "center",
  },
});
