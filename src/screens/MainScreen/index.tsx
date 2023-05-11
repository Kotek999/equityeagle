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
  Button,
} from "@react-native-material/core";
import { logoTitle } from "../../helpers/imageRequirements";
import { LineChart } from "react-native-gifted-charts";

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
        <View style={{ top: 10 }}>
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

  interface NoFactsProps {
    symbol: Symbols;
  }

  const NoFacts = ({ symbol }: NoFactsProps): JSX => {
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
          {`No facts for ${symbol}.`}
        </Text>
      </>
    );
  };

  const factsSwitcher = (symbol: any): JSX => {
    const data: Symbols = symbolDataMap[symbol];
    return data ? (
      <InterestingFacts data={data} />
    ) : (
      <NoFacts symbol={symbol} />
    );
  };

  const ModalData: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const Chart = () => {
      const ptData: any = [
        { value: 160, date: "1 Apr 2022" },
        { value: 180, date: "2 Apr 2022" },
        { value: 190, date: "3 Apr 2022" },
        { value: 180, date: "4 Apr 2022" },
        { value: 140, date: "5 Apr 2022" },
        { value: 145, date: "6 Apr 2022" },
        { value: 160, date: "7 Apr 2022" },
        { value: 200, date: "8 Apr 2022" },

        { value: 220, date: "9 Apr 2022" },
        {
          value: 240,
          date: "10 Apr 2022",
          label: "10 Apr",
          labelTextStyle: { fontFamily: "Lato", color: "lightgray", width: 60 },
        },
        { value: 280, date: "11 Apr 2022" },
        { value: 260, date: "12 Apr 2022" },
        { value: 340, date: "13 Apr 2022" },
        { value: 385, date: "14 Apr 2022" },
        { value: 280, date: "15 Apr 2022" },
        { value: 390, date: "16 Apr 2022" },

        { value: 370, date: "17 Apr 2022" },
        { value: 285, date: "18 Apr 2022" },
        { value: 295, date: "19 Apr 2022" },
        {
          value: 300,
          date: "20 Apr 2022",
          label: "20 Apr",
          labelTextStyle: { fontFamily: "Lato", color: "lightgray", width: 60 },
        },
        { value: 280, date: "21 Apr 2022" },
        { value: 295, date: "22 Apr 2022" },
        { value: 260, date: "23 Apr 2022" },
        { value: 255, date: "24 Apr 2022" },

        { value: 190, date: "25 Apr 2022" },
        { value: 220, date: "26 Apr 2022" },
        { value: 205, date: "27 Apr 2022" },
        { value: 230, date: "28 Apr 2022" },
        { value: 210, date: "29 Apr 2022" },
        {
          value: 200,
          date: "30 Apr 2022",
          label: "30 Apr",
          labelTextStyle: { fontFamily: "Lato", color: "lightgray", width: 60 },
        },
        { value: 240, date: "1 May 2022" },
        { value: 250, date: "2 May 2022" },
        { value: 280, date: "3 May 2022" },
        { value: 250, date: "4 May 2022" },
        { value: 210, date: "5 May 2022" },
      ];

      return (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <View
            style={{
              top: 0,
              width: screenWidth,
              paddingVertical: 80,
              paddingLeft: 10,
              // bgColor for tests:
              backgroundColor: "#263238",
              // backgroundColor: "#263238",
            }}
          >
            <LineChart
              areaChart
              data={ptData}
              rotateLabel
              width={screenWidth / 1.25}
              height={screenHeight / 6}
              hideDataPoints
              spacing={11}
              color="#00d084"
              // color="#cddc39"
              thickness={2}
              startFillColor="#00d084"
              endFillColor="rgba(20,85,81,0.01)"
              startOpacity={0.9}
              endOpacity={0.2}
              initialSpacing={0}
              noOfSections={6}
              maxValue={600}
              yAxisColor="white"
              yAxisThickness={0}
              rulesType="solid"
              rulesColor="gray"
              yAxisTextStyle={{ color: "gray" }}
              yAxisSide="right"
              xAxisColor="lightgray"
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
                pointerLabelComponent: (items: any) => {
                  return (
                    <View
                      style={{
                        height: 90,
                        width: 100,
                        justifyContent: "center",
                        marginTop: 0,
                        marginLeft: -40,
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Lato",
                          color: "white",
                          fontSize: 14,
                          textAlign: "center",
                        }}
                      >
                        {items[0].date}
                      </Text>

                      <View
                        style={{
                          top: 10,
                          paddingHorizontal: 14,
                          paddingVertical: 6,
                          borderRadius: 16,
                          backgroundColor: "#455a64",
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: "Lato",
                            fontWeight: "bold",
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          {"$" + items[0].value + ".0"}
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
      trendRef.current,
    ]);

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
                      justifyContent: "space-between",
                      paddingHorizontal: 16,
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        alignContent: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          left: -10,
                          color: "#cddc39",
                          fontSize: 24,
                          letterSpacing: 1.1,
                          fontFamily: "Lato",
                        }}
                      >
                        {placeRef.current}.
                      </Text>
                      <Box
                        w={screenWidth / 3}
                        h={50}
                        mr={10}
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
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        w={screenWidth / 2.2}
                        h={50}
                        m={0}
                        radius={14}
                        style={{
                          backgroundColor: "#152127",
                          flexDirection: "row",
                          alignItems: "center",
                          alignContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            flex: 1,
                            textAlign: "center",
                            color: "white",
                            fontSize: 20,
                            letterSpacing: 1.1,
                            fontFamily: "Lato",
                          }}
                        >
                          {symbolRef.current}
                        </Text>
                        <View style={{ flex: 1 }}>
                          {checker<SourceType, typeof SymbolIcon>(
                            symbolRef.current,
                            checkOne,
                            SymbolIcon
                          )}
                        </View>
                      </Box>
                    </View>
                  </View>
                  <Divider
                    style={{
                      backgroundColor: "#abb8c3",
                      top: 20,
                      marginBottom: 20,
                    }}
                  />
                  <ScrollView
                    style={{
                      bottom: 0,
                      marginBottom: 50,
                      marginTop: 0,
                      backgroundColor: "#263238",
                    }}
                    contentContainerStyle={{
                      paddingBottom: insets.bottom + 200,
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
                            {factsSwitcher(symbolRef.current)}
                          </View>
                        </Box>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            alignContent: "center",
                            justifyContent: "center",
                            alignSelf: "flex-start",
                          }}
                        >
                          <Box
                            w={screenWidth / 2}
                            h={150}
                            m={10}
                            top={10}
                            radius={14}
                            style={{
                              backgroundColor: "#152127",
                              flexDirection: "row",
                              alignItems: "center",
                              alignContent: "center",
                            }}
                          >
                            <Text
                              style={{
                                flex: 1,
                                fontFamily: "Lato",
                                color: "white",
                                textAlign: "center",
                                letterSpacing: 1.1,
                              }}
                            >
                              Map or Image of Place
                            </Text>
                          </Box>
                          <View
                            style={{
                              flex: 1,
                              right: 5,
                              flexDirection: "row",
                              justifyContent: "center",
                              alignItems: "center",
                              alignContent: "center",
                            }}
                          >
                            <Button
                              style={{ width: "90%" }}
                              variant="contained"
                              color="#152127"
                              title="Show chart"
                              tintColor="#cddc39"
                              trailing={(props) => (
                                <Icon name="chart-line" {...props} />
                              )}
                              onPress={() => onClickOpenModalWithChart()}
                            />
                          </View>
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
                          width: 40,
                          height: 40,
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
                      justifyContent: "space-between",
                      paddingHorizontal: 16,
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        alignContent: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        w={screenWidth - 20}
                        h={50}
                        radius={14}
                        style={{
                          flex: 1,
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
                            fontWeight: "bold",
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
                      backgroundColor: "#abb8c3",
                      top: 20,
                      marginBottom: 20,
                    }}
                  />
                </View>
                <Chart />
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
                      width: 40,
                      height: 40,
                      backgroundColor: "#152127",
                    }}
                    onPress={onClickCloseModal}
                  />
                </View>
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
    trend: string
  ) => {
    placeRef.current = place;
    symbolRef.current = symbol;
    maxOpenRef.current = maxOpen != null ? maxOpen : 0;
    trendRef.current = trend;
    onClickOpenModal();
  };

  const StockData: React.FC<{ symbol: string; place: number }> = ({
    symbol,
    place,
  }) => {
    const [maxOpen, setMaxOpen] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [trend, setTrend] = useState<string>("");
    const mountedRef = useRef<boolean>(false);

    const [data, setData] = useState<Data | null>(null);
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

    const fetchData = async (): Promise<any> => {
      // for MSFT we have values (because it's a demo), for the rest, you need to provide the key.
      const apiUrl: string = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=demo`;

      try {
        const response = await fetch(apiUrl);
        const data: Data = await response.json();
        setMaxOpen(maxOpenUpdate(data["Time Series (5min)"]));
        setTrend(trendUpdate(data["Time Series (5min)"]));
        setData(data);
        setRefreshData(data);
        setIsLoading(false);
        // console.log(data["Meta Data"]);
        // console.log(data["Time Series (5min)"])
        // console.log(
        //   `The current status of the ALPHA VANTAGE website is: ${response.status}. `
        // );
        // console.log(data);
        return data;
      } catch (error) {
        console.error("An error occurred while fetching the data.", error);
      }
    };

    useEffect(() => {
      fetchData();
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
                  onModalOpened(symbol, place, maxOpen, trend);
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

  const currentYear: number = new Date().getFullYear();

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
        backgroundColor: "#152127",
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
                backgroundColor: "#00d084",
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
                    color: "white",
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
                    color: "white",
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
                    color: "white",
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
                    color: "white",
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
                    color: "white",
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
              color="#152127"
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
                    top: 12,
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
              {`Equity Eagle ${`(v.${appJSON.expo.version})`} - ${currentYear}`}{" "}
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
