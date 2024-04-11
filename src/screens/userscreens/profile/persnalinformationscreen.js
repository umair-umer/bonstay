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
} from 'react-native';
// import thirdProfile from './assests/third-profile.png'
// import verification from './assests/verification.png'
import Images from '../../../uitils/im';

import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { PoppinsBold, PoppinsSemibold, calculateFontSize } from '../../../uitils/font';
const { width, height } = Dimensions.get('window')

const Persnalprofilescreen = ({navigation}) => {
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
        <TouchableOpacity>
          <Text style={styles.editbutton}>Save</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', marginVertical: height * 0.03 }}>
      <Image source={Images.pro} style={styles.profileimage}/>
      </View>
      <View style={styles.maincontent}>
        <View>
          <Text style={styles.content}>About me</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.editbutton}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.maincontent}>
        <View>
          <Text style={styles.content}>Location</Text>
          <Text style={styles.contentinner}>Enter location</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.editbutton}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.maincontent}>
        <View>
          <Text style={styles.content}>Work</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.editbutton}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.maincontent}>
        <View>
          <Text style={styles.content}>Languages</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.editbutton}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
  },

  editbutton: {
    color: '#000',
    fontSize: calculateFontSize(18),

    textDecorationLine: 'underline',
    fontFamily:PoppinsBold
  },

  maincontent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: height * 0.02
  },

  content: {
    color: '#000',
    fontSize: calculateFontSize(18),
  },

  contentinner: {
    color: '#7D7F88',
    fontSize: calculateFontSize(16),
    fontFamily:PoppinsSemibold
  },
  profileimage: {
    width: width*0.35,
    height: height*0.3,
  },

});

export default Persnalprofilescreen;