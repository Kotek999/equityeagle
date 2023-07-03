import * as React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { screenWidth } from "../../../helpers/dimensions";
import { SourceType, JSX, SymbolProps } from "../../../types";
import { ContentSwitcher } from "../../../components/Molecules/ContentSwitcher";
import { productImageDataMap } from "../../Data/MapsData";
import { COLORS } from "../../../colors";
import Animated, { FadeInDown } from "react-native-reanimated";

export const ProductImage = (props: SymbolProps): JSX => {
  const productSource: SourceType = productImageDataMap[props.symbol];

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.productContainer}>
        <View style={styles.imageContainer}>
          <Animated.View entering={FadeInDown.delay(100)}>
            <ImageBackground
              source={productSource}
              resizeMode="cover"
              resizeMethod="auto"
              style={styles.image}
            >
              <View style={styles.imageWithContentContainer}>
                <View style={styles.valueWithContentContainer}>
                  <Text style={styles.value}>Most popular product:</Text>
                  <Text style={styles.content}>
                    <ContentSwitcher symbol={props.symbol} isName={true} />
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    width: screenWidth,
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 30,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    width: screenWidth,
    height: screenWidth / 2,
  },
  imageWithContentContainer: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: COLORS.opacityDarkColor,
  },
  valueWithContentContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
  },
  value: {
    color: COLORS.whiteColor,
    fontSize: 18,
    fontFamily: "Lato",
    justifyContent: "center",
    marginRight: 20,
  },
  content: {
    color: COLORS.yellowColor,
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
});
