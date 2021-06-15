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
                <Text style={{ fontWeight: "600", fontSize: SIZES.h1 }}>AboutUs</Text>
            </View>
        </ScrollView>
    )
}

export default AboutUs
