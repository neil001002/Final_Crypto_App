import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const HomeHeader = () => {
  return (
    <View style={{ backgroundColor: COLORS.white }}>
      <View
        style={{
          marginTop: SIZES.padding,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../assets/cryptoniumLogo.png")}
          style={{
            height: 35,
            width: "100%",
            resizeMode: "contain",
            opacity: 0.8,
            // marginTop: SIZES.padding,
            // borderWidth: 1,
          }}
        />
      </View>
      <View style={{
        // margin: SIZES.padding,
        alignItems: "center",
        justifyContent: "center",
        // borderWidth: 1
      }}>
        <Image source={require("../assets/undrawHomePage.png")}
          style={{
            height: 150,
            width: '100%',
            resizeMode: "contain",
            opacity: 0.8,
            // marginTop: SIZES.padding,
            // borderWidth: 1,
          }}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: SIZES.padding,
          marginBottom: SIZES.padding,
        }}
      >
        <Text style={{ ...FONTS.body2, fontWeight: "bold", opacity: 0.9 }}>
          Welcome to Cryptonium
        </Text>
        <Text style={{ ...FONTS.body3, color: "gray", margin: 10 }}>
          Your all in one crypto app
        </Text>
      </View>
    </View>
  );
};

export default HomeHeader;
