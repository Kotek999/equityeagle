import { View, ScrollView } from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "../../../colors";
import { JSX, NewsScrollViewProps } from "../../../types";

export const NewsScrollView = (props: NewsScrollViewProps): JSX => {
  const insets: EdgeInsets = useSafeAreaInsets();
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: COLORS.mainGray,
        flexGrow: 1,
        paddingBottom: insets.bottom + 20,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.mainGray,
        }}
      >
        {props.children}
      </View>
    </ScrollView>
  );
};
