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



export default function Home() {
    return (

        <>

            <StatusBar style="light" />

           {/*cabeçario*/}
            <Header/>


            <View style={styles.container}>


                     {/*Carossel*/}
                <View style={styles.carousel}>
                    <Text>Carossel</Text>
                </View>

                <View style={styles.line}></View>

                <View style={styles.new}>
                    <Image style={styles.photonew} source={require('../../assets/Img/new/new.jpg')} />
                    <View>
                        <Text style={styles.textnew}>
                        A Prefeitura entregou, no dia (10/07), o Centro de Educação, Esporte, Arte e Cultura (CEEAC) CSU. O evento contou com a presença de autoridades federais,
                        
                        </Text>
                        <Text style={styles.textnew2}>
                        Ver mais...
                        </Text>
                    </View>
                </View>


                    {/* ------------ */}
                <View style={styles.line}></View>   
                    
                    {/*Menu*/}
                <View style={styles.menu}>
                    <TouchableOpacity style={styles.opcao}>
                        <Image style={styles.photoop} source={require('../../assets/Img/system/minhasAulas.jpg')} />
                            <Text style={styles.op}>Minhas aulas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.opcao}>
                        <Image style={styles.photoop} source={require('../../assets/Img/system/escre.jpg')} />
                        <Text style={styles.op}>Escrever-se</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.opcao}>
                        <Image style={styles.photoop} source={require('../../assets/Img/system/consultar.jpg')} />
                        <Text style={styles.op}>Consultar</Text>
                    </TouchableOpacity>
                </View>

                    
                    {/* ------------ */}
                <View style={styles.line}></View>
                    
                    {/*Oficio*/}
                <View style={styles.oficio}>
                    <Image style={styles.photooficio} source={require('../../assets/Img/system/oficio.png')} />
                    <View style={styles.office}>
                        <Text style={styles.textoficio}>
                        O ofício é uma correspondência. Nela, são veiculadas ordens, solicitações ou informações com o objetivo de atender a formalidades. Assim, o documento representa uma comunicação oficial, pois usa do canal escolhido pela lei ou pelas partes para esse fim.
                        </Text>
                        <Text style={styles.textoficio2}>
                        Solicite aqui 
                        </Text>
                    </View>
                </View>

            </View>
        </>

    )
}




//CSS
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: "100%",

    },
    //carossel
    carousel: {
        height:200,

    },
    // ----------------
    line: {
    //Linha
        width: '96%',
        borderBottomWidth: 3,
        borderBottomColor: '#D8d8d8',
    },
    // ----------------
    new: {
    //Novidades
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 150,
        paddingStart: 16,
        paddingEnd: 16,
        marginTop: 10,
    },
    photonew: {
        width: '48%',
        height: '95%',

    },
    textnew: {
        width: 180,
        paddingStart: 5,

    },
    textnew2:{
        flexDirection: 'row',
       
        color:'blue',
    },
    // ----------------
    menu: {
    //Menu
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: "100%",
        height: 100,
        paddingStart: 16,
        paddingEnd: 16,
        marginTop: 50,
        alignItems: 'center',
    },
    opcao: {
        width: 100,
        marginHorizontal: 10,
        alignItems: 'center',
        height: 150,
    },
    op: {
        textAlign: 'center',
    },
    photoop: {
        width: '100%',
        height: '50%',
    },
    // ----------------
    oficio: {
     //Oficio
        flexDirection: 'row',
        width: '100%',
        height: 170,
        paddingStart: 16,
        paddingEnd: 16,
        marginTop: 20,
    },
    office:{
        flexDirection: 'column',
    },
    photooficio: {
        width: '40%',
        height: '100%',
    },
    textoficio: {
        textTransform: 'capitalize',
        width: 220,
        paddingStart: 10,
    },
    textoficio2:{
        textAlign:'center',
        color:'blue',
        paddingTop:5,
    },
    // ----------------


})
