import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { MainScreenProps } from "../../../rootTypeList";
import { SCREEN } from "../../../routes";
import { JSX } from "../../types";
import { screenWidth } from "../../helpers/dimensions";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const MainScreen = ({ navigation }: MainScreenProps): JSX => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        alignItems: "center",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop: 0,
        width: "100%",
        backgroundColor: "#263238",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: screenWidth - 20,
          paddingTop: insets.top + 20,
          backgroundColor: "#263238",
          top: 0,
        }}
      >
        <Text style={{ color: "white", fontSize: 23, marginBottom: 10 }}>
          Main Screen
        </Text>
        <MaterialCommunityIcons
          name="close"
          size={32}
          color="red"
          onPress={() => navigation.push(SCREEN.Home)}
        />
      </View>
      <Box
        w={screenWidth - 20}
        h={50}
        m={4}
        radius={14}
        style={{
          backgroundColor: "#37d67a",
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Text>Position</Text>
          <Text>Icon</Text>
          <Text>Name</Text>
          <Text>Value</Text>
          <Text>Increase / Decrease</Text>
        </View>
      </Box>
      <ScrollView
        style={{ bottom: 0, marginBottom: 40, marginTop: 0 }}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {Array.from(Array(1)).map((_, index) => (
          <View key={index}>
            <Box
              w={screenWidth - 20}
              h={50}
              m={4}
              radius={14}
              style={{ backgroundColor: "#455a64", top: 20, margin: 10 }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
