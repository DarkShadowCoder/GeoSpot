import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppMapView from './AppMapView'
import Header from './Header'
import SearchBar from './SearchBar'


const HomeScreen = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Header />
        <SearchBar searchedLocation={(location) => console.log(location)} />
      </View>
      <AppMapView />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  headerContainer:{
    position: 'absolute',
    zIndex: 99,
    padding: 10,
    width: "100%",
    paddingHorizontal:10
  }
})