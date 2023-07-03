import { CodesType } from "../../../types";
import { COLORS } from "../../../colors";

export const codes: CodesType[] = [
  {
    value: "1XX",
    description: "Informational",
    icon: {
      name: "information-variant",
      color: COLORS.lightGrayColor,
    },
  },
  {
    value: "2XX",
    description: "Success",
    icon: {
      name: "check",
      color: COLORS.limeColor,
    },
  },
  {
    value: "3XX",
    description: "Redirection",
    icon: {
      name: "swap-horizontal",
      color: COLORS.goldColor,
    },
  },
  {
    value: "4XX",
    description: "Client Error",
    icon: {
      name: "account-off",
      color: COLORS.iconRedColor,
    },
  },
  {
    value: "5XX",
    description: "Server Error",
    icon: {
      name: "server-network-off",
      color: COLORS.iconLightRedColor,
    },
  },
];
