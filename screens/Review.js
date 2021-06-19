import React, { useEffect, useReducer, useState } from 'react';
import { Alert, BackHandler, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CountDown from 'react-native-countdown-component';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AnswerItem from '../components/AnswerItem';

import QuestionText from '../components/QuestionText';
import ReviewItem from '../components/ReviewItem';
import { colors } from '../utils/colors';
import { questions } from '../utils/exams';

const Review = ({ route, navigation }) => {
  // Get question list from exam name
  const { abbr, fullname, answerChecked, userAnswerList, setCurrentIndex, setCurrentID, setAnswerChecked, currentID, currentIndex, questionList } = route.params;
 

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      const prevID = questionList[currentIndex - 1]['_id'];
      setCurrentID(prevID);

      const prevCheck = userAnswerList.get(prevID);
      setAnswerChecked(prevCheck ? prevCheck : null);

    }
  }
console.log(currentIndex+"-----" + currentID)
  const next = () => {
    if (currentIndex < questionList.length - 1) {
      setCurrentIndex(currentIndex + 1);
      const nextID = questionList[currentIndex + 1]['_id'];
      setCurrentID(nextID);

      const nextCheck = userAnswerList.get(nextID);
      setAnswerChecked(nextCheck ? nextCheck : null);

    }
  }

  const stopQuiz = () => {
    Alert.alert('Oops', 'Wanna quit the test? Your progess won\'t be saved.', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      { text: 'Quit', onPress: () => navigation.popToTop() },
    ]);
    return true;
  }

  


  const onAnswerPress = (key) => {
    setAnswerChecked(key);
    setUserAnswerList((prev) => new Map(prev).set(currentID, key));

  }

  useEffect(() => {
    setAnswerChecked(userAnswerList.get(currentID));
  }, [answerChecked, userAnswerList])



  // handle hardware back button
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', stopQuiz);
    return () => backHandler.remove();
  }, []);





  // RENDERING

  return (
    <View style={styles.container}>

      <View style={[styles.row, { justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }]}>
        <TouchableOpacity
          styles={styles.button}
          onPress={stopQuiz}>
          <View style={styles.button}>
            <FontAwesome name='times' size={15} color='white' />
          </View>
        </TouchableOpacity>

      

       
      </View>


      {/* <Text>{currentID}</Text> */}



      {/* Questions area */}
      <ScrollView >


        {/* QUESTION TEXT */}
        <QuestionText text={questionList[currentIndex].text} />

        {/* 4 ANSWERS */}
        <View>
          {questionList[currentIndex].answers.map((answer, key) => {
            return (



              <ReviewItem key={key} keyProp={key} answer={answer} answerChecked={answerChecked} onAnswerPress={onAnswerPress} userAnswerList={userAnswerList} currentID= {currentID} currentIndex = {currentIndex} />


            );
          })}

        </View>


      </ScrollView>

      {/* Bottom navbar */}

      <View style={[styles.row,
      {
        justifyContent: 'space-between',
        // position: 'absolute',
        bottom: 0,
        paddingTop: 10

      }]}>
        <TouchableOpacity
          styles={styles.button}
          onPress={prev}
          disabled={currentIndex == 0}
        >
          <View style={styles.button}>
            <FontAwesome name='arrow-left' size={15} color='white' />
          </View>
        </TouchableOpacity>

        <View>
          <Text style={styles.statusBarText}>{currentIndex + 1} / 20</Text>
        </View>

        <TouchableOpacity
          styles={styles.button}
          onPress={next}
          disabled={currentIndex == 19}

        >
          <View style={styles.button}>
            <FontAwesome name='arrow-right' size={15} color='white' />
          </View>
        </TouchableOpacity>



      </View>

    </View>
  )
}





export default Review

const styles = StyleSheet.create({

  container: {
    height: '100%',
    flexDirection: 'column',
    padding: 20,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary_pink

  },
  button: {
    width: 40,
    height: 40,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary_dark_blue,
    borderRadius: 100
  },

  row: {

    backgroundColor: colors.primary_pink,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },

  statusBarText: {
    fontFamily: 'Montserrat-Bold',
    color: colors.secondary_dark_blue,
    fontSize: 16
  },
  timerContainer: {
    backgroundColor: colors.secondary_dark_blue,
    height: 50,
    padding: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  timerText: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    marginLeft: 10

  },


})
