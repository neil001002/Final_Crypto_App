import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Market, Settings, NewsScreen } from "../screens";
import { TabIcon } from "../components";
import { COLORS, icons } from "../constants";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          height: 70,
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
