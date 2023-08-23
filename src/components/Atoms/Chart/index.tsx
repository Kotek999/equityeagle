import * as React from "react";
import textData from "../../../../textData.json";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Text, StyleSheet } from "react-native";
import { screenWidth } from "../../../helpers/dimensions";
import { LineChart } from "react-native-gifted-charts";
import { ScrollView } from "../../../components/Atoms/ScrollView";
import { COLORS } from "../../../colors";
import { ChartProps } from "../../../interfaces";
import { JSX, ItemType } from "../../../types";

export const Chart = (props: ChartProps): JSX => {
  return (
    <ScrollView isMarginExist>
      <View style={styles.chartContainer}>
        <View style={styles.periodWithAverageValuesContainer}>
          <Icon
            size={26}
            color={COLORS.yellow}
            name="update"
            onPress={props.onPress}
          />
          <Text style={styles.periodValue}>{props.periodValue}</Text>
          <Text style={styles.averageTitle}>{textData.value.averageTitle}</Text>
          <Text style={styles.averageValue}>{props.averageValue}</Text>
        </View>
        <View style={styles.chartAreaContainer}>
          <LineChart
            width={screenWidth - 70}
            curved
            isAnimated
            thickness={2}
            maxValue={400}
            noOfSections={4}
            animateOnDataChange={false}
            animationDuration={1000}
            onDataChangeAnimationDuration={300}
            dataPointsColor={COLORS.yellow}
            areaChart
            data={props.data}
            startOpacity={0.9}
            endOpacity={0.2}
            spacing={60}
            hideRules
            initialSpacing={40}
            color={COLORS.chartLime}
            startFillColor={COLORS.chartFillGreen}
            endFillColor={COLORS.dark}
            rulesType="solid"
            rulesColor={COLORS.gray}
            yAxisColor={COLORS.white}
            yAxisThickness={0}
            yAxisTextStyle={{ color: COLORS.gray }}
            xAxisColor={COLORS.blank}
            pointerConfig={{
              pointerStripHeight: 160,
              pointerStripColor: COLORS.lightGray,
              pointerStripWidth: 2,
              pointerColor: COLORS.lightGray,
              radius: 6,
              pointerLabelWidth: 100,
              pointerLabelHeight: 90,
              activatePointersOnLongPress: true,
              autoAdjustPointerLabelPosition: false,
              pointerLabelComponent: (item: ItemType[]): JSX => {
                return (
                  <View style={styles.pointerLabelContainer}>
                    <View style={styles.labelContainer}>
                      <Text style={styles.labelValue}>{item[0].value}</Text>
                    </View>
                  </View>
                );
              },
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    width: screenWidth,
    padding: 20,
    backgroundColor: COLORS.dark,
  },
  periodWithAverageValuesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  periodValue: {
    left: 10,
    flex: 1,
    color: COLORS.white,
    fontSize: 16,
    fontFamily: "Lato",
  },
  averageTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: "Lato",
  },
  averageValue: {
    color: COLORS.yellow,
    fontSize: 16,
    fontWeight: "bold",
    left: 5,
  },
  chartAreaContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    padding: 20,
  },
  pointerLabelContainer: {
    height: 90,
    width: 80,
    justifyContent: "center",
    marginTop: -30,
    marginLeft: -30,
  },
  labelContainer: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: COLORS.blank,
  },
  labelValue: {
    color: COLORS.white,
    fontWeight: "bold",
    textAlign: "center",
  },
});
