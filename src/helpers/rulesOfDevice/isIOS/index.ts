import { Platform } from "react-native";

export default (): boolean => {
  if (Platform.OS === "ios") {
    return true;
  }
  return false;
};
