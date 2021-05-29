import React, { useContext, useState } from 'react'
import { Image, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import FormButton from '../components/FormButton';

import { colors } from '../utils/colors';
import FormInput from '../components/FormInput';

import SocialButton from '../components/SocialButton';

import { AuthContext } from '../components/context';

const Login = ({ navigation }) => {
  // STATES
  const [data, setData] = useState({
    email: '',
    password: '',
    check_textInputChange: false,
    isSecureTextEntry: true

  });



  // CONTEXT
  const { signIn } = useContext(AuthContext);


  // FUNCTIONS TO HANDEL INPUT CHANGE OR PRESS EVENTS

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false
      });

    }

  }

  const passwordChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        password: val,

      });
    } else {
      setData({
        ...data,
        password: val,

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




  // RENDERING 

  return (

    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <ScrollView contentContainerStyle={styles.container}>

        <Image style={styles.logo} source={require('../assets/images/logo-text.png')} />

        <FormInput
          labelValue={data.email}
          onChangeText={(val) => textInputChange(val)}
          iconName='user'
          placeholder='Email'
          keyboardType='email-address'
          autoCapitalize='none'
          infoType='email'
          check_textInputChange={data.check_textInputChange}
        />

        <FormInput
          labelValue={data.password}
          onChangeText={(val) => passwordChange(val)}
          iconName='lock'
          placeholder='Password'
          infoType='password'

          isSecureTextEntry={data.isSecureTextEntry}
          updateSecureTextEntry={updateSecureTextEntry}

        />

        <FormButton
          formButtonText={'Sign in'}
          onPress={() => { signIn(data.email, data.password) }}
        />

        <TouchableOpacity>

          <Text style={{ marginVertical: 20, fontFamily: 'Montserrat-SemiBold', fontSize: 14, color: colors.secondary_dark_blue }}>Forgot password?</Text>

        </TouchableOpacity>

        <SocialButton
          iconName='facebook'
          color="#4867aa"
          buttonText='Sign in with Facebook'
          backgroundColor='#e6eaf4' />

        <SocialButton
          iconName='google'
          color="#de4d41"
          buttonText='Sign in with Google'
          backgroundColor='#f5e7ea' />


        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text
            style={{
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 14, marginVertical: 10,
              color: colors.secondary_dark_blue,
              textAlign: 'center'
            }}>
            Don't have an account?{'\n'} Sign up
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

  logo: {
    marginTop: 0,
    height: 120,
    width: 150,
    resizeMode: 'cover'

  }
});


export default Login
