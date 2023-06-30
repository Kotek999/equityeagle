import * as React from "react";
import Toast from "react-native-toast-message";
import { View, StyleSheet } from "react-native";
import { NavigationScreenProps } from "../../../../rootTypeList";
import { JSX } from "../../../types";
import { Header } from "../../Atoms/Header";
import { CategoryBox } from "../../Atoms/CategoryBox";
import { BadgeWithIcon } from "../../Atoms/BadgeWithIcon";
import { StockItems } from "../../Atoms/StockItems";
import { Footer } from "../Footer";
import { SCREEN } from "../../../../routes";
import { DataProvider } from "../../Atoms/Context";
import { COLORS } from "../../../colors";

export const StockContent = ({
  navigation,
  onModalOpened,
}: NavigationScreenProps<SCREEN.About>): JSX => {
  return (
    <View style={styles.contentContainer}>
      <Header navigation={navigation} />
      <CategoryBox />
      <Toast position="top" visibilityTime={2000} />
      <BadgeWithIcon />
      <DataProvider>
        <StockItems
          isStatusExist={false}
          onModalOpened={onModalOpened as Function}
        />
        <Footer />
      </DataProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 0,
    width: "100%",
    backgroundColor: COLORS.mainGrayColor,
  },
});
