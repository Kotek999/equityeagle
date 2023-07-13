import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { screenWidth } from "../../../helpers/dimensions";
import { Box } from "@react-native-material/core";
import { categories } from "../../Data/CategoryData/data";
import { COLORS } from "../../../colors";
import { JSX } from "../../../types";

export const CategoryBox = (): JSX => {
  return (
    <View style={{ alignItems: "center" }}>
      <Box
        w={screenWidth - 20}
        h={50}
        m={10}
        radius={14}
        style={styles.boxContainer}
      >
        <View style={styles.categoryContainer}>
          {categories.map((category, i) => {
            return (
              <Text key={`text-${i}`} style={styles.category}>
                {category.title}
              </Text>
            );
          })}
        </View>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    backgroundColor: COLORS.dark,
    justifyContent: "center",
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
  },
  category: {
    flex: 1,
    textAlign: "center",
    color: COLORS.white,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
