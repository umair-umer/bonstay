import React, { useEffect } from 'react'
import { View ,Text} from 'react-native'
import AppNavigator from './src/stacksnavigation/navigation'
import SplashScreen from 'react-native-splash-screen';

const App = () => {
   useEffect(() => { SplashScreen.hide(); },[])
  return (
    <>
    <AppNavigator/>
    </>
  )
}

export default App
