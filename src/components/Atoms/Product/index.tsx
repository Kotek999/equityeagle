import * as React from "react";
import { Text } from "react-native";
import { JSX, ProductProps } from "../../../types";

export const Product = (props: ProductProps): JSX => {
  return <Text>{props.productName}</Text>;
};
