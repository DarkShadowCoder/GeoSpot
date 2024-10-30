import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import {Ionicons} from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import *  as WebBrowser from 'expo-web-browser'
import usewarmUpBrowser from '@/hooks/warmUpBrowser'
import { useAuth, useOAuth } from '@clerk/clerk-expo'



WebBrowser.maybeCompleteAuthSession();
const LoginScreen = () => {
  usewarmUpBrowser()

  const {startOAuthFlow} = useOAuth({strategy: 'oauth_google'})
  const onPress= async() =>{
    try {
      const {createdSessionId, signIn, signUp, setActive} = await startOAuthFlow()
      if (createdSessionId) {
        setActive({session: createdSessionId});
      }
      else{

      }
    }catch(err){
      console.error("OAuth error: ", err);
    }
  }


  return (
    <View style={{
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 70,
        width: '100%',
        paddingHorizontal: 10,
    }}>
      <Image source={require('../../../assets/images/logo.png')} style={styles.logoImage} />
      <Image source={require('../../../assets/images/signup-image.jpg')} style={styles.signupImage} />
      <View style= {{padding:20}}>
        <Text style={styles.heading}>Your ultimate GeoSpot App!</Text>
        <Text style={styles.desc}>Find your Spot Station near you , plan trip and so much more in few click!</Text>
      <TouchableOpacity style={styles.button}
      onPress={onPress}
      >
        <Text style={{
          color:Colors.WHITE,
          textAlign:'center',
          fontFamily: 'outfit',
          fontSize: 17,
        }}>Login With Google</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    logoImage:{
        width: 200,
        height: 40, 
        objectFit: 'contain',
        backgroundColor: 'gray',
    },
    signupImage:{
      width: '100%',
      height: 220,
      marginTop:25,
      marginBottom: 15,
      objectFit: 'cover',
    },
    heading:{
      fontSize: 25,
      fontFamily: 'outfit-bold',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,

    }, 
    desc:{
      fontSize: 17,
      fontFamily: 'outfit',
      textAlign: 'center',
      color: Colors.GRAY,
    },

    button:{
      backgroundColor: Colors.PRIMARY,
      padding: 16,
      display: 'flex',
      borderRadius: 99,
      marginTop: 70,
    }
})