import { useFocusEffect } from '@react-navigation/native';
import React from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { FONTS } from '../../constants';
import { getBlog } from '../../stores/blogAPI/blogActions';

const HomeBlogCard = ({ getBlog, blogs }) => {
    useFocusEffect(
        React.useCallback(() => {
            getBlog();
        }, [])
    )

    return (
        <View>
            <FlatList
                data={blogs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text style={{ ...FONTS.h1 }}>{item.title}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

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
