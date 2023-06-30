import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { JSX, OnPress } from "../../../types";
import { DataContext } from "../../Molecules/StockData";
import { ContextType } from "../../../types";
import { LastRefreshedItem } from "../../Atoms/LastRefreshedItem";
import { StatusItem } from "../../Atoms/StatusItem";
import { ModalStatus } from "../ModalStatus";
import { COLORS } from "../../../colors";

export const Footer = (): JSX => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const { status }: ContextType = useContext<ContextType>(DataContext);

  const onClickOpenModal: OnPress = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.footerContainer}>
      <View style={styles.itemsContainer}>
        <LastRefreshedItem />
        <StatusItem onPress={onClickOpenModal} status={status} />
        <ModalStatus
          isVisible={isModalVisible}
          onBackdropPress={onClickOpenModal}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: COLORS.darkColor,
    marginBottom: 0,
  },
  itemsContainer: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
