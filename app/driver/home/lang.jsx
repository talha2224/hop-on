import React from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import style from '../../../style/rider/home/saved';
import BottomNav from '../../../components/BottomNav';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import home2Image from '../../../assets/images/checkon.png';
import office2Image from '../../../assets/images/checkoff.png';
import { useRouter } from 'expo-router';


const lang = () => {
    const arr = [1, 2, 3, 4]
    const router = useRouter()

    return (
        <View style={style.container}>

            <View style={{ paddingHorizontal: 20, paddingVertical: 30, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                <AntDesign onPress={() => router.push("/driver/home/account")} name="arrowleft" size={24} color="black" />
                <Text>Languages</Text>
                <Pressable ><EvilIcons name="search" size={24} color="black" /></Pressable>
            </View>

            <ScrollView contentContainerStyle={style.Scrollcontainer}>

                <View style={{ backgroundColor: "#fff", paddingVertical: 10, paddingHorizontal: 1, borderRadius: 10, marginHorizontal: 10 }}>
                    <View style={{ marginBottom: 15, marginHorizontal: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", borderBottomColor: "#F9F9F9", borderBottomWidth: 1, paddingBottom: 10 }}>
                        <Text style={{ color: "#323232", marginBottom: 2 }}>English</Text>
                        <Image style={{ width: 15, height: 15 }} source={home2Image}/>
                    </View>
                    <View style={{ marginBottom: 15, marginHorizontal: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", borderBottomColor: "#F9F9F9", borderBottomWidth: 1, paddingBottom: 10 }}>
                        <Text style={{ color: "#323232", marginBottom: 2 }}>French</Text>
                        <Image style={{ width: 15, height: 15 }} source={office2Image}/>
                    </View>
                    <View style={{ marginBottom: 15, marginHorizontal: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", borderBottomColor: "#F9F9F9", borderBottomWidth: 1, paddingBottom: 10 }}>
                        <Text style={{ color: "#323232", marginBottom: 2 }}>Russian</Text>
                        <Image style={{ width: 15, height: 15 }} source={office2Image}/>
                    </View>
                    <View style={{ marginBottom: 15, marginHorizontal: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", borderBottomColor: "#F9F9F9", borderBottomWidth: 1, paddingBottom: 10 }}>
                        <Text style={{ color: "#323232", marginBottom: 2 }}>German</Text>
                        <Image style={{ width: 15, height: 15 }} source={office2Image}/>
                    </View>
                    <View style={{ marginBottom: 15, marginHorizontal: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", borderBottomColor: "#F9F9F9", borderBottomWidth: 1, paddingBottom: 10 }}>
                        <Text style={{ color: "#323232", marginBottom: 2 }}>Korean</Text>
                        <Image style={{ width: 15, height: 15 }} source={office2Image}/>
                    </View>
                    <View style={{ marginBottom: 15, marginHorizontal: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", borderBottomColor: "#F9F9F9", borderBottomWidth: 1, paddingBottom: 10 }}>
                        <Text style={{ color: "#323232", marginBottom: 2 }}>Chineese</Text>
                        <Image style={{ width: 15, height: 15 }} source={office2Image}/>
                    </View>
                    <View style={{ marginBottom: 15, marginHorizontal: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", borderBottomColor: "#F9F9F9", borderBottomWidth: 1, paddingBottom: 10 }}>
                        <Text style={{ color: "#323232", marginBottom: 2 }}>Ukraine</Text>
                        <Image style={{ width: 15, height: 15 }} source={office2Image}/>
                    </View>
                    <View style={{ marginBottom: 15, marginHorizontal: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", borderBottomColor: "#F9F9F9", borderBottomWidth: 1, paddingBottom: 10 }}>
                        <Text style={{ color: "#323232", marginBottom: 2 }}>Spanish</Text>
                        <Image style={{ width: 15, height: 15 }} source={office2Image}/>
                    </View>
                    <View style={{ marginBottom: 15, marginHorizontal: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", borderBottomColor: "#F9F9F9", borderBottomWidth: 1, paddingBottom: 10 }}>
                        <Text style={{ color: "#323232", marginBottom: 2 }}>Arabic</Text>
                        <Image style={{ width: 15, height: 15 }} source={office2Image}/>
                    </View>

                </View>

            </ScrollView>


            <BottomNav />

        </View>
    )
}

export default lang
