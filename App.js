import React, { useEffect, useState } from 'react';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import AppStack from './navigation/AppStack';
import AuthenticationStack from './navigation/AuthenticationStack';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, Alert, View } from 'react-native';
import { colors } from './utils/colors';
import { AuthContext } from './components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as firebase from 'firebase';



const firebaseConfig = {
  apiKey: "AIzaSyCPej1lvv3ktcpB9weQbm17KX_BWjq3SeQ",
  authDomain: "rn-itpec.firebaseapp.com",
  projectId: "rn-itpec",
  storageBucket: "rn-itpec.appspot.com",
  messagingSenderId: "647627597329",
  appId: "1:647627597329:web:2dbbcfea90f1756de0b3b0"
};
// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}



export default function App() {
  // declare the fonts to use
  let [fontsLoaded] = useFonts({
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-ExtraBold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-BoldItalic': require('./assets/fonts/Montserrat-BoldItalic.ttf'),
  });


  // FIREBASE
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  



  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);




  if (initializing) return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size='large' color={colors.primary_pink} style='' />
    </View>

  );


  // if all fonts are not loaded return apploading 
  if (!fontsLoaded) {
    return (
      <AppLoading />
    );
  } else {
    return (

      <AuthContext.Provider value={{
        user,
        setUser,
        signIn: async (email, password) => {
          try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        signOut: async () => {
          try {
            await firebase.auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
        signUp: async (email, password) => {
         
          // try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
          // } catch (error) {
          //   console.log(error);
          //   return error;
          // }
        }

      }}>
        <NavigationContainer>
          {user != null ? <AppStack /> : <AuthenticationStack />}
        </NavigationContainer>
      </AuthContext.Provider>

    );

  }
}







