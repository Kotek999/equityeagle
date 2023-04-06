import * as React from "react";
import Screen from "../../commons/Screen";
import Gradient from "../../commons/Gradient";
import Home from "../../commons/Home";
import { HomeProps } from "../../../../rootTypeList";
import { JSX } from "../../../types";

export default function HomeScreen({ navigation }: HomeProps): JSX {
  return (
    <Screen>
      <Gradient>
        <Home navigation={navigation} />
      </Gradient>
    </Screen>
  );
}
