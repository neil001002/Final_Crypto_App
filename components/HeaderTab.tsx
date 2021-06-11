import React from 'react'
import { View, Text } from 'react-native'
import { COLORS, SIZES, FONTS } from '../constants';

const HeaderTab = ({ title }) => {
    return (
        <View
            style={{
                paddingHorizontal: SIZES.padding,
                backgroundColor: "#EBEBEB",
                height: 50,
                elevation: 12,
                shadowColor: "rgba(0, 0, 0, 0.25)",
                shadowOffset: {
                    width: 10,
                    height: 10,
                },
                shadowOpacity: 4,
                shadowRadius: 15,
                borderBottomStartRadius: 10,
                borderBottomEndRadius: 10,

            }}
        >
            <Text style={{
                flex: 1,
                justifyContent: 'center',
                textAlign: 'center',
                ...FONTS.largeTitle,
            }}>{title}</Text>
        </View>
    )
}

export default HeaderTab
