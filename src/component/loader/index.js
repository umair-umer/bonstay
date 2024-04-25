import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Dimensions,SafeAreaView } from 'react-native';
const { width, height } = Dimensions.get('window');

const Loader = () => {
  const rotationAnim = useRef(new Animated.Value(0)).current; // Initial value for rotation
  const scaleAnim = useRef(new Animated.Value(1)).current; // Initial value for scaling

  useEffect(() => {
    const rotate = Animated.loop(
      Animated.timing(rotationAnim, {
        toValue: 1,
        duration: 2400,
        useNativeDriver: true,
      })
    );

    const scale = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 0.384, // 2.4em / 6.25em
          duration: 1600,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    );

    rotate.start();
    scale.start();

    return () => {
      rotate.stop();
      scale.stop();
    };
  }, [rotationAnim, scaleAnim]);

  const spin = rotationAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.loader,
          {
            transform: [{ rotate: spin }, { scale: scaleAnim }],
          },
        ]}
      >
        {/* Central dot (flashing effect not implemented) */}
        <View style={[styles.dot, styles.white]} />
        {/* Colored dots */}
        <View style={[styles.dot, { backgroundColor: '#FF4444' }]} />
        <View style={[styles.dot, { backgroundColor: '#FFBB33' }]} />
        <View style={[styles.dot, { backgroundColor: '#99CC00' }]} />
        <View style={[styles.dot, { backgroundColor: '#33B5E5' }]} />
      </Animated.View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',

  },
  loader: {
    width: 100, // Approximate conversion of em to pixels
    height: 100,
    position: 'absolute',
  },
  dot: {
    width: 38.4, // Approximate conversion of em to pixels
    height: 38.4,
    borderRadius: 19.2,
    position: 'absolute',
  },
  white: {
    backgroundColor: 'white',
    // Flashing effect needs to be implemented
  },
});

export default Loader;



// import React from 'react'
// import { SafeAreaView ,View,Text} from 'react-native'

// export const Loader = () => {
//   return (
//    <SafeAreaView>
//     <View>
//      <Text>loader</Text>
//     </View>
//    </SafeAreaView>
//   )
// }
