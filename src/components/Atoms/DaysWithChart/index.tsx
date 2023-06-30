import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Chip } from "@react-native-material/core";
import { JSX } from "../../../types";
import { getDate } from "../../../helpers/functions/getDate";
import { chipData } from "../../Data/ModalChartData/data";
import { DaysWithChartProps } from "../../../interfaces";
import { COLORS } from "../../../colors";

export const DaysWithChart = (props: DaysWithChartProps): JSX => {
  return (
    <View>
      <View style={styles.chipContainer}>
        {chipData.map((chip, i): JSX => {
          return (
            <Chip
              key={`chip-${i}`}
              style={styles.chip}
              labelStyle={styles.chipLabel}
              label={chip.label}
              color={COLORS.whiteColor}
              onPress={() => props.onChangePeriod(getDate(chip.day))}
            />
          );
        })}
      </View>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  chipContainer: {
    width: "100%",
    marginTop: 20,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  chip: {
    alignSelf: "center",
    backgroundColor: COLORS.boxGraylightGrayColor,
  },
  chipLabel: {
    fontFamily: "Lato",
  },
});
