import * as React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { COLORS } from "../../../colors";
import { JSX, SettingsCogIconProps } from "../../../types";

export const SettingCogIcon = (props: SettingsCogIconProps): JSX => (
  <MaterialCommunityIcons
    name={props.name as any}
    size={28}
    color={COLORS.yellow}
    onPress={props.onPress}
  />
);
