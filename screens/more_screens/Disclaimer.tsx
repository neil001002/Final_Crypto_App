import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { COLORS, FONTS, SIZES } from '../../constants'

const Disclaimer = () => {
    return (
        <ScrollView style={{ backgroundColor: COLORS.white }} showsVerticalScrollIndicator={false}>
            <View
                style={{
                    margin: SIZES.padding,
                }}
            >
                <Text style={{ fontWeight: "600", fontSize: SIZES.h1 }}>Terms of use</Text>
                <View>
                    <Text style={{ fontSize: SIZES.h3, marginVertical: 4 }}>All materials (content, data, video) placed on Cryptonium application (hereinafter “the mobile app”) are either from various public sources or sent by visitors of the website. All materials are used for noncommercial purposes. Any commercial use of the mobile app and the website materials without written permission of the authors (copyright holders) is prohibited.</Text>

                    <Text style={{ fontSize: SIZES.h3, marginVertical: 4 }}>The owners and developers of the website and the mobile application are not responsible for any use of available on the website and the mobile application materials. All materials are published for informational purposes only. All articles and hyperlinks published in the mobile app and on the website are purely for satisfying the interest of our dear readers; the owners and developers of the website and the mobile application are not responsible for any consequences of the use of the materials for purposes designated illegal in countries around the world.</Text>

                    <Text style={{ fontSize: SIZES.h3, marginVertical: 4 }}>Users bear their own responsibility for the use and spread of materials on the website and in the mobile application in accordance with the local legislation of their home country. The administration is not in possession of information on legislation of any country and does not track changes in legislation norms in various countries.</Text>

                    <Text style={{ fontSize: SIZES.h3, marginVertical: 4 }}>All rights for graphic, text, musical and other content provided on the website and in the mobile application belong to their rightful owners. The watermark placed on images of the mobile application and/or of the website means that this content is placed on our server and by no means indicates the content ownership. If you are the content author, creator or copyright holder but your authorship or copyright is not mentioned or you are against its use on the website and/or on the mobile app, please contact the mobile application owners or the website owners and the content will be edited or removed as soon as possible. The feedback link is available at the bottom of the page.</Text>

                    <Text style={{ fontSize: SIZES.h3, marginVertical: 4 }}>Materials which violate the current legislation are not published on the website or in the mobile application. Under no circumstances should the website and the mobile application owners and developers be blamed or legally prosecuted for consequences or events emerged due to the use of links or materials provided in the the website or in the mobile application.</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default Disclaimer
