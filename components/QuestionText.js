import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../utils/colors'

const QuestionText = ({text}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default QuestionText

const styles = StyleSheet.create({

    container: {
        padding: 15,
        backgroundColor:'white',
        marginVertical: 20,
        borderRadius :20,
        borderColor: colors.primary_pink,
        borderWidth: 3


    }, 
    text : {
        fontFamily: 'Montserrat-Regular',
        color: colors.secondary_black_blue
    }
})
