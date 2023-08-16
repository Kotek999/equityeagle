import { View, Image, StyleSheet } from "react-native";
import { JSX, ArticleNewsImageWithDateProps } from "../../../types";
import { screenWidth } from "../../../helpers/dimensions";
import { ArticleDate } from "../../../components/Atoms/ArticleDate";
import { COLORS } from "../../../colors";

export const ArticleNewsImageWithDate = (
  props: ArticleNewsImageWithDateProps
): JSX => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        resizeMethod="auto"
        source={props.source}
        style={styles.image}
      />

      <View style={styles.dateContainer}>
        <ArticleDate time={props.time} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: COLORS.newsBoxGray,
  },
  image: {
    backgroundColor: COLORS.mainGray,
    marginTop: 0,
    marginBottom: 0,
    justifyContent: "center",
    width: screenWidth,
    height: 250,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10,
  },
});
