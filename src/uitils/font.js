import React from 'react';
import { View, Text, Dimensions, PixelRatio, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();
const scaleFactor = width / 375; // Adjust the base width (375) as needed

// Function to calculate the scaled font size
export const calculateFontSize = (baseFontSize) => {
  const scaledFontSize = baseFontSize * scaleFactor;
  return Math.round(scaledFontSize);
};

export const PoppinsRegular = 'Poppins-Regular';
export const PoppinsBold = 'Poppins-Bold';
export const PoppinsSemibold = 'Poppins-SemiBold.';