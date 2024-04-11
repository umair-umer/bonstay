import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Images from '../../../uitils/im';
import { PoppinsBold, PoppinsSemibold, calculateFontSize } from '../../../uitils/font';
import {Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
const messagesData = [
  {
    id: '1',
    name: 'Kari Rasmussen',
    message: 'Thanks for contacting me!',
    time: '15:23',
    unread: true,
    avatar: Images.pro
  },
  {
    id: '2',
    name: 'Anita Cruz',
    message: 'Your payment was accepted.',
    time: 'Yesterday',
    unread: false,
    avatar: Images.pro
  },
  {
    id: '3',
    name: 'Anita Cruz',
    message: 'Your payment was accepted.',
    time: 'Yesterday',
    unread: false,
    avatar: Images.pro
  },
  {
    id: '4',
    name: 'Anita Cruz',
    message: 'Your payment was accepted.',
    time: 'Yesterday',
    unread: false,
    avatar: Images.pro
  },
  {
    id: '5',
    name: 'Anita Cruz',
    message: 'Your payment was accepted.',
    time: 'Yesterday',
    unread: true,
    avatar: Images.pro
  },
  {
    id: '6',
    name: 'Anita Cruz',
    message: 'Your payment was accepted.',
    time: 'Yesterday',
    unread: false,
    avatar: Images.pro
  },
  {
    id: '7',
    name: 'Anita Cruz',
    message: 'Your payment was accepted.',
    time: 'Yesterday',
    unread: true,
    avatar: Images.pro
  },
  // ... other messages
];

const MessageItem = ({ name, message, time, unread, avatar}) => {
    const navigation=useNavigation()
    return(
  <TouchableOpacity style={styles.messageItem} onPress={()=>navigation.navigate('chatroom')}>
    <Image source={avatar} style={styles.avatar} />
    <View style={styles.messageContent}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
    <View style={styles.messageMeta}>
      <Text style={styles.time}>{time}</Text>
      {unread && <View style={styles.unreadBadge}><Text style={styles.unreadBadgeText}>2</Text></View>}
    </View>
  </TouchableOpacity>
)};

 export const Nofifictionchatbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Inbox</Text>
      <View style={styles.tabContainer}>
        <Text style={styles.tabActive}>Messages</Text>
        <Text style={styles.tab}>Notifications</Text>
      </View>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={messagesData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <MessageItem {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: calculateFontSize(20),
    fontFamily:PoppinsBold,
    color:"#000",
    padding: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
  },
  tab: {
    fontSize: calculateFontSize(20),
    fontFamily:PoppinsBold,
    color: 'grey',
  },
  tabActive: {
    fontSize: calculateFontSize(20),
    fontFamily:PoppinsBold,
    color: 'black',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  messageItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    alignItems: 'center',
  },
  avatar: {
    width:width*0.09 ,
    height: height*0.07,
    borderRadius: 20,
  },
  messageContent: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: calculateFontSize(16),
    fontFamily:PoppinsBold,
    color:"black"
  },
  message: {
    fontSize: calculateFontSize(16),
    fontFamily:PoppinsSemibold,
    color: 'grey',
  },
  messageMeta: {
    alignItems: 'flex-end',
  },
  time: {
    fontSize: calculateFontSize(13),
    fontFamily:PoppinsSemibold,
    color: 'grey',
  },
  unreadBadge: {
    backgroundColor: 'blue',
    borderRadius: 100,
    paddingHorizontal:width*0.03,
    paddingVertical:height*0.009,
    marginTop: 5,
  },
  unreadBadgeText: {
    color: 'white',
    fontSize: 12,
  },
});


