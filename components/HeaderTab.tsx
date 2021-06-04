import React from 'react'
import { View, Text } from 'react-native'
import { COLORS, SIZES, FONTS } from '../constants';

const HeaderTab = ({ title }) => {
    return (
        <View
            style={{
                paddingHorizontal: SIZES.padding,
                borderBottomLeftRadius: 25,
                borderBottomRightRadius: 25,
                backgroundColor: COLORS.white,
            }}
        >
            <Text style={{
                flex: 1,
                justifyContent: 'center',
                textAlign: 'center',
                ...FONTS.largeTitle,
                paddingTop: 25
            }}>{title}</Text>
        </View>
    )
}

export default HeaderTab
