import React, { useRef, useCallback, Fragment } from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { NavigationScreenProps } from "../../../../rootTypeList";
import { ModalContainer } from "../../../components/Atoms/ModalContainer";
import { ModalContent } from "../ModalContent";
import { StockContent } from "../../Molecules/StockContent";
import { ModalContentWithChart } from "../ModalChart";
import { Symbols } from "../../../enums";
import { JSX, OnPress } from "../../../types";
import { SCREEN } from "../../../../routes";

export const Stock = ({
  navigation,
}: NavigationScreenProps<SCREEN.About>): JSX => {
  const placeRef: React.MutableRefObject<number> = useRef(0);
  const symbolRef: React.MutableRefObject<string> = useRef("");
  const maxOpenRef: React.MutableRefObject<number> = useRef(0);
  const openForDateRef: React.MutableRefObject<number>[] = Array(4)
    .fill(0)
    .map(() => useRef(0));
  const trendRef: React.MutableRefObject<string> = useRef("");

  const bottomSheetModalRef: React.RefObject<BottomSheetModal> =
    useRef<BottomSheetModal>(null);
  const bottomSheetModalWithChartRef: React.RefObject<BottomSheetModal> =
    useRef<BottomSheetModal>(null);

  const presentBottomSheet = useCallback(
    (bottomSheetRef: React.RefObject<BottomSheetModal>): void => {
      bottomSheetRef.current?.present();
    },
    []
  );

  const closeBottomSheet = (
    bottomSheetRef: React.RefObject<BottomSheetModal>
  ): void => {
    bottomSheetRef.current?.close();
  };

  const onClickOpenModal: OnPress = useCallback(() => {
    presentBottomSheet(bottomSheetModalRef);
  }, []);

  const onClickCloseModal: OnPress = () => {
    closeBottomSheet(bottomSheetModalRef);
  };

  const onClickOpenModalWithChart: OnPress = useCallback(() => {
    presentBottomSheet(bottomSheetModalWithChartRef);
  }, []);

  const onClickCloseModalWithChart: OnPress = () => {
    closeBottomSheet(bottomSheetModalWithChartRef);
  };

  const ModalSheet = (): JSX => {
    const companySymbolCurrentValue: Symbols =
      Symbols[symbolRef.current as keyof typeof Symbols];

    return (
      <ModalContent
        symbol={companySymbolCurrentValue}
        maxOpenValue={maxOpenRef.current}
        trendValue={trendRef.current}
        openModalWithChart={onClickOpenModalWithChart}
        closeModal={onClickCloseModal}
      />
    );
  };

  const ModalChart = (): JSX => {
    const companySymbolCurrentValue: Symbols =
      Symbols[symbolRef.current as keyof typeof Symbols];

    return (
      <ModalContentWithChart
        symbol={companySymbolCurrentValue}
        symbolValue={symbolRef.current}
        maxOpenValue={maxOpenRef.current}
        placeValue={placeRef.current}
        trendValue={trendRef.current}
        closeModalWithChart={onClickCloseModalWithChart}
        openForDateIndex0={openForDateRef[0].current}
        openForDateIndex1={openForDateRef[1].current}
        openForDateIndex2={openForDateRef[2].current}
        openForDateIndex3={openForDateRef[3].current}
      />
    );
  };

  const onModalOpened = useCallback(
    (
      symbol: Symbols,
      place: number,
      maxOpen: number | null,
      openForDateOneWeek: number | null,
      openForDateTwoWeek: number | null,
      openForDateThreeWeek: number | null,
      openForDateFourWeek: number | null,
      trend: string
    ): void => {
      placeRef.current = place;
      symbolRef.current = symbol;
      maxOpenRef.current = maxOpen ?? 0;
      trendRef.current = trend;
      openForDateRef[0].current = openForDateOneWeek ?? 0;
      openForDateRef[1].current = openForDateTwoWeek ?? 0;
      openForDateRef[2].current = openForDateThreeWeek ?? 0;
      openForDateRef[3].current = openForDateFourWeek ?? 0;
      onClickOpenModal();
    },
    [
      placeRef.current,
      symbolRef.current,
      maxOpenRef.current,
      trendRef.current,
      openForDateRef[0].current,
      openForDateRef[1].current,
      openForDateRef[2].current,
      openForDateRef[3].current,
    ]
  );

  return (
    <Fragment>
      <StockContent navigation={navigation} onModalOpened={onModalOpened} />
      <BottomSheetModalProvider>
        <ModalContainer methodRef={bottomSheetModalRef}>
          <ModalSheet />
        </ModalContainer>

        <ModalContainer methodRef={bottomSheetModalWithChartRef}>
          <ModalChart />
        </ModalContainer>
      </BottomSheetModalProvider>
    </Fragment>
  );
};
