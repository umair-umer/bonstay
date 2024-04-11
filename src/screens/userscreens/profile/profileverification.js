
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
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Images from '../../../uitils/im';
import { PoppinsBold, PoppinsRegular, calculateFontSize } from '../../../uitils/font';
const { width, height } = Dimensions.get('window')

const Verifiedprofile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: height * 0.02 }}>
        <TouchableOpacity onPress={()=>navigation.goBack()} >
          <Entypo
            name='chevron-left'
            size={26}
            color='#000'
          />
        </TouchableOpacity>
        <Image source={Images.pro} style={styles.profileimage}/>
        <TouchableOpacity>
          <Text style={styles.editbutton}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.topHead}>
        <Text style={styles.topHeading}>Hi, Im Lucy Bond</Text>
        <Text style={styles.topPara}>Joined in 2024</Text>
      </View>
      <View style={styles.topHead}>
        <Image source={Images.verfication}  />
        <Text style={styles.sechead}>Identity verification</Text>
        <Text style={styles.secpara}>Show other your really with the identity verification badge.</Text>
        <TouchableOpacity style={styles.identitybuttonmain}>
          <Text style={styles.identitybutton}>Get the badge</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: height * 0.03 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: height * 0.01 }}>
          <AntDesign
          name='check'
          size={26}
          color= '#00AAE5'
          />
          <Text style={styles.checkedtext}>Email address</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: height * 0.01 }}>
          <AntDesign
          name='check'
          size={26}
          color= '#00AAE5'
          />
          <Text style={styles.checkedtext}>Phone Number</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
  },

  editbutton: {
    color: '#000',
    fontSize: calculateFontSize(15),
    fontFamily:PoppinsBold,
    textDecorationLine: 'underline'
  },

  topHead: {
    borderBottomWidth: 2,
    borderBottomColor: '#D6D6D6',
    paddingVertical: height * 0.01,
  },

  topHeading: {
    color: '#000',
    fontSize: calculateFontSize(15),
    fontFamily:PoppinsBold,

    fontWeight: '500'
  },

  topPara: {
    color: '#8D8F96',
    fontSize: 18,
  },

  sechead: {
    color: '#000',
    fontSize: 24,
    fontWeight: '500',
    paddingVertical: height * 0.02,
  },

  secpara: {
    color: '#5B5B5B',
    fontSize: 18,
  },

  identitybuttonmain: {
    borderWidth: 2,
    borderColor: '#10AFE7',
    borderRadius: 50,
    width: width * 0.45,
    paddingHorizontal: width * 0.07,
    paddingVertical: height * 0.015,
    marginTop: height * 0.02,
  },

  identitybutton: {
    color: '#10AFE7',
    fontSize: 18,
    fontWeight: '500'
  },

  checkedtext: { 
    color: '#000',
    fontSize: calculateFontSize(12),
    fontFamily:PoppinsBold,
    paddingLeft: width * 0.04,
  },
  profileimage: {
    width: width*0.25,
    height: height*0.2,
  },

});
export default Verifiedprofile