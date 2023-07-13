import * as React from "react";
import isIOS from "../../../helpers/rulesOfDevice/isIOS";
import { ScrollView as ScrollContainer } from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { screenWidth } from "../../../helpers/dimensions";
import { JSX, ChildProps } from "../../../types";

export const ScrollView = (props: ChildProps): JSX => {
  const insets: EdgeInsets = useSafeAreaInsets();
  return (
    <ScrollContainer
      style={{
        bottom: 0,
        marginBottom: props.isMarginExist ? (isIOS() ? 20 : 0) : 0,
        marginTop: 0,
      }}
      contentContainerStyle={{
        paddingBottom: insets.bottom,
        width: screenWidth,
      }}
      showsVerticalScrollIndicator={false}
    >
      {props.children}
    </ScrollContainer>
  );
};
