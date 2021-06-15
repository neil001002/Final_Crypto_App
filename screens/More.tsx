import React, { useState } from "react";
import { Text, View, Image, Switch, StyleSheet, TouchableOpacity, Share } from "react-native";
import { useNavigation } from "@react-navigation/core";

import { Entypo, Ionicons } from '@expo/vector-icons';
import { FONTS, SIZES } from "../constants";
import { HeaderTab } from "../components";

const App = () => {
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const navigation = useNavigation();

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "This is shared via Cryptonium. \n\nYour all in one crypto app.",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', justifyContent: "center" }}>
        <Image source={require("../assets/morePage.png")} style={{ height: 350, width: "100%", resizeMode: "contain" }} />
      </View>
      {/* <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> */}

      <View style={{ margin: SIZES.padding }}>
        <View style={{ marginBottom: SIZES.padding }}>
          <Text style={{ ...FONTS.h2, fontWeight: "bold" }}>ABOUT APP</Text>
        </View>
        <TouchableOpacity onPress={onShare}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: SIZES.padding }}>
            <Text style={{ ...FONTS.h3, borderWidth: 0 }}>Share this app</Text>
            <Ionicons name="share-social" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("PrivacyPolicy")}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: SIZES.padding }}>
            <Text style={{ ...FONTS.h3, borderWidth: 0 }}>Privacy policy</Text>
            <Entypo name="chevron-right" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Disclaimer")}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: SIZES.padding }}>
            <Text style={{ ...FONTS.h3, borderWidth: 0 }}>Disclaimer</Text>
            <Entypo name="chevron-right" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AboutUs")}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: SIZES.padding }}>
            <Text style={{ ...FONTS.h3, borderWidth: 0 }}>About us</Text>
            <Entypo name="chevron-right" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center"
  }
});

export default App;