import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import  {useFonts} from 'expo-font'
import * as SpashScreen from 'expo-splash-screen'
import LoginScreen from './Screen/LoginScreen/LoginScreen';
import {ClerkProvider, SignedIn, SignedOut} from '@clerk/clerk-expo'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Navigations/TabNavigation';
import { UserLocationContext } from './Context/UserLocationContext';
//import * as SecureStore from 'expo-secure-store';


SpashScreen.preventAutoHideAsync();
const App = () => {
    const [fontsLoaded] = useFonts({
        'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
        'outfit-medium':require('../assets/fonts/Outfit-Medium.ttf'),
        'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
    });

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
/*
    useEffect(() => {
      (async () => {
        let {status} = await Location.requestForegroundPermissionAsync();
        if (status !== 'granted'){
          setErrorMsg('Permission to access location was denied');
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);

      })();
    }, [])

    let text = 'Waiting...';
    if(errorMsg){
      text = errorMsg;
    }
    else if(location){
      text= JSON.stringify(location)
    }
      */
    const onLayoutRootView = useCallback( async()=>{
        if (fontsLoaded){
            await SpashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
/*
    const tokenCache = {
        async getToken(key: string){
          try {
            return SecureToken.getItemAsync(key);
          } catch(err){
            return null;
          }
        },
        async setToken(key: string, value: string){
          try{
            return SecureToken.setItemAsync(key, value);
          }catch(err){
            return;
          }
        }
      }
*/
      
  return (
    <ClerkProvider 
    //tokenCache={tokenCache}
    publishableKey={'pk_test_c3R1bm5pbmctemVicmEtOTAuY2xlcmsuYWNjb3VudHMuZGV2JA'}>
      <UserLocationContext.Provider value={{location, setLocation}} >
        <View style={styles.container} onLayout={onLayoutRootView}>
        <SignedIn>
            <NavigationContainer>
                <TabNavigation/>
            </NavigationContainer>
        </SignedIn>
        <SignedOut>
            <LoginScreen />
        </SignedOut>

        <StatusBar style="auto" />
        </View>
      </UserLocationContext.Provider>
    </ClerkProvider>
  )
}

export default App

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
})