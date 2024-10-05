import React, { useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import nameStyle from '../../style/rider/prefernce'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';

const prefernce = () => {

    const [state, setState] = useState(0)
    return (
        <View style={nameStyle.container}>

            <Pressable onPress={() => router.push("/rider/name")} style={nameStyle.iconContainer}>
                <AntDesign onPress={() => router.push("/rider/phone")} name="arrowleft" size={24} color="black" />
            </Pressable>

            <Text style={nameStyle.txt}>Confirm your information</Text>

            <Text style={{ color: "#979292" }}>Choose your preferred ride type</Text>

            <View style={nameStyle.btnContainer}>
                <View style={state==0 ? nameStyle.btn1:nameStyle.btn2}>
                    <Text onPress={()=>setState(0)}>Economy</Text>
                </View>

                <View style={state==1 ? nameStyle.btn1:nameStyle.btn2}>
                    <Text onPress={()=>setState(1)}>Premium</Text>
                </View>

            </View>


            <View style={[nameStyle.btn, { width: "100%" }]}>
                <Text onPress={() => router.push("/rider/final")} style={nameStyle.btnTxt}>Continue</Text>
            </View>

        </View>
    )
}

export default prefernce

