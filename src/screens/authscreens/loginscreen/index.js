import React, {useState} from 'react';
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
import {useDispatch} from 'react-redux';
import {Login} from '../../../services/api'; // Adjust the import path as necessary
import {showMessage} from 'react-native-flash-message';
import FlashMessage from 'react-native-flash-message';
import { loginSuccess, logout } from '../../../store/action/authActions';
const {width, height} = Dimensions.get('window');
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  const [Error, setError] = useState();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (!email || !password) {
      console.error('Email or password is missing!');
      setError('Please provide an email and password======>.');
      return;
    }
    const loginData = {
      username: email,
      password: password,
    };
    console.log('ok', loginData);
    try {
      const response = await Login('/v1/bonstay/auth/login', loginData);
      // dispatch(loginSuccess({ token: 'abc123', data:response}));
      console.log('Response:', response);
      console.log('opouiyf', loginData);
      showMessage({
        message: 'Success',
        description: 'Signup successful',
        type: 'success',
      });
  

      // navigation.navigate('HomeScreen');
    } catch (err) {
      console.log(err, '0000');
      setError(err);
      showMessage({
        message: 'Error',
        description: err || 'Signup failed',
        type: 'error',
      });
    }
  };

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

  return (
    <SafeAreaView style={styles.container}>
      <FlashMessage position="top" />
      <View style={styles.submaincontainer}>
        <StatusBar barStyle="dark-content" />
        <Arroeback />
        <View style={styles.wellcomtextContainer}>
          <Text style={styles.wellcometext}>Welcome Back!</Text>
          <Text style={styles.welltext}>
            Log into your account and explore vacation destinations worldwide
          </Text>
        </View>
        <View>
          <Inputtext
            Username={'Username'}
            Iconname={'person'}
            placeholder={'EMAIL ADDRESS'}
            onChangeText={handleEmailChange}
            value={email}
            errorMessage="Please fill in your email"
            showError={showEmailError}
          />
          <Inputtext
            Username={'Password'}
            Iconname={'key'}
            placeholder={'INSERT YOUR PASSWROD HERE'}
            onChangeText={handlePassword}
            value={password}
            errorMessage="Please fill in your password"
            showError={showEmailError}
            secureTextEntry={false}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton title="login" onPress={handleLogin} />
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

export default LoginScreen;
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
    textTransform:'capitalize',
  },
  welltext: {
    color: '#7D7F88',
    fontSize: calculateFontSize(14.46),
    fontFamily: PoppinsRegular,
    textTransform:'capitalize',
  },

  errorText: {
    fontSize: 10,
    color: 'red',
  },
  buttonContainer: {
    marginVertical: height * 0.01,
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
    marginTop: height * 0.08,
    alignItems: 'center',
  },
  wellcomtextContainer: {
    marginBottom: height * 0.04,
    marginLeft: width * 0.04,
  },
});
