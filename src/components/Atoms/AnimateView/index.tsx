import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { ComplexAnimationBuilder } from "react-native-reanimated";
import { JSX, AnimateViewProps } from "../../../types";

export const AnimateView = (props: AnimateViewProps): JSX => {
  const value: number = 100;

  const FadeUp: ComplexAnimationBuilder = FadeInUp.delay(value);
  const FadeDown: ComplexAnimationBuilder = FadeInDown.delay(value);

  return (
    <Animated.View entering={props.up ? FadeUp : FadeDown} style={props.style}>
      {props.children}
    </Animated.View>
  );
};
