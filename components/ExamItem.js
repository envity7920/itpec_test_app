import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../utils/colors'
import AppLoading from 'expo-app-loading';

const ExamItem = ({item, pressHandler}) => {
    return (
        <TouchableOpacity 
        style={styles.boxTest} 
        onPress={pressHandler}>
        {/* <View style={styles.label}>
            <Text style={styles.labelText}>{item.abbr}</Text>
        </View>

        <Text style={styles.fullname}>{item.fullname}</Text> */}
        <View>
            
        <Text style={styles.boxFormText}>{item.fullname}</Text>
          </View>
          <Text style={styles.boxFormNoQuestion}>20 Questions</Text>
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
        

    },
    boxTest: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 18,
        paddingLeft: 54,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: colors.white,
        width: '100%',
        height: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        marginTop: 15,
        
      },
      boxFormText: {
        fontFamily: 'Poppins-Regular'
      },
      boxFormNoQuestion: {
        marginBottom: 20,
        marginRight: 25,
        textAlign: 'right',
        fontSize: 10
      },

})
