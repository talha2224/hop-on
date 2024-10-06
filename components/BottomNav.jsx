import { AntDesign, FontAwesome6, Foundation, MaterialCommunityIcons } from '@expo/vector-icons'
import { useRoute } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import React from 'react'
import {  View } from 'react-native'
const BottomNav = () => {
    const route = useRoute();
    const router = useRouter();


    console.log(route.name,'route')

    return (
        <View style={{ position: "absolute", bottom: 2, backgroundColor: "white", width: "100%", paddingVertical: 10, paddingHorizontal: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
            <Foundation onPress={()=>router.push("rider/home/index")} name="home" size={24} color={route.name=="rider/home/index" ? "#2666CF":"#8D8C8C"} />
            <FontAwesome6 onPress={()=>router.push("rider/home/car")} name="car-on" size={24} color={route.name=="rider/home/car" ? "#2666CF":"#8D8C8C"} />
            <MaterialCommunityIcons onPress={()=>router.push("rider/home/wallet")} name="wallet-outline" size={24} color={route.name=="rider/home/wallet" ? "#2666CF":"#8D8C8C"} />
            <AntDesign onPress={()=>router.push("rider/home/profile")} name="user" size={24} color={route.name=="rider/home/profile" ? "#2666CF":"#8D8C8C"} />
        </View>
    )
}

export default BottomNav