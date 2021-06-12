import React from 'react'
import { View, Text, Image } from 'react-native'
import { FONTS, SIZES } from '../../constants'
import { AntDesign } from '@expo/vector-icons';

const CoinDetails = ({ image, name, price, priceChangePer, symbol, color }) => {
    return (
        <View>
            <View
                style={{
                    marginTop: 30,
                    marginBottom: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "center",

                }}
            >
                {/* Logo */}
                <View
                    style={{
                        width: 35,
                    }}
                >
                    <Image
                        source={image}
                        style={{ height: 33, width: 33 }}
                    />
                </View>

                {/* Name */}

                <View style={{ flex: 1, paddingHorizontal: 10, }}>
                    <Text style={{ fontSize: SIZES.h2 }}>{name}</Text>
                    <Text style={{ fontSize: SIZES.h4 }}>{symbol}</Text>
                </View>

                <View>
                    <AntDesign name="star" size={24} color="black" />
                </View>

            </View>

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >

                <View style={{ flex: 1, paddingHorizontal: SIZES.padding, }}>
                    <Text style={{ fontSize: SIZES.h1, fontWeight: "600", }}>$ {price.toFixed(2)}</Text>
                </View>

                <View style={{ paddingHorizontal: SIZES.padding, }}>
                    <Text style={{ fontSize: 12, fontWeight: "600", }}>1 Day</Text>
                    <Text style={{ fontSize: SIZES.h4, color: color }}>{priceChangePer}%</Text>
                </View>
            </View>
        </View >
    )
}

export default CoinDetails
