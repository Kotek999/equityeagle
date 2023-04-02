import * as React from "react";
import { SafeAreaView } from "react-native";
import { ChildProps } from "../../../interfaces";
import { JSX } from "../../../types";

export default function SafeArea({ children }: ChildProps): JSX {
  return <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>;
}
