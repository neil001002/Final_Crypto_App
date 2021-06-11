import React from 'react'
import { Button, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { } from 'react-native-safe-area-context';
import { CoinChart, CoinDetailNews, CoinDetails, CoinDetailSeconCard, } from '../components';
import HeaderTabIcons from '../components/HeaderTabIcons';

const CoinDetailScreen = ({ route }) => {
    const ID = route.params.coin.id
    console.log("totalVolume", route.params.coin.totalVolume)

    return (
        <>
            <View
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    width: '100%',
                    zIndex: 1,
                }}
            >
                <HeaderTabIcons
                    title={`${route.params.coin.name}`}
                />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        position: 'relative',
                        backgroundColor: "#EBEBEB",
                        marginTop: 50,
                    }}
                >

                    {/* Coin details */}
                    <CoinDetails
                        image={{ uri: route.params.coin.image }}
                        name={route.params.coin.name}
                        price={route.params.coin.price}
                        priceChangePer={(route.params.coin.priceChangePer).toFixed(2)}
                        symbol={(route.params.coin.symbol).toUpperCase()}
                        color={route.params.coin.color}
                    />

                    {/* Chart */}

                    <CoinChart
                        ID={ID}
                        chartData={route.params.coin.sevenDayChart}
                        colorData={route.params.coin.color}
                    />

                    {/* Coin detail second page */}
                    <CoinDetailSeconCard
                        marketCapRank={route.params.coin.marketCapRank}
                        marketCap={route.params.coin.marketCap}
                        totalVolume={route.params.coin.totalVolume}
                        dayHigh={route.params.coin.dayHigh}
                        dayLow={route.params.coin.dayLow}
                        marketCapChangeDay={(route.params.coin.marketCapChangeDay)}
                        marketCapChangeDayPer={route.params.coin.marketCapChangeDayPer}
                        totalSupply={route.params.coin.totalSupply}
                    />

                    {/* Coin news */}
                    <CoinDetailNews
                        ID={`+${ID}`}
                    />
                </View>
            </ScrollView>
        </>
    )
}

export default CoinDetailScreen