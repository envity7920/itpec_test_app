import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import FormButton from '../components/FormButton';

import { colors } from '../utils/colors';
import FormInput from '../components/FormInput';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SocialButton from '../components/SocialButton';



const Signup = ({ navigation }) => {

  const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passwordPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  const [data, setData] = useState({
    email: '',
    password: '',
    check_textInputChange: false,
    isSecureTextEntry: true,
    isSecureConfirmTextEntry: true,
    isValidEmail: true,
    isValidPassword: true

  });

  const textInputChange = (val) => {

    if (val.length !== 0 && val.match(emailPattern)) {
      setData({
        ...data,
        email: val,
        isValidEmail: true,
        check_textInputChange: true
      });
    } else {
      setData({
        ...data,
        email: val,
        isValidEmail: false,
        check_textInputChange: false
      });

    }

  }

  const passwordChange = (val) => {
    if (val.length !== 0 && passwordPattern.test(val)) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,

      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,

      });

    }
  }

  const updateSecureTextEntry = () => {
    setData(
      {
        ...data,
        isSecureTextEntry: !data.isSecureTextEntry
      }
    );
  }





  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>

      <View style={{ height: '100%', backgroundColor: 'white' }}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={{ width: '100%', justifyContent: 'center' }}>
            <TouchableOpacity styles={styles.backBtn} onPress={() => navigation.navigate("Login")}>
              <AntDesign name='left' size={20} color={colors.secondary_dark_blue} />
            </TouchableOpacity>
          </View>


          <Text style={styles.header}>Create an account</Text>

          <FormInput
            labelValue={data.email}
            onChangeText={(val) => textInputChange(val)}
            iconName='user'
            placeholder='Email'
            keyboardType='email-address'
            autoCapitalize='none'
            infoType='email'
            check_textInputChange={data.check_textInputChange}
            isValidEmail={data.isValidEmail}
          />

          {data.isValidEmail ? null : <Text style={styles.error}>Invalid email</Text>}



          <FormInput
            labelValue={data.password}
            onChangeText={(val) => passwordChange(val)}
            iconName='lock'
            placeholder='Password'
            infoType='password'
            isSecureTextEntry={data.isSecureTextEntry}
           
          />

          {data.isValidPassword ? null : <Text style={styles.error}>Password must contain
        {'\n'}* At least 8 characters.
       {'\n'} * At least 1 lowercase alphabetical character
       {'\n'} * At least 1 uppercase alphabetical character
       {'\n'}* least one special character (!@#$%^&*)</Text>}

          <FormInput
            // labelValue={data.password}
            // onChangeText={(val) => passwordChange(val)}
            iconName='lock'
            placeholder='Confirm password'
            infoType='password'
            isSecureTextEntry={data.isSecureConfirmTextEntry}
        
          />

          <FormButton
            formButtonText={'Sign up'}
            onPress={() => alert('Sign in btn clicked.')}
          />

          <TouchableOpacity>

            <Text
              style={{
                textAlign: 'center',
                marginVertical: 20,
                fontFamily: 'Montserrat-SemiBold',
                fontSize: 12,
                color: 'rgba(0, 0, 0, .4)'
              }}>By registering, you confirm that you accespt our Terms of service and Privacy Policy</Text>

          </TouchableOpacity>

          <SocialButton
            iconName='facebook'
            color="#4867aa"
            buttonText='Sign up with Facebook'
            backgroundColor='#e6eaf4' />

          <SocialButton
            iconName='google'
            color="#de4d41"
            buttonText='Sign up with Google'
            backgroundColor='#f5e7ea' />


          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                fontFamily: 'Montserrat-SemiBold',
                fontSize: 14, marginVertical: 10,
                color: colors.secondary_dark_blue,
                textAlign: 'center'
              }}>
              Already have an account? Sign in
      </Text>

          </TouchableOpacity>

        </ScrollView>

      </View>
    </TouchableWithoutFeedback>


  );
}

const styles = StyleSheet.create({
  container: {
    // height: '100%',

    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
    paddingTop: 50
  },
  backBtn: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: colors.primary_pink,
  },
  header: {
    fontFamily: 'Montserrat-BoldItalic',
    fontSize: 18,
    marginVertical: 10,

  },
  error: {
    width: '100%',
    marginBottom: 10,
    color: 'red',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12
  }

});


export default Signup;
