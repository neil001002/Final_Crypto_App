import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, FlatList, ScrollView } from "react-native";
import { connect } from "react-redux";
import { NewsCard } from "../../components";
import newsAPI from "../../news_api/News";
import { getCoinNews } from "../../stores/newsCryptoAPI/newsActions";

const Tab3 = ({ getCoinNews, coinsnews }) => {
  const [news, setNews] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const ID = "ethereum OR eth OR vitalik OR -bitcoin"
      getCoinNews({ ID });
    }, [])
  );

  if (!news) {
    return null;
  }

  return (
    <>
      <ScrollView>
        <View style={{}}>
          <FlatList
            data={coinsnews.articles}
            keyExtractor={(item, index) => "key" + index}
            renderItem={({ item }) => {
              return (
                <NewsCard item={item} />
              );
            }}
          />
        </View>
      </ScrollView>
    </>
  );
};

function mapStateToProps(state) {
  return {
    coinsnews: state.newsReducer.coinsnews,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCoinNews: (
      ID
    ) => {
      return dispatch(
        getCoinNews(
          ID
        )
      );
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab3);
