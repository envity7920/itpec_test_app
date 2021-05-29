import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../utils/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Result = ({ route,  navigation }) => {


    const { abbr, fullname } = route.params;

    return (
        <View style={styles.container}>
            <View style={{
                width: '100%',
                justifyContent: 'flex-start',
                flexDirection: 'row',

            }}>
                <TouchableOpacity
                    styles={styles.backBtn}
                    onPress={() => navigation.popToTop()}>
                    <View style={styles.backBtn}>
                        <FontAwesome name='home' size={15} color='white' />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{
                width: '100%',
                justifyContent: 'center',
                flexDirection: 'row',
            }}>
                <View style={styles.bigLabel}>
                    <FontAwesome name='trophy' size={30} color='white' />
                    {/* <Text style={styles.bigLabelText}></Text> */}
                </View>
            </View>


            <View style={{
                fontFamily: 'Montserrat-SemiBold',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={styles.text}>Exam{'\n'}Mock Test</Text>

                <Text style={styles.text}>20 questions </Text>
                <Text style={styles.text}>Time alloted: 25 mins</Text>
            </View>

            <TouchableOpacity
                style={styles.startQuizBtn}
                onPress={() => navigation.replace('Test', {
                    abbr: abbr,
                    fullname: fullname
                })}

            >

                <Text style={styles.startQuiz}>REDO THE TEST</Text>
            </TouchableOpacity>


        </View>
    )
}

export default Result

const styles = StyleSheet.create({

    container: {

        height: '100%',
        backgroundColor: colors.primary_pink,
        alignItems: 'center',
        // justifyContent: 'center',
        padding: 20,
        paddingTop: 40

    },
    backBtn: {
        width: 40,
        height: 40,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secondary_dark_blue,
        borderRadius: 100
    },
    bigLabel: {
        marginVertical: 20,
        width: 100,
        height: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100

    },
    bigLabelText: {
        fontFamily: 'Montserrat-Black',
        fontSize: 25,
        color: colors.secondary_dark_blue

    },



    startQuizBtn: {
        marginTop: 20,
        width: '60%',
        padding: 15,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20


    },



    startQuiz: {

        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 20,
        color: colors.secondary_dark_blue

    },
    text: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        textAlign: 'center',
        padding: 10,
        color: colors.secondary_black_blue

    }
})
