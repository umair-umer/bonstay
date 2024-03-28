import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { PoppinsSemibold, calculateFontSize } from '../../uitils/font';
const {width, height} = Dimensions.get('window');
const Inputtext = ({Username,Iconname,placeholder,onChangeText,value,errorMessage, showError,secureTextEntry}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
    setShowErrorMessage(false); // Hide error message when the user focuses on the input
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {
      setShowErrorMessage(true); // Show error message when the user blurs an empty input
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{Username}</Text>
      <View style={[styles.inputSection, isFocused && styles.inputSectionFocused]}>
        <Icon name={Iconname}
         size={20}
         color={isFocused ? '#007AFF' : '#000'}
        style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#000"}
          keyboardType="email-address"
          autoCapitalize='none'
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={secureTextEntry}
        />
      </View>
      {showError && errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputSection: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#blue', // Replace 'blue' with the actual color code from your design
        borderRadius: 200,
        backgroundColor: '#ffffff', // This is a placeholder, set background color as per your design
      },
      inputIcon: {
        padding: 10,
      },
      label: {
        alignSelf: 'flex-start',
        marginLeft: width*0.02, // Adjust based on your design
        marginBottom: height*0.01,
        color: '#000', // Replace with the color used in your design
        fontSize: calculateFontSize(15),
        fontFamily:PoppinsSemibold
      },
      input: {
        height: height*0.090,
        flex: 1,
        padding: 10,
        color:"#000"
      },
      inputSectionFocused: {
        borderColor: '#007AFF', // Color when input is focused
      },
      errorMessage: {
        marginTop: 5,
        color: 'red',
        fontSize: calculateFontSize(12),
        fontFamily: PoppinsSemibold,
      },
});

export default Inputtext;
