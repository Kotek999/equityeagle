import * as React from "react";
import isIOS from "../../../helpers/rulesOfDevice/isIOS";
import { View, Image, StyleSheet } from "react-native";
import { JSX, SourceType, SymbolProps } from "../../../types";
import { companySymbolIconDataMap } from "../../Data/MapsData";

export const SymbolIcon = (props: SymbolProps): JSX => {
  const iconSource: SourceType = companySymbolIconDataMap[props.symbol];

  return (
    <View style={styles.imgContainer}>
      <Image
        source={iconSource}
        resizeMode="contain"
        resizeMethod="auto"
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  img: {
    width: isIOS() ? "100%" : 50,
    height: 35,
  },
});
