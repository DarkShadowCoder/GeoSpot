import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const Header = () => {
    const user = useUser();
  return (
    <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }}>
      <Image source={{uri:user?.imageUrl}}
      style={{width: 45, height: 45, borderRadius: 99}}
      />
      <Image source={require('../../../assets/images/logo.png')}
      style={{width: 200, height: 45, objectFit: 'contain'}} />

      <Ionicons name='filter' size={25} color={Colors.BLACK}/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})