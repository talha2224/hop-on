import React, { useEffect } from 'react'
import {Image, Text, View } from 'react-native'
import Indexstyle from '../style/indexStyle'
import { router } from 'expo-router';
import Logo from '../assets/images/hop.png'

const RootLayout = () => {

  useEffect(() => {
    const timer = setTimeout(() => {
      // router.push('/rider')
      router.push('/rider/home/confirmation')
    }, 2000)
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={Indexstyle.container}>
        <Image source={Logo} style={Indexstyle.logo}/>
      <Text style={Indexstyle.txt}>Hop On</Text>
    </View>
  )
}

export default RootLayout



