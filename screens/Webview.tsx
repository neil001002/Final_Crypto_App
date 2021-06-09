import React from "react";
import { View, Text } from "react-native";
import { HeaderTab } from "../components";
import { WebView } from "react-native-webview";

const Webview = ({ route }) => {
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: route.params.url }} />
    </View>
  );
};

export default Webview;
