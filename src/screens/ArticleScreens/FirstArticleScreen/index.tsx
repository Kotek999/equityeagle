import { Text, View } from "react-native";
import { JSX } from "../../../types";

export const FirstArticleScreen = (): JSX => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Text>FirstArticleScreen</Text>
    </View>
  );
};
