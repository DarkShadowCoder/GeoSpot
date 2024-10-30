import { StyleSheet, Text, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React from 'react'
import HomeScreen from '../Screen/HomeScreen/HomeScreen'
import FavoriteScreen from '../Screen/FavoriteScreen/FavoriteScreen'
import ProfileScreen from '../Screen/ProfileScreen/ProfileScreen'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'


const Tab = createBottomTabNavigator()
const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false
    }}>
        <Tab.Screen 
        name='home' 
        component={HomeScreen} 
        options={{
            tabBarLabel: 'Search',
            tabBarActiveTintColor: Colors.PRIMARY,
            tabBarIcon:({color, size}) => (
                <Ionicons name='search' size={size} color={color}/>
            )
        }}
        />
        <Tab.Screen 
        name='favorite' 
        component={FavoriteScreen} 
        options={{
            tabBarLabel: 'Favorite',
            tabBarActiveTintColor: Colors.PRIMARY,
            tabBarIcon:({color, size}) => (
                <Ionicons name='heart' size={size} color={color}/>
            )
        }}
        />
        <Tab.Screen 
        name='profile' 
        component={ProfileScreen} 
        options={{
            tabBarLabel: 'Profile',
            tabBarActiveTintColor: Colors.PRIMARY,
            tabBarIcon:({color, size}) => (
                <FontAwesome name='user-circle' size={size} color={color}/>
            )
        }}
        />
        
    </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({})