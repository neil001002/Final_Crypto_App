import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { LineChart } from "react-native-chart-kit";
import { connect } from 'react-redux';
import { getCoinChart } from '../../stores/chartAPI/chartActions';
import SkeletonContent from 'react-native-skeleton-content';

const CoinChart = ({ ID, chartData, colorData, getCoinChart, coinschart }) => {
    const [isLoading, setLoading] = useState(true);
    useFocusEffect(
        React.useCallback(() => {
            getCoinChart({ ID })
                .finally(() => setLoading(false));
        }, [])
    );
    return (
        <View>
            {isLoading ? <SkeletonContent
                containerStyle={{ flex: 1, width: 300 }}
                isLoading={isLoading}
                layout={[
                    { key: 'someId1', width: "100%", height: 200, margin: 20 },
                ]}
            /> : (
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
            )}
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
