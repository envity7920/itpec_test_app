import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../utils/colors'

const ExamItem = ({item, pressHandler}) => {
    return (
        <TouchableOpacity 
        style={styles.listItem} 
        onPress={pressHandler}>
        <View style={styles.label}>
            <Text style={styles.labelText}>{item.abbr}</Text>
        </View>

        <Text style={styles.fullname}>{item.fullname}</Text>
    </TouchableOpacity>
    )
}

export default ExamItem


const styles = StyleSheet.create({

    listItem: {
        flexDirection: 'row',
        backgroundColor: colors.primary_pink,
        width: '100%',
        // borderColor: 'gray',
        // borderWidth: 1,
        marginVertical: 10,
        padding: 10,
        borderRadius: 100,
        alignItems: 'center'

    },
    label: {
        width: 45,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        padding: 5,
        borderRadius: 100,
        backgroundColor: 'white',
        

    },
    labelText: {

        fontFamily: 'Montserrat-Bold',
        color: colors.secondary_dark_blue,
        fontSize: 12
        
    },
    fullname : {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        paddingLeft: 5,
        color: colors.secondary_black_blue
        

    }

})
