import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { } from 'react-native-safe-area-context';
import { CoinChart, CoinDetailNews, CoinDetails, HeaderTab } from '../components';

const CoinDetailScreen = ({ route }) => {
    const navigation = useNavigation();
    const ID = route.params.coin.id

    return (
        <ScrollView>
            <View>
                <HeaderTab
                    title={`${route.params.coin.id}`.toUpperCase()}
                />
                <Button
                    title="Back"
                    onPress={() => {
                        navigation.goBack();
                    }}
                />
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
    )
}

export default CoinDetailScreen