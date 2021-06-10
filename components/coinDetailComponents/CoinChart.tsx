import { useFocusEffect } from '@react-navigation/native';
import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { LineChart } from "react-native-chart-kit";
import { connect } from 'react-redux';
import { FONTS, COLORS } from '../../constants';
import { getCoinChart } from '../../stores/chartAPI/chartActions';

const CoinChart = ({ ID, title, chartData, colorData, getCoinChart, coinschart }) => {

    useFocusEffect(
        React.useCallback(() => {
            getCoinChart({ ID });
        }, [])
    );
    return (
        <View>
            <Text style={{ ...FONTS.largeTitle }}>{title}</Text>
            <LineChart
                withVerticalLabels={true}
                withHorizontalLabels={true}
                withDots={false}
                withInnerLines={false}
                withVerticalLines={false}
                withOuterLines={false}
                data={{
                    datasets: [
                        {
                            data: chartData
                        }
                    ]
                }}

                width={Dimensions.get("window").width}  // from react-native
                height={220}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: COLORS.white,
                    color: () => colorData,
                }}
                bezier
                style={{
                    paddingRight: 10,
                }}
            />
            <View style={{
                flexDirection: 'row',
                paddingLeft: 10,
                justifyContent: 'space-between'
            }}>
                <Text>7d</Text>
                <Text>6d</Text>
                <Text>5d</Text>
                <Text>4d</Text>
                <Text>3d</Text>
                <Text>2d</Text>
                <Text>1d</Text>
                <Text>Now</Text>
            </View>
        </View>
    )
}

function mapStateToProps(state) {
    return {
        coinschart: state.chartReducer.coinschart,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getCoinChart: (
            ID
        ) => {
            return dispatch(
                getCoinChart(
                    ID
                )
            );
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinChart);
