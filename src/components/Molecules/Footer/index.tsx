import isIOS from "../../../helpers/rulesOfDevice/isIOS";
import appJSON from "../../../../app.json";
import React, { useState, useContext, Fragment } from "react";
import { View, StyleSheet, Text } from "react-native";
import { DataContext } from "../../Molecules/StockData";
import { LastRefreshedItem } from "../../Atoms/LastRefreshedItem";
import { StatusItem } from "../../Atoms/StatusItem";
import { ModalStatus } from "../ModalStatus";
import { COLORS } from "../../../colors";
import { JSX, OnPress, ContextType, FooterProps } from "../../../types";

export const Footer = (props: FooterProps): JSX => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const { status }: ContextType = useContext<ContextType>(DataContext);

  const onClickOpenModal: OnPress = () => {
    setModalVisible(!isModalVisible);
  };

  const currentYear: number = new Date().getFullYear();
  const versionValue: string = `Copyright ${"\u00A9"} Equity Eagle ${`(v.${appJSON.expo.version})`} - ${currentYear}`;

  return (
    <View style={styles.footerContainer}>
      <View style={styles.itemsContainer}>
        {props.isAboutScreen ? (
          <View style={styles.appVersionContainer}>
            <Text style={styles.appVersionValue}>{versionValue}</Text>
          </View>
        ) : (
          <Fragment>
            <LastRefreshedItem />
            <StatusItem onPress={onClickOpenModal} status={status} />
            <ModalStatus
              isVisible={isModalVisible}
              onBackdropPress={onClickOpenModal}
            />
          </Fragment>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: COLORS.dark,
    marginBottom: 0,
  },
  itemsContainer: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  appVersionContainer: {
    justifyContent: "center",
    flex: 1,
    padding: 15,
  },
  appVersionValue: {
    textAlign: "center",
    color: COLORS.textVersion,
    fontFamily: "Lato",
    fontSize: 14,
    letterSpacing: 1.1,
  },
});
