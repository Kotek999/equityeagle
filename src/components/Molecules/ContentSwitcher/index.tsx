import React, { Fragment } from "react";
import { NoContent } from "../../../components/Atoms/NoContent";
import { Product } from "../../../components/Atoms/Product";
import { InterestingFacts } from "../../../components/Atoms/InterestingFacts";
import { symbolDataMap, productDataMap } from "../../Data/MapsData";
import { Products } from "../../../enums";
import { ContentSwitcherProps } from "../../../interfaces";
import { JSX, FactsData } from "../../../types";

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
