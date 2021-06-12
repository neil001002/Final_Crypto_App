import React from "react";
import { View, Text } from "react-native";
import { HeaderTab, HeaderTabIcons } from "../components";
import { WebView } from "react-native-webview";

const Webview = ({ route }) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 1,
        }}
      >
        <HeaderTabIcons title={"News"} />
      </View>
      <WebView source={{ uri: route.params.url }} style={{ marginTop: 50 }} />
    </View>
  );
};

export default Webview;
