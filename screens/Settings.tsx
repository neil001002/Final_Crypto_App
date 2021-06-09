import React from "react";
import { View, Text, ScrollView } from "react-native";
import { HeaderTab } from "../components";

const Settings = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <HeaderTab title={"Settings"} />
      </View>

      <Text>hi there</Text>
    </ScrollView>
  );
};

export default Settings;
