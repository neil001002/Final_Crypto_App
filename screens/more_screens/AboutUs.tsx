import React from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { COLORS, SIZES } from '../../constants'

const AboutUs = () => {
    return (
        <ScrollView style={{ backgroundColor: COLORS.white }} showsVerticalScrollIndicator={false}>
            <View style={{ alignItems: 'center', justifyContent: "center" }}>
                <Image source={require("../../assets/undrawAboutUs.png")} style={{ height: 200, width: "100%", resizeMode: "contain", borderWidth: 1 }} />
            </View>
            <View
                style={{
                    margin: SIZES.padding,
                }}
            >

                <Text style={{ fontWeight: "600", fontSize: SIZES.h2 }}>Dear users!</Text>
                <View>
                    <Text style={{ fontSize: SIZES.h3, marginVertical: 4, marginBottom: SIZES.padding }}>Cryptonium is a multi-purpose application for crypto enthusiasts, which includes an aggregator of news and articles, a convenient crypto market monitoring service.</Text>
                    <Text style={{ fontSize: SIZES.h2, marginVertical: 4 }}>All market news</Text>
                    <Text style={{ fontSize: SIZES.h3, marginVertical: 4, marginBottom: SIZES.padding }}>The application aggregates news and articles from popular sites such as Cointelegraph, CoinDesk, Forklog, etc. There are more than 100 sites in the list of sources. All materials are served according to keywords (like bitcoin, ethereum, trending etc.). Users can also share content and read it later.</Text>
                    <Text style={{ fontSize: SIZES.h2, marginVertical: 4 }}>Cryptocurrency exchange rates</Text>
                    <Text style={{ fontSize: SIZES.h3, marginVertical: 4, marginBottom: SIZES.padding }}>Crypto News displays cryptocurrency rates. Users can instantly get Bitcoin, Ethereum, Litecoin, Ripple, ZCash, and other cryptocurrencies’ prices. The application allows users to monitor changes without using additional tools, as well as compare the price dynamics with the news that influences them. The application also allows users to track the prices of coins. Cryptonium can send alerts when market situation changes.</Text>
                    <Text style={{ fontSize: SIZES.h3, marginVertical: 4 }}>If you have any suggestions or comments, please write to info.cryptonium@gmail.com.</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default AboutUs
