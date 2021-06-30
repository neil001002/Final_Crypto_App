import React from 'react'
import { View, Text, Image } from 'react-native'
import { FONTS, SIZES } from '../../constants'
import { AntDesign } from '@expo/vector-icons';

const CoinDetails = ({ image, name, price, priceChangePer, symbol, color }) => {
    return (
        <View>
            <View
                style={{
                    marginTop: 24,
                    marginBottom: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "space-between",

                }}
            >
                {/* Logo */}
                <View
                    style={{
                        width: 50,
                        height: 50,
                    }}
                >
                    <Image
                        source={{ uri: image }}
                        style={{ flex: 1, resizeMode: "contain" }}
                    />
                </View>

                {/* Name */}

                <View style={{ flex: 1, paddingHorizontal: 10, }}>
                    <Text style={{ fontSize: SIZES.h2 }}>{name}</Text>
                    <Text style={{ fontSize: SIZES.h4 }}>{symbol}</Text>
                </View>

                {/* <View>
                    <AntDesign name="star" size={35} color="black" />
                </View> */}

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
