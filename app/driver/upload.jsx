import React from 'react'
import {Pressable, Text, View } from 'react-native'
import nameStyle from '../../style/rider/phone'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';

const upload = () => {
    return (
        <View style={nameStyle.container}>

            <Pressable onPress={() => router.push("/driver/vehicle")} style={nameStyle.iconContainer}>
                <AntDesign onPress={() => router.push("/driver/vehicle")} name="arrowleft" size={24} color="black" />
            </Pressable>

            <Text style={nameStyle.txt}>Vehicle Information</Text>
            <Text style={{ color: "#71757b", marginTop: 2 }}>Upload clear and vivid Vehicle photos</Text>

            <View style={{ display: "flex", alignItems: "center", flexDirection: "row",marginTop:20 }}>

                <View style={{ display: "flex", justifyContent: "center", alignItems: "center", width: 70, height: 61, marginRight: 5, borderRadius: 5, borderWidth: 1, borderColor: "#E0E3FF", backgroundColor: "#F4F6FD" }}>
                    <FontAwesome6 name="plus" size={24} color="#2666CF" />
                </View>
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center", width: 70, height: 61, marginRight: 5, borderRadius: 5, borderWidth: 1, borderColor: "#E0E3FF", backgroundColor: "#F4F6FD" }}>
                    <FontAwesome6 name="plus" size={24} color="#2666CF" />
                </View>
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center", width: 70, height: 61, marginRight: 5, borderRadius: 5, borderWidth: 1, borderColor: "#E0E3FF", backgroundColor: "#F4F6FD" }}>
                    <FontAwesome6 name="plus" size={24} color="#2666CF" />
                </View>

            </View>

            <View style={[nameStyle.btn, { width: "100%" }]}>
                <Text onPress={() => router.push("/driver/review")} style={nameStyle.btnTxt}>Continue</Text>
            </View>

        </View>
    )
}

export default upload