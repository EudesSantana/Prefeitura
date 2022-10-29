import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/pages/home';
import {useFonts,Anton_400Regular} from '@expo-google-fonts/anton';



export default function App() {
  
let[fontsLoaded] = useFonts({
  Anton_400Regular,
})

if(!fontsLoaded){
  return ;
}


  return (
    <View style={styles.container}>
      <StatusBar style="light" /> 
      <Home/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
