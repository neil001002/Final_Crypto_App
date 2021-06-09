import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import moment from "moment";

import { COLORS, FONTS, SIZES } from "../constants";

const HomeNewsCard = () => {
  const navigation = useNavigation();

  return (
    <View style={{ paddingHorizontal: SIZES.padding, marginTop: 30 }}>
      <Text style={{ color: COLORS.black, ...FONTS.h3, fontSize: 18 }}>
        Top news
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 20, paddingLeft: 20 }}
      >
        <View>
          <View
            style={{
              width: 150,
              height: 150,
              borderWidth: 0.5,
              borderColor: "#ddd",
              borderRadius: 10,
              marginRight: 15,
              paddingHorizontal: 15,
            }}
          >
            <View
              style={{
                width: 150,
                height: 150,
                borderWidth: 1,
                marginRight: 15,
                paddingHorizontal: 15,
                borderRadius: 10,
              }}
            >
              {/* <Image
                style={{ height: 35, width: 35 }}
                source={{ uri: item.urlToImage }}
              /> */}
              <Text>Image</Text>
            </View>
            <View></View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeNewsCard;
