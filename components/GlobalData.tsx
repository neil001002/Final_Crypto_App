import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux';
import { getGlobalMarket } from '../stores/globalDataAPI/globalActions';
import SkeletonContent from 'react-native-skeleton-content';
import { SIZES } from '../constants';

const GlobalData = ({ getGlobalMarket, globaldata }) => {
    const [isLoading, setLoading] = useState(true);

    useFocusEffect(
        React.useCallback(() => {
            getGlobalMarket()
                .finally(() => setLoading(false));
        }, [])
    );
    console.log("GlobalData", globaldata.active_cryptocurrencies);


    return (
        <View
            style={{
                position: "relative",
                margin: 10,
                backgroundColor: "#FFFFFF",
                borderRadius: 5,
                shadowColor: "rgba(0, 0, 0, 0.25)",
                shadowOffset: {
                    width: 4,
                    height: 4,
                },
                shadowOpacity: 4,
                shadowRadius: 15,

                elevation: 6,
            }}
        >
            {isLoading ? <SkeletonContent
                containerStyle={{ flex: 1, width: 300 }}
                isLoading={isLoading}
                layout={[
                    { key: 'someId1', width: "100%", height: 25, margin: 10 },
                    { key: 'someId2', width: "100%", height: 25, margin: 10 },
                ]}
            /> : (
                <View>
                    <View
                        style={{
                            paddingVertical: SIZES.padding,
                            paddingHorizontal: SIZES.padding,
                            flexDirection: 'column',

                        }}
                    >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: "400", fontSize: SIZES.h3, padding: 3 }}>Total Coins</Text>
                            <Text style={{ fontWeight: "300" }}>{globaldata.data.active_cryptocurrencies}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: "400", fontSize: SIZES.h3, padding: 3 }}>Markets</Text>
                            <Text style={{ fontWeight: "300" }}>{globaldata.data.markets}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: "400", fontSize: SIZES.h3, padding: 3 }}>MarketCap Dominance</Text>
                            <Text style={{ fontWeight: "300" }}>BTC {globaldata.data.market_cap_percentage.btc.toFixed(2)}%</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: "400", fontSize: SIZES.h3, padding: 3 }}></Text>
                            <Text style={{ fontWeight: "300" }}>ETH {globaldata.data.market_cap_percentage.eth.toFixed(2)}%</Text>
                        </View>

                    </View>
                </View>
            )}

        </View>
    )
}

function mapStateToProps(state) {
    return {
        globaldata: state.globalReducer.globaldata,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getGlobalMarket: (

        ) => {
            return dispatch(
                getGlobalMarket(

                )
            );
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalData);
