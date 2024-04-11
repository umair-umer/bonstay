import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {PoppinsBold, calculateFontSize} from '../../uitils/font';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
const Arroeback = ({ title, leftIconName, rightIcons }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <AntDesign name={leftIconName || "left"} style={styles.arrowicon} />
    </TouchableOpacity>
    <Text style={styles.title}>{title || "Edit List"}</Text>
    <View style={styles.iconsContainer}>
      {rightIcons && rightIcons.map((icon, index) => (
        <AntDesign key={index} name={icon.name} style={[styles.arrowicon, icon.style]} />
      ))}
    </View>
  </View>
  );
};

export default Arroeback;

const styles = StyleSheet.create({
  container: {
    // padding:5
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  arrowicon: {
    marginTop: height * 0.03,
    marginBottom: height * 0.01,
    marginHorizontal: width * 0.02,
    color: '#000',
    fontSize: calculateFontSize(20),
  },
  title:{
    color: '#000',
    fontSize: calculateFontSize(12),
    fontFamily:PoppinsBold
  }
});
