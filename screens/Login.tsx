import * as React from 'react'
import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {app} from '../firebase'
import { AuthState } from '../state/authState'

const Login = ({navigation}: {navigation: any}) => {
    const {signIn, asGuest} = React.useContext(AuthState);
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("")


    const handleRegister = () => {
        navigation.navigate('Register');
    }

    const handleGuest = () => {
       asGuest(); 
    }
    return (
        <KeyboardAvoidingView style = {styles.container}>
            <Text style = {styles.titletext}>
                wear your jacket!
            </Text>
            <TextInput
            placeholder = "your email"
            value = {username}
            onChangeText = {(value) => setUsername(value)}
            style = {styles.textField}
            />
            <TextInput
            placeholder = "your password"
            value = {password}
            onChangeText = {(value) => setPassword(value)}
            secureTextEntry
            style = {styles.textField}
            />
            <>
            {errorMessage ? 
            <Text>
                {errorMessage}
            </Text>
                : null}
                </>
            <Pressable
                onPress = {() =>signIn({username, password})}
                style = {styles.login}
                hitSlop = {{top: 10, bottom: 10, left: 10, right: 10}}
            >
                <Text style = {styles.text}>let me in!</Text>
            </Pressable>
            <Pressable
                onPress = {handleRegister}
                style = {[styles.login, {backgroundColor: 'orange'}]}
                hitSlop = {{top: 10, bottom: 10, left: 10, right: 10}}
            >
                <Text style = {styles.text}>get started!</Text>
            </Pressable>
            <Pressable
                onPress = {handleGuest}
                style = {[styles.login, {backgroundColor: 'lightblue'}]}
                hitSlop = {{top: 10, bottom: 10, left: 10, right: 10}}
            >
                <Text style = {styles.text}>continue as guest</Text>
            </Pressable>
            
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    textField: {
        width: '80%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: 'white',
        marginTop: '2%',
        borderRadius: 8,
        fontSize: 24
        
    },
    titletext: {
        fontSize: 60,
        fontFamily: 'Kalam_400Regular',
        color: '#2c6ac7'
    },
    text: {
        fontSize: 30,

    },
    login: {
        paddingHorizontal:15,
        paddingVertical: 2,
        backgroundColor: 'lightgreen',
        height:'8%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '6%',
        width: '60%',
        borderRadius: 8
    },
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    }
})
