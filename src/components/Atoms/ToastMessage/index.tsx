import Toast from "react-native-toast-message";

export const ToastMessage = (): void => {
  Toast.show({
    type: "success",
    text1: "Data refreshed",
  });
};
