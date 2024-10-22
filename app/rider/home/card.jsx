import React from 'react'
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import style from '../../../style/rider/home/saved';
import BottomNav from '../../../components/BottomNav';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const card = () => {
    const router = useRouter()

    return (
        <View style={style.container}>

            <View style={{ paddingHorizontal: 20, paddingTop: 40, paddingBottom: 30, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                <AntDesign onPress={() => router.push("/rider/home/wallet")} name="arrowleft" size={24} color="black" />
                <Text style={{ fontSize: 16, fontWeight: 500 }}>Add payment method</Text>
                <Pressable><EvilIcons style={{ display: "none" }} name="search" size={24} color="black" /></Pressable>
            </View>

            <ScrollView contentContainerStyle={style.Scrollcontainer}>

                <View style={{ backgroundColor: "#fff", paddingVertical: 10, paddingHorizontal: 10, borderRadius: 10, marginHorizontal: 10 }}>
                    <Text style={{ marginBottom: 10, fontWeight: 600, fontSize: 17 }}>Add new card</Text>
                    <Text style={{ color: "#5C5C5C", marginBottom: 12 }}>Name of the place</Text>
                    <TextInput placeholder='John' style={{ width: "100%", backgroundColor: "#FAFAFA", color: "#C5C5C5", height: 40, borderRadius: 5, paddingHorizontal: 10 }} />
                    <Text style={{ color: "#5C5C5C", marginVertical: 12 }}>Card Number</Text>
                    <TextInput placeholder='xxxxxxxxxxxxxxxx' style={{ width: "100%", backgroundColor: "#FAFAFA", color: "#C5C5C5", height: 40, borderRadius: 5, paddingHorizontal: 10 }} />
                    <Text style={{ color: "#5C5C5C", marginVertical: 12 }}>Expiry Date</Text>
                    <TextInput placeholder='11/11' style={{ width: "100%", backgroundColor: "#FAFAFA", color: "#C5C5C5", height: 40, borderRadius: 5, paddingHorizontal: 10 }} />
                    <Text style={{ color: "#5C5C5C", marginVertical: 12 }}>CVV</Text>
                    <TextInput placeholder='xxx' style={{ width: "100%", backgroundColor: "#FAFAFA", color: "#C5C5C5", height: 40, borderRadius: 5, paddingHorizontal: 10 }} />

                    <Pressable onPress={() => router.push("/rider/home/fund")} style={{ backgroundColor: "#2666CF", borderRadius: 5, display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: 40,marginTop:12 }}>
                        <Text style={{ color: "#fff" }}>Save card</Text>
                    </Pressable>
                </View>

            </ScrollView>


            <BottomNav />

        </View>
    )
}

export default card