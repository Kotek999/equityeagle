import { screenDataMap } from "../../components/Data/MapsData";
import { ScreenType, ScreenNavigationType } from "../../types";

export const screenChecker = (
  screenValue: number,
  navigation: ScreenNavigationType
): void => {
  const screen: ScreenType = screenDataMap[screenValue];

  if (screen) {
    return screen.screenNav(navigation);
  }
  return;
};
