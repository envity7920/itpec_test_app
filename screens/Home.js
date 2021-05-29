import React, { useContext } from 'react'
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, TouchableWithoutFeedback, View } from 'react-native'
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
        <View style={styles.container}>
            <View style={
                {flexDirection: 'row',
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

                <TouchableOpacity onPress={handleSignOut}>
                    <FontAwesome name='sign-out' size={25} color={colors.secondary_dark_blue}/>
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


    )
}

export default Home

const styles = StyleSheet.create({

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
