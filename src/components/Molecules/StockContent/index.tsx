import * as React from "react";
import Toast from "react-native-toast-message";
import { View, StyleSheet } from "react-native";
import { Header } from "../../Atoms/Header";
import { CategoryBox } from "../../Atoms/CategoryBox";
import { BadgeWithIcon } from "../../Atoms/BadgeWithIcon";
import { StockItems } from "../../Atoms/StockItems";
import { Footer } from "../Footer";
import { DataProvider } from "../../Atoms/Context";
import { COLORS } from "../../../colors";
import { JSX, OnPress } from "../../../types";
import { SCREEN } from "../../../../routes";
import { NavigationScreenProps } from "../../../../rootTypeList";

export const StockContent = ({
  navigation,
  onModalOpened,
}: NavigationScreenProps<SCREEN.Main>): JSX => {
  const onClickGoToAboutScreen: OnPress = (): void =>
    navigation.push(SCREEN.About);

  return (
    <View style={styles.contentContainer}>
      <Header
        isCogIcon
        isArticleScreen={false}
        isCogIconSelected={false}
        onPress={onClickGoToAboutScreen}
      />
      <CategoryBox />
      <Toast position="top" visibilityTime={2000} />
      <BadgeWithIcon />
      <DataProvider>
        <StockItems
          isStatusExist={false}
          onModalOpened={onModalOpened as Function}
        />
        <Footer isAboutScreen={false} />
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
    backgroundColor: COLORS.mainGray,
  },
});
