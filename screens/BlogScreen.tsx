import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { HeaderTabIcons } from '../components'
import { COLORS, FONTS, SIZES } from '../constants'

const { width, height } = Dimensions.get("window");

const BlogScreen = ({ route }) => {
    return (
        <>
            <View
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    width: '100%',
                    zIndex: 1,
                }}
            >
                <HeaderTabIcons
                    title={""}
                />
            </View>
            <ScrollView style={{ backgroundColor: COLORS.white }} showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        margin: SIZES.padding,
                        position: "relative",
                        marginTop: 60,
                    }}
                >
                    <View>
                        <Text style={{ fontWeight: "600", fontSize: SIZES.h2 }}>{route.params.blog.title}</Text>
                    </View>

                    <View>
                        <Image
                            style={{
                                height: height / 5,
                                marginVertical: height * 0.02,
                            }}
                            source={{ uri: route.params.blog.image }}
                        />
                    </View>

                    <View>
                        <Text style={{ fontWeight: "600", fontSize: SIZES.h2 }}>{route.params.blog.post}</Text>
                    </View>
                </View>
            </ScrollView >
        </>
    )
}

export default BlogScreen
