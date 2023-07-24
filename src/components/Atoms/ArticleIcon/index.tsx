import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { JSX } from "../../../types";
import { ArticleIconProps } from "../../../interfaces";

export const ArticleIcon = (props: ArticleIconProps): JSX => (
  <MaterialCommunityIcons
    name={props.name as any}
    size={16}
    color={props.color}
  />
);
