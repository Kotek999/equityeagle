import * as React from "react";
import { HomeProps } from "../../../rootTypeList";
import { Screen } from "../../components/Atoms/Screen";
import { Home } from "../../components/Molecules/Home";
import { Gradient } from "../../components/Atoms/Gradient";
import { JSX } from "../../types";

export const HomeScreen = ({ navigation }: HomeProps): JSX => {
  return (
    <Screen>
      <Gradient>
        <Home navigation={navigation} />
      </Gradient>
    </Screen>
  );
};
