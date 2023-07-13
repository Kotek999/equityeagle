import Modal from "react-native-modal";
import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { DataContext } from "../../Molecules/StockData";
import { ModalStatusDivider } from "../../Atoms/ModalStatusDivider";
import { CurrentStatus } from "../../Atoms/CurrentStatus";
import { Codes } from "../../Atoms/Codes";
import { screenHeight } from "../../../helpers/dimensions";
import { COLORS } from "../../../colors";
import { ModalStatusProps } from "../../../interfaces";
import { JSX, ContextType } from "../../../types";

export const ModalStatus = (props: ModalStatusProps): JSX => {
  const { status }: ContextType = useContext<ContextType>(DataContext);

  return (
    <Modal
      backdropColor={COLORS.dark}
      isVisible={props.isVisible}
      onBackdropPress={props.onBackdropPress}
    >
      <View style={{ height: screenHeight / 2, backgroundColor: COLORS.dark }}>
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
    color: COLORS.textGray,
    alignSelf: "flex-start",
    marginBottom: 20,
    letterSpacing: 1.1,
    fontFamily: "Lato",
  },
});
