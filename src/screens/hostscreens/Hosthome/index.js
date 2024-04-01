import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Dimensions,
  FlatList, TextInput
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { Arroeback, Inputtext } from '../../../component';
import Images from '../../../uitils/im';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { PoppinsBold, PoppinsSemibold, calculateFontSize } from '../../../uitils/font';
import { ScrollView } from 'react-native-gesture-handler';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { launchImageLibrary } from 'react-native-image-picker';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
const HostHome = ({ navigation }) => {
  const [images, setImages] = useState([]);
  const [sliderValues, setSliderValues] = useState([0, 75]);
  const [description, setDescription] = useState('');
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(0);
  const [beds, setBeds] = useState(0);

  const increment = (category: 'bedrooms' | 'bathrooms' | 'beds') => {
    if (category === 'bedrooms') setBedrooms(bedrooms + 1);
    else if (category === 'bathrooms') setBathrooms(bathrooms + 1);
    else if (category === 'beds') setBeds(beds + 1);
  };

  const decrement = (category: 'bedrooms' | 'bathrooms' | 'beds') => {
    if (category === 'bedrooms' && bedrooms > 0) setBedrooms(bedrooms - 1);
    else if (category === 'bathrooms' && bathrooms > 0) setBathrooms(bathrooms - 1);
    else if (category === 'beds' && beds > 0) setBeds(beds - 1);
  };


  const sliderChange = (values) => setSliderValues(values);
  // const styles = StyleSheet.create({
  //   cooontainer: {
  //     ...StyleSheet.absoluteFillObject,
  //     height: 400,
  //     width: 400,
  //     justifyContent: 'flex-end',
  //     alignItems: 'center',
  //   },
  //   map: {
  //     ...StyleSheet.absoluteFillObject,
  //   },
  //  });
  const CustomMarker = () => {
    return (
      <View
        style={{
          height: 30, // Set the size of the marker
          width: 30, // Set the width of the marker
          borderRadius: 15, // Half of the height and width to make it circular
          backgroundColor: '#7ADDFC', // Background color of the marker
          borderWidth: 2, // Width of the border
          borderColor: 'white', // Color of the border
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    );
  };
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectfacilities, setfacilities] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);

  };
  const handleFacilitiesSelect = (facilities) => {
    setfacilities(facilities);

  };

  const renderCategoryButton = (category) => (
    <TouchableOpacity
      style={[styles.categoryButton, category === selectedCategory ? styles.selectedCategory : styles.unselectedCategory]}
      onPress={() => handleCategorySelect(category)}
    >
      <Text style={category === selectedCategory ? styles.selectedCategoryText : styles.unselectedCategoryText}>{category}</Text>
    </TouchableOpacity>
  );

  const renderFacilitiesButton = (facilities) => (
    <TouchableOpacity
      style={[styles.categoryButton, facilities === selectfacilities ? styles.selectedCategory : styles.unselectedCategory]}
      onPress={() => handleFacilitiesSelect(facilities)}
    >
      <Text style={facilities === selectfacilities ? styles.selectedCategoryText : styles.unselectedCategoryText}>{facilities}</Text>
    </TouchableOpacity>
  );
  useEffect(() => {
    console.log(selectedCategory, "====", selectfacilities, "selected category");
  }, [selectedCategory, selectfacilities]);


  const rightIcons = [
    { name: 'sharealt', style: { marginRight: 10 } },
    // { name: 'setting', style: { marginRight: 10 } },
  ];


  const handleImagePicker = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.5,
      multiple: true, // Allow multiple image selection
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // Send the images to the server or store them locally
        const selectedImages = response.assets.map(asset => asset.uri);
        setImages(prevImages => [...prevImages, ...selectedImages]);
      }
    });
  };


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>

        <Arroeback
          title="Edit"
          leftIconName="arrowleft"
          rightIcons={rightIcons}
        />
        <View style={styles.blubg} />
        <View style={{ padding: 20 }}>

          <View style={styles.locationsinglebox}>
            <View style={styles.locationimagebox}>
              <Image source={Images.locationimage} style={styles.locationimage} />
            </View>
            <View style={styles.locationcontent}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AntDesign name="star" size={20} color="#ffbf75" />
                <Text style={styles.stars}>4.8</Text>
                <Text style={styles.starsusers}>73</Text>
              </View>
              <Text style={styles.housedetail}>Entire Mountain View House in California</Text>
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
                  <Text style={styles.slashAndMonth}>/ month</Text>
                </Text>
                <TouchableOpacity>
                  <AntDesign name="hearto" size={26} color="#7c7e87" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.listing}>Listing Title</Text>

            <TextInput
              placeholder="Listing Title"
              style={styles.input}
            />
          </View>
          <View>
            <Text style={styles.listing}>Property category</Text>

            <View style={styles.categeroycontainer}>
              {renderCategoryButton('House', selectedCategory === 'House')}
              {renderCategoryButton('Apartment', selectedCategory === 'Apartment')}
              {renderCategoryButton('Cottage', selectedCategory === 'Cottage')}
              {renderCategoryButton('Villa', selectedCategory === 'Villa')}
              {renderCategoryButton('Hotel', selectedCategory === 'Hotel')}


            </View>
          </View>
          <View>
            <Text style={styles.listing}>Add Home facilities</Text>

            <View style={styles.categeroycontainer}>
              {renderFacilitiesButton('Any', selectfacilities === 'Any')}
              {renderFacilitiesButton('Wifi', selectfacilities === 'Wifi')}
              {renderFacilitiesButton('Self chek-in', selectfacilities === 'Self chek-in')}
              {renderFacilitiesButton('Free parking', selectfacilities === 'Free parking')}
              {renderFacilitiesButton('Air conditioner', selectfacilities === 'Air conditioner')}
              {renderFacilitiesButton('Security', selectfacilities === 'Security')}


            </View>
          </View>
          {/* <View style={styles.cooontainer}> */}
          {/* <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView> */}
          {/* </View> */}
          <View>
            <Text style={styles.listing}>Location</Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity>
                <Icon name="location-on" size={24} color="#000" />
              </TouchableOpacity>
              <View style={styles.addressTextContainer}>
                <Text style={styles.addressLine}>Jl. Gerungsang, Bulusan,Kec. Tembalang, Kota</Text>
                <Text style={styles.addressLine}>Semarang, Jawa Tengah 50277</Text>
              </View>
            </View>
            <View style={styles.mapimagecontainer}>
              <Image
                source={Images.mapimage}
                style={{ width: '100%', height: '100%' }}
              />
            </View>
          </View>
          <View>
            <Text style={styles.listing}>Listing Photos</Text>
            <View style={styles.listingphotos}>
              {images.map((image, index) => (
                <Image key={index} source={{ uri: image }} style={styles.image} />
              ))}
              <TouchableOpacity style={styles.uploadButton} onPress={handleImagePicker}>
                <Ionicons name="add-circle-outline" size={40} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.degreebutton}>
                <Ionicons
                  name='videocam'
                  size={24}
                  color='#00AAE5'
                />
                <Text style={styles.degreetext}>Watch 360</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.listing}>Price range</Text>
            <Text>${sliderValues[0]} - ${sliderValues[1]}+/Daily</Text>
            <Image
              source={Images.graphrange}
              style={{ width: '100%', height: 88 }}
            />
            <View style={{ position: "relative", bottom: 25 }} >
              <MultiSlider
                values={[sliderValues[0], sliderValues[1]]}
                sliderLength={350} // Width of the slider
                onValuesChange={sliderChange} // Function to handle changes in slider
                min={0} // Minimum value
                max={3000} // Maximum value
                customMarker={CustomMarker}
                step={1} // Step value for each slider move
                selectedStyle={{
                  backgroundColor: '#00AAE5', // Color of the selected part of the slider
                }}
                unselectedStyle={{
                  backgroundColor: '#7ADDFC', // Color of the unselected part of the slider
                }}
              />
            </View>

            <View style={styles.categeroycontainer}>
              {renderFacilitiesButton('Any', selectfacilities === 'Any')}
              {renderFacilitiesButton('Wifi', selectfacilities === 'Wifi')}
              {renderFacilitiesButton('Self chek-in', selectfacilities === 'Self chek-in')}
            </View>
          </View>
          <View style={{ marginTop: height * 0.06 }}>
            <Text style={styles.listing}>Rooms and beds</Text>
            <View style={styles.singlerbdetail}>
              <View>
                <Text style={styles.rbtext}>Bedrooms</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => decrement('bedrooms')}>
                  <AntDesign
                    name='minuscircleo'
                    size={24}
                    color='black'
                  />
                </TouchableOpacity>
                <Text style={styles.rbdetail}>{bedrooms}</Text>
                <TouchableOpacity onPress={() => increment('bedrooms')}>
                  <AntDesign
                    name='pluscircleo'
                    size={24}
                    color='black'
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.singlerbdetail}>
              <View>
                <Text style={styles.rbtext}>Bathrooms</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => decrement('bathrooms')}>
                  <AntDesign
                    name='minuscircleo'
                    size={24}
                    color='#BABCBF'
                  />
                </TouchableOpacity>
                <Text style={styles.rbdetail}>{bathrooms}</Text>
                <TouchableOpacity onPress={() => increment('bathrooms')}>
                  <AntDesign
                    name='pluscircleo'
                    size={24}
                    color='black'
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.singlerbdetail}>
              <View>
                <Text style={styles.rbtext}>Beds</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => decrement('beds')}>
                  <AntDesign
                    name='minuscircleo'
                    size={24}
                    color='#BABCBF'
                  />
                </TouchableOpacity>
                <Text style={styles.rbdetail}>{beds}</Text>
                <TouchableOpacity onPress={() => increment('beds')}>
                  <AntDesign
                    name='pluscircleo'
                    size={24}
                    color='black'
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ marginTop: height * 0.06 }}>
          <Text style={styles.listing}>About location’s neighborhood</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setDescription}
              value={description}
              placeholder="About location’s neighborhood"
              multiline
            // ...other props
            />
            {/* 
            <Text style={styles.bottomlocationcontent}>This cabin comes with Smart Home System and beautiful viking style. You can see sunrise in the morning with City View from full Glass Window.</Text>
            <Text style={styles.bottomlocationcontent}>This unit is surrounded by business district of West Surabaya that offers you the city life as well as wide range of culinary.</Text>
            <Text style={styles.bottomlocationcontent}>This apartment equipped with Washing Machine, Electric Stove, Microwave, Refrigerator, Cutlery.</Text>
            <TextInput
              placeholder='Average living cost'
              placeholderTextColor={'#7D7F88'}
              style={styles.bottomlivinginput}
            /> */}
          </View>
          <View>
            <TouchableOpacity style={styles.footersavebtn}>
              <Text style={styles.footersavebtntext}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100
  },
  blubg: {
    width: width,
    height: height * 0.3,
    backgroundColor: "#00AAE5",
    position: "absolute",
    zIndex: -99999
  },
  locationsinglebox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    // marginVertical: height * 0.04,
    // marginHorizontal: width * 0.01,
  },

  locationimagebox: {
    width: width * 0.3,
    height: height * 0.27,
  },

  locationimage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  locationcontent: {
    // paddingHorizontal: width * 0.03,
    // paddingVertical: height * 0.03,
    padding: 10
  },

  stars: {
    color: '#000',
    fontSize: 16,
    // paddingHorizontal: width * 0.02,
  },

  starsusers: {
    color: '#8d8e96',
    fontSize: 16,
  },

  housedetail: {
    fontSize: 20,
    color: '#000',
    width: width * 0.5,
    // paddingTop: height * 0.02,
  },

  houseplace: {
    // paddingVertical: height * 0.01,
    fontSize: 15,
    color: '#8d8e96',
  },
  roomspecs: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingRight: width * 0.04,
  },
  listing: {
    fontSize: calculateFontSize(15),
    fontFamily: PoppinsBold,
    color: '#000',
    paddingBottom: height * 0.04
  },
  listingphotos: {
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    borderWidth: 1,
    borderRadius: 100,
    padding: 10,
    paddingHorizontal: width * 0.04,
    backgroundColor: "#D9D9D9",
    color: "#000"
  },
  // New styles for category buttons
  categeroycontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  categoryButton: {
    backgroundColor: "#E3E3E7",
    padding: 10,
    margin: 5,
    borderRadius: 100
  },
  selectedCategory: {
    backgroundColor: "#00AAE5",
  },
  unselectedCategory: {
    backgroundColor: "#E3E3E7",
  },
  selectedCategoryText: {
    fontSize: calculateFontSize(15),
    fontFamily: PoppinsSemibold,
    color: '#fff',
  },
  unselectedCategoryText: {
    fontSize: calculateFontSize(15),
    fontFamily: PoppinsSemibold,
    color: '#000',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Aligns the icon vertically with the text
  },

  addressLine: {
    fontSize: calculateFontSize(10),
    fontFamily: PoppinsSemibold,
    color: '#000',
  },
  mapimagecontainer: {
    width: width * 0.9,
    height: height * 0.3,
    overflow: 'hidden',
    borderRadius: 15,
  },
  uploadButton: {
    backgroundColor: '#F5F4F8',
  },





  degreebutton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#00AAE5',
    paddingHorizontal: width * 0.3,
    paddingVertical: height * 0.009,
    backgroundColor: '#F2F0FB',
    marginVertical: height * 0.03
  },
  degreetext: {
    color: '#00AAE5',
    fontSize: 15,
    paddingLeft: width * 0.03
  },
  singlerbdetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.04
  },
  rbtext: {
    fontSize: 17,
    color: '#7D7F88'
  },
  rbdetail: {
    color: 'black',
    paddingHorizontal: width * 0.04,
    fontSize: 18
  },
  bottomlocationcontent: {
    fontSize: 16,
    paddingBottom: height * 0.03,
    color: '#8D8F96'
  },
  bottomlivinginput: {
    borderWidth: 1,
    borderColor: '#CBCDD0',
    borderRadius: 50,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.009,
    fontSize: 15,
    marginBottom: height * 0.04
  },
  footersavebtn: {
    backgroundColor: '#00AAE5',
    borderRadius: 50,
    paddingVertical: height * 0.019,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footersavebtntext: {
    color: 'white',
    fontSize: 18,
  },

});

export default HostHome;
