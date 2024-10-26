import React from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import style from '../../../style/rider/home/saved';
import BottomNav from '../../../components/BottomNav';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import home2Image from '../../../assets/images/Visa.png';
import office2Image from '../../../assets/images/Visa.png';
import automaticImage from '../../../assets/images/automatic.png';
import msgImage from '../../../assets/images/msg.png';
import paypalImage from '../../../assets/images/paypal.png';
import { useRouter } from 'expo-router';

const payment = () => {
    const arr = [1, 2]
    const router = useRouter()

    return (
        <View style={style.container}>

            <View style={{ paddingHorizontal: 20, paddingTop: 40, paddingBottom: 30, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                <AntDesign onPress={() => router.push("/driver/home/account")} name="arrowleft" size={24} color="black" />
                <Text style={{ fontSize: 16, fontWeight: 500 }}>Payments</Text>
                <View></View>
            </View>

            <ScrollView contentContainerStyle={style.Scrollcontainer}>

                <View style={{ backgroundColor: "#fff", paddingVertical: 10, paddingHorizontal: 1, borderRadius: 10, marginHorizontal: 10 }}>

                    <View style={{ marginBottom: 15, marginHorizontal: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                        <View style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
                            <View style={{ backgroundColor: "#F2F2F2", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 200, width: 32, height: 32, marginRight: 5 }}>
                                <Image source={automaticImage} />
                            </View>
                            <View style={{ marginLeft: 13 }}>
                                <Text style={{ color: "#454f60", marginBottom: 0 }}>Bank account</Text>
                                <Text style={{ color: "#a3a6a5" }}>Receive payout once a week</Text>
                            </View>
                        </View>
                        <AntDesign name="arrowright" size={20} color="#292D32" />
                    </View>


                    <View style={{ marginBottom: 15, marginHorizontal: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                        <View style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
                            <View style={{ backgroundColor: "#F2F2F2", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 200, width: 32, height: 32, marginRight: 5 }}>
                                <Image source={msgImage} />
                            </View>
                            <View style={{ marginLeft: 13 }}>
                                <Text style={{ color: "#454f60", marginBottom: 0 }}>Debit card</Text>
                                <Text style={{ color: "#a3a6a5" }}>Receive earnings instantly</Text>
                            </View>
                        </View>
                        <AntDesign name="arrowright" size={20} color="#292D32" />
                    </View>






                </View>

            </ScrollView>


            <BottomNav />

        </View>
    )
}

export default payment