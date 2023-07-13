import * as React from "react";
import { View, Text } from "react-native";
import { Modal } from "../../../components/Organisms/Modal";
import { COLORS } from "../../../colors";
import { ModalContentProps } from "../../../interfaces";
import { JSX } from "../../../types";

export const ModalContent = (props: ModalContentProps): JSX => {
  const maxOpenRefValue: string =
    props.maxOpenValue !== null ? props.maxOpenValue.toFixed(2) : "N/A";

  const maxOpenValue = (): string => {
    return maxOpenRefValue;
  };

  const trendValue = (): string => {
    return props.trendValue;
  };

  const MaxOpenWithTrend = (): JSX => {
    return (
      <View>
        <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: "bold" }}>
          {maxOpenValue()} {trendValue()}
        </Text>
      </View>
    );
  };

  return (
    <Modal
      symbol={props.symbol}
      openModalWithChart={props.openModalWithChart}
      closeModal={props.closeModal}
      value={<MaxOpenWithTrend />}
    />
  );
};
