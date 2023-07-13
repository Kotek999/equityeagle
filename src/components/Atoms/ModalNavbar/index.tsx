import * as React from "react";
import textData from "../../../../textData.json";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Text, StyleSheet } from "react-native";
import { screenWidth } from "../../../helpers/dimensions";
import { Box, IconButton, Pressable } from "@react-native-material/core";
import { COLORS } from "../../../colors";
import { ModalNavbarProps } from "../../../interfaces";
import { JSX } from "../../../types";

export const ModalNavbar = (props: ModalNavbarProps): JSX => {
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.optionsOnNavbarContainer}>
        <Pressable
          style={styles.chartIconContainer}
          pressEffectColor={COLORS.dark}
          onPress={props.openModalWithChart}
        >
          <Text style={styles.value}>{textData.value.chartTitle}</Text>
          <Icon
            style={{ left: 10 }}
            name="finance"
            size={24}
            color={COLORS.yellow}
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
          color={COLORS.yellow}
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
    backgroundColor: COLORS.mainGray,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  value: {
    textAlign: "center",
    color: COLORS.white,
    fontSize: 15,
    letterSpacing: 1.1,
    fontWeight: "bold",
  },
  maxOpenWithTrendContainer: {
    backgroundColor: COLORS.boxGraylightGray,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  iconButton: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.mainGray,
  },
});
