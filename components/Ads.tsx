import React from 'react'
import { View, Text } from 'react-native'
import { AdMobBanner } from "expo-ads-admob";

const Ads = () => {
    return (
        <View>
            {/* Display a banner */}
            <AdMobBanner
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-3940256099942544/6300978111" //real ID:= ca-app-pub-3813198388741426/2014129836 Test ID, Replace with your-admob-unit-id, also update app id in app.json
                servePersonalizedAds // true or false
            />
        </View>
    )
}

export default Ads

