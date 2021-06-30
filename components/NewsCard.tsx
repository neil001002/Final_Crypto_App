import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import moment from "moment";

const { width, height } = Dimensions.get("window");

const NewsCard = ({ item }) => {
  const time = moment(item.publishedAt || moment.now()).fromNow();
  const navigation = useNavigation();

  return (
    <View style={styles.cardView}>
      <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
      <Text style={styles.author}>{item.source.name}</Text>
      <Image
        style={styles.image}
        source={{ uri: item.urlToImage }}
      />
      <Text style={styles.author}> {time} </Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Webview", { url: item.url, title: item.title })
        }
      >
        <Text style={styles.description} numberOfLines={3}>{item.description}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    elevation: 12,
    backgroundColor: "white",
    margin: width * 0.03,
    borderRadius: width * 0.05,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    // borderWidth: 0.3,
  },
  title: {
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.03,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    marginVertical: width * 0.02,
    marginHorizontal: width * 0.02,
    color: "gray",
    fontSize: 18,
  },
  // readMore: {
  //   color: "gray",
  //   fontSize: 18,
  //   marginVertical: width * 0.05,
  //   fontWeight: "bold",
  // },
  image: {
    height: height / 5,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    marginVertical: height * 0.02,
  },
  author: {
    marginBottom: width * 0.0,
    marginHorizontal: width * 0.05,
    fontSize: 15,
    color: "gray",
  },
});

export default NewsCard;
