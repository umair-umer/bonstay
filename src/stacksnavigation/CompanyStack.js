import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Dimensions} from 'react-native';
import ProfileScreen from '../screens/userscreens/profile';
import Chatscreen from '../screens/userscreens/chatscreen';
import Explorescreen from '../screens/userscreens/explorescreen';
import SavedScreen from '../screens/userscreens/savedscreen';
import LocationDetails from '../screens/userscreens/LocationDetails';
import RentScreen from '../screens/userscreens/Rentscreen';
import HostHome from '../screens/hostscreens';
import Verifiedprofile from '../screens/userscreens/profile/profileverification';
import Persnalprofilescreen from '../screens/userscreens/profile/persnalinformationscreen';
import { ChatRoom, Nofifictionchatbox } from '../screens/chatscreens';
const {width, height} = Dimensions.get('window');


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const UserStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Userhost" component={UserTAb} />
    <Stack.Screen name="chatroom" component={ChatRoom} />
  </Stack.Navigator>
);

export default UserStack;

const Profilescreens = () => {
  return ( // Add the return statement here
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profilescreen" component={ProfileScreen} />
      <Stack.Screen name="VerificationProfile" component={Verifiedprofile} />
      <Stack.Screen name="personalinformationscreeen" component={Persnalprofilescreen} />
    </Stack.Navigator>
  );
};
const Chatparent = () => {
  return ( // Add the return statement here
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Notifichat" component={Nofifictionchatbox} />
    
    </Stack.Navigator>
  );
};

function UserTAb() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          flexDirection: 'column',
          // bottom: 20,
          // width: width * 0.95,
          height: height * 0.1,
          // borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: width * 0.07,
          paddingBottom: height * 0.03,
          paddingTop: height * 0.01,
          // backgroundColor: 'rgba(0, 0, 0, 0.6)',
          // left: width * 0.025,
          // borderColor: '#0DFFE8',
          backgroundColor: '#fff',
          // borderWidth: 2,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
        name="Homeho"
        component={HostHome}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="explore" size={size} color={color} />
          ),
        }}
        name="Explore"
        component={Explorescreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="chat-bubble" size={size} color={color} />
          ),
        }}
        name="Chat"
        component={Chatparent}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="heart" size={size} color={color} />
          ),
        }}
        name="saved"
        component={SavedScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
        name="Profile"
        component={Profilescreens}
      />
    </Tab.Navigator>
  );
}
