import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import moment from "moment";

import { COLORS, FONTS, SIZES } from "../constants";
import newsAPI from "../news_api/News";

const HomeNewsCard = () => {
  const navigation = useNavigation();

  const [news, setNews] = useState([]);

  useEffect(() => {
    getNewsFromAPI();
  }, []);

  function getNewsFromAPI() {
    newsAPI
      .get(
        "everything?q=crypto&sortBy=publishedAt&language=en&apiKey=f08f0a610915445b89739684b1217bc4"
      )
      .then(async function (response) {
        setNews(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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
          data={news.articles}
        //   maxToRenderPerBatch={5}
          keyExtractor={(item, index) => "key" + index}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Webview", { url: item.url })
                }
              >
                <View style={styles.newsCard}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.image}
                      source={{ uri: item.urlToImage }}
                    />
                  </View>
                  <View></View>
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
  newsCard: {
    width: 150,
    height: 80,
    // borderWidth: 0.5,
    borderColor: "red",
    borderRadius: 5,
    // marginRight: 15,
    // paddingHorizontal: 15,
    // backgroundColor: "green",
    marginLeft: SIZES.padding,
  },

  titleContainer: {
    backgroundColor: "yellow",
    // borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 5,
    flex: 1,
  },

  title: {
    margin: 3,
    borderWidth: 0.5,
    borderRadius: 5,
  },

  imageContainer: {
    width: 150,
    height: 50,
    position: "absolute",
    borderWidth: 1,
    borderRadius: 5,
    bottom: 0,
    // backgroundColor: "pink",
    paddingLeft: SIZES.padding,
    right: 0,
  },

  image: {
    flex: 1,
    resizeMode: "cover",
  },
});

export default HomeNewsCard;
