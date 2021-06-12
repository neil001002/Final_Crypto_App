import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import moment from "moment";

import { COLORS, FONTS, SIZES } from "../constants";
import { connect } from "react-redux";
import { getCoinNews } from "../stores/newsCryptoAPI/newsActions";

const { width, height } = Dimensions.get("window");

const HomeNewsCard = ({ getCoinNews, coinsnews }) => {
  const navigation = useNavigation();
  const defaultImage = require("../assets/icons/briefcase.png");

  const [news, setNews] = useState([]);

  useEffect(() => {
    const ID = "crypto OR blockchain OR elon OR vitalik OR defi OR nft";
    getCoinNews({ ID });
  }, []);

  if (!news) {
    return null;
  }

  return (
    <View style={{ marginTop: 30 }}>
      <Text
        style={{
          color: COLORS.black,
          ...FONTS.h3,
          fontSize: 18,
          paddingHorizontal: SIZES.padding,
        }}
      >
        Top news
      </Text>
      <ScrollView
        // horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 20 }}
      >
        <FlatList
          horizontal
          data={coinsnews.articles}
          //   maxToRenderPerBatch={5}
          keyExtractor={(item, index) => "key" + index}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Webview", { url: item.url })
                }
              >
                <View style={styles.cardView}>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <View style={{ height: 108, width: "30%" }}>
                      <Image
                        style={styles.image}
                        source={{
                          uri: item.urlToImage ? item.urlToImage : defaultImage,
                        }}
                      />
                    </View>

                    <View
                      style={{
                        paddingHorizontal: 5,
                        paddingVertical: 5,
                        width: "70%",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={styles.title} numberOfLines={2}>
                        {item.title}
                      </Text>

                      <Text style={styles.description} numberOfLines={3}>
                        {item.description}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          // borderWidth: 1
                        }}
                      >
                        <Text style={styles.sourceName}>
                          {item.source.name}
                        </Text>
                        <Text style={styles.time}>
                          {" "}
                          {moment(
                            item.publishedAt || moment.now()
                          ).fromNow()}{" "}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    // position: "relative",
    width: width / 1.2,
    height: 108,
    marginVertical: 5,
    marginHorizontal: 5,
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
  },
  title: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    color: "gray",
    fontSize: 11,
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    resizeMode: "cover",
  },
  time: {
    fontSize: 10,
    color: "gray",
  },
  sourceName: {
    // marginBottom: width * 0.0,
    // marginHorizontal: width * 0.05,
    fontSize: 10,
    color: "gray",
  },
});

function mapStateToProps(state) {
  return {
    coinsnews: state.newsReducer.coinsnews,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCoinNews: (ID) => {
      return dispatch(getCoinNews(ID));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeNewsCard);
