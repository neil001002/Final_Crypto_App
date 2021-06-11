import React from 'react'
import { View, Text } from 'react-native'

const GlobalData = () => {
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
                    // fontFamily: "Poppins",
                    // fontStyle: "normal",
                    // fontWeight: "bold",
                    // fontSize: 13,
                    // lineHeight: 19,
                    /* identical to box height */
                    color: "#FFFFFF",
                }}
            >
                Global Market Cap
            </Text>
            <Text
                style={{
                    position: "relative",
                    // fontFamily: "Poppins",
                    // fontStyle: "normal",
                    // fontWeight: 600,
                    // fontSize: 13,
                    // lineHeight: 19,
                    /* identical to box height */
                    color: "#06E101",
                }}
            >
                53637388822
            </Text>
        </View>
    )
}

export default GlobalData
