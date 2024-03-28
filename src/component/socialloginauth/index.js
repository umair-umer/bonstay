import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet,Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const SignInWithSocial = ({ onPress,iconname ,Title,backgroundColor="#000",color="#000"}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.appleButton,{backgroundColor:backgroundColor}]}>
      <FontAwesome name={iconname} size={24} color="#fff" style={[styles.iconStyle,{color:color}]} />
      <Text style={[styles.appleButtonText,{color:color}]}>{Title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appleButton: {
    flexDirection: 'row',
    backgroundColor: '#000',
    borderRadius: 22,
    paddingVertical: height*0.015,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
    width: '90%', // or use a fixed width based on your design
  },
  iconStyle: {
    marginRight: 10,
  },
  appleButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  // ... other styles
});

export default SignInWithSocial;
