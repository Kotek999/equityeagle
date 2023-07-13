import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";
import { codes } from "../../Data/CodesData/data";
import { COLORS } from "../../../colors";
import { JSX } from "../../../types";

export const Codes = (): JSX => {
  return (
    <Fragment>
      {codes.map((code, i) => {
        return (
          <View key={`codeView-${i}`} style={styles.codesContainer}>
            <Text
              style={{
                ...styles.codeValue,
                color: COLORS.white,
              }}
            >
              {code.value}
            </Text>
            <Text
              style={{
                ...styles.codeValue,
                color: COLORS.textGray,
              }}
            >
              {code.description}
            </Text>
            <MaterialCommunityIcons
              style={{ marginHorizontal: 8 }}
              name={code.icon.name as any}
              size={18}
              color={code.icon.color}
            />
          </View>
        );
      })}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  codesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  codeValue: {
    flex: 1,
    letterSpacing: 1.1,
    fontFamily: "Lato",
    alignSelf: "center",
  },
});
