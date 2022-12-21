import React from "react";
import { Link } from "react-router-dom";
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,

} from 'react-native';

//Components
import Header from "../../components/HeaderLogin";



export default function sendEmail() {
    return (

        <>

            <StatusBar style="light" />

           {/*cabeçario*/}
            <Header/>
            <View style={styles.container}> 
                <View> 
                    <Text style={styles.texth1}> Informe seu E-mail</Text>
                </View>
                <View text style={styles.block}>
                    <TextInput placeholder="Digite aqui..." style={styles.TextInput} />
                </View>

                
               <TouchableOpacity style={styles.btnEnviar}>
                   <Link to='/' style={styles.link}><text>Recuperar</text> </Link>
               </TouchableOpacity>
                
                
            </View>

       
        </>

    )
}

//CSS
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 980,
        
    },
    texth1:{
        marginTop:30,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.5em',
    },
    block:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextInput: {
        marginTop:30,
        width: '66%',
        borderRadius: 20,
        height: 40,
        backgroundColor: '#rgb(196, 197, 196)',
        paddingLeft: 10,

    },
    btnEnviar:{
        fontSize: '1em',
        marginTop:30,
        alignItems:'center',
        justifyContent: 'center',
        width:'30%',
        height:40,
        backgroundColor:'#rgb(40, 61, 163)',
        color:'white',
        borderRadius: 20,
    },
    link:{
        color:'white',
        textDecorationLine: 'none'
        },
})