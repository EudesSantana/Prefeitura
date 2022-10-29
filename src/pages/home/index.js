import React from "react";
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';

//Components
import Header from "../../components/Header";


export default function Home() {
    return (

        <View>
             <StatusBar style="light" />
            <Header />
            <View style={styles.Container}>

<View style={styles.item1}>
    <View style={styles.Carossel}>
    <Text>Carossel</Text>
    </View>
</View>


<View style={styles.item2}>
    <View style={styles.New}>
        <Image style={styles.photo} source={require('../../assets/Img/new/new.jpg')} />
        <View><Text style={styles.textnew}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada sapien non orci porta, a gravida orci <a href="www.google.com">Vestibulum ante...</a> </Text></View>
    </View>
</View>

<View style={styles.item3}>
    <View style={styles.menu}>
        <View style={styles.opcao}>
            <Image style={styles.photoop} source={require('../../assets/Img/system/minhasAulas.jpg')} />
            <View><Text style={styles.op}>minhas aulas</Text></View>
        </View>

        <View style={styles.opcao}>
            <Image style={styles.photoop} source={require('../../assets/Img/system/escre.jpg')} />
            <View><Text style={styles.op}>Escrever-se</Text></View>
        </View>

        <View style={styles.opcao}>
            <Image style={styles.photoop} source={require('../../assets/Img/system/consultar.jpg')} />
            <Text style={styles.op}>Consultar</Text>
        </View>
    </View>
</View>

<View style={styles.item4}>
    <View style={styles.oficio}>
        <Image style={styles.photooficio} source={require('../../assets/Img/system/oficio.png')} />
        <Text style={styles.textnew}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  a gravida orci <a href="www.google.com">Vestibulum...</a> </Text>
    </View>
</View>



</View>
       

        </View>

    )
}

const styles = StyleSheet.create({
    Container: {
        width: '96%',
        margin: '0 auto',
        padding: 30,
    },
    line: {
        borderBottomWidth: 3,
        borderBottomColor: '#D8d8d8',
        marginEnd: 50,
        marginStart: 50,
    },
    Carossel: {
        width: '100%',
        alignItems: 'center',
        paddingEnd: 16,
        paddingStart: 16,
        height: 150,

        borderBottomWidth: 3,
        borderBottomColor: '#D8d8d8',
        marginEnd: '5%',
        marginStart: '5%',


    },
    New: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 200,
        paddingStart: 16,
        marginTop: 10,
        paddingEnd: 16,



        
        borderBottomWidth: 3,
        borderBottomColor: '#D8d8d8',
        marginEnd: '5%',
        marginStart: '5%',



    },
    photo: {
        width: '48%',
        height: '58%',
        height: 150,


    },
    textnew: {
        width: '48%',
        paddingEnd: 16,
    },
    menu: {
        width: '100%',
        marginTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        

        paddingEnd: 16,
        paddingStart: 16,
        height: 100,

        borderBottomWidth: 3,
        borderBottomColor: '#D8d8d8',
        marginEnd: '5%',
        marginStart: '5%',
    },
    opcao: {
        marginTop: '10',
        width: '33%',
        alignItems: 'center',
        height: 150,


    },
    op: {
        border: 'none',
        outline: 'none',
        height: 150,

    },
    photoop: {

        width: '100%',
        height: '80%',
        alignItems: 'center',
    

    },
    oficio: {
        height: 150,
        marginTop: 10,
        flexDirection: 'row',
        paddingEnd: 16,
        paddingStart: 16,
        justifyContent: 'space-between',
        width: '100%',

    },
    photooficio: {
        width: '49%',
        height: '100%',
    },
});