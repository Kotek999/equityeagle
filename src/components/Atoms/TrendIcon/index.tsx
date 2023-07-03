import * as React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { JSX, TrendIconProps } from "../../../types";

export const TrendIcon = (props: TrendIconProps): JSX => (
  <MaterialCommunityIcons
    name={props.name as any}
    size={32}
    color={props.color}
  />
);
