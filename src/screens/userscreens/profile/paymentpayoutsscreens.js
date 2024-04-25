import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
// import background from './assests/background.png'
// import card from './assests/card.png'
// import verification from './assests/verification.png'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import jestConfig from './jest.config';
const { width, height } = Dimensions.get('window')

export const PaymentPayout = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
         <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: height * 0.02 }}>
      <TouchableOpacity onPress={()=>navigation.goBack()} >
          <Entypo
            name='chevron-left'
            size={26}
            color='#000'
          />
        </TouchableOpacity>
       
      </View>
      <View style={styles.contentmain}>
     
        <View style={styles.contenthead}>
          <Text style={styles.contentHead}>Traveling</Text>
        </View>
        <View>
          <View style={styles.topheader}>
            <View style={{ paddingLeft: width * 0.03 }}>
              <FontAwesome
                name='user'
                size={30}
                color='black'
              />
            </View>
            <View style={{ paddingHorizontal: width * 0.06 }}>
              <Text style={styles.contentinner}>Payment methods</Text>
            </View>
            <View style={{ paddingLeft: width * 0.16 }}>
              <TouchableOpacity>
                <Entypo
                  name='chevron-right'
                  size={26}
                  color='#000'
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.topheader}>
            <View style={{ paddingLeft: width * 0.02 }}>
              <MaterialIcons
                name='payment'
                size={30}
                color='black'
              />
            </View>
            <View style={{ paddingHorizontal: width * 0.05 }}>
              <Text style={styles.contentinner}>Transaction History</Text>
            </View>
            <View style={{ paddingLeft: width * 0.18 }}>
              <TouchableOpacity>
                <Entypo
                  name='chevron-right'
                  size={26}
                  color='#000'
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.topheader}>
            <View style={{ paddingLeft: width * 0.02 }}>
              <Ionicons
                name='settings-sharp'
                size={30}
                color='black'
              />
            </View>
            <View style={{ paddingHorizontal: width * 0.05 }}>
              <Text style={styles.contentinner}>Credits & Coupons</Text>
            </View>
            <View style={{ paddingLeft: width * 0.2}}>
              <TouchableOpacity>
                <Entypo
                  name='chevron-right'
                  size={26}
                  color='#000'
                />
              </TouchableOpacity>
            </View>
            <View style={{ paddingLeft: width * 0.10 }}>
              <TouchableOpacity>
                <Entypo
                  name='chevron-right'
                  size={26}
                  color='#000'
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 15,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headertext: {
    color: '#000',
    fontSize: 22,
    fontWeight: '500',
    paddingLeft: width * 0.03,
  },

  paymenthead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  paymentwith: {
    fontSize: 22,
    color: '#000',
    fontWeight: '500'
  },

  editbutton: {
    color: '#000',
    fontSize: 18,
    textDecorationLine: 'underline',
  },

  couponbutton: {
    color: '#000',
    fontSize: 20,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },

  contenthead: {
    fontSize: 24,
    color: '#000',
    fontWeight: '500',
    marginVertical: height * 0.01,
  },

  contentpara: {
    fontSize: 15,
    color: '#000'
  },

  topheader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.03,
  },

  contentmain: {
    paddingHorizontal: width * 0.06,
  },

  contenthead: {
    borderBottomWidth: 1,
    borderBottomColor: '#8A8A8A',
    paddingVertical: height * 0.02,
  },

  contentHead: {
    fontSize: 26,
    color: '#000',
    fontWeight: '500'
  },

  contentinner: {
    fontSize: 18,
    color: '#000'
  },

  bluecolor: {
    color: '#00AAE5'
  },

  dot: {
    backgroundColor: '#000',
    borderRadius: 50,
    width: width * 0.02,
    height: height * 0.01,
  },

});

