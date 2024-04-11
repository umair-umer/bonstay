
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView, Platform ,Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Images from '../../../uitils/im';
import { PoppinsBold, PoppinsRegular, PoppinsSemibold, calculateFontSize } from '../../../uitils/font';
const {width, height} = Dimensions.get('window')
 export const ChatRoom = ({navigation}) => {
  const [inputText, setInputText] = useState('');

  // Dummy data for messages
  const messages = [
    {
      id: '1',
      text: 'Hi! May I know about your property’s neighborhood?',
      isIncoming: false, // message sent by the user
      time: '14:22',
    },
    {
      id: '2',
      text: 'Sure, man! You can check it from the description section of the property.',
      isIncoming: true, // message received
      time: '14:24',
    },
    {
      id: '3',
      text: 'I see, thanks for informing!',
      isIncoming: false, // message sent by the user
      time: '14:28',
    },
    {
      id: '4',
      text: 'Thanks for contacting me!',
      isIncoming: true, // message received
      time: '14:30',
    },
  ];

  const renderMessage = (message, index) => {
    const messageStyle = message.isIncoming ? styles.incomingMessage : styles.outgoingMessage;
    const textStyle = message.isIncoming ? styles.incomingText : styles.outgoingText;
    return (
      <View key={index} style={[styles.messageContainer, messageStyle]}>
        <Text style={textStyle}>{message.text}</Text>
        <Text style={styles.timeText}>{message.time}</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.header}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
        <View style={styles.headerInfo}>
          <Image source={Images.pro} style={styles.avatar} />
          <Text style={styles.headerTitle}>Kari Rasmussen</Text>
        </View>
        <MaterialIcons name="menu" size={24} color="black" />
      </View>
      <ScrollView style={styles.messagesWrapper}>
        {messages.map(renderMessage)}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <Ionicons name="add-circle-outline" size={24} color="#007AFF" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type something"
        />
        <TouchableOpacity>
          <MaterialIcons name="send" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: width*0.13,
    height: height*0.07,
    borderRadius: 20,
  },
  headerTitle: {
    marginLeft: width*0.02,
  fontFamily:PoppinsBold,
  fontSize:calculateFontSize(15),
  color:"black"
  },
  messagesWrapper: {
    flex: 1,
  },
  messageContainer: {
    padding: 10,
    margin: 10,
    borderRadius: 20,
    maxWidth: '70%',
  },
  incomingMessage: {
    backgroundColor: '#E5E5EA',
    alignSelf: 'flex-start',
  },
  outgoingMessage: {
    backgroundColor: '#007AFF',
    alignSelf: 'flex-end',
  },
  incomingText: {
    color: 'black',
    fontFamily:PoppinsRegular
  },
  outgoingText: {
    color: 'white',
    fontFamily:PoppinsRegular
  },
  timeText: {
    alignSelf: 'flex-end',
    color: 'grey',
    fontSize: calculateFontSize(12),
    fontFamily:PoppinsSemibold,
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    marginHorizontal: width*0.06,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 20,
  },
});


