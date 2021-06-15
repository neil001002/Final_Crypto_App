import { useFocusEffect } from '@react-navigation/native';
import React from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { getGlobalMarket } from '../stores/globalDataAPI/globalActions';

const GlobalData = ({ getGlobalMarket, globaldata }) => {

    useFocusEffect(
        React.useCallback(() => {
            getGlobalMarket();
        }, [])
    );
    console.log("GlobalData", globaldata);


    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: "space-between",
                marginHorizontal: 30,
                marginVertical: 10
            }}
        >
            <Text
                style={{
                    position: "relative",
                    color: "#FFFFFF",
                }}
            >
                Active coins
            </Text>
            <Text
                style={{
                    position: "relative",
                    color: "#06E101",
                }}
            >
                {/* {globaldata.data.data.active_cryptocurrencies} */}
            </Text>
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
