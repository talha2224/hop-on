import React from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import nameStyle from '../../style/rider/phone'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';

const phone = () => {
    return (
        <View style={nameStyle.container}>

            <Pressable onPress={() => router.push("/rider/name")} style={nameStyle.iconContainer}>
                <AntDesign onPress={() => router.push("/rider/name")} name="arrowleft" size={24} color="black" />
            </Pressable>

            <Text style={nameStyle.txt}>Confirm your information</Text>


            <View style={[nameStyle.phoneContainer, { width: "100%" }]}>
                <View style={nameStyle.country}>
                    <Text>US</Text>
                </View>
                <TextInput style={[nameStyle.input, { flex: 1 }]} placeholder='+91 2335665456' />
            </View>


            <View style={[nameStyle.btn, { width: "100%" }]}>
                <Text onPress={() => router.push("/rider/prefernce")} style={nameStyle.btnTxt}>Continue</Text>
            </View>

        </View>
    )
}

export default phone
