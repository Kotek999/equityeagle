import * as React from "react";
import { JSX } from "../../types";
import { SCREEN } from "../../../routes";
import { NavigationScreenProps } from "../../../rootTypeList";
import { Stock } from "../../components/Organisms/Stock";

export const MainScreen = ({
  navigation,
  route
}: NavigationScreenProps<SCREEN.Main>): JSX => {
  return <Stock route={route} navigation={navigation} />;
};
