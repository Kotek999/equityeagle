import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Chip } from "@react-native-material/core";
import { getDate } from "../../../helpers/functions/getDate";
import { chipData } from "../../Data/ModalChartData/data";
import { COLORS } from "../../../colors";
import { DaysWithChartProps } from "../../../interfaces";
import { JSX } from "../../../types";

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
              color={COLORS.white}
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
    backgroundColor: COLORS.boxGraylightGray,
  },
  chipLabel: {
    fontFamily: "Lato",
  },
});
