// rnfes
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors } from '../utils/colors';
import { windowHeight } from '../utils/Dimension';





const SocialButton = ({iconName, buttonText, color, backgroundColor, ...rest}) => {
   
  
  
    let bgColor = backgroundColor;
 
    return (
        
            <TouchableOpacity style={[styles.container, {backgroundColor: bgColor}]} {...rest}>
                <View style={styles.iconWrapper}>
                    <FontAwesome name={iconName} size={22} color={color}/>
                </View>
                <View style={styles.textWrapper}>
                    <Text style={[styles.btnText, {color: color}]}>{buttonText}</Text>
                </View>
                
            </TouchableOpacity>
        
    )
}

export default SocialButton;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
        width: '100%',
        height: 40,
        height: windowHeight / 15,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: colors.primary_blue,
        color: colors.secondary_dark_blue
    },
    iconWrapper : {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10

    },

    textWrapper : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'


    },

    btnText : {
        // fontWeight: 'bold',
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold'
      
    }


})
