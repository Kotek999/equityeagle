import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SCREEN } from "./routes";

export type RootStackParamList = {
  Home: undefined;
  Main: undefined;
};

export type HomeProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, SCREEN.Home>;
};

export type MainScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, SCREEN.Main>;
};
