import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Images from '../../../uitils/im';
import {PoppinsSemibold, calculateFontSize} from '../../../uitils/font';
import { Arroeback } from '../../../component';
const {width, height} = Dimensions.get('window');
const Explorescreen = () => {
  const locations = [
    {
      id: '1',
      image: Images.locationimage,
      rating: '4.8',
      reviewCount: '73',
      title: 'Entire Mountain View House in California',
      location: 'Kadaghari, Kathmandu',
      rooms: '2',
      size: '673 m2',
      price: '1290',
    },
    {
      id: '2',
      image: Images.locationimage,
      rating: '4.8',
      reviewCount: '73',
      title: 'Entire Mountain View House in California',
      location: 'Kadaghari, Kathmandu',
      rooms: '2',
      size: '673 m2',
      price: '1290',
    },
    {
      id: '3',
      image: Images.locationimage,
      rating: '4.8',
      reviewCount: '73',
      title: 'Entire Mountain View House in California',
      location: 'Kadaghari, Kathmandu',
      rooms: '2',
      size: '673 m2',
      price: '1290',
    },
    {
      id: '4',
      image: Images.locationimage,
      rating: '4.8',
      reviewCount: '73',
      title: 'Entire Mountain View House in California',
      location: 'Kadaghari, Kathmandu',
      rooms: '2',
      size: '673 m2',
      price: '1290',
    },
    // Add more location objects here as needed
  ];
  const LocationItem = ({item}) => {
    const navigation = useNavigation();
    const handlePress = () => {
      // Navigate to 'LocationDetails' screen with the item data
      navigation.navigate('locationdetail', {locationData: item});
    };
    return (
      <TouchableOpacity onPress={handlePress} style={styles.locationsinglebox}>
        <View style={styles.locationimagebox}>
          <Image source={item.image} style={styles.locationimage} />
        </View>
        <View style={styles.locationcontent}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AntDesign name="star" size={20} color="#ffbf75" />
            <Text style={styles.stars}>{item.rating}</Text>
            <Text style={styles.starsusers}>({item.reviewCount})</Text>
          </View>
          <Text style={styles.housedetail}>{item.title}</Text>
          <Text style={styles.houseplace}>{item.location}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: height * 0.02,
            }}>
            <View style={styles.roomspecs}>
              <Ionicons name="bed" size={22} color="#7c7e87" />
              <Text style={styles.roomspectext}>{item.rooms} room</Text>
            </View>
            <View style={styles.roomspecs}>
              <MaterialCommunityIcons
                name="home-plus"
                size={22}
                color="#7c7e87"
              />
              <Text style={styles.roomspectext}>{item.size} m2</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: height * 0.04,
            }}>
            <Text>
              <Text style={styles.price}>${item.price}</Text>
              <Text style={styles.slashAndMonth}>/ month</Text>
            </Text>
            <TouchableOpacity>
              <AntDesign name="hearto" size={26} color="#7c7e87" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
       <Arroeback
          title="My Booking"
          leftIconName="arrowleft"
          // rightIcons={rightIcons}
        />
      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        data={locations} // Assume locations is an array of location objects
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <LocationItem item={item} />}
      />
    </View>
  );
};

export default Explorescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  locationsinglebox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: height * 0.03,
    marginHorizontal: width * 0.01,
  },

  locationimagebox: {
    width: width * 0.4,
    height: height * 0.25,
  },

  locationimage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  locationcontent: {
    // paddingHorizontal: width * 0.03,
    // paddingVertical: height * 0.03,
  },

  stars: {
    color: '#000',
    fontSize: calculateFontSize(16),
    fontFamily: PoppinsSemibold,
    paddingHorizontal: width * 0.02,
  },

  starsusers: {
    color: '#8d8e96',
    fontSize: calculateFontSize(16),
    fontFamily: PoppinsSemibold,
  },

  housedetail: {
    fontSize: calculateFontSize(12),
    fontFamily: PoppinsSemibold,
    color: '#000',
    width: width * 0.5,
    paddingTop: height * 0.01,
  },

  houseplace: {
    paddingVertical: height * 0.01,
    fontSize: calculateFontSize(12),
    fontFamily: PoppinsSemibold,
    color: '#8d8e96',
  },

  roomspecs: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: width * 0.04,
  },

  roomspectext: {
    color: '#9d9ea6',
    fontSize: calculateFontSize(12),
    fontFamily: PoppinsSemibold,
    paddingLeft: width * 0.02,
  },

  price: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: calculateFontSize(12),
    fontFamily: PoppinsSemibold,
  },

  slashAndMonth: {
    color: '#7c7e87',
    fontSize: calculateFontSize(12),
    fontFamily: PoppinsSemibold,
  },
});
