import React, { useContext } from 'react'
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableOpacity, Image, TouchableOpacityBase, TouchableWithoutFeedback, View, ImageBackground } from 'react-native'
import { AuthContext } from '../components/context'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { exams } from '../utils/exams';
import { colors } from '../utils/colors';
import ExamItem from '../components/ExamItem';
import SearchBar from '../components/SearchBar';
const Home = ({ navigation }) => {

    const { signOut } = useContext(AuthContext);



    const handleSignOut = () => {
        Alert.alert(
            "Confirmation",
            "Do you really want to sign out",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => signOut()
                }
            ]);

    }

    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/images/login-bg.png')}
        >

            <View style={styles.container}>


                <View style={styles.headingForm}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/images/app_logo.png')}
                    />
                    <View style={styles.headingFormText}>
                        <Text style={styles.heading}>ITPECT</Text>
                        <Text style={styles.infoLine1}>Information Technology</Text>
                        <Text style={styles.infoLine2}>Professional Examination Council</Text>
                    </View>
                </View>
                <View style={
                    {
                        flexDirection: 'row',
                        paddingVertical: 10,
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }
                }>

                    <Text style={{
                        fontFamily: 'Montserrat-Bold',
                        color: colors.secondary_dark_blue

                    }}>
                        All Tests</Text>
                    <TouchableOpacity
                        style={styles.logout}
                        onPress={handleSignOut}>
                        <FontAwesome name='sign-out' size={30} color={colors.secondary_dark_blue} />
                    </TouchableOpacity>

                </View>


                <SearchBar />


                <View style={styles.list} >
                    <FlatList data={exams.list} keyExtractor={(item) => item.id} renderItem={({ item }) => (

                        <ExamItem
                            item={item}
                            pressHandler={() => {
                                navigation.navigate('Start', {

                                    abbr: item.abbr,
                                    fullname: item.fullname,
                                });
                            }}
                        />
                    )}
                    />
                </View>
            </View>

        </ImageBackground>
    )
}

export default Home

const styles = StyleSheet.create({
    background: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: '100%',
        resizeMode: 'center'
    },
    logo: {
        width: 100,
        height: 100,

        // marginTop: 100
    },
    headingForm: {
        marginTop: 200,
        flexDirection: 'row',
        flexWrap: 'wrap-reverse',
        marginHorizontal: 25,

    },
    headingFormText: {
        // marginTop: 100,
        marginLeft: 5,
        marginBottom: 45
    },
    heading: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'red'
    },
    infoLine1: {
        fontSize: 20,
        fontWeight: 'normal',
        color: colors.primary,

    },
    infoLine2: {
        fontSize: 14,
        fontWeight: 'normal',
        color: colors.primary
    },

    container: {
        padding: 20,
        paddingTop: 50,

        // justifyContent: 'center',
        // alignItems: 'center'
    },
    list: {

        marginTop: 40
    },




})
