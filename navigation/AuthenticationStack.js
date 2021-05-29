import React, { useEffect, useState } from 'react';
import { StyleSheet, View} from 'react-native';
import { createStackNavigator, CardStyleInterpolators  } from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Onboard from '../screens/Onboard';
import Login from '../screens/Login';
import Signup from '../screens/Signup';





const Stack = createStackNavigator();

export default function AuthenticationStack() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    })
  }, [])


  if (isFirstLaunch === null){
    return null;
  } else if (isFirstLaunch === true) {
    routeName = "Onboard";
  } else {
    routeName = "Login";
  }

  
  return (
        <Stack.Navigator  
        initialRouteName={routeName}
       
        screenOptions={
          {gestureEnabled: true, 
            gestureDirection: 'horizontal', 
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}
        >
            <Stack.Screen  
         
            name="Onboard" 
            component={Onboard}
            options={{header: () => null}}
            />
            <Stack.Screen 
           
            name="Login" 
            component={Login}
            options={{header: () => null}}
            />
            <Stack.Screen 
            
            name="Signup" 
            component={Signup}
            options={{header: () => null}}
              
          />
            
        </Stack.Navigator>
    


  );
      
          





  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
