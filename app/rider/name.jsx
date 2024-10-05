import React from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import nameStyle from '../../style/rider/name'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';

const name = () => {
    return (
        <View style={nameStyle.container}>

            <Pressable onPress={()=>router.push("rider")} style={nameStyle.iconContainer}>
                <AntDesign onPress={()=>router.push("rider")} name="arrowleft" size={24} color="black" />
            </Pressable>

            <Text style={nameStyle.txt}>Confirm your information</Text>

            <Text style={nameStyle.label}>First Name</Text>
            <TextInput style={[nameStyle.input, { width: "100%" }]} placeholder='John' />

            <Text style={[nameStyle.label2]}>Last Name</Text>
            <TextInput style={[nameStyle.input, { width: "100%" }]} placeholder='Doe' />

            <View style={[nameStyle.btn, { width: "100%" }]}>
                <Text onPress={() => router.push("/rider/phone")} style={nameStyle.btnTxt}>Continue</Text>
            </View>

        </View>
    )
}

export default name
