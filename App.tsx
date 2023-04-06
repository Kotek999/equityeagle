import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import { Spinner } from "./src/components/Atoms/Spinner";
import { RootStack } from "./root";
import { JSX } from "./src/types";

export default function App(): JSX {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        Lato: require("./src/assets/fonts/Lato-Light.ttf"),
      });
      setLoading(false);
    })();
  }, []);
  return loading ? <Spinner /> : <RootStack />;
}
