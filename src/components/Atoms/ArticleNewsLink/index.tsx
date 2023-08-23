import textData from "../../../../textData.json";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text, StyleSheet, Linking, TouchableOpacity } from "react-native";
import { JSX, ArticleNewsLinkProps } from "../../../types";
import { COLORS } from "../../../colors";
import { AnimateText } from "../AnimateText";

export const ArticleNewsLink = (props: ArticleNewsLinkProps): JSX => {
  const openUrl = async (url: string): Promise<void> => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      throw new Error(`${textData.value.errorWithLink}${error}`);
    }
  };

  const onClickGoToLink = (): void => {
    openUrl(props.url as string);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onClickGoToLink}>
      <AnimateText left={false} style={styles.value}>
        <Text>Read more</Text>
        <MaterialCommunityIcons
        name="arrow-right"
        size={14}
        color={COLORS.yellow}
      />
      </AnimateText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "flex-end",
    padding: 20,
  },
  value: {
    fontSize: 12,
    letterSpacing: 1.1,
    fontFamily: "Lato",
    color: COLORS.yellow,
    marginRight: 5,
    textTransform: "uppercase",
  },
});
