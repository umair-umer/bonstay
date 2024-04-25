import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
// import Profile from './assests/girl-profile.png'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Images from '../../../uitils/im';
import {
  PoppinsBold,
  PoppinsSemibold,
  calculateFontSize,
} from '../../../uitils/font';
const {width, height} = Dimensions.get('window');

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{paddingBottom: 100}}>
          <View style={styles.topheader}>
            <View style={{paddingLeft: width * 0.03}}>
              <Image source={Images.pro} style={styles.profileimage} />
            </View>
            <View style={{paddingHorizontal: width * 0.06}}>
              <Text style={styles.profileHead}>Lucy Bond</Text>
              <Text style={styles.profilemail}>lucybond08@gmail.com</Text>
              <TouchableOpacity>
                <Text>Show Profile</Text>
              </TouchableOpacity>
            </View>
            <View style={{paddingLeft: width * 0.1}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('VerificationProfile');
                }}>
                <Entypo name="chevron-right" size={26} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.contentmain}>
            <View style={styles.contenthead}>
              <Text style={styles.contentHead}>Account settings</Text>
            </View>
            <View>
              <View style={styles.topheader}>
                <View style={{paddingLeft: width * 0.03}}>
                  <FontAwesome name="user" size={30} color="black" />
                </View>
                <View style={{paddingHorizontal: width * 0.06}}>
                  <Text style={styles.contentinner}>Personal information</Text>
                </View>
                <View style={{paddingLeft: width * 0.16}}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('personalinformationscreeen')
                    }>
                    <Entypo name="chevron-right" size={26} color="#000" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.topheader}>
                <View style={{paddingLeft: width * 0.02}}>
                  <MaterialIcons name="payment" size={30} color="black" />
                </View>
                <View style={{paddingHorizontal: width * 0.05}}>
                  <Text style={styles.contentinner}>Payments & payouts</Text>
                </View>
                <View style={{paddingLeft: width * 0.18}}>
                  <TouchableOpacity onPress={()=>navigation.navigate("payoutscreen")}>
                    <Entypo name="chevron-right" size={26} color="#000" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.topheader}>
                <View style={{paddingLeft: width * 0.02}}>
                  <Ionicons name="settings-sharp" size={30} color="black" />
                </View>
                <View style={{paddingHorizontal: width * 0.05}}>
                  <Text style={styles.contentinner}>Settings</Text>
                </View>
                <View style={{paddingLeft: width * 0.4}}>
                  <TouchableOpacity>
                    <Entypo name="chevron-right" size={26} color="#000" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.topheader}>
                <View style={{paddingLeft: width * 0.03}}>
                  <MaterialCommunityIcons
                    name="comment-question"
                    size={30}
                    color="black"
                  />
                </View>
                <View style={{paddingHorizontal: width * 0.06}}>
                  <Text style={styles.contentinner}>Get help</Text>
                </View>
                <View style={{paddingLeft: width * 0.4}}>
                  <TouchableOpacity>
                    <Entypo name="chevron-right" size={26} color="#000" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.contentmain}>
            <View style={styles.contenthead}>
              <Text style={styles.contentHead}>Hosting</Text>
            </View>
            <View>
              <View style={styles.topheader}>
                <View style={{paddingLeft: width * 0.03}}>
                  <FontAwesome name="user" size={30} color="black" />
                </View>
                <View style={{paddingHorizontal: width * 0.06}}>
                  <Text style={styles.contentinner}>List Your Space</Text>
                </View>
                <View style={{paddingLeft: width * 0.27}}>
                  <TouchableOpacity onPress={()=>navigation.navigate("propertylist")}>
                    <Entypo name="chevron-right" size={26} color="#000" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.topheader}>
                <View style={{paddingLeft: width * 0.03}}>
                  <FontAwesome name="user" size={30} color="black" />
                </View>
                <View style={{paddingHorizontal: width * 0.06}}>
                  <Text style={styles.contentinner}>Host an Experience</Text>
                </View>
                <View style={{paddingLeft: width * 0.2}}>
                  <TouchableOpacity>
                    <Entypo name="chevron-right" size={26} color="#000" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.contentmain}>
            <View style={styles.contenthead}>
              <Text style={styles.contentHead}>Referrals & Credits</Text>
            </View>
            <View>
              <View style={styles.topheader}>
                <View style={{paddingLeft: width * 0.03}}>
                  <FontAwesome name="user" size={30} color="black" />
                </View>
                <View style={{paddingHorizontal: width * 0.06}}>
                  <Text style={styles.contentinner}>List Your Space</Text>
                </View>
                <View style={{paddingLeft: width * 0.27}}>
                  <TouchableOpacity>
                    <Entypo name="chevron-right" size={26} color="#000" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topheader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.02,
  },
  profileimage: {
    width: 80,
    height: 80,
  },
  profileHead: {
    fontSize: calculateFontSize(20),
    color: '#000',
    fontFamily: PoppinsBold,
  },
  profilemail: {
    fontSize: calculateFontSize(12),
    color: '#000',
    fontFamily: PoppinsSemibold,
  },
  profileMail: {
    fontSize: 16,
  },
  contentmain: {
    paddingHorizontal: width * 0.06,
  },
  contenthead: {
    borderBottomWidth: 1,
    borderBottomColor: '#8A8A8A',
    paddingVertical: height * 0.02,
  },
  contentHead: {
    fontSize: 26,
    color: '#000',
    fontWeight: '500',
  },
  contentinner: {
    fontSize: 18,
    color: '#000',
  },
});
