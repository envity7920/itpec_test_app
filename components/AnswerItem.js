import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../utils/colors';

const AnswerItem = ({ answer, answerChecked , onAnswerPress, keyProp}) => {
    const letter = ['A', 'B', 'C', 'D'];


    return (
        <TouchableOpacity
       
            style={styles.answerContainer}
            onPress={() => onAnswerPress(keyProp)}
        >
            <View
                style={answerChecked == keyProp ? styles.letterContainerChecked : styles.letterContainer}
            >
                <Text style={answerChecked == keyProp ? styles.letterChecked : styles.letter} >{letter[keyProp]}</Text>
            </View>
            <Text style={styles.text}>{answer}</Text>
        </TouchableOpacity>
    )
}

export default AnswerItem

const styles = StyleSheet.create({


    answerContainer: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'white',
        marginVertical: 10,
        padding: 15,
        borderRadius: 20,
        alignItems: 'center'


    },
    letterContainer: {
        width: 40,
        height: 40,

        borderRadius: 100,
        backgroundColor: 'rgba(0,0,0,.2)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    letter: {
        fontFamily: 'Montserrat-Bold',
        color: colors.secondary_dark_blue


    },
    letterContainerChecked: {

        width: 40,
        height: 40,

        borderRadius: 100,
        backgroundColor: colors.primary_pink,
        justifyContent: 'center',
        alignItems: 'center'
    },
    letterChecked: {
        fontFamily: 'Montserrat-Bold',
        color: 'white'

    }

    ,
    text: {
        flex: 1,
        fontFamily: 'Montserrat-Regular',
        paddingLeft: 10,


    }



})
