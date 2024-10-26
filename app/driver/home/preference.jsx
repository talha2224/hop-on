import React from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import style from '../../../style/rider/home/notification2';
import BottomNav from '../../../components/BottomNav';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import onImage from '../../../assets/images/on.png';
import offImage from '../../../assets/images/off.png';
import { useRouter } from 'expo-router';


const preference = () => {
    const arr = [1, 2, 3]
    const router = useRouter()

    return (
        <View style={style.container}>

            <View style={{ paddingHorizontal: 20, paddingVertical: 30, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                <AntDesign onPress={() => router.push("/driver/home/account")} name="arrowleft" size={24} color="black" />
                <Text>Driver Prefference</Text>
                <View></View>
            </View>

            <ScrollView contentContainerStyle={style.Scrollcontainer}>


                <View style={{ backgroundColor: "#fff", paddingVertical: 10, paddingHorizontal: 1, borderRadius: 10, marginHorizontal: 10 }}>
                    <View style={{ marginBottom: 15, marginHorizontal: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                        <Text style={{ color: "#323232", marginBottom: 2 }}>Accept cash</Text>
                        <Image source={onImage} />
                    </View>
                    <View style={{ marginBottom: 15, marginHorizontal: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                        <Text style={{ color: "#323232", marginBottom: 2 }}>Auto accept ride</Text>
                        <Image source={offImage} />
                    </View>
                    <View style={{ marginBottom: 15, marginHorizontal: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                        <Text style={{ color: "#323232", marginBottom: 2 }}>Exclude low-rated rider</Text>
                        <Image source={offImage} />
                    </View>
                    <View style={{ marginBottom: 15, marginHorizontal: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                        <Text style={{ color: "#323232", marginBottom: 2 }}>Long distance trip</Text>
                        <Image source={onImage} />
                    </View>

                </View>

            </ScrollView>


            <BottomNav />

        </View>
    )
}

export default preference
