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

import { SIZES } from "../constants";
import { connect } from "react-redux";
import { getCoinNews } from "../stores/newsCryptoAPI/newsActions";
import SkeletonContent from 'react-native-skeleton-content';
import { useFocusEffect } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const HomeNewsCard = ({ getCoinNews, coinsnews }) => {
  const [isLoading, setLoading] = useState(true);
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      const ID = "crypto OR blockchain OR elon OR vitalik OR defi OR nft";
      getCoinNews({ ID })
        .finally(() => setLoading(false));
    }, [])
  );


  return (
    <View style={{}}>
      <View
        style={{
          marginTop: 10,
          paddingHorizontal: SIZES.padding,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: SIZES.h2 }}>Top news</Text>
      </View>
      <ScrollView>
        {isLoading ? <SkeletonContent
          containerStyle={{ flex: 1, width: 300 }}
          isLoading={isLoading}
          layout={[
            {
              key: 'someId', width: width / 1.2,
              height: 108,
              marginVertical: 10,
              marginLeft: 10,
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
          ]}
        /> : (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={coinsnews.articles}
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
                            uri: item.urlToImage,
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
                          }}
                        >
                          <Text style={styles.sourceName}>
                            {item.source.name}
                          </Text>
                          <Text style={styles.time}>
                            {moment(item.publishedAt || moment.now()).fromNow()}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    width: width / 1.2,
    height: 108,
    marginVertical: 10,
    marginLeft: 10,
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
