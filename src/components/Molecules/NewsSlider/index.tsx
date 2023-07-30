import { Fragment } from "react";
import { View, StyleSheet } from "react-native";
import { Divider } from "../../../components/Atoms/Divider";
import { AnimateArrowRightIcon } from "../../../components/Atoms/AnimateArrowRightIcon";
import {
  AnimatedFlatList,
  keyExtractor,
  onScroll,
} from "../../../helpers/functions/animatedFlatListItems";
import { NewsSpinner } from "../../Atoms/NewsSpinner";
import { NewsError } from "../../Atoms/NewsError";
import { NewsSliderProps } from "../../../interfaces";
import { JSX } from "../../../types";

export const NewsSlider = (props: NewsSliderProps): JSX => {
  return (
    <Fragment>
      <Divider />
      <View>
        {props.isNewsLoading && !props.fetchError ? (
          <NewsSpinner />
        ) : props.fetchError ? (
          <NewsError />
        ) : (
          <View style={styles.container}>
            <AnimatedFlatList
              horizontal
              data={props.data}
              keyExtractor={keyExtractor}
              renderItem={props.renderItem}
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={onScroll}
              scrollEventThrottle={16}
              snapToAlignment="center"
              snapToInterval={0}
              initialScrollIndex={0}
            />
            <AnimateArrowRightIcon />
          </View>
        )}
      </View>
      <Divider />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 20,
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
