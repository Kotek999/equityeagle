import * as React from "react";
import { View, Image, StyleSheet } from "react-native";
import { screenWidth } from "../../../helpers/dimensions";
import { useSafeAreaInsets, EdgeInsets } from "react-native-safe-area-context";
import { AppBar } from "@react-native-material/core";
import { logoTitle } from "../../../helpers/imageRequirements";
import { SettingCogIcon } from "../SettingsCogIcon";
import { COLORS } from "../../../colors";
import { JSX, HeaderProps } from "../../../types";

export const Header = (props: HeaderProps): JSX => {
  const insets: EdgeInsets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top }}>
      <View style={styles.headerContainer}>
        <AppBar
          style={styles.appBar}
          leading={() => (
            <View style={styles.headerOptions}>
              <Image
                resizeMode="contain"
                resizeMethod="scale"
                style={{ width: "75%", height: 50 }}
                source={logoTitle}
                alt="titleOfLogo"
              />
            </View>
          )}
          trailing={() => (
            <View style={styles.headerOptions}>
              {props.isCogIconSelected ? (
                <SettingCogIcon name="cog" onPress={props.onPress} />
              ) : (
                <SettingCogIcon name="cog-outline" onPress={props.onPress} />
              )}
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    backgroundColor: COLORS.mainGray,
  },
  appBar: {
    backgroundColor: COLORS.dark,
    width: screenWidth,
  },
  headerOptions: {
    flexDirection: "row",
    alignItems: "center",
  },
});
