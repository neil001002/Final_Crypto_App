import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { COLORS, FONTS, SIZES } from '../../constants'

const AboutUs = () => {
    return (
        <ScrollView style={{ backgroundColor: COLORS.white }} showsVerticalScrollIndicator={false}>
            <View
                style={{
                    margin: SIZES.padding,
                }}
            >
                <Text style={{ fontWeight: "600", fontSize: SIZES.h1 }}>About Us</Text>
                <View>
                    <Text style={{ fontSize: SIZES.h2, marginVertical: 4 }}>Dear users!</Text>
                    <Text style={{ fontSize: SIZES.h3, marginVertical: 4 }}>We have prepared a detailed review of the Crypto News app, which includes the features from the latest update which took place by the end of 2019. The app got many new features with the update and we hope that all of them will be useful.</Text>
                    <Text style={{ fontSize: SIZES.h3, marginVertical: 4 }}>If you have any suggestions or comments, please write to info.cryptonium@gmail.com.</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default AboutUs
