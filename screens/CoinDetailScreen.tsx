import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import { CoinChart, CoinDetails, HeaderTab } from '../components';
import { getCoinChart } from '../stores/chartAPI/chartActions';

const CoinDetailScreen = ({ route, getCoinChart, coins }) => {
    const navigation = useNavigation();
    const ID = route.params.coin.id

    useFocusEffect(
        React.useCallback(() => {
            getCoinChart({ ID });
        }, [])
    )
    return (
        <SafeAreaView>
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
                    // chartData={route.params.coin.sevenDayChart}
                    title={"7 day "}
                    chartData={route.params.coin.sevenDayChart}
                    colorData={route.params.coin.color}
                />


            </View>
        </SafeAreaView>
    )
}

function mapStateToProps(state) {
    return {
        coins: state.chartReducer.coins,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getCoinChart: (
            ID,
        ) => {
            return dispatch(
                getCoinChart(
                    ID,
                )
            );
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinDetailScreen);
