import React, { useState, useEffect, useRef } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import isIOS from "../../helpers/rulesOfDevice/isIOS";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Toast from "react-native-toast-message";
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
} from "@react-native-material/core";
import { logoTitle } from "../../helpers/imageRequirements";

// TODO --> powerfull refactor

export const MainScreen = (): JSX => {
  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Data downloaded",
    });
  };

  const iconAAPL = require("../../assets/icons/AAPL.png");
  const iconMSFT = require("../../assets/icons/MSFT.png");
  const iconGOOGL = require("../../assets/icons/GOOGL.png");
  const iconTSLA = require("../../assets/icons/TSLA.png");
  const iconNVDA = require("../../assets/icons/NVDA.png");
  const iconDPZ = require("../../assets/icons/DPZ.png");
  const iconCAT = require("../../assets/icons/CAT.png");
  const iconEA = require("../../assets/icons/EA.png");
  const iconNFLX = require("../../assets/icons/NFLX.png");
  const iconSPCE = require("../../assets/icons/SPCE.png");

  const contentImg = require("../../assets/companiesImg/content.png");

  type IconProps = {
    source: ImageSourcePropType;
  };

  const SymbolIcon = ({ source }: IconProps): JSX => {
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

  type IconType = {
    uri: string;
  };

  const symbolChecker = (symbol: string): JSX.Element | string => {
    const iconMap: Record<string, IconType> = {
      AAPL: iconAAPL,
      MSFT: iconMSFT,
      GOOGL: iconGOOGL,
      TSLA: iconTSLA,
      NVDA: iconNVDA,
      DPZ: iconDPZ,
      CAT: iconCAT,
      EA: iconEA,
      NFLX: iconNFLX,
      SPCE: iconSPCE,
    };

    const source = iconMap[symbol];

    return source ? <SymbolIcon source={source} /> : "N/A";
  };

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [imageLoading, setImageLoading] = useState<boolean>(true);

  const imageOnLoad = () => {
    setImageLoading(false);
  };

  const placeRef = useRef(0);
  const symbolRef = useRef("");
  const maxOpenRef = useRef(0);
  const trendRef = useRef("");

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const onClickOpenModal = () => {
    setIsOverlayVisible(true);
    bottomSheetModalRef.current?.present();
  };

  const onClickCloseModal = () => {
    setIsOverlayVisible(false);
    bottomSheetModalRef.current?.close();
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
  const ModalData: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

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
                    flex: 1,
                    color: "#00d084",
                    fontSize: 24,
                    fontFamily: "Lato",
                  }}
                >
                  {placeRef.current}.
                </Text>
                <Box
                  w={screenWidth / 3}
                  h={50}
                  mr={20}
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
                style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
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
                      fontFamily: "Lato",
                    }}
                  >
                    {symbolRef.current}
                  </Text>
                  <View style={{ flex: 1 }}>
                    {symbolChecker(symbolRef.current)}
                  </View>
                </Box>
              </View>
            </View>
            <Divider
              style={{ backgroundColor: "grey", top: 20, marginBottom: 20 }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                alignContent: "center",
                width: screenWidth - 40,
              }}
            >
              <Box
                w={screenWidth / 2}
                h={150}
                m={10}
                radius={14}
                style={{
                  backgroundColor: "#152127",
                  flexDirection: "row",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                <ShowMoreText
                  initialText="In progress..."
                  expandedText="Great cool long text that will be here about interesting facts from the company."
                />
              </Box>
            </View>
          </View>
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

    const [data, setData] = useState<any>(null);

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

    useEffect(() => {
      if (!mountedRef.current) {
        mountedRef.current = true;
        // for MSFT we have values (because it's a demo), for the rest, you need to provide the key.
        const fetchData = async (): Promise<any> => {
          const apiUrl: string = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=demo`;

          try {
            const response = await fetch(apiUrl);
            const data: Data = await response.json();
            setMaxOpen(maxOpenUpdate(data["Time Series (5min)"]));
            setTrend(trendUpdate(data["Time Series (5min)"]));
            setIsLoading(false);
            // console.log(data);
            // console.log(
            //   `The current status of the ALPHA VANTAGE website is: ${response.status}. `
            // );
            // console.log("DANE");

            return data;
          } catch (error) {
            console.error("An error occurred while fetching the data.", error);
          }
        };

        if (isOverlayVisible) {
          setData(null);
        } else {
          setData(fetchData());
          showToast();
        }

        // setData(fetchData());

        // fetchData();

        // let interval = setInterval(() => {
        //   fetchData();
        //   console.log("data refreshed")
        // }, 300000);
        // fetchData();
        // return () => clearInterval(interval);
      }
    }, [symbol]);

    return (
      <View>
        {isLoading && !isOverlayVisible && data ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Text style={{ color: "white", marginRight: 20 }}>Loading...</Text>
            <ActivityIndicator size="small" color="#b6843a" />
            {/* <Text style={{ flex: 1, textAlign: "center", color: "white" }}>
              1.
            </Text>
            <Text style={{ flex: 1, textAlign: "center", color: "white" }}>
              Icon
            </Text>
            <Text
              style={{
                flex: 1,
                textAlign: "center",
                color: "white",
                textTransform: "uppercase",
              }}
            >
              symbol
            </Text>
            <Text style={{ flex: 1, textAlign: "center", color: "white" }}>
              N/A
            </Text>
            <Text style={{ flex: 1, textAlign: "center", color: "white" }}>
              N/A
            </Text> */}
          </View>
        ) : (
          data && (
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
                  }}
                >{`${place}.`}</Text>
                <MaterialCommunityIcons
                  name="information"
                  size={20}
                  color="#b6843a"
                  onPress={() => {
                    onModalOpened(symbol, place, maxOpen, trend);
                  }}
                />
                <Text style={{ flex: 1, textAlign: "center" }}>
                  {symbolChecker(symbol)}
                </Text>
                <Text
                  style={{
                    flex: 1,
                    textAlign: "center",
                    color: "white",
                    fontFamily: "Lato",
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
          )
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
    "GOOGL",
    "TSLA",
    "NVDA",
    "DPZ",
    "CAT",
    "EA",
    "NFLX",
    "SPCE",
  ];

  const randomSymbols: string[] = newValues(symbols);

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop: 0,
        width: "100%",
        backgroundColor: "#152127",
      }}
    >
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
              Icon
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
          labelStyle={{ color: "#abb8c3", fontFamily: "Lato" }}
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
      {!isOverlayVisible ? (
        <>
          <ScrollView
            style={{
              bottom: 0,
              marginBottom: 40,
              marginTop: 0,
              backgroundColor: "#263238",
            }}
            contentContainerStyle={{
              paddingBottom: insets.bottom,
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
              }}
            >
              &copy; Equity Eagle 2023 &copy;
            </Text>
          </View>
        </>
      ) : (
        <View style={{ flex: 1, top: -screenHeight / 8.2 }}>
          {imageLoading ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator size="large" color="#b6843a" />
              <Text style={{ marginTop: 10, color: "white" }}>Loading...</Text>
            </View>
          ) : (
            <ImageBackground
              resizeMode="cover"
              // resizeMethod="resize"
              style={{
                flex: 1,
                justifyContent: "center",
                width: screenWidth,
                height: screenHeight / 2.5,
                borderRadius: 10,
              }}
              source={contentImg}
              alt="titleOfLogo"
              onLoad={imageOnLoad}
            ></ImageBackground>
          )}
        </View>
      )}
      <BottomSheetModalProvider>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <BottomSheetModal
            enablePanDownToClose={false}
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={[screenHeight / 2, 500, "80%"]}
            handleIndicatorStyle={{ backgroundColor: "#263238", opacity: 0.5 }}
            backgroundStyle={{ backgroundColor: "#263238" }}
            enableDismissOnClose={true}
          >
            <ModalData />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-end",
                alignContent: "flex-end",
                paddingBottom: insets.bottom,
                height: isIOS() ? screenHeight / 6 : screenHeight / 6,
              }}
            >
              <IconButton
                icon={(props): any => <Icon name="close" {...props} />}
                color="white"
                style={{ width: 40, height: 40, backgroundColor: "#00d084" }}
                onPress={onClickCloseModal}
              />
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </View>
  );
};
