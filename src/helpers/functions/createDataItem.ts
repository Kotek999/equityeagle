import { convertOpenToNumber } from "./convertOpenToNumber";
import { label } from "../../components/Atoms/Label";
import { getDate } from "./getDate";
import { COLORS } from "../../colors";

export const createDataItem = (
  openFor: string | number,
  openForData: number,
  day: number
): any => {
  return {
    value: convertOpenToNumber(openForData, 0, openFor),
    labelTextStyle: { color: COLORS.lightGray, width: 60 },
    labelComponent: () => label(getDate(day)),
  };
};
