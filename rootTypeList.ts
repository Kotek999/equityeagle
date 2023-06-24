import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";

export type RootStackParamList = {
  Home: undefined;
  Main: undefined;
  About: undefined;
};

export type NavigationScreenProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
  onModalOpened?: Function;
};
