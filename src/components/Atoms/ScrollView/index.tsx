import * as React from "react";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { ScrollView as ScrollContainer } from "react-native";
import { JSX, ChildProps } from "../../../types";
import { screenWidth } from "../../../helpers/dimensions";

export const ScrollView = (props: ChildProps): JSX => {
  const insets: EdgeInsets = useSafeAreaInsets();
  return (
    <ScrollContainer
      style={{
        bottom: 0,
        marginBottom: 0,
        marginTop: 0,
      }}
      contentContainerStyle={{
        paddingBottom: insets.bottom,
        width: screenWidth,
      }}
    >
      {props.children}
    </ScrollContainer>
  );
};
