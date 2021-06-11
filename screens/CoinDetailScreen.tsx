import React from 'react'
import { Button, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { } from 'react-native-safe-area-context';
import { CoinChart, CoinDetailNews, CoinDetails, } from '../components';
import HeaderTabIcons from '../components/HeaderTabIcons';

const CoinDetailScreen = ({ route }) => {
    const ID = route.params.coin.id

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
                        marketCap={route.params.coin.marketCap}
                        marketCapRank={route.params.coin.marketCapRank}
                    />

                    {/* Chart */}

                    <CoinChart
                        ID={ID}
                        title={"7 day "}
                        chartData={route.params.coin.sevenDayChart}
                        colorData={route.params.coin.color}
                    />

                    <CoinDetailNews
                        ID={`+${ID}`}
                    />
                </View>
            </ScrollView>
        </>
    )
}

export default CoinDetailScreen