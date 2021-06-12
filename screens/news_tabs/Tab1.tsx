import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, FlatList, ScrollView } from "react-native";
import { connect } from "react-redux";
import { NewsCard } from "../../components";
import { getCoinNews } from "../../stores/newsCryptoAPI/newsActions";

const Tab1 = ({ getCoinNews, coinsnews }) => {
  const [news, setNews] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const ID = "crypto OR blockchain OR elon OR vitalik OR defi OR nft";
      getCoinNews({ ID });
    }, [])
  );

  if (!news) {
    return null;
  }

  return (
    <View>
      <ScrollView>
        <View>
          <FlatList
            data={coinsnews.articles}
            keyExtractor={(item, index) => "key" + index}
            renderItem={({ item }) => {
              return <NewsCard item={item} />;
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Tab1);
