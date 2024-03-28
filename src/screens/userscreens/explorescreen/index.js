import React from 'react'
import { Text, View,StyleSheet } from 'react-native'

const Explorescreen = () => {
  return (
   <View style={styles.container}>
    <Text>Explore</Text>
   </View>
  )
}

export default Explorescreen

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center"
    }
})