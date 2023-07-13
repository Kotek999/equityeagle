import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { COLORS } from "../../../colors";
import { JSX } from "../../../types";

export const AnimateArrowRightIcon = (): JSX => {
  const positionAnim: Animated.Value = useRef(new Animated.Value(0)).current;
  const opacityAnim: Animated.Value = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const positionAnimation: Animated.CompositeAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(positionAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(positionAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      { iterations: -1 }
    );

    const opacityAnimation: Animated.CompositeAnimation = Animated.timing(
      opacityAnim,
      {
        toValue: 0,
        duration: 1000,
        delay: 3000,
        useNativeDriver: true,
      }
    );

    const animation: Animated.CompositeAnimation = Animated.parallel([
      positionAnimation,
      opacityAnimation,
    ]);

    animation.start();

    return () => animation.stop();
  }, [positionAnim, opacityAnim]);

  const translateX: Animated.AnimatedInterpolation<string | number> =
    positionAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [100, 5],
    });

  return (
    <Animated.View
      style={{
        borderRadius: 5,
        backgroundColor: COLORS.badgeDark,
        position: "absolute",
        right: 60,
        transform: [{ translateX }],
        opacity: opacityAnim,
      }}
    >
      <MaterialCommunityIcons
        name="arrow-right"
        size={45}
        color={COLORS.yellow}
      />
    </Animated.View>
  );
};
