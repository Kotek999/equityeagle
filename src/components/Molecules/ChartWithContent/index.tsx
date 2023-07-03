import React, { Fragment, useState, useEffect } from "react";
import { View } from "react-native";
import { ChartModalNavbar } from "../../../components/Atoms/ChartModalNavbar";
import { BoxOfCurrentCompany } from "../../../components/Atoms/BoxOfCurrentCompany";
import { NoDataForChart } from "../../../components/Atoms/NoDataForChart";
import { DaysWithChart } from "../../Atoms/DaysWithChart";
import { JSX } from "../../../types";
import { ChartSpinner } from "../../Atoms/ChartSpinner";
import { ChartWithContentProps } from "../../../interfaces";

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
        <BoxOfCurrentCompany
          placeValue={props.placeValue}
          symbol={props.symbol}
          symbolValue={props.symbolValue}
          maxOpenValue={props.maxOpenValue}
          trendValue={props.trendValue}
        />

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
      </Fragment>
    </View>
  );
};
