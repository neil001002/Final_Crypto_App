// import React, { useState, useEffect } from "react";
// import { View, FlatList } from "react-native";
// import newsAPI from "../../news_api/News";
// import NewsCard from "./NewsCard";

// const Tab3 = () => {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     getNewsFromAPI();
//   }, []);

//   function getNewsFromAPI() {
//     newsAPI
//       .get(
//         "everything?q=ethereum&sortBy=publishedAt&language=en&apiKey=f08f0a610915445b89739684b1217bc4"
//       )
//       .then(async function (response) {
//         setNews(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }

//   if (!news) {
//     return null;
//   }

//   return (
//     <View style={{ backgroundColor: "white" }}>
//       <FlatList
//         data={news.articles}
//         keyExtractor={(item, index) => "key" + index}
//         renderItem={({ item }) => {
//           return <NewsCard item={item} />;
//         }}
//       />
//     </View>
//   );
// };

// export default Tab3;


import React from 'react'
import { View, Text } from 'react-native'

const Tab3 = () => {
  return (
    <View>
      <Text>Tab3</Text>
    </View>
  )
}

export default Tab3
