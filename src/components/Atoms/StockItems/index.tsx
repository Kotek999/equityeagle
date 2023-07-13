import * as React from "react";
import { StyleSheet } from "react-native";
import { screenWidth } from "../../../helpers/dimensions";
import { Box } from "@react-native-material/core";
import { ScrollView } from "../../../components/Atoms/ScrollView";
import { randomSymbols } from "../../../helpers/functions/randomSymbols";
import { StockData } from "../../Molecules/StockData";
import { COLORS } from "../../../colors";
import { Symbols } from "../../../enums";
import { StockItemsProps } from "../../../interfaces";
import { JSX } from "../../../types";

export const StockItems = (props: StockItemsProps): JSX => {
  return (
    <ScrollView>
      <React.Fragment>
        {randomSymbols.map(
          (symbol, i): JSX => (
            <Box
              key={`box-${i}`}
              w={screenWidth - 20}
              h={50}
              m={4}
              radius={14}
              style={styles.box}
            >
              <StockData
                isStatusExist={props.isStatusExist}
                key={`stockData-${i}`}
                symbol={symbol as Symbols}
                place={i + 1}
                onModalOpened={props.onModalOpened}
              />
            </Box>
          )
        )}
      </React.Fragment>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: COLORS.boxGraylightGray,
    justifyContent: "center",
    marginBottom: 12,
    left: 5,
  },
});
