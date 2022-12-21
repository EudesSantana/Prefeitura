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
import {Feather} from '@expo/vector-icons'



//BARRA SUPERIOR EM ANDROID E IOS
const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;


export default function HeaderLogin(){
    return(
     <View style={styles.back }>
        <View style={styles.header}>

            <Link to='/'> <Image  style={styles.logoUser} source={require('../../assets/Img/system/Prefeitura.png')}/></Link>  

        </View>
    </View>
       
    )
}


//css
const styles = StyleSheet.create({
    header: {
    alignItems:'center',
    justifyContent:'center',
    maxWidth:980,
            width:'100%',
    paddingTop: StatusBarHeight,
    paddingEnd: 16,
    paddingStart:16,
    paddingBottom:20,
    justifyContent: 'space-between',
    },
    back:{
    backgroundColor: '#rgb(40, 61, 163)',
    alignItems:'center',
    },
    user:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    },
    logoUser:{
        width:80,
        height:80,
    }

  });


