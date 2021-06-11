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
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.author}>{item.source.name}</Text>
                                <Image style={styles.image} source={{ uri: item.urlToImage ? item.urlToImage : defaultImage }} />
                                <Text style={styles.author}> {moment(item.publishedAt || moment.now()).fromNow()} </Text>
                                <Text style={styles.description}>{item.description}</Text>
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
        elevation: 2,
        backgroundColor: "white",
        margin: width * 0.03,
        borderRadius: width * 0.05,
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        // borderWidth: 0.3,
    },
    title: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
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
        height: height / 5,
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginVertical: height * 0.02,
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

