import React from "react";
import { Link } from "react-router-dom";
import { StatusBar } from 'expo-status-bar';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

//Components
import Header from "../../components/HeaderProfile";
//icons
import { Feather } from '@expo/vector-icons'



export default function Profile() {
    return (

        <View>
            <StatusBar style="light" />

            {/*cabeçario*/}
            <Header />
            <View style={styles.container}>

                <View  styles={styles.user}>
                    <TouchableOpacity style={styles.buttonuser}>
                        <Feather name="user" size={200} color="white" />
                    </TouchableOpacity>
                    
                    <Text name="name" style={styles.nameuser}>Eudes Santana</Text>
                </View>
                <View style={styles.ops} >

                <View style={styles.line}></View>  
                <Link to='/student'> 
                    <TouchableOpacity>
                        <Text style={styles.op}>Informações do aluno</Text>
                    </TouchableOpacity>
                 </Link>

                 <View style={styles.line}></View>  

                 <TouchableOpacity  >
                 <Text style={styles.op}>Segurança</Text>
                 </TouchableOpacity>

                 <View style={styles.line}></View>  
                  
                </View>
            
            
            </View>
       
        </View >

    )
}




//CSS
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: "100%",
        justifyContent: 'center',
        marginTop:50,
    


    },
    line: {

  
    },
    user:{

    },
    nameuser:{
    textAlign:'center',
    fontSize:30,
    fontWeight: 'bold',
    marginTop: 20,

    },
    buttonuser:{
        width: 250,
        height:250, 
        backgroundColor: 'rgb(40, 61, 163)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 250/ 2,
        
    },
    ops:{
        marginTop: 15,
      
    },
    op:{
        textAlign:"left",
        fontSize:20,
        fontWeight: 'bold',
        marginTop: 5 ,
   
       paddingBottom:10,
        borderBottomWidth: 2,
        borderBottomColor: '#D8d8d8',
    },
   
})