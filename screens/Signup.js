import React, { useContext, useEffect, useState } from 'react'
import { Alert, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import FormButton from '../components/FormButton';

import { colors } from '../utils/colors';
import FormInput from '../components/FormInput';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SocialButton from '../components/SocialButton';
import { emailPattern, passwordPattern } from '../utils/patterns';
import { set } from 'react-native-reanimated';
import { AuthContext } from '../components/context';
import * as firebase from 'firebase';


const Signup = ({ navigation }) => {

  const { signUp, authError } = useContext(AuthContext);

  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    check_emailInputChange: false,
    check_passwordInputChange: false,
    check_cfPassChange: false,

    isValidEmail: true,
    isValidPassword: true,


    error: null,


  });

  const textInputChange = (val) => {

    if (val.length !== 0 && val.match(emailPattern)) {
      setData({
        ...data,
        email: val,
        isValidEmail: true,
        check_emailInputChange: true
      });
    } else {
      setData({
        ...data,
        email: val,
        isValidEmail: false,
        check_emailInputChange: false
      });

    }

  }

  const passwordChange = (val) => {
    if (val.length !== 0 && passwordPattern.test(val)) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
        check_passwordInputChange: true,

      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
        check_passwordInputChange: false
      });

    }
  }

  const confirmPassword = (val) => {
    val.length !== 0 ? setData({
      ...data,
      confirmPassword: val,
      check_cfPassChange: true
    }) : setData({ ...data, confirmPassword: '', check_cfPassChange: false });
  }

  const handleSignUp = async () => {
    const condition = data.email != null &&
      data.password != null &&
      (data.isValidEmail == true) &&
      (data.isValidPassword == true) &&
      (data.password == data.confirmPassword);

    if (condition == false) {
      Alert.alert('Invalid Input!', 'Please provide valid information.', [
        {
          text: 'OK',
          onPress: () => { return },
        }
      ]);
    } else {
      try {
        await signUp(data.email, data.password);
      } catch (error) {
        console.log(error);

        Alert.alert('Warning', error.message, [
          {
            text: 'OK',
            onPress: () => { return },
          }
        ]);
      }

    }
  }




  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>

      <View style={{ height: '100%', backgroundColor: 'white' }}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={{ width: '100%', justifyContent: 'center' }}>
            <TouchableOpacity styles={styles.backBtn} onPress={() => navigation.navigate("Signin")}>
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
            check_textInputChange={data.check_emailInputChange}
            isValidInfo={data.isValidEmail}
          />

          {data.isValidEmail ? null : <Text style={styles.error}>Invalid email. {authError}</Text>}
          {/* <Text>{authError}</Text> */}


          <FormInput
            labelValue={data.password}
            onChangeText={(val) => passwordChange(val)}
            iconName='lock'
            placeholder='Password'
            autoCapitalize='none'
            secureTextEntry
            check_textInputChange={data.check_passwordInputChange}
            isValidInfo={data.isValidPassword}
          />

          {data.isValidPassword ? null : <Text style={styles.error}>Password must contain
        {'\n'}* At least 6 characters.
       {'\n'}* At least 1 lowercase alphabetical character
       {'\n'}* At least 1 uppercase alphabetical character
       {'\n'}* least one special character (!@#$%^&*)</Text>}

          <FormInput
            labelValue={data.confirmPassword}
            onChangeText={(val) => confirmPassword(val)}
            iconName='lock'
            placeholder='Confirm password'
            autoCapitalize='none'
            secureTextEntry
            check_textInputChange={data.check_cfPassChange}
            isValidInfo={data.password == data.confirmPassword}

          />

          {data.password == data.confirmPassword ? null : <Text style={styles.error}>Password not matched</Text>}



          <FormButton
            formButtonText={'Sign up'}
            onPress={() => handleSignUp()} />

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


          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40
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
