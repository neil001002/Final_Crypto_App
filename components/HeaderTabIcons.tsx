import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { COLORS, SIZES, FONTS } from '../constants';
import { AntDesign, Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HeaderTabIcons = ({ title }) => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                paddingHorizontal: SIZES.padding,
                backgroundColor: "#EBEBEB",
                height: 50,
                elevation: 12,
                shadowColor: "rgba(0, 0, 0, 0.25)",
                shadowOffset: {
                    width: 10,
                    height: 10,
                },
                shadowOpacity: 4,
                shadowRadius: 15,
                borderBottomStartRadius: 10,
                borderBottomEndRadius: 10,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'


            }}
        >
            {/* Header Icon */}
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <View>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </View>
            </TouchableOpacity>

            {/* Header Text  */}
            <View>
                <Text style={{

                    ...FONTS.largeTitle,
                }}>{title}</Text>
            </View>

            {/* Share button */}
            <TouchableOpacity>
                <View>
                    <Fontisto name="share" size={24} color="black" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default HeaderTabIcons
