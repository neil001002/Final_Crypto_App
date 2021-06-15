import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Market, Settings, NewsScreen } from "../screens";
import { TabIcon } from "../components";
import { COLORS, icons } from "../constants";

import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          height: 55,
          backgroundColor: COLORS.primary,
          borderTopColor: "transparent",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabIcon focused={focused} icon={icons.home} label="Home" />;
          },
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon focused={focused} icon={icons.market} label="Market" />
            );
          },
        }}
      />
      <Tab.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon focused={focused} icon={icons.trade} label="News" />
            );
          },
        }}
      />
      <Tab.Screen
        name="More"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              // <Entypo name="dots-three-vertical" size={24} color="black" />
              <TabIcon
                focused={focused}
                icon={icons.profile}
                label="More"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
