import React, { useState, useEffect } from "react";
import { View, FlatList, ScrollView } from "react-native";
import { connect } from "react-redux";
import SkeletonContent from 'react-native-skeleton-content';
import { useFocusEffect } from "@react-navigation/native";
import { getCoinNews } from "../stores/newsCryptoAPI/newsActions";
import { HeaderTab, NewsCard } from "../components";

const Tab1 = ({ getCoinNews, coinsnews }) => {
  const [isLoading, setLoading] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      const ID = "crypto OR blockchain OR elon OR vitalik OR defi OR nft";
      getCoinNews({ ID })
        .finally(() => setLoading(false));
    }, [])
  );

  return (
    <>
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 1,
        }}
      >
        <HeaderTab title={"News"} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            position: "relative",
            backgroundColor: "white",
            marginTop: 50,
          }}
        >
          {isLoading ? <SkeletonContent
            containerStyle={{ flex: 1, width: 300 }}
            isLoading={isLoading}
            layout={[
              { key: 'title', width: "100%", height: 60, margin: 20 },
              { key: 'image', width: "100%", height: 120, margin: 20 },
              { key: 'description', width: "100%", height: 60, margin: 20 },
            ]}
          /> : (
            <FlatList
              data={coinsnews.articles}
              keyExtractor={(item, index) => "key" + index}
              renderItem={({ item }) => {
                return <NewsCard item={item} />;
              }}
            />
          )}
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
    getCoinNews: (ID) => {
      return dispatch(getCoinNews(ID));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab1);
