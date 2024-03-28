import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  PoppinsBold,
  PoppinsRegular,
  PoppinsSemibold,
  calculateFontSize,
} from '../../../uitils/font';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Images from '../../../uitils/im';
import {Arroeback, CustomButton, Inputtext, SignInWithSocial} from '../../../component';
import {Button, TextInput} from 'react-native-paper';
const {width, height} = Dimensions.get('window');
const ChooserScreen = ({navigation}) => {
 

  const HandleHost=()=>{
    navigation.navigate("signup",{role:"host"})
  }
  const HandleUser=()=>{
    navigation.navigate("signup",{role:"tenant"})
  }

  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.submaincontainer}>
     <StatusBar barStyle="dark-content" />
      <View style={styles.wellcomtextContainer}>
        <Text style={styles.wellcometext}>Welcome Back!</Text>
        <Text style={styles.welltext}>
        Bonstay Membership allows both guests and hosts to earn credits in real dollars for future stays. Allow Bonstay to help fund your next getaway. Sign up today to learn more!"
        </Text>
      </View>
   <View style={styles.logosty}>
    <Image source={Images.logo} style={{width:"100%",height:"100%"}} resizeMode='contain'/>
   </View>
      <View style={styles.main}>
      <View style={styles.buttonContainer}>
        <CustomButton title="Member log in" backgroundColor="#fff" color="#000" onPress={HandleHost} />
      </View>
      <View style={styles.buttonContainer}>
      <CustomButton title="Create an account" backgroundColor="#C1C1C1" onPress={HandleUser} />
      </View>
      </View>

     
     </View>
    </SafeAreaView>
  );
};

export default ChooserScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00AAE5',
    // alignItems:"center",
    alignItems:"center"
  },
  submaincontainer:{
justifyContent:"center",alignItems:"center"
  },
  wellcometext: {
    fontSize: calculateFontSize(27.46),
    fontFamily: PoppinsBold,
    textAlign:"center",

    color: '#fff',
    textTransform:'capitalize',
  },
  welltext: {
    color: '#fff',
    fontSize: calculateFontSize(14.46),
    fontFamily: PoppinsRegular,
    textTransform: 'capitalize',
  },
 
  errorText: {
    fontSize: 10,
    color: 'red',
  },
  buttonContainer:{
    marginVertical:height*0.01,
    alignItems:"center"
  },
  forgetpasstext:{
    color: '#7D7F88',
    fontSize: calculateFontSize(10.46),
    fontFamily: PoppinsRegular,
    textTransform: 'capitalize',
    textAlign:"center"
  },
  socialauth:{
    marginTop:height*0.08,
    alignItems:"center"
  },
  wellcomtextContainer:{
  marginVertical:height*0.04,
  marginLeft:width*0.04,
  },
  main:{
    marginTop:height*0.2
    // height:height*0.7,
    // alignSelf:"center",
    // alignItems:"center",
    // justifyContent:"center"

  },
  logosty:{
    width:width*0.5,
    height:height*0.3,
    // backgroundColor:"red"
  }
});
