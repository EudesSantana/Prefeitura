import React from "react";
import { Link } from "react-router-dom";
import{
    View,
    StatusBar,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';

//icons
import {AntDesign } from '@expo/vector-icons';



//BARRA SUPERIOR EM ANDROID E IOS
const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;


export default function Header(){
    return(
     <View style={styles.header}>
         

           <Link to='/'><Image  style={styles.logoUser} source={require('../../assets/Img/system/Prefeitura.png')}/></Link> 
        
        
            <View>
                <Text style={styles.text}>Secretaria do Esporte e Lazer</Text>
            </View>
        <View style={styles.user}>
          
            <View> 
                <TouchableOpacity style={styles.buttonuser}> 
                    <AntDesign name="logout" size={27} color="#FFF"/>
                </TouchableOpacity></View>
        </View>
    </View>
       
    )
}


//css
const styles = StyleSheet.create({
    header: {
    alignItems:'center',
    backgroundColor: '#rgb(40, 61, 163)',
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
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44/ 2,
    },
    logoUser:{
        width:40,
        height:40,
    }

  });


