import {
  AAPL_DATA,
  CAT_DATA,
  DPZ_DATA,
  EA_DATA,
  LMT_DATA,
  MSFT_DATA,
  NFLX_DATA,
  NVDA_DATA,
  SPCE_DATA,
  TSLA_DATA,
} from "../../../components/Data/MainScreenData/data";
import { themes, icons, products } from "../../../helpers/imageRequirements";
import { COLORS } from "../../../colors";
import { Symbols, Products, FullNameOfCompanies } from "../../../enums";
import { FactsData, SourceType, ScreenType } from "../../../types";
import { SCREEN } from "../../../../routes";

const symbolDataMap: Record<Symbols, FactsData[]> = {
  [Symbols.AAPL]: AAPL_DATA,
  [Symbols.MSFT]: MSFT_DATA,
  [Symbols.LMT]: LMT_DATA,
  [Symbols.TSLA]: TSLA_DATA,
  [Symbols.NVDA]: NVDA_DATA,
  [Symbols.DPZ]: DPZ_DATA,
  [Symbols.CAT]: CAT_DATA,
  [Symbols.EA]: EA_DATA,
  [Symbols.NFLX]: NFLX_DATA,
  [Symbols.SPCE]: SPCE_DATA,
};

const productDataMap: Record<Symbols, Products> = {
  [Symbols.AAPL]: Products.Apple,
  [Symbols.MSFT]: Products.Microsoft,
  [Symbols.LMT]: Products.Lewis,
  [Symbols.TSLA]: Products.Tesla,
  [Symbols.NVDA]: Products.Nvidia,
  [Symbols.DPZ]: Products.Dominos,
  [Symbols.CAT]: Products.Caterpillar,
  [Symbols.EA]: Products.ElectronicArts,
  [Symbols.NFLX]: Products.Netflix,
  [Symbols.SPCE]: Products.Virgin,
};

const themeImageDataMap: Record<Symbols, SourceType> = {
  [Symbols.AAPL]: themes.themeAAPL,
  [Symbols.MSFT]: themes.themeMSFT,
  [Symbols.LMT]: themes.themeLMT,
  [Symbols.TSLA]: themes.themeTSLA,
  [Symbols.NVDA]: themes.themeNVDA,
  [Symbols.DPZ]: themes.themeDPZ,
  [Symbols.CAT]: themes.themeCAT,
  [Symbols.EA]: themes.themeEA,
  [Symbols.NFLX]: themes.themeNFLX,
  [Symbols.SPCE]: themes.themeSPCE,
};

const companySymbolIconDataMap: Record<Symbols, SourceType> = {
  [Symbols.AAPL]: icons.iconAAPL,
  [Symbols.MSFT]: icons.iconMSFT,
  [Symbols.LMT]: icons.iconLMT,
  [Symbols.TSLA]: icons.iconTSLA,
  [Symbols.NVDA]: icons.iconNVDA,
  [Symbols.DPZ]: icons.iconDPZ,
  [Symbols.CAT]: icons.iconCAT,
  [Symbols.EA]: icons.iconEA,
  [Symbols.NFLX]: icons.iconNFLX,
  [Symbols.SPCE]: icons.iconSPCE,
};

const productImageDataMap: Record<Symbols, SourceType> = {
  [Symbols.AAPL]: products.productAAPL,
  [Symbols.MSFT]: products.productMSFT,
  [Symbols.LMT]: products.productLMT,
  [Symbols.TSLA]: products.productTSLA,
  [Symbols.NVDA]: products.productNVDA,
  [Symbols.DPZ]: products.productDPZ,
  [Symbols.CAT]: products.productCAT,
  [Symbols.EA]: products.productEA,
  [Symbols.NFLX]: products.productNFLX,
  [Symbols.SPCE]: products.productSPCE,
};

const companyNameDataMap: Record<Symbols, FullNameOfCompanies> = {
  [Symbols.AAPL]: FullNameOfCompanies.Apple,
  [Symbols.MSFT]: FullNameOfCompanies.Microsoft,
  [Symbols.LMT]: FullNameOfCompanies.Lewis,
  [Symbols.TSLA]: FullNameOfCompanies.Tesla,
  [Symbols.NVDA]: FullNameOfCompanies.Nvidia,
  [Symbols.DPZ]: FullNameOfCompanies.Dominos,
  [Symbols.CAT]: FullNameOfCompanies.Caterpillar,
  [Symbols.EA]: FullNameOfCompanies.ElectronicArts,
  [Symbols.NFLX]: FullNameOfCompanies.Netflix,
  [Symbols.SPCE]: FullNameOfCompanies.Virgin,
};

const statusIconDataMap: { [key: number]: { name: string; color: string } } = {
  100: { name: "information-variant", color: COLORS.lightGray },
  200: { name: "check", color: COLORS.lime },
  300: { name: "swap-horizontal", color: COLORS.gold },
  400: { name: "account-off", color: COLORS.iconRed },
  500: { name: "server-network-off", color: COLORS.iconLightRed },
};

const screenDataMap: { [key: number]: ScreenType } = {
  1: {
    screenNav: (navigation) => navigation.navigate(SCREEN.FirstArticleScreen),
  },
  2: {
    screenNav: (navigation) => navigation.navigate(SCREEN.SecondArticleScreen),
  },
  3: {
    screenNav: (navigation) => navigation.navigate(SCREEN.ThirdArticleScreen),
  },
};

export {
  symbolDataMap,
  productDataMap,
  themeImageDataMap,
  companySymbolIconDataMap,
  productImageDataMap,
  companyNameDataMap,
  statusIconDataMap,
  screenDataMap,
};
