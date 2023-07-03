import * as React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Image, StyleSheet } from "react-native";
import { screenWidth } from "../../../helpers/dimensions";
import { useSafeAreaInsets, EdgeInsets } from "react-native-safe-area-context";
import { AppBar } from "@react-native-material/core";
import { logoTitle } from "../../../helpers/imageRequirements";
import { SCREEN } from "../../../../routes";
import { NavigationScreenProps } from "../../../../rootTypeList";
import { JSX } from "../../../types";
import { COLORS } from "../../../colors";

export const Header = ({
  navigation,
}: NavigationScreenProps<SCREEN.About>): JSX => {
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
              <MaterialCommunityIcons
                name="cog-outline"
                size={28}
                color={COLORS.yellowColor}
                onPress={() => navigation.push(SCREEN.About)}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: COLORS.mainGrayColor,
  },
  appBar: {
    backgroundColor: COLORS.darkColor,
    width: screenWidth,
  },
  headerOptions: {
    flexDirection: "row",
    alignItems: "center",
  },
});
