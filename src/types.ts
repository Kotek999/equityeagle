export type JSX = JSX.Element;

type OnPress = () => void;

export type ButtonProps = {
  onPress: OnPress;
  title: string;
};
