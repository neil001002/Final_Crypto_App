import React from "react";
import { View, Text, ScrollView, SafeAreaView, StatusBar } from "react-native";
import { HeaderTab } from "../components";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Tab1 from "./news_tabs/Tab1";
import Tab2 from "./news_tabs/Tab2";
import Tab3 from "./news_tabs/Tab3";
import { COLORS } from "../constants";

const Tab = createMaterialTopTabNavigator();

//Top tabs navigation for new tabs
const NewsScreen = () => {
  return (
    <>
      <StatusBar hidden />
      <View>
        <HeaderTab title={"News"} />
      </View>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: COLORS.transparentWhite,
            borderBottomStartRadius: 15,
            borderBottomEndRadius: 15,
            justifyContent: "space-between",
          },
        }}
      >
        <Tab.Screen name="Trending" component={Tab1} />
        <Tab.Screen name="Bitcoin" component={Tab2} />
        <Tab.Screen name="Ethereum" component={Tab3} />
      </Tab.Navigator>
    </>
  );
};

export default NewsScreen;
