import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SCREEN } from "./routes";

type RootStackParamList = {
  Home: undefined;
  Main: undefined;
};

export type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, SCREEN.Home>;
};

export type MainScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, SCREEN.Main>;
};
