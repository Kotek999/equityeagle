import { FlatList, Animated } from "react-native";
import { SliderDataType } from "../../types";

const AnimatedFlatList: Animated.AnimatedComponent<typeof FlatList> =
  Animated.createAnimatedComponent(FlatList);

const scrollX: Animated.Value = new Animated.Value(0);

const onScroll: (...args: any[]) => void = Animated.event(
  [{ nativeEvent: { contentOffset: { x: scrollX } } }],
  { useNativeDriver: true }
);

const keyExtractorItem: (item: SliderDataType) => string = (
  item: SliderDataType
) => item.article.id;

const keyExtractor: (item: unknown, index: number) => string =
  keyExtractorItem as (item: unknown, index: number) => string;

export { AnimatedFlatList, onScroll, keyExtractor };
