import React from "react";
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,

} from 'react-native';

//Components
import Header from "../../components/Header";



export default function Consult() {
    return (

        <>

            <StatusBar style="light" />

           {/*cabeçario*/}
            <Header/>
            <View style={styles.container}> 
                <View> 
                    <Text>Informações dos Alunos</Text>
                </View>
               
                
            </View>

       
        </>

    )
}

//CSS
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
})