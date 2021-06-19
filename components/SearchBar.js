
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AppLoading from 'expo-app-loading';

import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../utils/colors';
import { windowWidth, windowHeight } from '../utils/Dimension';


const SearchBar = ({ }) => {
    
    return (
        <View style={styles.inputContainer}>

            <TextInput
                style={styles.input}
                numberOfLines={1}
                placeholder='enter exam name'
                placeholderTextColor='#666'

               />

            <View style={styles.iconContainer}>
                <Feather name='search' size={20} color='white' />
            </View>

        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({

    inputContainer: {
        padding: 2,
        marginTop: 5,
        marginBottom: 0,
        width: '100%',
        // height: windowHeight / 15,
        // borderColor: colors.primary_pink,
        borderRadius: 30,
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.primary_bluee,

    },

    iconContainer: {
        marginHorizontal: 5,
        padding: 10,
        borderRadius: 100,
        backgroundColor: colors.primary_bluee
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 12,
        fontFamily: 'Montserrat-Medium',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 30
    },

})
