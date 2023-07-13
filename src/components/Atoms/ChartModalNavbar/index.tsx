import * as React from "react";
import textData from "../../../../textData.json";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Text, StyleSheet } from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { screenWidth } from "../../../helpers/dimensions";
import { Box, IconButton } from "@react-native-material/core";
import { COLORS } from "../../../colors";
import { ChartModalNavbarProps } from "../../../interfaces";
import { JSX } from "../../../types";

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
          color={COLORS.yellow}
          style={styles.iconButton}
          onPress={props.onPress}
        />

        <Box
          w={screenWidth / 1.5}
          h={50}
          radius={14}
          style={styles.valueWithSymbolContainer}
        >
          <Text style={styles.value}>{textData.value.chartForTitle}</Text>
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
    backgroundColor: COLORS.mainGray,
  },
  valueWithSymbolContainer: {
    backgroundColor: COLORS.mainGray,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-around",
  },
  value: {
    textAlign: "center",
    color: COLORS.white,
    fontSize: 20,
    letterSpacing: 1.1,
    fontFamily: "Lato",
    textTransform: "uppercase",
  },
  symbol: {
    textAlign: "center",
    color: COLORS.yellow,
    fontSize: 20,
    letterSpacing: 1.1,
    fontWeight: "bold",
  },
});
