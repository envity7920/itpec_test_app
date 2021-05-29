import React, { useState } from 'react'
import {  ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import FormButton from '../components/FormButton';

import { colors } from '../utils/colors';
import FormInput from '../components/FormInput';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SocialButton from '../components/SocialButton';



const Signup = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');




    return (
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}> 
     <ScrollView contentContainerStyle={styles.container}>
      <View style={{width: '100%', justifyContent: 'center'}}>
        <TouchableOpacity styles={styles.backBtn} onPress={() => navigation.navigate("Login")}>
          <AntDesign name='left' size={20} color={colors.secondary_dark_blue}/>
        </TouchableOpacity>
      </View>
      
      
     <Text style={styles.header}>Create an account</Text>
      
      <FormInput 
      labelValue={email}
      onChangeText={(val) => setEmail(val)}
      iconName='user' 
      placeholder='Email'
      keyboardType='email-address'
      autoCapitalize='none'
      />

      <FormInput 
      labelValue={password} 
      onChangeText={(val) => setPassword(val)}
      iconName='lock' 
      placeholder='Password' 
      secureTextEntry={true}/>

      <FormInput 
      labelValue={password} 
      onChangeText={(val) => setPassword(val)}
      iconName='lock' 
      placeholder='Confirm password' 
      secureTextEntry={true}/>
      
      <FormButton  
      formButtonText={'Sign up'}
      onPress={()=> alert('Sign in btn clicked.')}
      />

      <TouchableOpacity>

      <Text 
      style={{
        textAlign: 'center',
        marginVertical: 20, 
        fontFamily: 'Montserrat-SemiBold', 
        fontSize: 12, 
        color: 'rgba(0, 0, 0, .4)'}}>By registering, you confirm that you accespt our Terms of service and Privacy Policy</Text>

      </TouchableOpacity>

      <SocialButton 
      iconName='facebook' 
      color="#4867aa" 
      buttonText='Sign up with Facebook' 
      backgroundColor='#e6eaf4'/>

      <SocialButton 
      iconName='google' 
      color="#de4d41" 
      buttonText='Sign up with Google' 
      backgroundColor='#f5e7ea'/>
      

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Text 
      style={{
        fontFamily: 'Montserrat-SemiBold', 
        fontSize: 14, marginVertical: 10, 
        color: colors.secondary_dark_blue,
        textAlign: 'center'}}>
          Already have an account? Sign in
      </Text>

      </TouchableOpacity>
    
    </ScrollView>
    </TouchableWithoutFeedback>


  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
    paddingTop: 50
  },
  backBtn : {
    marginVertical: 10,
    padding: 10,
    backgroundColor: colors.primary_pink,



  }

  ,
  header : {
    fontFamily: 'Montserrat-BoldItalic',
    fontSize: 18, 
    marginVertical: 10,
   
  }

});


export default Signup;
