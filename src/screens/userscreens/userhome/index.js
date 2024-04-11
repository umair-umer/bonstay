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
const {width, height} = Dimensions.get('window');

const UserHome = () => {
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
  const TOpratedlocationlocations = [
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
    // Add more location objects here as needed
  ];

  const TopratedLocationItem = ({item}) => (
    <View style={styles.locationsinglebox}>
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
    </View>
  );

  const suggestions = [
    {
      id: '1',
      image: Images.thirdone,
      title: 'Bali, Indonesia',
      description: '345 rented props',
    },
    {
      id: '2',
      image: Images.fourthone,
      title: 'Yogyakarta, Ind...',
      description: '290 rented props',
    },
    {
      id: '3',
      image: Images.thirdone,
      title: 'Yogyakarta, Ind...',
      description: '290 rented props',
    },
    {
      id: '4',
      image: Images.fourthone,
      title: 'Yogyakarta, Ind...',
      description: '290 rented props',
    },
    // Add more suggestions as needed
  ];

  const SuggestionItem = ({item}) => (
    <View style={styles.suggestionmainsingle}>
      <View style={styles.imageboxsugg}>
        <Image source={item.image} style={styles.imagesugg} />
      </View>
      <View style={styles.suggcontent}>
        <Text style={styles.sugghead}>{item.title}</Text>
        <Text style={styles.suggdesc}>{item.description}</Text>
      </View>
    </View>
  );
  const bottomBoxes = [
    {
      id: '1',
      title: 'Want to host your own place?',
      description: 'Earn passive income by renting or selling your properties!',
      buttonText: 'Become a Host',
      image: Images.purplehome,
    },
    {
      id: '2',
      title: 'Want to host your own place?',
      description: 'Earn passive income by renting or selling your properties!',
      buttonText: 'Become a Host',
      image: Images.purplehome,
    },
    // Add more bottom boxes if necessary
  ];

  const BottomBox = ({data}) => (
    <View style={styles.bottomboxmain}>
      <View style={styles.bottomboxcontent}>
        <Text style={styles.bottomboxhead}>{data.title}</Text>
        <Text style={styles.bottomboxpara}>{data.description}</Text>
        <TouchableOpacity style={styles.bottomboxbutton}>
          <Text style={styles.bottomboxbtext}>{data.buttonText}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomboximage}>
        <Image source={data.image} />
      </View>
    </View>
  );
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.welcomeText}>Welcome to Bonstay</Text>
          <View style={styles.locationheader}>
            <Text style={styles.locationhead}>Near your location</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.locationdesc}>
                243 properties in Surabaya
              </Text>
              <TouchableOpacity>
                <Text style={styles.seeallbutton}>See all</Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={locations} // Assume locations is an array of location objects
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <LocationItem item={item} />}
          />
          <View style={styles.locationheader}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.locationhead}>Top rated</Text>
              <TouchableOpacity>
                <Text style={styles.seeallbutton}>See all</Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={TOpratedlocationlocations} // Assume locations is an array of location objects
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <TopratedLocationItem item={item} />}
          />
          <View style={styles.locationheader}>
            <View>
              <Text style={styles.locationhead}>Suggestion for you ....</Text>
            </View>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={suggestions}
            keyExtractor={item => item.id}
            renderItem={({item}) => <SuggestionItem item={item} />}
          />

          <ScrollView horizontal style={{flexDirection: 'row'}}>
            {bottomBoxes.map(box => (
              <BottomBox key={box.id} data={box} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserHome;
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
    fontFamily:PoppinsSemibold,
    paddingHorizontal: width * 0.02,
  },

  starsusers: {
    color: '#8d8e96',
    fontSize: calculateFontSize(16),
    fontFamily:PoppinsSemibold,
  },

  housedetail: {
    fontSize: calculateFontSize(12),
    fontFamily:PoppinsSemibold,
    color: '#000',
    width: width * 0.5,
    paddingTop: height * 0.01,
  },

  houseplace: {
    paddingVertical: height * 0.01,
    fontSize: calculateFontSize(12),
    fontFamily:PoppinsSemibold,
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
    fontFamily:PoppinsSemibold,
    paddingLeft: width * 0.02,
  },

  price: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: calculateFontSize(12),
    fontFamily:PoppinsSemibold,
  },

  slashAndMonth: {
    color: '#7c7e87',
    fontSize: calculateFontSize(12),
    fontFamily:PoppinsSemibold,
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

  bottomboximage: {},
});
