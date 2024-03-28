import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Dimensions
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('window');

import {Arroeback} from '../../../component';
const HostHome = () => {
  const rightIcons = [
    {name: 'sharealt', style: {marginRight: 10}},
    // { name: 'setting', style: { marginRight: 10 } },
  ];
  return (
    <SafeAreaView style={styles.container}>
       <StatusBar barStyle="dark-content" />
      <Arroeback
        title="Edit"
        leftIconName="arrowleft"
        rightIcons={rightIcons}
      />
      <View style={styles.blubg}/>
      

  
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blubg:{
    width:width,
    height:height*0.3,
    backgroundColor:"#00AAE5",
    position:"absolute",
    zIndex:-99999
  }
});

export default HostHome;
