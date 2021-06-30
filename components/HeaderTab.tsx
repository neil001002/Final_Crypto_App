import React from "react";
import { View, Text, Image } from "react-native";
import { SIZES, FONTS } from "../constants";

const HeaderTab = ({ title }) => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.padding,
        backgroundColor: "#EBEBEB",
        height: 50,
        elevation: 12,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 4,
        shadowRadius: 15,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          ...FONTS.h1,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default HeaderTab;
