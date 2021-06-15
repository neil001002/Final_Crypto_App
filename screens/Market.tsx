import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { getCoinMarket } from "../stores/marketAPI/marketActions";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import { HeaderTab } from "../components";
import GlobalData from "../components/GlobalData";

const Market = ({ getCoinMarket, coins }) => {
  const navigation = useNavigation();
  useEffect(() => {
    getCoinMarket();
  }, []);

  const [refreshing, setRefreshing] = React.useState(false);

  return (
    <>
      {/* Header section */}
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 1,
        }}
      >
        <HeaderTab title={"Market"} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            position: "relative",
            backgroundColor: "white",
            marginTop: 50,
          }}
        >
          {/* Global data */}
          <View
            style={{
              position: "relative",
              backgroundColor: "#343333",
              height: 40,
            }}
          >
            <GlobalData />
          </View>

          {/* Top Cryptocurrency */}
          <View
            style={{
              position: "relative",
              margin: 10,
              // marginVertical: 10,
              // marginHorizontal: 10,
              backgroundColor: "#FFFFFF",
              borderRadius: 5,
              shadowColor: "rgba(0, 0, 0, 0.25)",
              shadowOffset: {
                width: 4,
                height: 4,
              },
              shadowOpacity: 4,
              shadowRadius: 15,

              elevation: 6,
            }}
          >
            <FlatList
              data={coins}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{
                // paddingVertical: SIZES.padding,
                // paddingHorizontal: SIZES.padding,
                margin: 10,
              }}
              renderItem={({ item }) => {
                let priceColor =
                  item.price_change_percentage_24h == 0
                    ? COLORS.lightGray3
                    : item.price_change_percentage_24h > 0
                    ? COLORS.green
                    : COLORS.red;

                return (
                  <TouchableOpacity
                    style={{
                      // height: 55,
                      height: 35,
                      marginVertical: 10,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onPress={() =>
                      navigation.navigate("CoinDetailScreen", {
                        coin: {
                          id: item.id,
                          image: item.image,
                          name: item.name,
                          price: item.current_price,
                          priceChangePer: item.price_change_percentage_24h,
                          priceChange24h: item.price_change_24h,
                          symbol: item.symbol,
                          marketCap: item.market_cap,
                          marketCapRank: item.market_cap_rank,
                          sevenDayChart: item.sparkline_in_7d.price,
                          color: priceColor,
                          totalVolume: item.total_volume,
                          dayHigh: item.high_24h,
                          dayLow: item.low_24h,
                          marketCapChangeDay: item.market_cap_change_24h,
                          marketCapChangeDayPer:
                            item.market_cap_change_percentage_24h,
                          totalSupply: item.total_supply,
                        },
                      })
                    }
                  >
                    {/* Logo */}
                    <View
                      style={{
                        width: 35,
                        height: 35,
                      }}
                    >
                      <Image
                        source={{ uri: item.image }}
                        style={{ flex: 1, resizeMode: "contain" }}
                      />
                    </View>

                    {/* Name */}

                    <View style={{ flex: 1, marginLeft: 5 }}>
                      <Text style={{ ...FONTS.h3 }}>{item.name}</Text>
                      <Text style={{ ...FONTS.body5 }}>
                        {item.symbol.toUpperCase()}
                      </Text>
                    </View>

                    {/* Figures */}

                    <View>
                      <Text style={{ textAlign: "right", ...FONTS.h4 }}>
                        $ {item.current_price}
                      </Text>

                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        }}
                      >
                        {item.price_change_percentage_24h != 0 && (
                          <Image
                            source={icons.upArrow}
                            style={{
                              height: 10,
                              width: 10,
                              tintColor: priceColor,
                              transform:
                                item.price_change_percentage_24h > 0
                                  ? [{ rotate: "0deg" }]
                                  : [{ rotate: "180deg" }],
                            }}
                          />
                        )}

                        <Text
                          style={{
                            marginLeft: 5,
                            color: priceColor,
                            ...FONTS.body5,
                            lineHeight: 15,
                          }}
                        >
                          {item.price_change_percentage_24h.toFixed(2)}%
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

function mapStateToProps(state) {
  return {
    coins: state.marketReducer.coins,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCoinMarket: (
      currency,
      coinList,
      orderBy,
      sparkLine,
      priceChangePerc,
      perPage,
      page
    ) => {
      return dispatch(
        getCoinMarket(
          currency,
          coinList,
          orderBy,
          sparkLine,
          priceChangePerc,
          perPage,
          page
        )
      );
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Market);
