import React, { Fragment } from "react";
import { JSX, FactsData } from "../../../types";
import { NoContent } from "../../../components/Atoms/NoContent";
import { Product } from "../../../components/Atoms/Product";
import { InterestingFacts } from "../../../components/Atoms/InterestingFacts";
import { Products } from "../../../enums";
import { symbolDataMap, productDataMap } from "../../Data/MapsData";
import { ContentSwitcherProps } from "../../../interfaces";

export const ContentSwitcher = (props: ContentSwitcherProps): JSX => {
  const data: FactsData[] = symbolDataMap[props.symbol];
  const productName: Products = productDataMap[props.symbol];

  return data ? (
    <Fragment>
      {!props.isName ? (
        <InterestingFacts data={data} />
      ) : (
        <Product productName={productName} />
      )}
    </Fragment>
  ) : (
    <NoContent symbol={props.symbol} />
  );
};
