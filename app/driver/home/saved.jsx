import React from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import style from '../../../style/rider/home/saved';
import BottomNav from '../../../components/BottomNav';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import home2Image from '../../../assets/images/home2.png';
import office2Image from '../../../assets/images/office2.png';
import { useRouter } from 'expo-router';

const saved = () => {
    const arr = [1, 2, 3,4]
    const router = useRouter()

    return (
        <View style={style.container}>

            <View style={{ paddingHorizontal: 20, paddingVertical: 30, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                <AntDesign onPress={() => router.push("/driver/home/account")} name="arrowleft" size={24} color="black" />
                <Text>Saved places</Text>
                <View></View>
            </View>

            <ScrollView contentContainerStyle={style.Scrollcontainer}>

                <View style={{ backgroundColor: "#fff", paddingVertical: 10, paddingHorizontal: 1, borderRadius: 10, marginHorizontal: 10 }}>
                    {
                        arr.map((i) => (
                            <View key={i} style={{ marginBottom: 15, marginHorizontal: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                                <View style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
                                    <View style={{ backgroundColor: "#F2F2F2", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 200, width: 32, height: 32, marginRight: 5 }}>
                                        <Image source={i%2==0 ? home2Image :office2Image} />
                                    </View>
                                    <View style={{ marginLeft: 3 }}>
                                        <Text style={{ color: "#323232", marginBottom: 2 }}>{i%2==0 ? "Home" :"Office"}</Text>
                                        <Text style={{ color: "#000000" }}>Studio 10 Joke Stream</Text>
                                    </View>
                                </View>
                                <AntDesign name="edit" size={24} color="#747C88" />

                            </View>
                        ))
                    }

                </View>

            </ScrollView>


            <BottomNav />

        </View>
    )
}

export default saved
