import textData from "../../../../textData.json";
import config from "../../../../config.json";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "@react-native-material/core";
import { logo } from "../../../helpers/imageRequirements";
import { COLORS } from "../../../colors";
import { JSX } from "../../../types";

export const InfoOfApp = (): JSX => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Avatar image={logo} color={COLORS.mainGray} size={80} />
        <View>
          <Text style={styles.titleValue}>{textData.value.authorTitle}</Text>
          <Text style={styles.authorValue}>{config.author}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "flex-start",
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
  titleValue: {
    marginLeft: 14,
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 1.1,
  },
  authorValue: {
    top: 5,
    marginLeft: 14,
    color: COLORS.white,
    fontSize: 16,
    fontFamily: "Lato",
    letterSpacing: 1.1,
  },
});
