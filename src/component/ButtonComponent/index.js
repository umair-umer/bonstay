import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const CustomButton = ({ onPress, title,backgroundColor = '#00AAE5' ,color="#fff"  }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button,{ backgroundColor: backgroundColor }]}>
      <Text style={[styles.text,{color:color}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF', // Adjust the color to match your design
    borderRadius: 30, // Adjust border radius to match your design
    width: width * 0.9, // Adjust width based on your design or leave as a percentage of screen width
    height: 50, // Adjust height based on your design
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)', // Adjust shadow color to match your design
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 5, // this is for Android shadow effect
  },
  text: {
    color: 'white', // Adjust text color to match your design
    fontSize: 18, // Adjust font size to match your design
    fontWeight: '600', // Adjust font weight to match your design
  },
});

export default CustomButton;
