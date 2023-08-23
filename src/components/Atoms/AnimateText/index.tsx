import Animated, { FadeInLeft, FadeInRight } from "react-native-reanimated";
import { ComplexAnimationBuilder } from "react-native-reanimated";
import { AnimateTextProps } from "../../../types";
import { JSX } from "../../../types";

export const AnimateText = (props: AnimateTextProps): JSX => {
  const value: number = 1000;

  const FadeLeft: ComplexAnimationBuilder = FadeInLeft.duration(value);
  const FadeRight: ComplexAnimationBuilder = FadeInRight.duration(value);

  return (
    <Animated.Text
      entering={props.left ? FadeLeft : FadeRight}
      style={props.style}
    >
      {props.children}
    </Animated.Text>
  );
};
