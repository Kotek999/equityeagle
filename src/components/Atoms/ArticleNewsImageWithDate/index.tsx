import { View, Image, StyleSheet } from "react-native";
import { JSX, ArticleNewsImageWithDateProps } from "../../../types";
import { screenWidth } from "../../../helpers/dimensions";
import { ArticleDate } from "../../../components/Atoms/ArticleDate";
import { Divider } from "../Divider";

export const ArticleNewsImageWithDate = (
  props: ArticleNewsImageWithDateProps
): JSX => {
  return (
    <View style={{ flexDirection: "column" }}>
      <Image
        resizeMode="cover"
        resizeMethod="auto"
        source={props.source}
        style={styles.image}
      />
      <Divider />
      <View style={styles.dateContainer}>
        <ArticleDate time={props.time} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
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
