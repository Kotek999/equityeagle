import React, { useEffect, useState } from "react";
import { Text } from "@react-native-material/core";
import * as Font from "expo-font";
import RootStack from "./root";
import { JSX } from "./src/types";

export default function App(): JSX {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        Lato: require("./assets/fonts/Lato-Light.ttf"),
      });
      setLoading(false);
    })();
  }, []);
  return loading ? <Text>{"loading"}</Text> : <RootStack />;
}
