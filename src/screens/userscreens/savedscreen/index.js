import React from 'react'
import { Text, View,StyleSheet } from 'react-native'

const SavedScreen = () => {
  return (
   <View style={styles.container}>
    <Text>SavedScreen</Text>
   </View>
  )
}

export default SavedScreen
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center"
    }
})