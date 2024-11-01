import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewStyle from '@/constants/MapViewStyle.json'
import { UserLocationContext } from '@/app/Context/UserLocationContext'


const AppMapView = () => {
  //const [userLocation, setLocation] = useContext(UserLocationContext);
  return location?.latitude &&(
    <View style={styles.container}>
      <MapView 
      style={styles.map} 
      provider={PROVIDER_GOOGLE}
      customMapStyle={MapViewStyle}
      region={{
        latitude: location?.latitude,
        longitude: location?.longitude,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0421,
      }}
      >
      <Marker 
      coordinate={{
        latitude: location?.latitude,
        longitude: location?.longitude
      }} />
      </MapView>

    </View>
  )
}

export default AppMapView

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map:{
        width: '100%',
        height: '100%',

    }
})