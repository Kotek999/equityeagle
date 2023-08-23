import React, { Fragment, useState, useEffect } from "react";
import Animated, { FadeInUp } from "react-native-reanimated";
import { View } from "react-native";
import { ChartModalNavbar } from "../../../components/Atoms/ChartModalNavbar";
import { BoxOfCurrentCompany } from "../../../components/Atoms/BoxOfCurrentCompany";
import { NoDataForChart } from "../../../components/Atoms/NoDataForChart";
import { DaysWithChart } from "../../Atoms/DaysWithChart";
import { ChartSpinner } from "../../Atoms/ChartSpinner";
import { ChartWithContentProps } from "../../../interfaces";
import { JSX } from "../../../types";
import { ScrollView } from "../../Atoms/ScrollView";
import { AnimateView } from "../../Atoms/AnimateView";

export const ChartWithContent = (props: ChartWithContentProps): JSX => {
  const [isChartLoading, setIsChartLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsChartLoading(false);
    }, 500);
  }, []);

  return (
    <View>
      <Fragment>
        <ChartModalNavbar
          onPress={props.onPress}
          symbolValue={props.symbolValue}
        />
        <ScrollView isMarginExist>
          <AnimateView up>
            <BoxOfCurrentCompany
              placeValue={props.placeValue}
              symbol={props.symbol}
              symbolValue={props.symbolValue}
              maxOpenValue={props.maxOpenValue}
              trendValue={props.trendValue}
            />
          </AnimateView>
          {props.valuesOfData === 0 ? (
            <Fragment>
              {isChartLoading ? <ChartSpinner /> : <NoDataForChart />}
            </Fragment>
          ) : (
            <Fragment>
              {isChartLoading ? (
                <ChartSpinner />
              ) : (
                <DaysWithChart onChangePeriod={props.onChangePeriod}>
                  {props.children}
                </DaysWithChart>
              )}
            </Fragment>
          )}
        </ScrollView>
      </Fragment>
    </View>
  );
};
