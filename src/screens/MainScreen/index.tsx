import * as React from "react";
import { JSX } from "../../types";
import { SCREEN } from "../../../routes";
import { NavigationScreenProps } from "../../../rootTypeList";
import { Stock } from "../../components/Organisms/Stock";
import { Screen } from "../../components/Atoms/Screen";

export const MainScreen = ({
  navigation,
  route,
}: NavigationScreenProps<SCREEN.Main>): JSX => {
  return (
    <Screen isHeaderExist>
      <Stock route={route} navigation={navigation} />
    </Screen>
  );
};
