import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { screenWidth } from "../../../helpers/dimensions";
import { LikeHeartIcon } from "../../../components/Atoms/LikeHeartIcon";
import { getPublishedTimeForArticle } from "../../../helpers/functions/getPublishedTimeForArticle";
import { COLORS } from "../../../colors";
import { JSX, ItemArticleProps } from "../../../types";

export const RenderArticleImage = (props: ItemArticleProps): JSX => {
  return (
    <TouchableOpacity onPress={props.item.article.onPress}>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          resizeMethod="auto"
          source={props.item.article.image}
          style={styles.image}
        />
        <View style={styles.timeContainer}>
          <Text style={styles.timeValue}>
            {getPublishedTimeForArticle(props.item.article.time)}
          </Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleValue}>{props.item.article.title}</Text>
        </View>
        <View style={styles.iconContainer}>
          <LikeHeartIcon />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth - 40,
    height: 250,
    marginHorizontal: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: screenWidth - 40,
    height: 250,
    borderRadius: 5,
  },
  timeContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: COLORS.badgeDark,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  timeValue: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 1.1,
  },
  titleContainer: {
    flex: 1,
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "flex-start",
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 4,
    paddingVertical: 5,
    backgroundColor: COLORS.badgeDark,
  },
  titleValue: {
    width: "90%",
    alignSelf: "flex-start",
    padding: 5,
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 1.1,
  },
  iconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: COLORS.badgeDark,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});
