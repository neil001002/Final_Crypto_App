import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { SIZES } from '../../constants';
import { getBlog } from '../../stores/blogAPI/blogActions';
import SkeletonContent from 'react-native-skeleton-content';

const { width, height } = Dimensions.get("window");

const HomeBlogCard = ({ getBlog, blogs }) => {
    const [isLoading, setLoading] = useState(true);
    const navigation = useNavigation();

    useFocusEffect(
        React.useCallback(() => {
            getBlog()
                .finally(() => setLoading(false));
        }, [])
    )

    return (
        <View>
            <View
                style={{
                    marginTop: 10,
                    paddingHorizontal: SIZES.padding,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Text style={{ fontWeight: "600", fontSize: SIZES.h2 }}>
                    Must Read
                </Text>
            </View>
            {isLoading ? <SkeletonContent
                containerStyle={{ flex: 1, width: 300 }}
                isLoading={isLoading}
                layout={[
                    { key: 'title', width: "100%", height: 60, margin: 20 },
                    { key: 'image', width: "100%", height: 120, margin: 20 },
                    { key: 'description', width: "100%", height: 60, margin: 20 },
                ]}
            /> : (
                <FlatList
                    data={blogs.slice(0, 3)}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.cardView}>
                                <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                                <Image
                                    style={styles.image}
                                    source={{ uri: item.image }}
                                />
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate("BlogScreen", {
                                            blog: {
                                                title: item.title,
                                                image: item.image,
                                                post: item.body,
                                            }
                                        })
                                    }
                                >
                                    <Text style={styles.description} numberOfLines={3}>{item.body}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        elevation: 12,
        backgroundColor: "white",
        margin: width * 0.03,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    title: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: "black",
        fontSize: SIZES.h3,
        fontWeight: "bold",
    },
    description: {
        marginVertical: width * 0.02,
        marginHorizontal: width * 0.02,
        color: "gray",
        fontSize: SIZES.h3,
    },
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
        blogs: state.blogReducer.blogs,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getBlog: () => {
            return dispatch(getBlog(

            ));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeBlogCard);
