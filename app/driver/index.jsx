import indexstyle from '../../style/driver/index'
import React, { useState } from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import mailImg from '../../assets/images/mail.png';
import googleImg from '../../assets/images/google.png';
import appleImg from '../../assets/images/apple.png';
import { router } from 'expo-router';
const RootLayout = () => {

  const [methods] = useState([{ name: "Continue with Email", img: mailImg }, { name: "Continue with Google", img: googleImg }, { name: "Continue with Apple", img: appleImg }])

  return (
    <View style={indexstyle.container}>

      <View style={indexstyle.logoContainer}></View>
      <Text style={indexstyle.welcome}>Welcome back!! </Text>
      <View style={[indexstyle.btnContainer, { width: "100%" }]}>
        <View style={indexstyle.btn1}>
          <Text onPress={()=>{router.push("/rider")}} style={indexstyle.btn1Txt}>Rider</Text>
        </View>
        <View style={indexstyle.btn2}>
          <Text style={indexstyle.btn2Txt}>Driver</Text>
        </View>
      </View>

      {
        methods.map((i, ind) => (
          <View key={i.name} style={[indexstyle.methods, { width: "100%" }]}>
            <Image style={indexstyle.img} source={i.img} alt='img' />
            <Text style={indexstyle.methodsTxt}>{i.name}</Text>
          </View>
        ))
      }

      <Text style={indexstyle.or}>Or</Text>
      <Text style={[indexstyle.numberTxt,{width:"100%"}]}>Enter your mobile number</Text>

      <View style={[indexstyle.phoneContainer, { width: "100%" }]}>
        <View style={indexstyle.country}>
          <Text>US</Text>
        </View>
        <TextInput style={[indexstyle.input,{flex:1}]} placeholder='+91 2335665456'/>
      </View>

      <View style={[indexstyle.btn, { width: "100%" }]}>
        <Text onPress={()=>router.push("/driver/name")} style={indexstyle.btnTxt}>Continue</Text>
      </View>

    </View>
  )
}

export default RootLayout
