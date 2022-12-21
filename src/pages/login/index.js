import React from "react";
import { Link } from "react-router-dom";
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,

} from 'react-native';

//Components
import Header from "../../components/HeaderLogin";



export default function Login() {
    return (

        <>

            <StatusBar style="light" />

            {/*cabeçario*/}
            <Header />
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>Bem Vindo !</Text>
                </View>
                <View style={styles.login}>
                    <text style={styles.text1}>E-mail:</text>
                    <TextInput placeholder="Seu E-mail..." style={styles.TextInput} />

                    <text style={styles.text1}>Senha:</text>
                    <TextInput secureTextEntry="true" placeholder="Sua senha..." style={styles.TextInput} />
                </View>
                <View>
                <Link to='/sendemail'> <text style={styles.textrecuperar}>esqueci minha senha</text></Link>
                </View>
               <TouchableOpacity style={styles.btnlogin}>
               <Link to='/home' style={styles.link}><text>Fazer Login</text> </Link>
            </TouchableOpacity> 
            
            <View style={styles.texfinal}>
                <text>É novo aqui?</text>
        
                 <TouchableOpacity>
                 <Link to='/'> <text style={styles.textblue}>Cadastre-se</text></Link>
            
            </TouchableOpacity>
            </View>

            </View>


        </>

    )
}

//CSS
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',

        width: '100%',
        marginTop: 20,
        maxWidth: 980,
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '2em',
    },
    text1: {
        paddingLeft: 10,
    },
    login: {
        marginTop: 50,
        width: '90%',
        marginBottom:5,
    },
    TextInput: {
        borderRadius: 20,
        height: 40,
        backgroundColor: '#rgb(196, 197, 196)',
        paddingLeft: 10
    },
    textrecuperar: {
        marginTop:10,
        paddingTop:10,
        color: 'gray',
        textDecorationLine: 'underline'

    },
    btnlogin:{
        fontSize: '1em',
        marginTop:20,
        alignItems:'center',
        justifyContent: 'center',
        width:'50%',
        height:40,
        backgroundColor:'#rgb(40, 61, 163)',
        color:'white',
        borderRadius: 20,
    },
    texfinal:{
        marginTop:20,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    textblue:{
    color:'blue',
    link:{}
    },
    link:{
    color:'white',
    textDecorationLine: 'none'
    },
})