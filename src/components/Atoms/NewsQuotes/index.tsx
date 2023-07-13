import textData from "../../../../textData.json";
import { View, Text, StyleSheet } from "react-native";
import { quotes } from "../../Data/QuotesData/data";
import { COLORS } from "../../../colors";
import { JSX } from "../../../types";

export const NewsQuotes = (): JSX => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleValue}>{textData.value.quotesTitle}</Text>
      <View style={{ top: 10 }}>
        {quotes.map((quote, i) => (
          <View key={`quoteView-${i}`} style={styles.quoteContainer}>
            <Text style={styles.quoteValue}>{quote.title}</Text>
            <View style={styles.authorContainer}>
              <Text style={styles.authorValue}>{quote.author}</Text>
              <Text style={styles.positionOfAuthorValue}>{quote.position}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    alignContent: "center",
  },
  titleValue: {
    alignSelf: "flex-start",
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 1.1,
  },
  quoteContainer: {
    margin: 10,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    alignContent: "center",
  },
  quoteValue: {
    fontStyle: "italic",
    transform: [{ skewX: "-10deg" }],
    alignSelf: "center",
    textAlign: "left",
    letterSpacing: 1.1,
    color: COLORS.textGray,
  },
  authorContainer: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "flex-end",
  },
  authorValue: {
    top: 10,
    alignSelf: "flex-end",
    color: COLORS.yellow,
    fontFamily: "Lato",
    fontSize: 14,
  },
  positionOfAuthorValue: {
    top: 12,
    alignSelf: "flex-end",
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 1.1,
  },
});
