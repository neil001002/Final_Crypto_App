import React, { useRef } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  RefreshControl
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { getCoinMarket } from "../stores/marketAPI/marketActions";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import { HeaderTab } from "../components";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Market = ({ getCoinMarket, coins }) => {
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      getCoinMarket();
    }, [])
  );

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    }>
      <View style={{ backgroundColor: COLORS.white }}>
        {/* Header section */}
        <View>
          <HeaderTab
            title={"Market"}
          />
        </View>

        {/* Top Cryptocurrency */}
        <FlatList
          data={coins}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            marginTop: 30,
            paddingHorizontal: SIZES.padding,
          }}
          ListHeaderComponent={
            <View style={{ marginBottom: SIZES.radius }}>
              <Text style={{ color: COLORS.black, ...FONTS.h3, fontSize: 18 }}>
                Top crypto currency
              </Text>
            </View>
          }
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
                  height: 55,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => navigation.navigate("CoinDetailScreen", {
                  coin: {
                    image: item.image,
                    name: item.name,
                    price: item.current_price,
                    marketCap: item.market_cap,
                    marketCapRank: item.market_cap_rank,
                    sevenDayChart: item.sparkline_in_7d.price,
                    color: priceColor
                  }
                })}
              >
                {/* Logo */}
                <View
                  style={{
                    width: 35,
                  }}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={{ height: 20, width: 20 }}
                  />
                </View>

                {/* Name */}

                <View style={{ flex: 1 }}>
                  <Text style={{ ...FONTS.h3 }}>{item.name}</Text>
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
    </ScrollView>
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
