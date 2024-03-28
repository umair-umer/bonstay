import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CompanyStack from './CompanyStack';
import UserStack from './UserStack';
import {ONboardScreen,ChooserScreen, LoginScreen, SignUp,} from '../screens/authscreens';
import { useSelector } from 'react-redux';
const Stack = createStackNavigator();
const AppNavigator = () => {
  // const authData = useSelector((state) => state.auth);
  const token = useSelector((state) => state?.auth?.token);
  const role = useSelector((state) => state?.auth?.data?.role);
// console.log('====================================');
// console.log(role);
// console.log('====================================');



  return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown: false}}>
    {!token ?(
      <>
      <Stack.Screen name="onboard" component={ONboardScreen} />
      <Stack.Screen name="chooserscreen" component={ChooserScreen} />
      <Stack.Screen name="loginscreen" component={LoginScreen} />
      <Stack.Screen name="signup" component={SignUp} />
      </>
    )
    
    : role === 'tenant' ? (
      // If token exists and role is 'user', navigate to UserStack
      <Stack.Screen name="userhome" component={UserStack} initialParams={{ role: role }} />
    ) : (
      // If token exists and role is 'host', navigate to CompanyStack
      <Stack.Screen name="companystack" component={CompanyStack} initialParams={{ role: role }} />
    )

    }
         </Stack.Navigator>

    </NavigationContainer>
  );
};

export default AppNavigator;
