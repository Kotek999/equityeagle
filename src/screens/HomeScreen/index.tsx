import * as React from "react";
import { NavigationScreenProps } from "../../../rootTypeList";
import { Screen } from "../../components/Atoms/Screen";
import { Home } from "../../components/Molecules/Home";
import { Gradient } from "../../components/Atoms/Gradient";
import { JSX } from "../../types";
import { SCREEN } from "../../../routes";

export const HomeScreen = ({
  navigation,
}: NavigationScreenProps<SCREEN.Home>): JSX => {
  return (
    <Screen>
      <Gradient>
        <Home navigation={navigation} />
      </Gradient>
    </Screen>
  );
};
