import React from 'react'
import { View, Text, Image } from 'react-native'
import { FONTS } from '../../constants'

const CoinDetails = ({ image, name, price, marketCap, marketCapRank }) => {
    return (
        <View>
            <Image
                source={image}
                style={{ height: 80, width: 80 }}
            />
            <Text style={{ ...FONTS.largeTitle }}>{name}</Text>
            <Text style={{ ...FONTS.largeTitle }}>Price: {price}</Text>
            <Text style={{ ...FONTS.largeTitle }}>Market Cap: {marketCap}</Text>
            <Text style={{ ...FONTS.largeTitle }}>Market Cap Rank: {marketCapRank}</Text>
        </View>
    )
}

export default CoinDetails
