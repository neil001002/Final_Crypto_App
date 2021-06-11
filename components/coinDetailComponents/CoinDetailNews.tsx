import { useFocusEffect } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { getCoinNews } from '../../stores/newsCryptoAPI/newsActions'
import moment from "moment";
import { useNavigation } from "@react-navigation/core";

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
                                    style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                                >

                                    <View style={{}}>
                                        <Image style={styles.image} source={{ uri: item.urlToImage ? item.urlToImage : defaultImage }} />
                                    </View>

                                    <View style={{}}>

                                        <Text style={styles.title}>{item.title}</Text>
                                        <Text style={styles.author}>{item.source.name}</Text>
                                        <Text style={styles.description}>{item.description}</Text>

                                        <Text style={styles.author}> {moment(item.publishedAt || moment.now()).fromNow()} </Text>

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
        width: 223,
        height: 46,
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
    },
    description: {
        marginVertical: width * 0.02,
        marginHorizontal: width * 0.02,
        color: "gray",
        fontSize: 18,
    },
    // readMore: {
    //   color: "gray",
    //   fontSize: 18,
    //   marginVertical: width * 0.05,
    //   fontWeight: "bold",
    // },
    image: {
        width: 150,
        height: 150,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5
    },
    author: {
        marginBottom: width * 0.0,
        marginHorizontal: width * 0.05,
        fontSize: 15,
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

