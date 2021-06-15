import { useFocusEffect } from '@react-navigation/native';
import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { LineChart } from "react-native-chart-kit";
import { connect } from 'react-redux';
import { FONTS, COLORS, SIZES } from '../../constants';
import { getCoinChart } from '../../stores/chartAPI/chartActions';

const CoinChart = ({ ID, chartData, colorData, getCoinChart, coinschart }) => {

    useFocusEffect(
        React.useCallback(() => {
            getCoinChart({ ID });
        }, [])
    );
    return (
        <View>
            <LineChart
                withVerticalLabels={true}
                withHorizontalLabels={true}
                withDots={false}
                withInnerLines={false}
                withVerticalLines={false}
                withOuterLines={false}
                data={{
                    labels: ["7d", "6d", "5d", "4d", "3d", "2d", "1d", "Now"],
                    datasets: [
                        {
                            data: chartData
                        }
                    ]
                }}

                width={Dimensions.get("window").width}  // from react-native
                height={200}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundGradientFrom: "#FFFFFF",
                    backgroundGradientTo: "#FFFFFF",
                    color: () => colorData,
                }}
                bezier
                style={{
                    position: "relative",
                    marginVertical: 10,
                    marginHorizontal: 10,
                    marginRight: 20,
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
            />

            {/* <View style={{
                marginTop: 3,
                marginBottom: SIZES.radius,
                paddingHorizontal: SIZES.padding,
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: 'space-between'
            }}>
                <Text style={{ fontWeight: "600" }}>7D</Text>
                <Text style={{ fontWeight: "600" }}>6D</Text>
                <Text style={{ fontWeight: "600" }}>5D</Text>
                <Text style={{ fontWeight: "600" }}>4D</Text>
                <Text style={{ fontWeight: "600" }}>3D</Text>
                <Text style={{ fontWeight: "600" }}>2D</Text>
                <Text style={{ fontWeight: "600" }}>1D</Text>
                <Text style={{ fontWeight: "600" }}>Now</Text>
            </View> */}

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
