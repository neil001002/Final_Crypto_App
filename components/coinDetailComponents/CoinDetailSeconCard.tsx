import React from 'react'
import { View, Text } from 'react-native'
import { SIZES } from '../../constants'

const CoinDetailSeconCard = ({
    marketCapRank,
    marketCap,
    totalVolume,
    dayHigh,
    dayLow,
    marketCapChangeDay,
    marketCapChangeDayPer,
    totalSupply
}) => {
    return (
        <View
            style={{
                position: "relative",
                marginVertical: 10,
                marginHorizontal: 10,
                backgroundColor: "#FFFFFF",
                borderRadius: 5,
                shadowColor: "rgba(0, 0, 0, 0.25)",
                shadowOffset: {
                    width: 4,
                    height: 4,
                },
                shadowOpacity: 4,
                shadowRadius: 15,

                elevation: 12,
            }}
        >
            <View
                style={{
                    paddingVertical: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    flexDirection: 'column',

                }}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: "400", fontSize: SIZES.h3, padding: 3 }}>Market Cap Rank </Text>
                    <Text style={{ fontWeight: "300" }}>{marketCapRank} </Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: "400", fontSize: SIZES.h3, padding: 3 }}>Market Cap </Text>
                    <Text style={{ fontWeight: "300" }}>{marketCap}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: "400", fontSize: SIZES.h3, padding: 3 }}>Total Volume</Text>
                    <Text style={{ fontWeight: "300" }}>{totalVolume}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: "400", fontSize: SIZES.h3, padding: 3 }}>24H High </Text>
                    <Text style={{ fontWeight: "300" }}>{dayHigh}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: "400", fontSize: SIZES.h3, padding: 3 }}>24H Low</Text>
                    <Text style={{ fontWeight: "300" }}>{dayLow}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: "400", fontSize: SIZES.h3, padding: 3 }}>Market Cap Change 24H </Text>
                    <Text style={{ fontWeight: "300" }}>{marketCapChangeDay.toFixed(2)}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: "400", fontSize: SIZES.h3, padding: 3 }}>Market Cap Change 24H </Text>
                    <Text style={{ fontWeight: "300" }}>{marketCapChangeDayPer.toFixed(2)}%</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: "400", fontSize: SIZES.h3, padding: 3 }}>Total Supply </Text>
                    <Text style={{ fontWeight: "300" }}>{totalSupply ? totalSupply.toFixed(2) : "None"}</Text>
                </View>

            </View>
        </View>
    )
}

export default CoinDetailSeconCard
