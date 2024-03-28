import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');
import Images from '../../../uitils/im';
import {calculateFontSize} from '../../../uitils/font';
function RentScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign color={'#000'} size={20} name="left" />
        <Text style={{paddingHorizontal: width * 0.03}}>Rent Booking</Text>
      </View>

      <View style={styles.checkout}>
        <View style={styles.statusBarIphoneX}>
          <TouchableOpacity style={styles.locationsinglebox}>
            <View style={styles.locationimagebox}>
              <Image
                source={Images.locationimage}
                style={styles.locationimage}
              />
            </View>
            <View style={styles.locationcontent}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <AntDesign name="star" size={20} color="#ffbf75" />
                <Text style={styles.stars}>4.8</Text>
                <Text style={styles.starsusers}>(73)</Text>
              </View>
              <Text style={styles.housedetail}>
                Entire Mountain View House in California
              </Text>
              <Text style={styles.houseplace}>Kadaghari, Kathmandu</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingTop: height * 0.02,
                }}>
                <View style={styles.roomspecs}>
                  <Ionicons name="bed" size={22} color="#7c7e87" />
                  <Text style={styles.roomspectext}>2 room</Text>
                </View>
                <View style={styles.roomspecs}>
                  <MaterialCommunityIcons
                    name="home-plus"
                    size={22}
                    color="#7c7e87"
                  />
                  <Text style={styles.roomspectext}>673 m2</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: height * 0.04,
                }}>
                <Text>
                  <Text style={styles.price}>1290</Text>
                  <Text style={styles.slashAndMonth}> / month</Text>
                </Text>
                <TouchableOpacity>
                  <AntDesign name="hearto" size={26} color="#7c7e87" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCFCFC',
    flex: 1,
    paddingVertical: height * 0.04,
  },

  welcomeText: {
    fontSize: calculateFontSize(20),
    color: '#000',
    fontWeight: 'bold',
    paddingHorizontal: width * 0.03,
  },

  locationheader: {
    marginTop: height * 0.05,
    paddingHorizontal: width * 0.03,
  },

  locationhead: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
    marginVertical: height * 0.002,
  },

  locationdesc: {
    fontSize: 15,
    color: '#7c7e87',
  },

  seeallbutton: {
    fontSize: 16,
    color: '#00aae3',
  },

  locationsinglebox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: height * 0.04,
    marginHorizontal: width * 0.01,
  },

  locationimagebox: {
    width: width * 0.4,
    height: height * 0.35,
  },

  locationimage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  locationcontent: {
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.03,
  },

  stars: {
    color: '#000',
    fontSize: 16,
    paddingHorizontal: width * 0.02,
  },

  starsusers: {
    color: '#8d8e96',
    fontSize: 16,
  },

  housedetail: {
    fontSize: 20,
    color: '#000',
    width: width * 0.5,
    paddingTop: height * 0.02,
  },

  houseplace: {
    paddingVertical: height * 0.01,
    fontSize: 15,
    color: '#8d8e96',
  },

  roomspecs: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: width * 0.04,
  },

  roomspectext: {
    color: '#9d9ea6',
    fontSize: 15,
    paddingLeft: width * 0.02,
  },

  price: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },

  slashAndMonth: {
    color: '#7c7e87',
    fontSize: 16,
  },

  suggestionmainsingle: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: height * 0.04,
    marginLeft: width * 0.03,
    width: width * 0.55,
  },

  imageboxsugg: {
    width: '100%',
    height: height * 0.3,
    borderRadius: 20,
  },

  imagesugg: {
    width: '100%',
    height: '100%',
  },

  suggcontent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
  },

  sugghead: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 22,
  },

  suggdesc: {
    color: '#83858f',
    fontSize: 18,
  },

  bottomboxmain: {
    paddingHorizontal: width * 0.03,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: height * 0.09,
  },

  bottomboxcontent: {
    backgroundColor: '#46c7f2',
    height: '100%',
    padding: 10,
    borderRadius: 10,
  },

  bottomboxhead: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    width: width * 0.4,
  },

  bottomboxpara: {
    color: '#e1dcfc',
    fontSize: 15,
    width: width * 0.5,
  },

  bottomboxbutton: {
    marginTop: height * 0.05,
    backgroundColor: '#fff',
    borderRadius: 20,
    width: width * 0.5,
    alignItems: 'center',
  },

  bottomboxbtext: {
    color: '#46c7f2',
    fontSize: 10,
    fontWeight: 'bold',
    paddingVertical: height * 0.01,
  },
});

export default RentScreen;
