import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  PoppinsBold,
  PoppinsRegular,
  PoppinsSemibold,
  calculateFontSize,
} from '../../../uitils/font';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Images from '../../../uitils/im';
import {
  Arroeback,
  CustomButton,
  Inputtext,
  SignInWithSocial,
} from '../../../component';
import {Button, TextInput} from 'react-native-paper';
import PhoneInput from 'react-native-phone-number-input';
import {showMessage} from 'react-native-flash-message';
import FlashMessage from 'react-native-flash-message';
const {width, height} = Dimensions.get('window');
import axios from 'axios';
import {apiCall} from '../../../services/api';
import {useDispatch} from 'react-redux';
import {loginSuccess} from '../../../store/action/authActions';

const SignUp = ({navigation, route}) => {
  const {role} = route?.params;
  const dispatch = useDispatch();
  console.log(role, 'role');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const phoneInput = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleEmailChange = text => {
    setEmail(text);

    setShowEmailError(false);
  };
  const handlePassword = text => {
    setpassword(text);

    setShowEmailError(false);
  };
  const validateEmail = () => {
    if (!email || password) {
      setShowEmailError(true); // Email is empty, show error message
    } else {
      setShowEmailError(false); // Email is filled, proceed with your logic
      // ... other validation logic
    }
  };

  const Handlesignup = async () => {
    console.log(email, password, formattedValue, role);
    const data = {
      email: email,
      password: password,
      phone: formattedValue,
      role: role,
      device_token: 'g45yu56u65',
    };

    try {
      const responseData = await apiCall('/v1/bonstay/auth/signup', data);
      console.log(responseData);
      dispatch(loginSuccess({
        token: responseData.token || 'defaultToken',
        data: responseData.user || {},
      }));

      showMessage({
        message: 'Success',
        description: 'Signup successful',
        type: 'success',
      });
    } catch (error) {
      console.error(error);
      const errorMessage =
        error.response?.data?.error || error.message || 'Signup failed';
      console.log(errorMessage, 'lkljkhgjfhd');
      showMessage({
        message: 'Error',
        description: error || 'Signup failed',
        type: 'error',
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.submaincontainer}>
        <FlashMessage position="top" />
        <StatusBar barStyle="dark-content" />
        <Arroeback />
        <View style={styles.wellcomtextContainer}>
          <Text style={styles.wellcometext}>Welcome Back!</Text>
          <Text style={styles.welltext}>
            Membership allows both guests and hosts to earn credits in real
            dollars for future stays. Allow Bonstay to help fund your next
            getaway. Sign up today to learn more!"
          </Text>
        </View>
        <View>
          <Inputtext
            Username={'Username'}
            Iconname={'person'}
            placeholder={'email adrees'}
            onChangeText={handleEmailChange}
            value={email}
            errorMessage="Please fill in your email"
            showError={showEmailError}
          />
          <Inputtext
            Username={'Password'}
            Iconname={'key'}
            placeholder={'Insert your password here'}
            onChangeText={handlePassword}
            value={password}
            errorMessage="Please fill in your password"
            showError={showEmailError}
            secureTextEntry={false}
          />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <PhoneInput
            textContainerStyle={{
              backgroundColor: 'white',
              borderRadius: 200,
              color: '#ffffff',
              padding: 0,
            }}
            containerStyle={{
              width: width * 0.95,
              height: height * 0.095,
              borderColor: '#000',
              borderWidth: 2,
              borderRadius: 200,
            }}
            ref={phoneInput}
            defaultValue={value}
            defaultCode="DM"
            layout="first"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            onChangeFormattedText={text => {
              setFormattedValue(text);
            }}
            autoFocus
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton title="Create" onPress={Handlesignup} />
        </View>

        <Text style={styles.forgetpasstext}>Forgot password?</Text>

        <View style={styles.socialauth}>
          <SignInWithSocial
            iconname={'apple'}
            Title="Sign in with Apple"
            color={'#fff'}
          />
          <SignInWithSocial
            iconname={'google'}
            Title="Sign in with Apple"
            backgroundColor={'#fff'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems:"center",
  },
  wellcometext: {
    fontSize: calculateFontSize(17.46),
    fontFamily: PoppinsBold,

    color: '#000',
    textTransform: 'capitalize',
  },
  welltext: {
    color: '#7D7F88',
    fontSize: calculateFontSize(14.46),
    fontFamily: PoppinsRegular,
    textTransform: 'capitalize',
  },

  errorText: {
    fontSize: 10,
    color: 'red',
  },
  buttonContainer: {
    marginTop: height * 0.04,
    alignItems: 'center',
  },
  forgetpasstext: {
    color: '#7D7F88',
    fontSize: calculateFontSize(10.46),
    fontFamily: PoppinsRegular,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  socialauth: {
    marginTop: height * 0.02,
    alignItems: 'center',
  },
  wellcomtextContainer: {
    marginBottom: height * 0.02,
    marginLeft: width * 0.04,
  },
});
