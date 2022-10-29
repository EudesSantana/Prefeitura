import React from "react";

import{
    View,
    StatusBar,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';

//icons
import {Feather} from '@expo/vector-icons'


//BARRA SUPERIOR EM ANDROID E IOS
const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;


export default function Header(){
    return(
     <View style={styles.header}>
         

            <Image  style={styles.logoUser} source={require('../../assets/Img/system/Prefeitura.png')}/>
        
        
            <View>
                <Text style={styles.text}>Secretaria do Esporte e Lazer</Text>
            </View>
        <View style={styles.user}>
            <View> 
                <TouchableOpacity style={styles.bell}>
                    <Feather name="bell" size={27} color="#FFF"/>
                </TouchableOpacity>
            </View>
            <View> 
                <TouchableOpacity style={styles.buttonuser}> 
                    <Feather name="user" size={27} color="#FFF"/>
                </TouchableOpacity></View>
        </View>
    </View>
       
    )
}


//css
const styles = StyleSheet.create({
    header: {
    alignItems:'center',
    backgroundColor: '#191979',
    paddingTop: StatusBarHeight,
    paddingEnd: 16,
    paddingStart:16,
    paddingBottom:20,
    flexDirection: 'row',
    justifyContent: 'space-between'
    },
    user:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    },
    bell:{
        paddingEnd: 6,
        width: 44,
        height:44,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
    fontSize:15,
    color: '#FFF',
    fontweight:'bold'
        
    },
    buttonuser:{
        width: 44,
        height:44,
        backgroundColor: 'rgba(244,244,244, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44/ 2,
    },
    logoUser:{
        width:40,
        height:40,
    }

  });


