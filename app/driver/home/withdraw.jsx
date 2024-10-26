import React from 'react'
import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import style from '../../../style/rider/home/saved';
import BottomNav from '../../../components/BottomNav';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import home2Image from '../../../assets/images/Visa.png';
import office2Image from '../../../assets/images/Visa.png';
import automaticImage from '../../../assets/images/automatic.png';
import msgImage from '../../../assets/images/msg.png';
import paypalImage from '../../../assets/images/paypal.png';
import checkoffImage from '../../../assets/images/checkoff.png';

import { useRouter } from 'expo-router';

const withdraw = () => {
    const arr = [1]
    const router = useRouter()

    return (
        <View style={style.container}>

            <View style={{ paddingHorizontal: 20, paddingTop: 40, paddingBottom: 30, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                <AntDesign onPress={() => router.push("/driver/home/earning")} name="arrowleft" size={24} color="black" />
                <Text style={{ fontSize: 16, fontWeight: 500 }}>Withdraw</Text>
                <Pressable><EvilIcons style={{ display: "none" }} name="search" size={24} color="black" /></Pressable>
            </View>

            <ScrollView contentContainerStyle={[style.Scrollcontainer, { display: "flex", alignItems: "center", paddingHorizontal: 20 }]}>

                <Text style={{ color: "#aeabab", marginVertical: 20 }}>Amount to withdraw</Text>


                <View style={{ backgroundColor: "#F1F1F1", padding: 10, marginRight: 10, borderRadius: 10, justifyContent: "center", alignItems: "center", width: "50%", height: 60 }}>
                    <Text>17,000.78</Text>
                </View>


                <View style={{ marginTop: 10, justifyContent: "space-between", alignItems: "center", flexDirection: "row", padding: 10, width: "95%", margin: 10 }}>
                    <View style={{ backgroundColor: "#F1F1F1", padding: 10, marginRight: 10, borderRadius: 10, justifyContent: "center", alignItems: "center", width: 70 }}>
                        <Text>$5</Text>
                    </View>
                    <View style={{ backgroundColor: "#F1F1F1", padding: 10, marginRight: 10, borderRadius: 10, justifyContent: "center", alignItems: "center", width: 70 }}>
                        <Text>$10</Text>
                    </View>
                    <View style={{ backgroundColor: "#F1F1F1", padding: 10, marginRight: 10, borderRadius: 10, justifyContent: "center", alignItems: "center", width: 70 }}>
                        <Text>$15</Text>
                    </View>
                    <View style={{ backgroundColor: "#F1F1F1", padding: 10, marginRight: 10, borderRadius: 10, justifyContent: "center", alignItems: "center", width: 70 }}>
                        <Text>$20</Text>
                    </View>
                </View>

                <Pressable onPress={() => router.push("/rider/home/card")} style={{ marginVertical: 10, paddingBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", borderBottomColor: "#F8F8F8", borderBottomWidth: 1, width: "100%" }}>
                    <View style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
                        <View style={{ backgroundColor: "#EAEDFF", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 2, width: 32, height: 32, marginRight: 5 }}>
                            <Image source={automaticImage} />
                        </View>
                        <View style={{ marginLeft: 3 }}>
                            <Text style={{ color: "#454f69", marginBottom: 2 }}>Paypal</Text>
                        </View>
                    </View>

                    <Image source={checkoffImage} />

                </Pressable>

                <Pressable onPress={() => router.push("/rider/home/card")} style={{ marginVertical: 10, paddingBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", borderBottomColor: "#F8F8F8", borderBottomWidth: 1, width: "100%" }}>
                    <View style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
                        <View style={{ backgroundColor: "#EAEDFF", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 2, width: 32, height: 32, marginRight: 5 }}>
                            <Image source={msgImage} />
                        </View>
                        <View style={{ marginLeft: 3 }}>
                            <Text style={{ color: "#454f69", marginBottom: 2 }}>Payoneer</Text>
                        </View>
                    </View>

                    <Image source={checkoffImage} />


                </Pressable>


                <Pressable onPress={() => router.push("/rider/home/card")} style={{ marginVertical: 10, paddingBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", borderBottomColor: "#F8F8F8", borderBottomWidth: 1, width: "100%" }}>
                    <View style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
                        <View style={{ backgroundColor: "#EAEDFF", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 200, width: 32, height: 32, marginRight: 5 }}>
                            <Image source={paypalImage} />
                        </View>
                        <View style={{ marginLeft: 3 }}>
                            <Text style={{ color: "#454f69", marginBottom: 2 }}>Local Bank</Text>
                        </View>

                    </View>

                    <Image source={checkoffImage} />


                </Pressable>

                <Pressable onPress={() => router.push("/driver/home/confirmation")} style={{ backgroundColor: "#2666CF", borderRadius: 5, display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: 40, marginTop: 12 }}>
                    <Text style={{ color: "#fff" }}>Continue</Text>
                </Pressable>

            </ScrollView>

        </View>
    )
}

export default withdraw