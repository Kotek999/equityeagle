import * as React from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { SafeAreaView } from "react-native";
import { screenHeight } from "../../../helpers/dimensions";
import { COLORS } from "../../../colors";
import { ModalContainerProps } from "../../../interfaces";
import { JSX } from "../../../types";

export const ModalContainer = (props: ModalContainerProps): JSX => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <BottomSheetModal
        enablePanDownToClose={false}
        ref={props.methodRef}
        index={0}
        snapPoints={[screenHeight, "80%"]}
        handleComponent={null}
        backgroundStyle={{ backgroundColor: COLORS.dark }}
        enableDismissOnClose={true}
      >
        {props.children}
      </BottomSheetModal>
    </SafeAreaView>
  );
};
