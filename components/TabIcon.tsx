import React from "react";
import { View, Text, Image } from "react-native";

import { FONTS, COLORS } from "../constants";

const TabIcon = ({ focused, icon, iconStyle, label }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
          tintColor: focused ? COLORS.white : COLORS.secondary,
          ...iconStyle,
        }}
      />
      <Text
        style={{
          color: focused ? COLORS.white : COLORS.secondary,
          ...FONTS.h4,
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default TabIcon;
