import React, { useContext, useState } from 'react'
import { Alert, Image, Keyboard, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import FormButton from '../components/FormButton';
import { colors } from '../utils/colors';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../components/context';
import { emailPattern, passwordPattern } from '../utils/patterns';

const Signin = ({ navigation }) => {
  const [data, setData] = useState({
    email: '',
    password: '',
    check_textInputChange: false,
    isSecureTextEntry: true,
    isValidEmail: true,
    isValidPassword: true
  });



  // CONTEXT
  const { signIn } = useContext(AuthContext);


  // FUNCTIONS TO HANDEL INPUT CHANGE OR PRESS EVENTS

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


  const handleSignIn = async () => {
    const condition = data.email != null &&
      data.password != null &&
      (data.isValidEmail == true) &&
      (data.isValidPassword == true);

    if (!condition) {
      Alert.alert('Invalid Input!', 'Please provide valid information.', [
        {
          text: 'OK',
          onPress: () => { return },
        }
      ]);
    } else {
      try {
        await signIn(data.email, data.password);
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


  // RENDERING 

  return (

    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={{ height: '100%', backgroundColor: 'white' }}>
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
            isValidInfo={data.isValidEmail}
          />

          {data.isValidEmail ? null : <Text style={styles.error}>Invalid email</Text>}



          <FormInput
            labelValue={data.password}
            onChangeText={(val) => passwordChange(val)}
            iconName='lock'
            placeholder='Password'
            infoType='password'
            isSecureTextEntry={data.isSecureTextEntry}
            updateSecureTextEntry={updateSecureTextEntry}
          />

          {/* {data.isValidPassword ? null : <Text style={styles.error}>Password must contain
        {'\n'}* At least 8 characters.
       {'\n'} * At least 1 lowercase alphabetical character
       {'\n'} * At least 1 uppercase alphabetical character
       {'\n'}* least one special character (!@#$%^&*)</Text>} */}


          <FormButton
            formButtonText={'Sign in'}
            onPress={() => handleSignIn()}
          />

          <TouchableOpacity>

            <Text style={{ marginVertical: 10, fontFamily: 'Montserrat-SemiBold', fontSize: 14, color: colors.secondary_dark_blue }}>Forgot password?</Text>

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

  logo: {
    marginTop: 0,
    height: 120,
    width: 120,
    resizeMode: 'cover'

  },

  error: {
    width: '100%',
    marginBottom: 10,
    color: 'red',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12
  }
});


export default Signin
