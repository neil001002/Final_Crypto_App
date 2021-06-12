import { useFocusEffect } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { getCoinNews } from '../../stores/newsCryptoAPI/newsActions'
import moment from "moment";
import { useNavigation } from "@react-navigation/core";
import { FONTS, SIZES } from '../../constants'

const { width, height } = Dimensions.get("window");

const CoinDetailNews = ({ ID, getCoinNews, coinsnews }) => {
    const defaultImage = require("../../assets/icons/briefcase.png")
    const navigation = useNavigation();

    useFocusEffect(
        React.useCallback(() => {
            getCoinNews({ ID });
        }, [])
    );
    return (
        <View>
            <View style={{
                marginTop: 10,
                marginBottom: SIZES.radius,
                paddingHorizontal: SIZES.padding,
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: 'space-between'
            }}>
                <Text style={{ fontWeight: "600", fontSize: SIZES.h2 }}>Trending news</Text>
            </View>
            <FlatList
                data={coinsnews.articles}
                keyExtractor={(item, index) => "key" + index}
                initialNumToRender={5}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Webview", { url: item.url })}
                        >
                            <View style={styles.cardView}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                    }}
                                >

                                    <View style={{ height: 108, width: "30%" }}>
                                        <Image style={styles.image} source={{ uri: item.urlToImage ? item.urlToImage : defaultImage }} />
                                    </View>

                                    <View style={{
                                        paddingHorizontal: 5,
                                        paddingVertical: 5,
                                        width: "70%",
                                        justifyContent: "space-between"

                                    }}>

                                        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>

                                        <Text style={styles.description} numberOfLines={3}>{item.description}</Text>
                                        <View style={{
                                            flexDirection: "row", justifyContent: "space-between",
                                            // borderWidth: 1

                                        }}>
                                            <Text style={styles.sourceName}>{item.source.name}</Text>
                                            <Text style={styles.time}> {moment(item.publishedAt || moment.now()).fromNow()} </Text>
                                        </View>
                                    </View>

                                </View>

                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        position: "relative",
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 5,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 4,
        shadowRadius: 15,
        elevation: 12,
    },
    title: {
        color: "black",
        fontSize: 14,
        fontWeight: "bold",
    },
    description: {
        color: "gray",
        fontSize: 11,
    },
    image: {
        flex: 1,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        resizeMode: "cover"
    },
    time: {
        fontSize: 10,
        color: "gray",
    },
    sourceName: {
        // marginBottom: width * 0.0,
        // marginHorizontal: width * 0.05,
        fontSize: 10,
        color: "gray",
    },
});

function mapStateToProps(state) {
    return {
        coinsnews: state.newsReducer.coinsnews,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getCoinNews: (
            ID
        ) => {
            return dispatch(
                getCoinNews(
                    ID
                )
            );
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinDetailNews);

