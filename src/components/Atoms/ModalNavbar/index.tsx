import * as React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Text, StyleSheet } from "react-native";
import { JSX } from "../../../types";
import { screenWidth } from "../../../helpers/dimensions";
import { Box, IconButton, Pressable } from "@react-native-material/core";
import { ModalNavbarProps } from "../../../interfaces";
import { COLORS } from "../../../colors";

export const ModalNavbar = (props: ModalNavbarProps): JSX => {
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.optionsOnNavbarContainer}>
        <Pressable
          style={styles.chartIconContainer}
          pressEffectColor={COLORS.darkColor}
          onPress={props.openModalWithChart}
        >
          <Text style={styles.value}>Chart</Text>
          <Icon
            style={{ left: 10 }}
            name="finance"
            size={24}
            color={COLORS.yellowColor}
          />
        </Pressable>
        <Box
          w={screenWidth / 3}
          h={50}
          radius={14}
          style={styles.maxOpenWithTrendContainer}
        >
          <Text style={styles.value}>{props.children}</Text>
        </Box>
        <IconButton
          icon={(props): any => <Icon name="close" {...props} />}
          style={styles.iconButton}
          color={COLORS.yellowColor}
          onPress={props.closeModal}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    marginTop: 20,
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
  chartIconContainer: {
    width: screenWidth / 3,
    height: 50,
    borderRadius: 14,
    backgroundColor: COLORS.mainGrayColor,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  value: {
    textAlign: "center",
    color: COLORS.whiteColor,
    fontSize: 15,
    letterSpacing: 1.1,
    fontWeight: "bold",
  },
  maxOpenWithTrendContainer: {
    backgroundColor: COLORS.boxGraylightGrayColor,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  iconButton: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.mainGrayColor,
  },
});
