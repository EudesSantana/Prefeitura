import React from "react";
import { StatusBar } from 'expo-status-bar';
import{
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';

//Components
import Header from "../../components/Header";


export default function Home(){
    return(
        
     <View>
        
        <Header/>
        <StatusBar style="light" /> 
        <View  style={styles.Container}>

            <View style={styles.Carossel}>
                <Text>Carossel</Text>
            </View>
            <View>
                <View style={styles.New}>
                <Image style={styles.photo} source={require('../../assets/Img/PrefeituraILus.png')}/>
                <Text>Text blablabla</Text>  
                </View>
           
            </View>
            <View style={styles.menu}>
                <Text>minhas aulas</Text>
                <Text>Escrever-se</Text>
                <Text>Consultar</Text>
            </View>
            <Text>Oficio</Text>
            <View>
            </View>
            <Text>Mamaco</Text>
            <View>

            </View>
        </View>
        
    </View>
       
    )
}

const styles = StyleSheet.create({
    Container:{
   
    },
    Carossel:{
        alignItems:'center',
        paddingEnd: 16,
        paddingStart:16,
        height:150,
        backgroundColor:'yellow'
    },
    New:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'100%',
        height:500,
        paddingEnd: 16,
        paddingStart:16,
       
    },
    photo:{ 
        width:'45%',
        height:'50%',
        
    },
    menu:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingEnd: '33%',
        paddingStart:'33%',
    },
});