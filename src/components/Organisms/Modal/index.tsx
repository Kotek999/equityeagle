import * as React from "react";
import isIOS from "../../../helpers/rulesOfDevice/isIOS";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets, EdgeInsets } from "react-native-safe-area-context";
import { screenHeight, screenWidth } from "../../../helpers/dimensions";
import { ContentSwitcher } from "../../Molecules/ContentSwitcher";
import { ProductImage } from "../../Atoms/ProductImage";
import { ThemeImage } from "../../Atoms/ThemeImage";
import { ModalNavbar } from "../../Atoms/ModalNavbar";
import { Divider } from "../../Atoms/Divider";
import { ScrollView } from "../../Atoms/ScrollView";
import { ModalProps } from "../../../interfaces";
import { JSX } from "../../../types";
import { StatusBar } from "expo-status-bar";

export const Modal = (props: ModalProps): JSX => {
  const insets: EdgeInsets = useSafeAreaInsets();

  return (
    <View style={styles.modalContainer}>
      <ThemeImage symbol={props.symbol} />
      <ModalNavbar
        openModalWithChart={props.openModalWithChart}
        closeModal={props.closeModal}
      >
        {props.value}
      </ModalNavbar>
      <Divider />
      <ScrollView isMarginExist>
        <View style={{ flex: 1 }}>
          <View style={styles.contentWithProductContainer}>
            <View
              style={{ ...styles.contentContainer, paddingBottom: insets.top }}
            >
              <ContentSwitcher symbol={props.symbol} isName={false} />
            </View>
            <View style={{ flex: 1 }}>
              <ProductImage symbol={props.symbol} />
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar style={"light"} />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    position: "absolute",
    paddingTop: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: screenHeight,
  },
  contentWithProductContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    width: screenWidth,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
