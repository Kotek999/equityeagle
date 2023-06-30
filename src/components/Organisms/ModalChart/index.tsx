import React, { useState } from "react";
import {
  ItemType,
  JSX,
  OpenValuesType,
  AverageForDayType,
  OpenForType,
  ChartDataProps,
} from "../../../types";
import { getDate } from "../../../helpers/functions/getDate";
import { calculateOpenForDate } from "../../../helpers/functions/calculateOpenForDate";
import { getAverage } from "../../../helpers/functions/getAverage";
import { label } from "../../../components/Atoms/Label";
import { Chart } from "../../../components/Atoms/Chart";
import { formatOpen } from "../../../helpers/functions/formatOpen";
import { createDataItem } from "../../../helpers/functions/createDataItem";
import { dateForDay } from "../../Data/ModalChartData/data";
import { ChartWithContent } from "../../Molecules/ChartWithContent";
import { ModalContentWithChartProps } from "../../../interfaces";
import { COLORS } from "../../../colors";

export const ModalContentWithChart = (
  props: ModalContentWithChartProps
): JSX => {
  const [period, setPeriod] = useState<string>(getDate(0));

  const onClickChangePeriod = (date: string): void => {
    setPeriod(date);
  };

  const openFor28: OpenForType = formatOpen(
    props.openForDateIndex3,
    props.maxOpenValue
  );
  const openFor21: OpenForType =
    props.openForDateIndex2 === 0
      ? props.maxOpenValue.toFixed(2)
      : props.openForDateIndex2.toFixed(2);
  const openFor14: OpenForType =
    props.openForDateIndex1 === 0
      ? props.maxOpenValue.toFixed(2)
      : props.openForDateIndex1.toFixed(2);
  const openFor7: OpenForType = formatOpen(
    props.openForDateIndex0,
    props.maxOpenValue
  );

  const chartDataCurrent: ItemType[] = [
    createDataItem(openFor28, props.openForDateIndex3, 28),
    createDataItem(openFor21, props.openForDateIndex2, 21),
    createDataItem(openFor14, props.openForDateIndex1, 14),
    createDataItem(openFor7, props.openForDateIndex0, 7),
    {
      value: Number(props.maxOpenValue.toFixed(2)),
      labelTextStyle: { color: COLORS.lightGrayColor, width: 60 },
      labelComponent: () => label(getDate(0)),
    },
  ];

  const chartData7Days: ItemType[] = [
    createDataItem(openFor28, props.openForDateIndex3, 28),
    createDataItem(openFor21, props.openForDateIndex2, 21),
    createDataItem(openFor14, props.openForDateIndex1, 14),
    createDataItem(openFor7, props.openForDateIndex0, 7),
  ];

  const chartData14Days: ItemType[] = [
    createDataItem(openFor28, props.openForDateIndex3, 28),
    createDataItem(openFor21, props.openForDateIndex2, 21),
    createDataItem(openFor14, props.openForDateIndex1, 14),
  ];

  const chartData21Days: ItemType[] = [
    createDataItem(openFor28, props.openForDateIndex3, 28),
    createDataItem(openFor21, props.openForDateIndex2, 21),
  ];

  const chartData28Days: ItemType[] = [
    createDataItem(openFor28, props.openForDateIndex3, 28),
  ];

  const openForDateRefs: number[] = [
    props.openForDateIndex0,
    props.openForDateIndex1,
    props.openForDateIndex2,
    props.openForDateIndex3,
  ];

  const openValues: OpenValuesType = {
    openCurrent: calculateOpenForDate(openForDateRefs) + props.maxOpenValue,
    open7: calculateOpenForDate(openForDateRefs),
    open14: calculateOpenForDate(openForDateRefs.slice(1)),
    open21: calculateOpenForDate(openForDateRefs.slice(2)),
    open28: openForDateRefs[3],
  };

  const averageSwitcher = (value: string): number => {
    const averageForDayMap: Record<string, { value: number; count: number }> = {
      [dateForDay.day7]: { value: openValues.open7, count: 4 },
      [dateForDay.day14]: { value: openValues.open14, count: 3 },
      [dateForDay.day21]: { value: openValues.open21, count: 2 },
      [dateForDay.day28]: { value: openValues.open28, count: 1 },
      [dateForDay.day0]: { value: openValues.openCurrent, count: 5 },
    };

    const averageForDay: AverageForDayType =
      averageForDayMap[value] || averageForDayMap[dateForDay.day0];

    return getAverage(averageForDay.value, averageForDay.count);
  };

  const periodSwitcher = (period: string): JSX => {
    const periodDataMap: Record<string, ItemType[]> = {
      [dateForDay.day7]: chartData7Days,
      [dateForDay.day14]: chartData14Days,
      [dateForDay.day21]: chartData21Days,
      [dateForDay.day28]: chartData28Days,
      [dateForDay.day0]: chartDataCurrent,
    };

    const periodData: ItemType[] = periodDataMap[period] || chartDataCurrent;

    return <ChartData data={periodData} />;
  };

  const ChartData = (props: ChartDataProps): JSX => {
    return (
      <Chart
        onPress={() => onClickChangePeriod(getDate(0))}
        periodValue={`Period ${period}`}
        averageValue={averageSwitcher(period)}
        data={props.data}
      />
    );
  };

  const valuesOfData: number =
    props.openForDateIndex0 ||
    props.openForDateIndex1 ||
    props.openForDateIndex2 ||
    props.openForDateIndex3;

  const onChangePeriod = (period: string): void => {
    onClickChangePeriod(period);
  };

  return (
    <ChartWithContent
      symbolValue={props.symbolValue}
      symbol={props.symbol}
      onPress={props.closeModalWithChart}
      placeValue={props.placeValue}
      maxOpenValue={props.maxOpenValue}
      trendValue={props.trendValue}
      valuesOfData={valuesOfData}
      onChangePeriod={onChangePeriod}
    >
      {periodSwitcher(period)}
    </ChartWithContent>
  );
};
