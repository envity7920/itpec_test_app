import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from '../screens/Home';
import Start from '../screens/Start';

import Test from '../screens/Test';
import Result from '../screens/Result';
import Review from '../screens/Review';



const Stack = createStackNavigator();

export default function AppStack() {

  return (
    <Stack.Navigator


      screenOptions={
        {
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ header: () => null }}
      />

      <Stack.Screen
        name="Start"
        component={Start}
        options={{ header: () => null }}
      />

      <Stack.Screen
        name="Test"
        component={Test}
        options={{
          header: () => null,
          gestureEnabled: false
        }}
      />

      <Stack.Screen
        name="Result"
        component={Result}
        options={{
          header: () => null,
          gestureEnabled: false
        }}
      />
      <Stack.Screen
        name="Review"
        component={Review}
        options={{
          header: () => null,
          gestureEnabled: false
        }}
      />

    </Stack.Navigator>



  );








}

