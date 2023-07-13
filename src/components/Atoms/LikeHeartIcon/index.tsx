import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { COLORS } from "../../../colors";
import { JSX } from "../../../types";

export const LikeHeartIcon = (): JSX => {
  const [iconColor, setIconColor] = useState<string | null | undefined>();

  const onClickChangeIconColor = (): void => {
    const newIconColor: string | null =
      iconColor === COLORS.red ? null : COLORS.red;
    setIconColor(newIconColor);
  };

  return (
    <TouchableOpacity
      style={{ alignItems: "center", justifyContent: "center" }}
      onPress={onClickChangeIconColor}
    >
      <MaterialCommunityIcons
        name="heart"
        size={32}
        color={iconColor || COLORS.gray}
      />
    </TouchableOpacity>
  );
};
