import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { JSX } from "../../../types";
import Modal from "react-native-modal";
import { DataContext } from "../../Molecules/StockData";
import { ContextType } from "../../../types";
import { ModalStatusDivider } from "../../Atoms/ModalStatusDivider";
import { CurrentStatus } from "../../Atoms/CurrentStatus";
import { Codes } from "../../Atoms/Codes";
import { ModalStatusProps } from "../../../interfaces";
import { COLORS } from "../../../colors";

export const ModalStatus = (props: ModalStatusProps): JSX => {
  const { status }: ContextType = useContext<ContextType>(DataContext);

  return (
    <Modal
      backdropColor={COLORS.darkColor}
      isVisible={props.isVisible}
      onBackdropPress={props.onBackdropPress}
    >
      <View style={{ height: "40%", backgroundColor: COLORS.darkColor }}>
        <View style={styles.container}>
          <CurrentStatus status={status} />
          <ModalStatusDivider />
          <Text style={styles.codesTitleValue}>Status Codes:</Text>
          <Codes />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  codesTitleValue: {
    color: COLORS.textGrayColor,
    alignSelf: "flex-start",
    marginBottom: 10,
    letterSpacing: 1.1,
    fontFamily: "Lato",
  },
});
