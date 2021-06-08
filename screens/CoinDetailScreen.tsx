import { useFocusEffect } from '@react-navigation/native';
import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import { CoinChart, CoinDetails } from '../components';
import { getCoinChart } from '../stores/chartAPI/chartActions';

const CoinDetailScreen = ({ route, getCoinChart, coins }) => {
    useFocusEffect(
        React.useCallback(() => {
            getCoinChart();
        }, [])
    )
    return (
        <SafeAreaView>
            <View>
                <CoinDetails
                    image={{ uri: route.params.coin.image }}
                    name={route.params.coin.name}
                    price={route.params.coin.price}
                    marketCap={route.params.coin.marketCap}
                    marketCapRank={route.params.coin.marketCapRank}
                />
                <CoinChart
                    chartData={route.params.coin.sevenDayChart}
                    colorData={route.params.coin.color}
                />

            </View>
        </SafeAreaView>
    )
}

function mapStateToProps(state) {
    return {
        coins: state.marketReducer.coins,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getCoinChart: (
            currency,
            id,
            days,
        ) => {
            return dispatch(
                getCoinChart(
                    currency,
                    id,
                    days,
                )
            );
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinDetailScreen);
