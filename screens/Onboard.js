import React from 'react';
import { Image, Text, Touchable, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {colors} from '../utils/colors';

const Onboard = ({navigation}) => {



const Done = ({...props}) => (
    <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
        <Text>Done</Text>
    </TouchableOpacity>


)


    return (
        <Onboarding
        onSkip = {()=>navigation.replace("Login")}
        onDone = {()=>navigation.navigate("Login")}
        DoneButtonComponent = {Done}
  pages={[
    {
      backgroundColor: colors.primary_pink,
      image: <Image source={require('../assets/images/on1.png')} />,
      title: '',
      subtitle: 'It is health that is the real wealth, and not pieces of gold and silver',
    },
    {
        backgroundColor: colors.primary_yellow,
        image: <Image source={require('../assets/images/on2.png')} />,
        title: '',
        subtitle: 'Dun blame body shaming blame your ugly body',
      },
      {
        backgroundColor: colors.primary_blue,
        image: <Image source={require('../assets/images/on4.png')} />,
        title: '',
        subtitle: 'Your mouth is watering go get it',
      }
    
  ]}
/>
    )
}

export default Onboard;
