import React, { useState, useEffect } from "react";
import { View, FlatList, ScrollView } from "react-native";
import { HeaderTab, NewsCard } from "../../components";
import newsAPI from "../../news_api/News";

const Tab1 = () => {
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
    <>
      <ScrollView>
        <View style={{}}>
          <FlatList
            data={news.articles}
            keyExtractor={(item, index) => "key" + index}
            renderItem={({ item }) => {
              return (
              <>
              <NewsCard item={item} />
              </>
              );
            }}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Tab1;
