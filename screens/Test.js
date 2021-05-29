import React, { useEffect, useReducer, useState } from 'react';
import { Alert, BackHandler, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CountDown from 'react-native-countdown-component';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import QuestionText from '../components/QuestionText';
import { colors } from '../utils/colors';
import { questions } from '../utils/exams';

const Test = ({ route, navigation }) => {
  // Get question list from exam name
  const { abbr, fullname } = route.params;
  const questionList = questions[abbr];
  const letter = ['A', 'B', 'C', 'D'];
  // let userAnswers = {};
  // try {
  //   questionList.forEach(element => {
  //     userAnswers[element._id] = '';
  //   });
  //   console.log(userAnswers);
  // } catch (error) {
  //   console.log(error)
  // }


  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentID, setCurrentID] = useState(questionList[0]['_id']);
  const [answerChecked, setAnswerChecked] = useState(null);
  const [userAnswerList, setUserAnswerList] = useState({});

  const initialTestState = {
    currentIndex: 0,
    answerChecked: null,
    userAnswerList: {}
  }

  const testReducer = (prevState, action) => {
    switch (action.type) {
      case 'PREV':
        return {
          ...prevState,
          currentIndex: currentIndex > 0 ? currentIndex - 1 : currentIndex
        }

      case 'NEXT':
        return {
          ...prevState,
          currentIndex: currentIndex < questionList.length - 1 ? currentIndex + 1 : currentIndex
        }


      case 'CHECK_ANSWER':
        return {

          ...prevState,
          answerChecked: action.key
        }

        break;


      default:
        break;
    }




  }



  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCurrentID(questionList[currentIndex-1]['_id']);
    }
  }

  const next = () => {
    if (currentIndex < questionList.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentID(questionList[currentIndex+1]['_id']);
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

  const submit = () => {
    Alert.alert('Wow', 'Wanna submit the test?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Submit', onPress: () => navigation.navigate('Result', {
          abbr: abbr,
          fullname: fullname

        })
      },
    ]);

  }

  const answerCheck = (key) => {
    setAnswerChecked(key);
    setUserAnswerList((prevState) => {
      return {
        ...prevState,
     
      };
    });

    // console.log(userAnswerList);



  }

  // handle hardware back button
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', stopQuiz);
    return () => backHandler.remove();
  }, []);



  const [testState, dispatch] = useReducer(testReducer, initialTestState);

  // RENDERING

  return (
    <View style={styles.container}>

      <View style={[styles.row, { justifyContent: 'space-between', alignItems: 'center' }]}>
        <TouchableOpacity
          styles={styles.button}
          onPress={stopQuiz}>
          <View style={styles.button}>
            <FontAwesome name='times' size={15} color='white' />
          </View>
        </TouchableOpacity>

        <View style={styles.timerContainer}>
          {/* <FontAwesome5 name='stopwatch' size={20} color='white' /> */}
          <CountDown
            until={60 * 25}
            size={25}
            onFinish={() => alert('Finished')}
            digitStyle={{ backgroundColor: '#FFFfff00' }}
            digitTxtStyle={{ color: 'white', }}
            timeToShow={['M', 'S']}
            timeLabels={{ m: '', s: '' }}
            onFinish={() => navigation.navigate('Result', {
              abbr: abbr,
              fullname: fullname

            })}
            showSeparator
            separatorStyle={{ color: '#fff' }}
          />



        </View>

        <TouchableOpacity
          styles={styles.button}
          onPress={submit}>
          <View style={styles.button}>
            <FontAwesome name='paper-plane' size={15} color='white' />
          </View>
        </TouchableOpacity>
      </View>

      <Text>{currentID}</Text>

      {/* Questions area */}
      <ScrollView >


        {/* QUESTION TEXT */}


        <QuestionText text={questionList[currentIndex].text} />




        {/* 4 ANSWERS */}
        <View>

          {questionList[currentIndex].answers.map((answer, key) => {

            return (


              <TouchableOpacity
                key={key}
                style={styles.answerContainer}
                onPress={() => answerCheck(key)}
              >
                <View
                  style={answerChecked == key ? styles.letterContainerChecked : styles.letterContainer}
                >
                  <Text style={answerChecked == key ? styles.letterChecked : styles.letter} >{letter[key]}</Text>
                </View>
                <Text style={styles.text}>{answer}</Text>
              </TouchableOpacity>



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
        >
          <View style={styles.button}>
            <FontAwesome name='arrow-right' size={15} color='white' />
          </View>
        </TouchableOpacity>



      </View>

    </View>
  )
}





export default Test

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

  answerContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    marginVertical: 10,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center'


  },
  letterContainer: {
    width: 40,
    height: 40,

    borderRadius: 100,
    backgroundColor: 'rgba(0,0,0,.2)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  letter: {
    fontFamily: 'Montserrat-Bold',
    color: colors.secondary_dark_blue


  },
  letterContainerChecked: {

    width: 40,
    height: 40,

    borderRadius: 100,
    backgroundColor: colors.primary_pink,
    justifyContent: 'center',
    alignItems: 'center'
  },
  letterChecked: {
    fontFamily: 'Montserrat-Bold',
    color: 'white'

  }

  ,
  text: {
    flex: 1,
    fontFamily: 'Montserrat-Regular',
    paddingLeft: 10,


  }

})
