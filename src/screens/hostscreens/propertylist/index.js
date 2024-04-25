import React, {useEffect, useState} from 'react';
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
import {Arroeback, Loader} from '../../../component';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {baseImageUrl} from '../../../services/api';
const {width, height} = Dimensions.get('window');

const Propertylist = () => {
  const token = useSelector(state => state?.auth?.token);
  const [properties, setProperties] = useState([]);
  const[load,setload]=useState()

  useEffect(() => {
    setload(true)
    const fetchProperties = async () => {
      try {

        const response = await axios.get(
          'https://bonstay.democlientlink.com/api/v1/bonstay/host/property/fetch',
          {
            headers: {Authorization: `Bearer ${token}`},
          },
        );
        if (response.data && response.data.success) {
          setload(false)
          setProperties(response.data.data);
          console.log(response.data.data, '0987'); // Ensure this matches the structure of your response
        }
      } catch (error) {
        console.error('Failed to fetch properties:', error);
        setload(false)
      }
    };
    fetchProperties();
  }, [token]);

  const navigation = useNavigation()
  const renderItem = ({item}) => {
      const handlePress = () => {
        // Navigate to 'LocationDetails' screen with the item data
        navigation.navigate('locationdetail', {locationData: item});
      };
   
    const imageUri =
      item.images && item.images.length > 0
        ? `${baseImageUrl}${item.images[0]}`
        : null;
    return (
      <TouchableOpacity onPress={handlePress} style={styles.locationsinglebox}>
        {imageUri ? (
          <View style={styles.locationimagebox}>
            <Image
              source={{uri: imageUri}}
              resizeMode="cover"
              style={styles.locationimage}
            />
          </View>
        ) : (
          // You might want to render a placeholder image or view here
          <Text>No Image Available</Text>
        )}
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
              <Text style={styles.roomspectext}>{item.area}</Text>
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
              <Text style={styles.slashAndMonth}>
                {item.estimation[0].price}/ month
              </Text>
            </Text>
            <TouchableOpacity>
              <AntDesign name="hearto" size={26} color="#7c7e87" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  //   const locations = [
  //     {
  //       id: '1',
  //       image: Images.locationimage,
  //       rating: '4.8',
  //       reviewCount: '73',
  //       title: 'Entire Mountain View House in California',
  //       location: 'Kadaghari, Kathmandu',
  //       rooms: '2',
  //       size: '673 m2',
  //       price: '1290',
  //     },
  //     {
  //       id: '2',
  //       image: Images.locationimage,
  //       rating: '4.8',
  //       reviewCount: '73',
  //       title: 'Entire Mountain View House in California',
  //       location: 'Kadaghari, Kathmandu',
  //       rooms: '2',
  //       size: '673 m2',
  //       price: '1290',
  //     },
  //     {
  //       id: '3',
  //       image: Images.locationimage,
  //       rating: '4.8',
  //       reviewCount: '73',
  //       title: 'Entire Mountain View House in California',
  //       location: 'Kadaghari, Kathmandu',
  //       rooms: '2',
  //       size: '673 m2',
  //       price: '1290',
  //     },
  //     {
  //       id: '4',
  //       image: Images.locationimage,
  //       rating: '4.8',
  //       reviewCount: '73',
  //       title: 'Entire Mountain View House in California',
  //       location: 'Kadaghari, Kathmandu',
  //       rooms: '2',
  //       size: '673 m2',
  //       price: '1290',
  //     },
  //     // Add more location objects here as needed
  //   ];
  //   const LocationItem = ({item}) => {
  //     console.log(item.location,"items");
  //     const navigation = useNavigation();
  //     const handlePress = () => {
  //       // Navigate to 'LocationDetails' screen with the item data
  //       navigation.navigate('locationdetail', {locationData: item});
  //     };
  //     return (
  //       <TouchableOpacity style={styles.locationsinglebox}>
  //         <View style={styles.locationimagebox}>
  //           <Image source={item.image} style={styles.locationimage} />
  //         </View>
  //         <View style={styles.locationcontent}>
  //           <View style={{flexDirection: 'row', alignItems: 'center'}}>
  //             <AntDesign name="star" size={20} color="#ffbf75" />
  //             <Text style={styles.stars}>{item.rating}</Text>
  //             <Text style={styles.starsusers}>({item.reviewCount})</Text>
  //           </View>
  //           <Text style={styles.housedetail}>{item.title}</Text>
  //           <Text style={styles.houseplace}>{item.location}</Text>
  //           <View
  //             style={{
  //               flexDirection: 'row',
  //               alignItems: 'center',
  //               paddingTop: height * 0.02,
  //             }}>
  //             <View style={styles.roomspecs}>
  //               <Ionicons name="bed" size={22} color="#7c7e87" />
  //               <Text style={styles.roomspectext}>{item.rooms} room</Text>
  //             </View>
  //             <View style={styles.roomspecs}>
  //               <MaterialCommunityIcons
  //                 name="home-plus"
  //                 size={22}
  //                 color="#7c7e87"
  //               />
  //               <Text style={styles.roomspectext}>{item.size} m2</Text>
  //             </View>
  //           </View>
  //           <View
  //             style={{
  //               flexDirection: 'row',
  //               justifyContent: 'space-between',
  //               paddingTop: height * 0.04,
  //             }}>
  //             <Text>
  //               <Text style={styles.price}>${item.price}</Text>
  //               <Text style={styles.slashAndMonth}>/ month</Text>
  //             </Text>
  //             <TouchableOpacity>
  //               <AntDesign name="hearto" size={26} color="#7c7e87" />
  //             </TouchableOpacity>
  //           </View>
  //         </View>
  //       </TouchableOpacity>
  //     );
  //   };
  return (
    <>
    {load ? <Loader/>:  <View style={styles.container}>
      <Arroeback
        title="My properties"
        leftIconName="arrowleft"
        // rightIcons={rightIcons}
      />
      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        data={properties}
        keyExtractor={item => item._id}
        renderItem={renderItem}
      />
    </View>}
    </>
  
  );
};

export default Propertylist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  locationsinglebox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: height * 0.03,
    marginHorizontal: width * 0.01,
    padding:5,

  },

  locationimagebox: {
    width: width * 0.4,
    height: height * 0.23,
    borderRadius:15,
    overflow: 'hidden',
  },

  locationimage: {
    width: '100%',
    height: '100%',
    // resizeMode: 'contain',
  },

  locationcontent: {
    paddingHorizontal: width * 0.03,
    // paddingVertical: height * 0.01,
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
