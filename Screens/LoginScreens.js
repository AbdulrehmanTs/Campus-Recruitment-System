import React, {useState, useContext} from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet, ScrollView} from 'react-native'
import FormInput from '../Components/FormInput';
import FormButton from '../Components/FormButton';
import SocialButton from '../Components/SocialButtons';
import { AuthContext } from '../Navigations/AuthProvider';

const LoginScreen = ({navigation})=>{
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const {login, googleLogin, fbLogin} = useContext(AuthContext);
    
    return (
        <ScrollView contentContainerStyle={styles.container}>
        <Image
            source={require('../Assets/login-img.png')}
            style={styles.logo}
        />
        <Text style={styles.text}>Campus Recruitment Sysytem</Text>
    
        <FormInput
            labelValue={email}
            onChangeText={(userEmail) => setEmail(userEmail)}
            placeholderText="Email"
            iconType="user"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
        />


        <FormInput
            labelValue={password}
            onChangeText={(userPassword) => setPassword(userPassword)}
            placeholderText="Password"
            iconType="lock"
            secureTextEntry={true}
        />
    
        <FormButton
            buttonTitle="Sign In"
            onPress={() => login(email, password)}
        />
    
        <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
            <Text style={styles.navButtonText}>Forgot Password?</Text>
        </TouchableOpacity>
    
            <View>
            <SocialButton
                buttonTitle="Sign In with Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => fbLogin()}
            />
    
            <SocialButton
                buttonTitle="Sign In with Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => googleLogin()}
            />
            </View>
    
        <TouchableOpacity
            style={styles.forgotButton}
            onPress={()=> navigation.navigate('SignupScreen')}>
            <Text style={styles.navButtonText}>
            Don't have an acount? Create here
            </Text>
        </TouchableOpacity>
        </ScrollView>
    );
    };

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50
    },
    logo: {
      height: 150,
      width: 150,
      resizeMode: 'cover',
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
  });

export default LoginScreen;