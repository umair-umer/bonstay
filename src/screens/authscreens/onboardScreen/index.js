import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  PoppinsBold,
  PoppinsSemibold,
  calculateFontSize,
} from '../../../uitils/font';
import Images from '../../../uitils/im';
import AntDesign from 'react-native-vector-icons/AntDesign';
const {width, height} = Dimensions.get('window');
const ONboardScreen = ({navigation}) => {
  const [isPressed, setIsPressed] = useState();
  const [isPressedsec, setIsPressedsec] = useState();
  return (
   
    <SafeAreaView style={styles.container}>
      <View style={styles.boardimage}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={Images.onboard}
          resizeMode="cover"
        />
      </View>
      <View style={styles.texcontain}>
        <Text style={styles.introtext}>Your Ultimate Travel Companion</Text>
      </View>
      <Text style={styles.introsub}>
        Let’s Discover amazing destinations, book cozy stays, and create
        unforgettable memories with Bonstay.
      </Text>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('chooserscreen');
          }}
          style={[styles.buttonconbaor, isPressed && styles.buttonPressed]}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}>
          <Text style={[styles.logintext, isPressed && styles.logintextpress]}>
            create
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('loginscreen');
          }}
          style={[styles.buttonconbaor, isPressedsec && styles.buttonPressed]}
          onPressIn={() => setIsPressedsec(true)}
          onPressOut={() => setIsPressedsec(false)}>
          <Text
            style={[styles.logintext, isPressedsec && styles.logintextpress]}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ONboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boardimage: {
    width: width,
    height: height * 0.5,
    overflowL: 'hidden',
    // backgroundColor:"#00AAE5"
  },
  introtext: {
    fontSize: calculateFontSize(30.67),
    fontFamily: PoppinsSemibold,
    textAlign: 'center',
    color: '#00AAE5',
  },
  introsub: {
    fontSize: calculateFontSize(17.17),
    fontFamily: PoppinsSemibold,
    textAlign: 'center',
    color:"#000"
  },
  texcontain: {
    marginVertical: height * 0.04,
  },
  buttonconbaor: {
    borderWidth: 1,
    borderColor: '#00AAE5',
    width: width * 0.2,
    height: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginHorizontal: width * 0.03,
  },
  buttonPressed: {
    borderWidth: 1,
    borderColor: '#00AAE5',
    width: width * 0.2,
    height: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00AAE5',
    borderRadius: 7,
    marginHorizontal: width * 0.03,
  },
  buttoncontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height * 0.07,
  },
  logintext: {
    fontSize: calculateFontSize(17.46),
    fontFamily: PoppinsSemibold,
    textAlign: 'center',
    color: '#00AAE5',
    textTransform:'capitalize',
  },
  logintextpress: {
    fontSize: calculateFontSize(17.46),
    fontFamily: PoppinsSemibold,
    textAlign: 'center',
    color: 'black',
    textTransform: 'capitalize',
  },
});
