import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, Share, ScrollView, Linking } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Entypo, Ionicons } from '@expo/vector-icons';
import { FONTS, SIZES } from "../constants";

const App = () => {
  const navigation = useNavigation();
  const URL = "https://bit.ly/2UcPVpl";

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          `🌟This is shared via Cryptonium.🌟\n\nCryptonium is a data aggregator app for all cryptocurrency data around the globe. You will get cryptocurrency price data, news, and much more.\n\nSo what are you waiting for, download Cryptonium today.👇👇\n\nAndroid - ${URL}\n\nYour all in one crypto app.`,
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
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "white" }} >
      <View style={styles.container}>
        <View style={{ alignItems: 'center', justifyContent: "center" }}>
          <Image source={require("../assets/morePage.png")} style={{ height: 350, width: "100%", resizeMode: "contain" }} />
        </View>

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
          <TouchableOpacity onPress={() => {
            Linking.openURL("mailto:info.cryptonium@gmail.com")
          }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: SIZES.padding }}>
              <Text style={{ ...FONTS.h3, borderWidth: 0 }}>Give us Feedback (Contact Us)</Text>
              <Entypo name="chevron-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  }
});

export default App;