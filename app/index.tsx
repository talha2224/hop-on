import React, { useEffect } from 'react'
import {Text, View } from 'react-native'
import Indexstyle from '../style/indexStyle'
import { router, useNavigation } from 'expo-router';


const RootLayout = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/rider')
    }, 2000)
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={Indexstyle.container}>
      <View style={Indexstyle.logoContainer}></View>
      <Text style={Indexstyle.txt}>Hop On</Text>
    </View>
  )
}

export default RootLayout



