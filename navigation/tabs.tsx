import React from "react";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Search, Market, Settings, News } from "../screens";
import { TabIcon } from "../components";
import { COLORS, icons } from "../constants";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          height: 140,
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
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                icon={icons.briefcase}
                label="Search"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon focused={focused} icon={icons.trade} label="News" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                icon={icons.profile}
                label="Settings"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
