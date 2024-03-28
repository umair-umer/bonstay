import React from 'react'
import { Text, View ,StyleSheet} from 'react-native'

const Chatscreen = () => {
  return (
   <View style={styles.container}>
    <Text>Chatscreen</Text>
   </View>
  )
}

export default Chatscreen
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center"
    }
})