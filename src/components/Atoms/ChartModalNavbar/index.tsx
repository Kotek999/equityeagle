import * as React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Text, StyleSheet } from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { JSX } from "../../../types";
import { screenWidth } from "../../../helpers/dimensions";
import { Box, IconButton } from "@react-native-material/core";
import { ChartModalNavbarProps } from "../../../interfaces";
import { COLORS } from "../../../colors";

export const ChartModalNavbar = (props: ChartModalNavbarProps): JSX => {
  const insets: EdgeInsets = useSafeAreaInsets();
  return (
    <View
      style={{
        ...styles.navbarContainer,
        paddingTop: insets.top + 10,
      }}
    >
      <View style={styles.optionsOnNavbarContainer}>
        <IconButton
          icon={(props): JSX => <Icon name="arrow-left" {...props} />}
          color={COLORS.yellowColor}
          style={styles.iconButton}
          onPress={props.onPress}
        />

        <Box
          w={screenWidth / 1.5}
          h={50}
          radius={14}
          style={styles.valueWithSymbolContainer}
        >
          <Text style={styles.value}>Chart for:</Text>
          <Text style={styles.symbol}>{props.symbolValue}</Text>
        </Box>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  optionsOnNavbarContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-around",
  },
  iconButton: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.mainGrayColor,
  },
  valueWithSymbolContainer: {
    backgroundColor: COLORS.mainGrayColor,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-around",
  },
  value: {
    textAlign: "center",
    color: COLORS.whiteColor,
    fontSize: 20,
    letterSpacing: 1.1,
    fontFamily: "Lato",
    textTransform: "uppercase",
  },
  symbol: {
    textAlign: "center",
    color: COLORS.yellowColor,
    fontSize: 20,
    letterSpacing: 1.1,
    fontWeight: "bold",
  },
});
