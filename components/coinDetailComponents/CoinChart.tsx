import React from 'react'
import { View, Text } from 'react-native'
import { LineChart } from "react-native-chart-kit";
import { FONTS, COLORS } from '../../constants';

const CoinChart = ({ chartData, colorData }) => {
    const chart = { chartData }
    return (
        <View>
            <LineChart
                withVerticalLabels={false}
                withHorizontalLabels={false}
                withDots={false}
                withInnerLines={false}
                withVerticalLines={false}
                withOuterLines={false}
                data={{
                    datasets: [
                        {
                            data: chart
                        }
                    ]
                }}
                width={300}
                height={150}
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
