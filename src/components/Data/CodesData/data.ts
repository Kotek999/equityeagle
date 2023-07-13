import { COLORS } from "../../../colors";
import { CodesType } from "../../../types";

export const codes: CodesType[] = [
  {
    value: "1XX",
    description: "Informational",
    icon: {
      name: "information-variant",
      color: COLORS.lightGray,
    },
  },
  {
    value: "2XX",
    description: "Success",
    icon: {
      name: "check",
      color: COLORS.lime,
    },
  },
  {
    value: "3XX",
    description: "Redirection",
    icon: {
      name: "swap-horizontal",
      color: COLORS.gold,
    },
  },
  {
    value: "4XX",
    description: "Client Error",
    icon: {
      name: "account-off",
      color: COLORS.iconRed,
    },
  },
  {
    value: "5XX",
    description: "Server Error",
    icon: {
      name: "server-network-off",
      color: COLORS.iconLightRed,
    },
  },
];
