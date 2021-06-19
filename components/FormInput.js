
import AppLoading from 'expo-app-loading';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../utils/colors';
import { windowWidth, windowHeight} from '../utils/Dimension';


const FormInput= ({labelValue, iconName, placeholder, infoType, updateSecureTextEntry,  isSecureTextEntry, check_textInputChange, isValidInfo , ...rest}) => {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
                <AntDesign name={iconName}  size={20} color='white'/>
            </View>
            <TextInput 
            style={styles.input}
            value={labelValue}
            numberOfLines={1}
            placeholder={placeholder}  
            placeholderTextColor='#666'
            secureTextEntry={isSecureTextEntry}
            {...rest} />

      
            {check_textInputChange == true  && isValidInfo ? 
            <View style={[styles.iconContainer, {backgroundColor: 'white', borderWidth: 1, borderColor: 'green'}]}>
                <AntDesign name='check'  size={15} color='green'/>
            </View>
            : null}

            
            {infoType == 'password' ? (isSecureTextEntry ?  
            <TouchableOpacity 
            style={[styles.iconContainer, {backgroundColor: 'white'}]}
            onPress={updateSecureTextEntry} >
                <Feather name='eye-off'  size={15} color='gray'/>
            </TouchableOpacity> : 
            <TouchableOpacity 
            style={[styles.iconContainer, {backgroundColor: 'white'}]}
            onPress={updateSecureTextEntry} >
                <Feather name='eye'  size={15} color='gray'/>
            </TouchableOpacity>
            ) 
            : null}


        </View>
    )
}

export default FormInput

const styles = StyleSheet.create({

    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 12,
        borderColor: colors.primary_bluee,
        borderRadius: 25,
        borderWidth: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        
        
      },

    iconContainer : {
        margin: 5,
        padding: 10,
        borderRadius: 100,
        backgroundColor: colors.primary_bluee,
    
    }, 
    input: {
        padding: 10,
        flex: 1,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
      },

})
