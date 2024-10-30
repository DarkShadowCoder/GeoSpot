import { StyleSheet, Text, View } from 'react-native'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
import React from 'react'

const SearchBar = ({searchedLocation}) => {
  return (
    <View>
      <GooglePlacesAutocomplete
      placeholder='Search'
      enablePoweredByContainer={false}
      fetchDetails={true}
      onPress={(data,details =null) =>{
        console.log(data,details)
        searchedLocation(details?.geometry?.location)
      }}
      query={{
        key: 'YOUR API KEY',
        language: 'fr',
      }}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})