import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { LineChart } from "react-native-chart-kit";
import { FONTS, COLORS } from '../../constants';

const CoinChart = ({ title, chartData, colorData }) => {
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
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: COLORS.white,
                    color: () => colorData
                }}
                bezier
                style={{
                    paddingRight: 0,
                }}
            />
        </View>
    )
}

export default CoinChart
