import { View, StyleSheet, Text } from "react-native";
import { JSX, DateValuesType, ArticleDateProps } from "../../../types";
import { getDateValue } from "../../../helpers/functions/getDateValue";
import { ArticleIcon } from "../ArticleIcon";
import { COLORS } from "../../../colors";

export const ArticleDate = (props: ArticleDateProps): JSX => {
  const dateValues: DateValuesType = {
    date: {
      year: getDateValue(props.time, 0, 4),
      month: getDateValue(props.time, 4, 6),
      day: getDateValue(props.time, 6, 8),
    },
    time: {
      hour: getDateValue(props.time, 9, 11),
      minutes: getDateValue(props.time, 11, 13),
    },
  };

  const articleTime: string = `${dateValues.time.hour}:${dateValues.time.minutes}`;
  const articleDate: string = `${dateValues.date.day}.${dateValues.date.month}.${dateValues.date.year}`;

  return (
    <View style={styles.container}>
      <Text style={styles.value}>{articleDate}</Text>
      <ArticleIcon name="circle-small" color={COLORS.textGray} />
      <Text style={styles.value}>{articleTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  value: {
    textAlign: "right",
    color: COLORS.textGray,
    fontFamily: "Lato",
  },
});
