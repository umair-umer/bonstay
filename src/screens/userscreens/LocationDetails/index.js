import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Images from '../../../uitils/im';
import {
  PoppinsBold,
  PoppinsRegular,
  PoppinsSemibold,
  calculateFontSize,
} from '../../../uitils/font';
import {baseImageUrl} from '../../../services/api';
const {width, height} = Dimensions.get('window');
function LocationDetails({navigation, route}) {
  const {
    title,
    location,
    rooms,
    area,
    facilities,
    lat,
    lng,
    nearByLocations,
    description,
    estimation,
    images,
  } = route?.params.locationData;
  console.log('====================================');
  console.log(route.params);
  console.log('====================================');

  const latitude = parseFloat(lat);
  const longitude = parseFloat(lng);
  const [markerCoords, setMarkerCoords] = useState({
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const FacilityItem = ({icon, name, distance}) => {
    return (
      <View style={styles.facilityItem}>
        <View style={styles.iconContainer}>{icon}</View>
        <View style={styles.infoContainerhost}>
          <Text style={styles.facilityName}>{name}</Text>
          <Text style={styles.facilityDistance}>{distance}</Text>
        </View>
      </View>
    );
  };
  const TestimonialCard = ({name, testimonial, rating}) => {
    // Generate star ratings
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <AntDesign
          key={i}
          name={i < rating ? 'star' : 'staro'}
          size={24}
          color="#00AAE5"
          style={styles.star}
        />,
      );
    }

    return (
      <View style={styles.testimonialCard}>
        <Image
          source={{uri: 'https://via.placeholder.com/150'}} // Replace with actual image uri
          style={styles.avatar}
        />
        <View style={styles.testimonialContent}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.stars}>{stars}</View>
          <Text style={styles.testimonialText}>{testimonial}</Text>
          <Text style={styles.readMore}>Read more</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <StatusBar barStyle="light-content" />

          <View style={styles.arrowback}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="keyboard-arrow-left"
                size={40}
                color="black"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.imageContainer}>
            <FlatList
              horizontal
              data={images}
              renderItem={({item, index}) => {
                console.log(`${baseImageUrl}${item}`, 'flatlist');
                return (
                  <View style={styles.imageWrapper}>
                    <Image
                      key={index}
                      source={{uri: `${baseImageUrl}${item}`}} // Replace with the URI of the image
                      style={styles.propertyImage}
                    />
                  </View>
                );
              }}
              keyExtractor={item => item}
              showsHorizontalScrollIndicator={false}
            />
            {/* If you want to keep the pagination text, you need to manage the state to update the current index */}
            <Text style={styles.paginationText}>1/{images.length}</Text>
          </View>

          <TouchableOpacity style={styles.watchButton}>
            <Text style={styles.watchButtonText}>Watch 360°</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.container2}>
            <View style={styles.headername}>
              <Text style={styles.title}>{title}</Text>
              <TouchableOpacity>
                <FontAwesome name="heart-o" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <Text style={styles.subTitle}>491 Burgoyne Street</Text>
            <Text style={styles.subTitle}>{location}</Text>
            <View style={styles.maindeatlcon}>
              <View style={styles.dtails}>
                <AntDesign name="star" style={styles.icons} />
                <Text style={styles.detailtex}>4.8 (73 reviews)</Text>
              </View>
              <View style={styles.dtails}>
                <AntDesign name="home" style={styles.icons} />
                <Text style={styles.detailtex}>{rooms} room</Text>
              </View>
            </View>
            <View style={styles.maindeatlcon}>
              <View style={styles.dtails}>
                <Ionicons name="location-sharp" style={styles.icons} />
                <Text style={styles.detailtex}>{location}</Text>
              </View>
              <View style={styles.dtails}>
                <MaterialCommunityIcons
                  name="map-marker-distance"
                  style={styles.icons}
                />
                <Text style={styles.detailtex}>{area}</Text>
              </View>
            </View>
            <View style={styles.separator} />
          </View>
          <View style={styles.hostdeatil}>
            <View style={styles.hostinfodetail}>
              <View style={styles.avatarimag}>
                <Image
                  source={Images.avatr}
                  style={{width: '100%', height: '100%'}}
                />
              </View>
              <View style={styles.infoContainerhost}>
                <Text style={styles.name}>Louise Vuitton</Text>
                <Text style={styles.role}>Property owner</Text>
              </View>
            </View>
            <View style={styles.contcontainer}>
              <MaterialIcons
                name="chat"
                style={[styles.icons, {fontSize: calculateFontSize(20)}]}
              />
              <Ionicons
                name="call"
                style={[styles.icons, {fontSize: calculateFontSize(20)}]}
              />
            </View>
          </View>
          <View style={styles.facilitiescontainer}>
            <View style={styles.headerfailities}>
              <Text style={styles.title}>Home facilities</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>See all facilities</Text>
              </TouchableOpacity>
            </View>
            <View>
              {facilities.map((facility, index) => (
                <View key={index} style={styles.facility}>
                  <FontAwesome name="dot-circle-o" size={24} color="#00AAE5" />
                  <Text style={styles.facilityText}>{facility}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.mapimagecontainer}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              onLayout={() =>
                setMarkerCoords({
                  latitude: latitude,
                  longitude: longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                })
              }
              region={markerCoords}>
              <Marker coordinate={markerCoords} title={location} />
            </MapView>
          </View>
          <View style={styles.containerfacilites}>
            <Text style={styles.headernearfacilites}>
              Nearest public facilities
            </Text>
            <View style={styles.facilityList}>
              {nearByLocations.map((near, index) => (
                <FacilityItem
                  key={index} // Make sure key is unique
                  icon={
                    <FontAwesome
                      name="dot-circle-o" // This should be dynamic based on the type of facility
                      size={24}
                      color="black"
                    />
                  }
                  name={near.name}
                  distance={`${near.distance}m`}
                />
              ))}
            </View>
          </View>
          <View style={styles.card}>
            <Text style={[styles.headertext, styles.headname]}>
              About location's neighborhood
            </Text>
            <Text style={styles.paragraph}>{description}</Text>

            <View style={styles.footer}>
              <Text style={styles.footerText}>Average living cost</Text>
              <Text
                style={
                  styles.price
                }>{`${estimation[0].averageCost}$/month`}</Text>
            </View>
          </View>
        </View>
        <View style={{padding: 16}}>
          <Text style={styles.header}>Testimonials</Text>
          <TestimonialCard
            name="Sans Jose"
            rating={4}
            testimonial="My wife and I had a dream of downsizing from our house in Cape Elizabeth into a small condo closer to where we work and play in Portland. David and his skilled team helped make that dream a reality. The sale went smoothly, and we just closed on an ideal new place we're excited to call home..."
          />
          <TestimonialCard
            name="Anita Cruz"
            rating={5}
            testimonial="My wife & I have moved 6 times in the last 25 years. Obviously, we've dealt with many realtors both on the buying and selling side. I have to say that David is by far the BEST realtor we've ever worked with, his professionalism, personality, attention to detail, responsiveness and..."
          />
          <View style={styles.footers}>
            <View>
              <Text
                style={styles.price}>{`${estimation[0].price}$/month`}</Text>
              <Text style={styles.paymentEstimation}>Payment estimation</Text>
            </View>
            <TouchableOpacity
              style={styles.rentButton}
              onPress={() => navigation.navigate('rentscreen')}>
              <Text style={styles.rentButtonText}>Rent</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LocationDetails;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#f5f5f5',
    padding: 16,
  },
  headername: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  arrowback: {
    backgroundColor: '#fff',
    width: width * 0.1,
    height: height * 0.049,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    position: 'absolute',
    top: height * 0.03,
    zIndex: 99999,
    marginHorizontal: width * 0.03,
  },

  imageContainer: {
    marginBottom: height * 0.02,
    // position: 'relative',
  },
  propertyImage: {
    width: '100%',
    height: 300, // Adjust height
    resizeMode: 'cover',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -32, // Half of icon size
    marginLeft: -32, // Half of icon size
  },
  paginationText: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    color: 'white',
  },
  watchButton: {
    // position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(145, 122, 253, 0.1)',
    margin: 20,
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00AAE5',
    borderRadius: 100,
  },
  watchButtonText: {
    textAlign: 'center',
    color: '#00AAE5',
    fontWeight: 'bold',
  },
  container2: {
    // backgroundColor: 'white',
    // padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerfailities: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: height * 0.02,
  },
  title: {
    fontFamily: PoppinsBold,
    fontSize: calculateFontSize(18),
    color: '#000',
  },
  subTitle: {
    color: 'grey',
  },
  dtails: {
    // backgroundColor:"red",
    flexDirection: 'row',
    // padding: 3,
    // width:width*0.35,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
  },
  maindeatlcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.01,
  },
  detailtex: {
    fontFamily: PoppinsSemibold,
    fontSize: calculateFontSize(13),
    color: '#000',
    // marginHorizontal: width * 0.02,
  },
  icons: {
    fontSize: calculateFontSize(15),
    marginHorizontal: width * 0.02,
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginVertical: 16, // Adjusted for spacing
  },
  hostdeatil: {
    // backgroundColor: 'red',
    // padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarimag: {
    width: width * 0.12,
    height: height * 0.06,
    overflow: 'hidden',
  },
  hostinfodetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContainerhost: {
    marginLeft: 10,
  },
  name: {
    fontFamily: PoppinsSemibold,
    fontSize: calculateFontSize(13),
    color: '#000',
  },
  role: {
    fontFamily: PoppinsSemibold,
    fontSize: calculateFontSize(13),
    color: '#000',
  },
  contcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  facilitiescontainer: {
    marginBottom: height * 0.02,
    // backgroundColor:"red",
    // padding:16
  },
  facility: {
    flexDirection: 'row',
    // justifyContent:"center"
    alignItems: 'center',
    marginVertical: height * 0.01,
  },
  facilityText: {
    fontFamily: PoppinsSemibold,
    fontSize: calculateFontSize(13),
    color: '#000',
    marginHorizontal: height * 0.02,
  },
  mapcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"red",
    paddingVertical: height * 0.03,
  },
  // mapimagecontainer: {
  //   width: width * 0.9,
  //   height: height * 0.3,
  //   overflow: 'hidden',
  //   borderRadius: 15,
  // },
  facilityList: {
    // backgroundColor: 'white',
    borderRadius: 5,
    // padding: 15,
  },
  facilityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconContainer: {
    marginRight: 10,
    color: '#00AAE5',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  facilityName: {
    fontFamily: PoppinsSemibold,
    fontSize: calculateFontSize(13),
    color: '#000',
  },
  facilityDistance: {
    fontFamily: PoppinsSemibold,
    fontSize: calculateFontSize(13),
    color: 'grey',
  },
  headernearfacilites: {
    fontFamily: PoppinsBold,
    fontSize: calculateFontSize(15),
    color: '#000',
  },
  card: {
    // backgroundColor: 'white',
    borderRadius: 6,
    // padding: 20,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowRadius: 6,
    // shadowOpacity: 0.1,
    // elevation: 2,
  },
  headertext: {
    fontSize: calculateFontSize(20),
    fontWeight: 'bold',
    fontFamily: PoppinsSemibold,
    marginBottom: height * 0.02,
    color: '#000',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#eaeaea',
    paddingTop: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    fontSize: calculateFontSize(16),
    color: '#888',
    fontFamily: PoppinsSemibold,
  },
  price: {
    fontSize: calculateFontSize(18),

    color: '#888',
    fontFamily: PoppinsSemibold,
  },
  testimonialCard: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: {width: 0, height: 1},
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  testimonialContent: {
    flex: 1,
  },

  stars: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  star: {
    marginRight: 5,
  },
  testimonialText: {
    fontSize: calculateFontSize(14),
    color: '#333',
    marginBottom: 5,
  },
  readMore: {
    fontSize: calculateFontSize(15),
    color: '#00AAE5',
  },
  footers: {
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  paymentEstimation: {
    fontSize: calculateFontSize(14),
    fontFamily: PoppinsRegular,
    color: '#888',
    marginBottom: 20,
  },
  rentButton: {
    backgroundColor: '#00AAE5',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  rentButtonText: {
    color: 'white',
    fontSize: calculateFontSize(16),
    fontWeight: 'bold',
  },
  mapimagecontainer: {
    width: width * 0.9,
    height: height * 0.3,
    overflow: 'hidden',
    borderRadius: 15,
    justifyContent:"center",
    alignSelf:"center"
  },
  map: {
    width: '100%',
    backgroundColor: 'red',
    height: '100%',
    overflow: 'hidden',
    // height: sizes.screenHeight * 0.4,
    // backgroundColor: "#fff"
    borderRadius: 10,
  },
  containerfacilites: {
    marginTop: height * 0.03,
  },
  imageWrapper: {
    width: width * 0.99,
    height: height * 0.37,
    marginHorizontal: width * 0.01,
  },
});
