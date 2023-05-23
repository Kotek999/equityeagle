import React, { useState, useEffect, useRef } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import isIOS from "../../helpers/rulesOfDevice/isIOS";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Toast from "react-native-toast-message";
import appJSON from "../../../app.json";
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
} from "../../components/Data/MainScreenData/data";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import {
  View,
  Text,
  ScrollView,
  BackHandler,
  Alert,
  Linking,
  ActivityIndicator,
  Image,
  ImageBackground,
  ImageSourcePropType,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Animated,
  SafeAreaView,
} from "react-native";
import { JSX } from "../../types";
import { screenHeight, screenWidth } from "../../helpers/dimensions";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Badge,
  Box,
  AppBar,
  IconButton,
  Divider,
  Chip,
  Button,
} from "@react-native-material/core";
import { logoTitle } from "../../helpers/imageRequirements";
import { LineChart } from "react-native-gifted-charts";
import { NumberProp } from "react-native-svg";

// TODO --> powerfull refactor

export const MainScreen = (): JSX => {
  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Data refreshed",
    });
  };

  const iconAAPL = require("../../assets/icons/AAPL.png");
  const iconMSFT = require("../../assets/icons/MSFT.png");
  const iconLMT = require("../../assets/icons/LMT.png");
  const iconTSLA = require("../../assets/icons/TSLA.png");
  const iconNVDA = require("../../assets/icons/NVDA.png");
  const iconDPZ = require("../../assets/icons/DPZ.png");
  const iconCAT = require("../../assets/icons/CAT.png");
  const iconEA = require("../../assets/icons/EA.png");
  const iconNFLX = require("../../assets/icons/NFLX.png");
  const iconSPCE = require("../../assets/icons/SPCE.png");

  const themeAAPL = require("../../assets/themes/themeAAPL.png");
  const themeCAT = require("../../assets/themes/themeCAT.png");
  const themeDPZ = require("../../assets/themes/themeDPZ.png");
  const themeEA = require("../../assets/themes/themeEA.png");
  const themeLMT = require("../../assets/themes/themeLMT.png");
  const themeMSFT = require("../../assets/themes/themeMSFT.png");
  const themeNLFX = require("../../assets/themes/themeNLFX.png");
  const themeNVDA = require("../../assets/themes/themeNVDA.png");
  const themeSPCE = require("../../assets/themes/themeSPCE.png");
  const themeTSLA = require("../../assets/themes/themeTSLA.png");

  const productAAPL = require("../../assets/products/productAAPL.png");
  const productCAT = require("../../assets/products/productCAT.png");
  const productDPZ = require("../../assets/products/productDPZ.png");
  const productEA = require("../../assets/products/productEA.png");
  const productLMT = require("../../assets/products/productLMT.png");
  const productMSFT = require("../../assets/products/productMSFT.png");
  const productNFLX = require("../../assets/products/productNFLX.png");
  const productNVDA = require("../../assets/products/productNVDA.png");
  const productSPCE = require("../../assets/products/productSPCE.png");
  const productTSLA = require("../../assets/products/productTSLA.png");

  // type SourceProps = {
  //   source: ImageSourcePropType;
  // };

  type SourceType = {
    uri: string;
  };

  type Check<T> = Record<string, T>;

  type CheckProps<T> = {
    source: T;
  };

  const checker = <
    T extends SourceType,
    C extends React.ComponentType<CheckProps<T>>
  >(
    value: string,
    check: Check<T>,
    component: C
  ): JSX | string => {
    const source = check[value];

    return source
      ? React.createElement(component, { source })
      : `There was a problem displaying the object. ${value}`;
  };

  const SymbolIcon = ({ source }: CheckProps<SourceType>) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Image
          source={source}
          resizeMode="contain"
          resizeMethod="auto"
          style={{ width: isIOS() ? "100%" : 50, height: 35 }}
        />
      </View>
    );
  };

  const ThemeImage = ({ source }: CheckProps<SourceType>) => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <ImageBackground
          resizeMode="contain"
          resizeMethod="auto"
          style={{
            flex: 1,
            justifyContent: "center",
            width: screenWidth,
            height: screenHeight / 2,
            // width: !imageLoading ? screenWidth : 0,
            // height: !imageLoading ? screenHeight / 2 : 0,
          }}
          source={source}
          alt="titleOfLogo"
          // onLoad={imageOnLoad}
        />
      </View>
    );
  };

  enum Symbols {
    Apple = "AAPL",
    Microsoft = "MSFT",
    Lewis = "LMT",
    Tesla = "TSLA",
    Nvidia = "NVDA",
    Dominos = "DPZ",
    Caterpillar = "CAT",
    ElectronicArts = "EA",
    Netflix = "NFLX",
    Virgin = "SPCE",
  }

  enum Products {
    Apple = "iPhone",
    Microsoft = "MS Office 365",
    Lewis = "LMT MARS",
    Tesla = "Tesla Model S",
    Nvidia = "Graphics cards",
    Dominos = "Delivery by robots",
    Caterpillar = "Crawler excavator",
    ElectronicArts = "FIFA game series",
    Netflix = "Movies and series",
    Virgin = "Private spacecraft",
  }

  const symbolDataMap: any = {
    [Symbols.Apple]: AAPL_DATA,
    [Symbols.Microsoft]: MSFT_DATA,
    [Symbols.Lewis]: LMT_DATA,
    [Symbols.Tesla]: TSLA_DATA,
    [Symbols.Nvidia]: NVDA_DATA,
    [Symbols.Dominos]: DPZ_DATA,
    [Symbols.Caterpillar]: CAT_DATA,
    [Symbols.ElectronicArts]: EA_DATA,
    [Symbols.Netflix]: NFLX_DATA,
    [Symbols.Virgin]: SPCE_DATA,
  };

  const productDataMap: any = {
    [Symbols.Apple]: Products.Apple,
    [Symbols.Microsoft]: Products.Microsoft,
    [Symbols.Lewis]: Products.Lewis,
    [Symbols.Tesla]: Products.Tesla,
    [Symbols.Nvidia]: Products.Nvidia,
    [Symbols.Dominos]: Products.Dominos,
    [Symbols.Caterpillar]: Products.Caterpillar,
    [Symbols.ElectronicArts]: Products.ElectronicArts,
    [Symbols.Netflix]: Products.Netflix,
    [Symbols.Virgin]: Products.Virgin,
  };

  interface NoContentProps {
    symbol: Symbols | Products;
  }

  const NoContent = ({ symbol }: NoContentProps): JSX => {
    return (
      <>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: "Lato",
            fontSize: 16,
            letterSpacing: 1.1,
          }}
        >
          {`No content for ${symbol}.`}
        </Text>
      </>
    );
  };

  const Product = ({ productName }: any): JSX => {
    return (
      <>
        <Text>{productName}</Text>
      </>
    );
  };

  const ContentSwitcher = ({ symbol, isName }: any): JSX => {
    const data: Symbols = symbolDataMap[symbol];
    const productName: Symbols = productDataMap[symbol];

    return data ? (
      <>
        {!isName ? (
          <InterestingFacts data={data} />
        ) : (
          <Product productName={productName} />
        )}
      </>
    ) : (
      <NoContent symbol={symbol} />
    );
  };

  const ProductImage = ({ source }: CheckProps<SourceType>) => {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            width: screenWidth,
          }}
        >
          <View
            style={{
              marginTop: 30,
              marginBottom: 30,
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <ImageBackground
              source={source}
              resizeMode="cover"
              resizeMethod="auto"
              style={{
                justifyContent: "flex-end",
                width: screenWidth,
                flex: 1,
                height: screenWidth / 2,
              }}
            >
              <View
                style={{
                  height: 60,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  alignContent: "center",
                  backgroundColor: "#000000c0",
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    color: "white",
                    fontSize: 20,
                    fontFamily: "Lato",
                    justifyContent: "center",
                    marginLeft: 20,
                  }}
                >
                  Most popular product:
                </Text>
                <Text
                  style={{
                    color: "#cddc39",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginRight: 20,
                  }}
                >
                  <ContentSwitcher symbol={symbolRef.current} isName={true} />
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
    );
  };

  const checkOne: Check<SourceType> = {
    AAPL: iconAAPL,
    MSFT: iconMSFT,
    LMT: iconLMT,
    TSLA: iconTSLA,
    NVDA: iconNVDA,
    DPZ: iconDPZ,
    CAT: iconCAT,
    EA: iconEA,
    NFLX: iconNFLX,
    SPCE: iconSPCE,
  };

  const checkTwo: Check<SourceType> = {
    AAPL: themeAAPL,
    MSFT: themeMSFT,
    LMT: themeLMT,
    TSLA: themeTSLA,
    NVDA: themeNVDA,
    DPZ: themeDPZ,
    CAT: themeCAT,
    EA: themeEA,
    NFLX: themeNLFX,
    SPCE: themeSPCE,
  };

  const checkThree: Check<SourceType> = {
    AAPL: productAAPL,
    MSFT: productMSFT,
    LMT: productLMT,
    TSLA: productTSLA,
    NVDA: productNVDA,
    DPZ: productDPZ,
    CAT: productCAT,
    EA: productEA,
    NFLX: productNFLX,
    SPCE: productSPCE,
  };

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const [isOverlayVisibleModalChart, setIsOverlayVisibleModalChart] =
    useState(false);

  // const [imageLoading, setImageLoading] = useState<boolean>(true);

  // const imageOnLoad = () => {
  //   setImageLoading(false);
  // };

  const placeRef = useRef(0);
  const symbolRef = useRef("");
  const maxOpenRef = useRef(0);
  const openForDateRef = Array(4)
    .fill(0)
    .map(() => useRef(0));
  const trendRef = useRef("");

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const bottomSheetModalWithChartRef = useRef<BottomSheetModal>(null);

  const onClickOpenModal = () => {
    setIsOverlayVisible(true);
    setIsOverlayVisibleModalChart(false);
    bottomSheetModalRef.current?.present();
  };

  const onClickCloseModal = () => {
    setIsOverlayVisible(false);
    bottomSheetModalRef.current?.close();
  };

  const onClickOpenModalWithChart = () => {
    setIsOverlayVisibleModalChart(true);
    bottomSheetModalWithChartRef.current?.present();
  };

  const onClickCloseModalWithChart = () => {
    setIsOverlayVisibleModalChart(false);
    bottomSheetModalWithChartRef.current?.close();
  };

  const insets = useSafeAreaInsets();

  interface Data {
    "Meta Data": {
      "1. Information": string;
      "2. Symbol": string;
      "3. Last Refreshed": string;
      "4. Interval": string;
      "5. Output Size": string;
      "6. Time Zone": string;
    };
    "Time Series (5min)": Record<
      string,
      { "1. open": string; "2. high": string; "3. low": string }
    >;
  }

  type MoreTextProps = {
    initialText: string;
    expandedText: string;
  };

  const ShowMoreText = ({ initialText, expandedText }: MoreTextProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const onClickShowMoreText = () => {
      setIsExpanded(!isExpanded);
    };

    const showText = isExpanded ? expandedText : initialText;

    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 16,
            fontFamily: "Lato",
          }}
        >
          {showText}
        </Text>
        <Text
          style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
        ></Text>
        <TouchableOpacity onPress={onClickShowMoreText}>
          <Text
            style={{
              textAlign: "center",
              color: "#7bdcb5",
              fontWeight: "600",
              fontSize: 12,
            }}
          >
            {isExpanded ? "Show less" : "Show more..."}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const Data = ({ data, index }: any) => {
    if (!data || !data.length) {
      return <Text>Loading...</Text>;
    }
    const currentData = data[index];
    const label = currentData.label;
    const content = currentData.content;

    return (
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          width: "90%",
        }}
      >
        <View style={{ top: 20 }}>
          <Animated.Text
            style={{
              textAlign: "center",
              color: "#cddc39",
              fontFamily: "Lato",
              fontSize: 16,
              letterSpacing: 1.1,
              textTransform: "uppercase",
            }}
          >
            {label}
          </Animated.Text>
        </View>
        <Box
          w={screenWidth - 50}
          h={80}
          radius={14}
          style={{
            flex: 1,
            top: 10,
            marginBottom: 20,
            flexDirection: "row",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
          }}
        >
          <ScrollView
            style={{
              bottom: 0,
              marginBottom: 0,
              marginTop: 10,
              backgroundColor: "transparent",
            }}
            contentContainerStyle={{
              paddingBottom: insets.bottom - 20,
            }}
          >
            <Animated.Text
              style={{
                width: "100%",
                textAlign: "center",
                color: "white",
                fontFamily: "Lato",
                fontSize: 14,
                letterSpacing: 1.1,
              }}
            >
              {content}
            </Animated.Text>
          </ScrollView>
        </Box>
      </View>
    );
  };

  const InterestingFacts = ({ data }: any) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % data.length);
      }, 10000);
      return () => clearInterval(intervalId);
    }, [currentIndex, data.length]);

    return <Data data={data} index={currentIndex} />;
  };

  const getDate = (day: number): string => {
    const months: string[] = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date: Date = new Date();

    date.setDate(date.getDate() - day);

    const getDay: number = date.getDate();
    const getMonth: number = date.getMonth();

    return getDay < 10
      ? `0${getDay} ${months[getMonth]}`
      : `${getDay} ${months[getMonth]}`;
  };

  const ModalData: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [period, setPeriod] = useState(getDate(0));

    const onClickChangePeriod = (date: string) => {
      setPeriod(date);
    };

    const label = (title: string) => {
      return (
        <View style={{ width: "100%" }}>
          <Text
            style={{
              alignSelf: "center",
              fontFamily: "Lato",
              color: "lightgray",
            }}
          >
            {title}
          </Text>
        </View>
      );
    };

    const openFor28: any =
      openForDateRef[3].current < maxOpenRef.current
        ? openForDateRef[3].current.toFixed(2)
        : maxOpenRef.current;

    const openFor21: any =
      openForDateRef[2].current === 0
        ? maxOpenRef.current.toFixed(2)
        : openForDateRef[2].current.toFixed(2);

    const openFor14: any =
      openForDateRef[1].current === 0
        ? maxOpenRef.current.toFixed(2)
        : openForDateRef[1].current.toFixed(2);

    const openFor7: any =
      openForDateRef[0].current < maxOpenRef.current
        ? openForDateRef[0].current.toFixed(2)
        : maxOpenRef.current;

    const chartDataCurrent: any = [
      {
        value: openFor28,
        labelTextStyle: { color: "lightgray", width: 60 },
        labelComponent: () => label(getDate(28)),
      },
      {
        value: openFor21,
        labelTextStyle: { color: "lightgray", width: 60 },
        labelComponent: () => label(getDate(21)),
      },
      {
        value: openFor14,
        labelTextStyle: { color: "lightgray", width: 60 },
        labelComponent: () => label(getDate(14)),
      },
      {
        value: openFor7,
        labelTextStyle: { color: "lightgray", width: 60 },
        labelComponent: () => label(getDate(7)),
      },
      {
        value: maxOpenRef.current.toFixed(2),
        labelTextStyle: { color: "lightgray", width: 60 },
        labelComponent: () => label(getDate(0)),
      },
    ];

    const chartData7Days: any = [
      {
        value: openFor28,
        labelTextStyle: { color: "lightgray", width: 60 },
        labelComponent: () => label(getDate(28)),
      },
      {
        value: openFor21,
        labelTextStyle: { color: "lightgray", width: 60 },
        labelComponent: () => label(getDate(21)),
      },
      {
        value: openFor14,
        labelTextStyle: { color: "lightgray", width: 60 },
        labelComponent: () => label(getDate(14)),
      },
      {
        value: openFor7,
        labelTextStyle: { color: "lightgray", width: 60 },
        labelComponent: () => label(getDate(7)),
      },
    ];

    const chartData14Days: any = [
      {
        value: openFor28,
        labelTextStyle: { color: "lightgray", width: 60 },
        labelComponent: () => label(getDate(28)),
      },
      {
        value: openFor21,
        labelTextStyle: { color: "lightgray", width: 60 },
        labelComponent: () => label(getDate(21)),
      },
      {
        value: openFor14,
        labelTextStyle: { color: "lightgray", width: 60 },
        labelComponent: () => label(getDate(14)),
      },
    ];

    const chartData21Days: any = [
      {
        value: openFor28,
        labelTextStyle: { color: "lightgray", width: 60 },
        labelComponent: () => label(getDate(28)),
      },
      {
        value: openFor21,
        labelTextStyle: { color: "lightgray", width: 60 },
        labelComponent: () => label(getDate(21)),
      },
    ];

    const chartData28Days: any = [
      {
        value: openFor28,
        labelTextStyle: { color: "lightgray", width: 60 },
        labelComponent: () => label(getDate(28)),
      },
    ];

    const Chart = ({ data }: any) => {
      return (
        <View
          style={{
            width: screenWidth,
            padding: 20,
            backgroundColor: "#152127",
            // backgroundColor: "#263238",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Icon
              size={26}
              color="#cddc39"
              name="update"
              onPress={() => onClickChangePeriod(getDate(0))}
            />

            <Text
              style={{
                left: 10,
                flex: 1,
                color: "white",
                fontSize: 16,
                fontFamily: "Lato",
              }}
            >
              {`Period: ${period}`}
            </Text>
            <Text style={{ color: "white", fontSize: 16, fontFamily: "Lato" }}>
              Average:
            </Text>
            <Text
              style={{
                color: "#cddc39",
                fontSize: 16,
                fontWeight: "bold",
                left: 5,
              }}
            >
              {average()}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              padding: 20,
            }}
          >
            <LineChart
              width={screenWidth - 90}
              curved
              isAnimated
              thickness={2}
              maxValue={400}
              noOfSections={4}
              animateOnDataChange
              animationDuration={1000}
              onDataChangeAnimationDuration={300}
              // hideDataPoints
              dataPointsColor="#cddc39"
              areaChart
              data={data}
              startOpacity={0.9}
              endOpacity={0.2}
              spacing={60}
              hideRules
              initialSpacing={50}
              color="#00ff83"
              startFillColor="rgba(20,105,81,0.3)"
              endFillColor="rgba(20,85,81,0.01)"
              rulesType="solid"
              rulesColor="gray"
              // yAxisLabelSuffix="$"
              yAxisColor="white"
              yAxisThickness={0}
              yAxisTextStyle={{ color: "gray" }}
              xAxisColor="transparent"
              pointerConfig={{
                pointerStripHeight: 160,
                pointerStripColor: "lightgray",
                pointerStripWidth: 2,
                pointerColor: "lightgray",
                radius: 6,
                pointerLabelWidth: 100,
                pointerLabelHeight: 90,
                activatePointersOnLongPress: true,
                autoAdjustPointerLabelPosition: false,
                pointerLabelComponent: (item: any) => {
                  return (
                    <View
                      style={{
                        height: 90,
                        width: 80,
                        justifyContent: "center",
                        marginTop: -10,
                        marginLeft: -30,
                      }}
                    >
                      <View
                        style={{
                          paddingHorizontal: 14,
                          paddingVertical: 6,
                          borderRadius: 16,
                          backgroundColor: "#455a64",
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontWeight: "bold",
                            textAlign: "center",
                          }}
                        >
                          {item[0].value}
                        </Text>
                      </View>
                    </View>
                  );
                },
              }}
            />
          </View>
        </View>
      );
    };

    useEffect(() => {
      setIsLoading(false);
    }, [
      placeRef.current,
      symbolRef.current,
      maxOpenRef.current,
      openForDateRef[0].current,
      openForDateRef[1].current,
      openForDateRef[2].current,
      openForDateRef[3].current,
      trendRef.current,
    ]);

    const average = () => {
      const sumOf: number =
        openForDateRef[0].current +
        openForDateRef[1].current +
        openForDateRef[2].current +
        openForDateRef[3].current;

      const avg: number = sumOf / 4;
      const result: string = avg.toFixed(2);

      return result;
    };

    const periodSwitcher = (period: string) => {
      switch (period) {
        case getDate(7):
          return <Chart data={chartData7Days} />;

        case getDate(14):
          return <Chart data={chartData14Days} />;

        case getDate(21):
          return <Chart data={chartData21Days} />;

        case getDate(28):
          return <Chart data={chartData28Days} />;

        default:
        case getDate(0):
          return <Chart data={chartDataCurrent} />;
      }
    };

    return (
      <View>
        {isLoading ? (
          <Text style={{ color: "white" }}>Loading...</Text>
        ) : (
          <>
            {!isOverlayVisibleModalChart ? (
              <>
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        alignContent: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      <IconButton
                        icon={(props): any => (
                          <Icon name="finance" {...props} />
                        )}
                        style={{
                          width: 50,
                          height: 50,
                          backgroundColor: "#152127",
                        }}
                        color="#cddc39"
                        onPress={() => onClickOpenModalWithChart()}
                      />

                      <Box
                        w={screenWidth / 3}
                        h={50}
                        radius={14}
                        style={{
                          backgroundColor: "#455a64",
                          flexDirection: "row",
                          alignItems: "center",
                          alignContent: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            textAlign: "center",
                            color: "white",
                            fontSize: 15,
                            letterSpacing: 1.1,
                            fontWeight: "bold",
                          }}
                        >
                          {maxOpenRef.current !== null
                            ? maxOpenRef.current.toFixed(2)
                            : "N/A"}{" "}
                          {trendRef.current}
                        </Text>
                      </Box>

                      <Box
                        w={screenWidth / 3}
                        h={50}
                        m={0}
                        radius={14}
                        style={{
                          backgroundColor: "#152127",
                          flexDirection: "row",
                          alignItems: "center",
                          alignContent: "center",
                          justifyContent: "center",
                        }}
                      >
                        <View
                          style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "space-around",
                            alignItems: "center",
                            alignContent: "center",
                          }}
                        >
                          <Text
                            style={{
                              textAlign: "center",
                              left: 5,
                              color: "white",
                              fontSize: 20,
                              letterSpacing: 1.1,
                              fontFamily: "Lato",
                            }}
                          >
                            {symbolRef.current}
                          </Text>
                          <View>
                            {checker<SourceType, typeof SymbolIcon>(
                              symbolRef.current,
                              checkOne,
                              SymbolIcon
                            )}
                          </View>
                        </View>
                      </Box>
                    </View>
                  </View>
                  <Divider
                    style={{
                      alignSelf: "center",
                      width: screenWidth - 20,
                      backgroundColor: "#607d8b",
                      height: 2,
                      top: 20,
                      marginBottom: 20,
                    }}
                  />
                  <ScrollView
                    style={{
                      bottom: 0,
                      marginBottom: 0,
                      marginTop: 0,
                      backgroundColor: "#263238",
                    }}
                    contentContainerStyle={{
                      paddingBottom: insets.bottom + 300,
                      width: screenWidth,
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <View
                        style={{
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          alignContent: "center",
                          width: screenWidth,
                        }}
                      >
                        <Box
                          w={screenWidth - 20}
                          h={150}
                          top={10}
                          radius={14}
                          style={{
                            backgroundColor: "#152127",
                            flexDirection: "row",
                            alignItems: "center",
                            alignContent: "center",
                          }}
                        >
                          {/* <ShowMoreText
                        initialText="In progress..."
                        expandedText="Great cool long text that will be here about interesting facts from the company."
                      /> */}
                          <View
                            style={{
                              flex: 1,
                              flexDirection: "row",
                              justifyContent: "center",
                              alignItems: "center",
                              alignContent: "center",
                            }}
                          >
                            <ContentSwitcher
                              symbol={symbolRef.current}
                              isName={false}
                            />
                          </View>
                        </Box>
                        <View style={{ flex: 1 }}>
                          {checker<SourceType, typeof ProductImage>(
                            symbolRef.current,
                            checkThree,
                            ProductImage
                          )}
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        position: "relative",
                        top: 20,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <IconButton
                        icon={(props): any => <Icon name="close" {...props} />}
                        color="#cddc39"
                        style={{
                          width: 50,
                          height: 50,
                          backgroundColor: "#152127",
                        }}
                        onPress={onClickCloseModal}
                      />
                    </View>
                  </ScrollView>
                </View>
              </>
            ) : (
              <>
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        alignContent: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      <IconButton
                        icon={(props): any => (
                          <Icon name="arrow-left" {...props} />
                        )}
                        color="#cddc39"
                        style={{
                          width: 50,
                          height: 50,
                          backgroundColor: "#152127",
                        }}
                        onPress={onClickCloseModalWithChart}
                      />

                      <Box
                        w={screenWidth / 1.5}
                        h={50}
                        radius={14}
                        style={{
                          backgroundColor: "#152127",
                          flexDirection: "row",
                          alignItems: "center",
                          alignContent: "center",
                          justifyContent: "space-around",
                        }}
                      >
                        <Text
                          style={{
                            textAlign: "center",
                            color: "white",
                            fontSize: 20,
                            letterSpacing: 1.1,
                            fontFamily: "Lato",
                            textTransform: "uppercase",
                          }}
                        >
                          Chart for:
                        </Text>
                        <Text
                          style={{
                            textAlign: "center",
                            color: "#cddc39",
                            fontSize: 20,
                            letterSpacing: 1.1,
                            fontWeight: "bold",
                          }}
                        >
                          {symbolRef.current}
                        </Text>
                      </Box>
                    </View>
                  </View>
                  <Divider
                    style={{
                      alignSelf: "center",
                      width: screenWidth - 20,
                      backgroundColor: "#607d8b",
                      height: 2,
                      top: 20,
                      marginBottom: 20,
                    }}
                  />
                </View>
                {/* <View
                  style={{
                    margin: 10,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  <Text style={{ flex: 1, color: "white" }}>
                    {`7 days ${
                      openForDateRef[0].current !== null
                        ? openForDateRef[0].current.toFixed(2)
                        : "N/A"
                    }`}
                  </Text>
                  <Text style={{ flex: 1, color: "white" }}>
                    {`14 days ${
                      openForDateRef[1].current !== null
                        ? openForDateRef[1].current.toFixed(2)
                        : "N/A"
                    }`}
                  </Text>
                  <Text style={{ flex: 1, color: "white" }}>
                    {`21 days ${
                      openForDateRef[2].current !== null
                        ? openForDateRef[2].current.toFixed(2)
                        : "N/A"
                    }`}
                  </Text>
                  <Text style={{ flex: 1, color: "white" }}>
                    {`28 days ${
                      openForDateRef[3].current !== null
                        ? openForDateRef[3].current.toFixed(2)
                        : "N/A"
                    }`}
                  </Text>
                </View> */}
                <View
                  style={{
                    width: "100%",
                    marginTop: 12,
                    marginBottom: 12,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Chip
                    style={{ alignSelf: "center", backgroundColor: "#455a64" }}
                    labelStyle={{ fontFamily: "Lato" }}
                    label="7 days"
                    color="white"
                    onPress={() => onClickChangePeriod(getDate(7))}
                  />
                  <Chip
                    style={{ alignSelf: "center", backgroundColor: "#455a64" }}
                    labelStyle={{ fontFamily: "Lato" }}
                    label="14 days"
                    color="white"
                    onPress={() => onClickChangePeriod(getDate(14))}
                  />
                  <Chip
                    style={{ alignSelf: "center", backgroundColor: "#455a64" }}
                    labelStyle={{ fontFamily: "Lato" }}
                    label="21 days"
                    color="white"
                    onPress={() => onClickChangePeriod(getDate(21))}
                  />
                  <Chip
                    style={{ alignSelf: "center", backgroundColor: "#455a64" }}
                    labelStyle={{ fontFamily: "Lato" }}
                    label="28 days"
                    color="white"
                    onPress={() => onClickChangePeriod(getDate(28))}
                  />
                </View>
                {periodSwitcher(period)}
              </>
            )}
          </>
        )}
      </View>
    );
  };

  const onModalOpened = (
    symbol: string,
    place: number,
    maxOpen: number | null,
    openForDateOneWeek: number | null,
    openForDateTwoWeek: number | null,
    openForDateThreeWeek: number | null,
    openForDateFourWeek: number | null,
    trend: string
  ) => {
    placeRef.current = place;
    symbolRef.current = symbol;
    maxOpenRef.current = maxOpen ?? 0;
    openForDateRef[0].current = openForDateOneWeek ?? 0;
    openForDateRef[1].current = openForDateTwoWeek ?? 0;
    openForDateRef[2].current = openForDateThreeWeek ?? 0;
    openForDateRef[3].current = openForDateFourWeek ?? 0;
    trendRef.current = trend;
    onClickOpenModal();
  };

  const StockData: React.FC<{ symbol: string; place: number }> = ({
    symbol,
    place,
  }) => {
    const [maxOpen, setMaxOpen] = useState<number | null>(null);

    const [openForDate, setOpenForDate] = useState<(number | null)[]>([
      null,
      null,
      null,
    ]);

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [trend, setTrend] = useState<string>("");
    const mountedRef = useRef<boolean>(false);

    const [data, setData] = useState<Data | any>(null);
    const [refreshData, setRefreshData] = useState<Data | null>(null);

    const maxOpenUpdate = (timeSeriesData: Data["Time Series (5min)"]) => {
      let maxOpen: number | null = null;
      for (let key in timeSeriesData) {
        const open: number = parseFloat(timeSeriesData[key]["1. open"]);
        if (maxOpen === null || open > maxOpen) {
          maxOpen = open;
        }
      }
      return maxOpen;
    };

    const openForDateUpdate = (
      timeSeriesData: Data["Time Series (5min)"],
      previousDate: number
    ) => {
      let openForDate: number | null = null;

      const previousDateSwitcher = (): any => {
        switch (previousDate) {
          case 7:
            return getPreviousDate(7);
          case 14:
            return getPreviousDate(14);
          case 21:
            return getPreviousDate(21);
          case 28:
            return getPreviousDate(28);
          default:
            console.log("N/A");
            break;
        }
      };

      for (let key in timeSeriesData) {
        // 2023-05-09 20:00:00
        let date: string = `${previousDateSwitcher()} 16:00:00`;

        key = date;

        const openForDateData: number =
          parseFloat(timeSeriesData[key]["1. open"]) ?? undefined;

        openForDate = openForDateData;

        if (openForDateData != null) {
          console.log(openForDateData);
          break;
        } else {
          console.log(`No data found for the date ${date}`);
        }
      }
      return openForDate;
    };

    const trendUpdate = (data: any): string => {
      let prevHighValue: number | null = null;
      let prevLowValue: number | null = null;

      for (let key in data) {
        const high: number = parseFloat(data[key]["2. high"]);
        const low: number = parseFloat(data[key]["3. low"]);

        const up: any = () => (
          <MaterialCommunityIcons name="trending-up" size={32} color="lime" />
        );

        const down: any = () => (
          <MaterialCommunityIcons name="trending-down" size={32} color="red" />
        );

        if (prevHighValue !== null && high > prevHighValue) {
          return up;
        } else if (prevLowValue !== null && low < prevLowValue) {
          return down;
        }

        prevHighValue = high;
        prevLowValue = low;
      }

      return "N/A";
    };

    // Status Codes:

    //1XX - Informational
    //2XX - Success   - (good)
    //3XX - Redirection
    //4XX - Client Error (bad)
    //5XX - Server Error

    const fetchData = async (data: Data): Promise<Data | undefined> => {
      // for MSFT we have values (because it's a demo), for the rest, you need to provide the key.
      const apiUrl: string = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&outputsize=full&apikey=demo`;

      try {
        const response = await fetch(apiUrl);
        data = await response.json();

        // data for date:

        setMaxOpen(maxOpenUpdate(data["Time Series (5min)"]));
        setTrend(trendUpdate(data["Time Series (5min)"]));

        setData(data);
        setRefreshData(data);

        if (openForDate != null) {
          setOpenForDate([
            openForDateUpdate(data["Time Series (5min)"], 7),
            openForDateUpdate(data["Time Series (5min)"], 14),
            openForDateUpdate(data["Time Series (5min)"], 21),
            openForDateUpdate(data["Time Series (5min)"], 28),
          ]);
        } else {
          console.log("error");
        }

        setIsLoading(false);

        // console.log(data["Meta Data"]);
        // console.log(data["Time Series (5min)"])
        // console.log(
        //   `${
        //     response.status === 200 ? "Success!" : "Error"
        //   } The current status of the ALPHA VANTAGE website is: ${
        //     response.status
        //   }. `
        // );
        // console.log(data);

        return data;
      } catch (error) {
        console.error(
          `An error occurred while fetching the data. For symbol: ${symbol}`
        );
        // console.error("An error occurred while fetching the data.", error);
      }
    };

    useEffect(() => {
      // fetchData(data);
      
      // if (!mountedRef.current) {
      //   mountedRef.current = true;
      //   fetchData();
      //   let interval = setInterval(() => {
      //     setRefreshData(data);
      //     fetchData();
      //     console.log("data refreshed");
      //     showToast();
      //     setIsLoading(false);
      //   }, 30000);
      //   return () => clearInterval(interval);
      // }
    }, []);

    return (
      <View>
        {isLoading && !isOverlayVisible && !data && !refreshData ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Text
              style={{ color: "white", marginRight: 20, letterSpacing: 1.1 }}
            >
              Loading...
            </Text>
            <ActivityIndicator size="small" color="#b6843a" />
          </View>
        ) : data && refreshData ? (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Text
                style={{
                  flex: 1,
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Lato",
                  letterSpacing: 1.1,
                }}
              >{`${place}.`}</Text>
              <MaterialCommunityIcons
                name="information"
                size={20}
                color="#b6843a"
                onPress={() => {
                  onModalOpened(
                    symbol,
                    place,
                    maxOpen,
                    openForDate[0],
                    openForDate[1],
                    openForDate[2],
                    openForDate[3],
                    trend
                  );
                }}
                style={{ marginRight: 10 }}
              />
              <Text style={{ flex: 1, textAlign: "center" }}>
                {checker<SourceType, typeof SymbolIcon>(
                  symbol,
                  checkOne,
                  SymbolIcon
                )}
              </Text>
              <Text
                style={{
                  flex: 1,
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Lato",
                  letterSpacing: 1.1,
                }}
              >
                {symbol}
              </Text>
              <Text
                style={{
                  flex: 1,
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Lato",
                }}
              >
                {maxOpen !== null ? maxOpen.toFixed(2) : "N/A"}
              </Text>
              <Text
                style={{
                  flex: 1,
                  textAlign: "center",
                  color:
                    trend === "low"
                      ? "red"
                      : "lime" && trend === "N/A"
                      ? "white"
                      : "white",
                }}
              >
                {trend}
              </Text>
            </View>
          </>
        ) : !refreshData ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                right: 5,
                textAlign: "center",
                color: "white",
                fontFamily: "Lato",
                letterSpacing: 1.1,
              }}
            >
              Data is being refreshed, please wait...
            </Text>
            <MaterialCommunityIcons
              name="database-refresh"
              size={20}
              color="#ffc107"
            />
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                right: 20,
                textAlign: "center",
                color: "white",
                fontFamily: "Lato",
                letterSpacing: 1.1,
              }}
            >
              No data
            </Text>
            <MaterialCommunityIcons
              name="database-eye-off"
              size={20}
              color="#eb144c"
            />
          </View>
        )}
      </View>
    );
  };

  function newValues<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  const symbols: string[] = [
    "AAPL",
    "MSFT",
    "LMT",
    "TSLA",
    "NVDA",
    "DPZ",
    "CAT",
    "EA",
    "NFLX",
    "SPCE",
  ];

  const randomSymbols: string[] = newValues(symbols);

  const getCurrentYear: number = new Date().getFullYear();

  const getPreviousDate = (day: number): string => {
    const monthValue: string[] = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];

    const date: Date = new Date();

    date.setDate(date.getDate() - day);

    const getPreviousDay: number = date.getDate();
    const getPreviousMonth: number = date.getMonth();

    return getPreviousDay < 10
      ? `${getCurrentYear}-${monthValue[getPreviousMonth]}-0${getPreviousDay}`
      : `${getCurrentYear}-${monthValue[getPreviousMonth]}-${getPreviousDay}`;
  };

  // console.log("data: ", getPreviousDate(2));

  return (
    <View
      style={{
        flex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop: 0,
        width: "100%",
        backgroundColor: "#263238",
        // backgroundColor: "#152127",
      }}
    >
      {!isOverlayVisible ? (
        <>
          <View
            style={{
              paddingTop: insets.top,
              marginBottom: 10,
              alignItems: "center",
              backgroundColor: "#263238",
            }}
          >
            <AppBar
              style={{ backgroundColor: "#152127", width: screenWidth }}
              leading={() => (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    resizeMode="contain"
                    resizeMethod="scale"
                    style={{ width: "75%", height: 50 }}
                    source={logoTitle}
                    alt="titleOfLogo"
                  />
                </View>
              )}
              trailing={() => (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MaterialCommunityIcons
                    name="logout"
                    size={32}
                    color="#d32f2f"
                    onPress={() => {
                      Alert.alert(
                        "Exit",
                        "Are you sure you want to exit the app?",
                        [
                          { text: "Cancel", style: "cancel" },
                          {
                            text: "OK",
                            onPress: () => {
                              if (Platform.OS === "ios") {
                                Linking.openURL("app-settings:");
                              } else {
                                BackHandler.exitApp();
                              }
                            },
                          },
                        ],
                        { cancelable: false }
                      );
                    }}
                  />
                </View>
              )}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Box
              w={screenWidth - 20}
              h={50}
              m={4}
              radius={14}
              style={{
                // backgroundColor: "#b6843a", the same color as button
                backgroundColor: "#152127",
                justifyContent: "center",
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    textAlign: "center",
                    color: "#cddc39",
                    textTransform: "uppercase",
                    fontFamily: "Lato",
                  }}
                >
                  Place
                </Text>
                <Text
                  style={{
                    flex: 1,
                    textAlign: "center",
                    color: "#cddc39",
                    textTransform: "uppercase",
                    fontFamily: "Lato",
                  }}
                >
                  Symbol
                </Text>
                <Text
                  style={{
                    flex: 1,
                    textAlign: "center",
                    color: "#cddc39",
                    textTransform: "uppercase",
                    fontFamily: "Lato",
                  }}
                >
                  Name
                </Text>
                <Text
                  style={{
                    flex: 1,
                    textAlign: "center",
                    color: "#cddc39",
                    textTransform: "uppercase",
                    fontFamily: "Lato",
                  }}
                >
                  Value
                </Text>
                <Text
                  style={{
                    flex: 1,
                    textAlign: "center",
                    color: "#cddc39",
                    textTransform: "uppercase",
                    fontFamily: "Lato",
                  }}
                >
                  Trend
                </Text>
              </View>
            </Box>
          </View>
          <Toast position="top" visibilityTime={2000} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              alignContent: "center",
              alignSelf: "flex-start",
              marginBottom: 10,
            }}
          >
            <Badge
              style={{ marginLeft: 10 }}
              labelStyle={{
                color: "#abb8c3",
                fontFamily: "Lato",
                letterSpacing: 1.1,
              }}
              label={
                !isOverlayVisible ? "Data refreshed every 5 minutes" : "No data"
              }
              color="#263238"
            />
            <MaterialCommunityIcons
              name={!isOverlayVisible ? "database-eye" : "database-eye-off"}
              size={20}
              color={!isOverlayVisible ? "#4caf50" : "#eb144c"}
            />
          </View>
          <ScrollView
            style={{
              bottom: 0,
              marginBottom: 40,
              marginTop: 0,
              backgroundColor: "#263238",
            }}
            contentContainerStyle={{
              paddingBottom: insets.bottom + 20,
              width: screenWidth,
            }}
          >
            <View
              style={[
                StyleSheet.absoluteFillObject,
                {
                  backgroundColor: isOverlayVisible
                    ? "rgba(0, 0, 0, 0.5)"
                    : "#263238",
                  zIndex: isOverlayVisible ? 1 : -1,
                },
              ]}
            />
            <React.Fragment>
              {randomSymbols.map((symbol, i) => (
                <Box
                  key={`box-${i}`}
                  w={screenWidth - 20}
                  h={50}
                  m={4}
                  radius={14}
                  style={{
                    backgroundColor: "#455a64",
                    justifyContent: "center",

                    marginBottom: 12,
                    left: 5,
                  }}
                >
                  <StockData
                    key={`stockData-${i}`}
                    symbol={symbol}
                    place={i + 1}
                  />
                </Box>
              ))}
            </React.Fragment>
          </ScrollView>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              paddingBottom: insets.bottom,
            }}
          >
            <Text
              style={{
                top: -20,
                color: "#90a4ae",
                fontFamily: "Lato",
                fontSize: 16,
                letterSpacing: 1.1,
              }}
            >
              &copy;{" "}
              {`Equity Eagle ${`(v.${appJSON.expo.version})`} - ${getCurrentYear}`}{" "}
              &copy;
            </Text>
          </View>
        </>
      ) : (
        <View style={{ flex: 1, top: -30 }}>
          {/* issue with load image on IOS */}

          {/* {imageLoading && ( */}
          {/* <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator size="large" color="#b6843a" />
              <Text style={{ marginTop: 10, color: "white" }}>Loading...</Text>
            </View> */}
          {/* )} */}
          <View>
            {checker<SourceType, typeof ThemeImage>(
              symbolRef.current,
              checkTwo,
              ThemeImage
            )}
          </View>
        </View>
      )}
      <BottomSheetModalProvider>
        <SafeAreaView
          style={{
            flex: 1,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <BottomSheetModal
            enablePanDownToClose={false}
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={["65%", 500, "80%"]}
            handleIndicatorStyle={{
              backgroundColor: "#263238",
              opacity: 0.5,
            }}
            backgroundStyle={{ backgroundColor: "#263238" }}
            enableDismissOnClose={true}
          >
            <ModalData />
          </BottomSheetModal>
        </SafeAreaView>
      </BottomSheetModalProvider>
    </View>
  );
};
