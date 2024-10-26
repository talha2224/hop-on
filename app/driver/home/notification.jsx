import React from 'react'
import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import style from '../../../style/rider/home/notification';
import BottomNav from '../../../components/BottomNav2';
import { useRouter } from 'expo-router';
import { AntDesign, Entypo, EvilIcons, FontAwesome } from '@expo/vector-icons';
import { useTheme } from '../../../hooks/themeContext';

const notification = () => {
    const { isDarkTheme } = useTheme();
    const router = useRouter()
    return (
        <View style={isDarkTheme?style.containerDark:style.container}>

            <ScrollView contentContainerStyle={style.Scrollcontainer}>

                {/* TOP BAR  */}

                <View style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginTop: 30, paddingHorizontal: 15 }}>

                    <Pressable onPress={() => router.push("/rider/home")} style={isDarkTheme?style.iconContainerDark:style.iconContainer}>
                        <AntDesign onPress={() => router.push("/rider/home")} name="arrowleft" size={24} color={isDarkTheme?"white":"black"} />
                    </Pressable>

                    <Text style={{ color: isDarkTheme?"white":"#828080" }}>Notification</Text>

                    <EvilIcons name="search" size={24} color="black" />

                </View>

                {/* MAIN CONTENT  */}

                <View style={{ marginTop: 20, marginHorizontal: 15, backgroundColor: !isDarkTheme&&"#F9F9F9", padding: 10, flex: 1 }}>

                    <Text style={{ color: "#828080", marginBottom: 10 }}>Today</Text>

                    <View style={{ backgroundColor: isDarkTheme?"#292929":"#ffff", borderRadius: 15, padding: 10, marginTop: 10, display: "flex", alignItems: "center", flexDirection: "row" }}>

                        <View style={{ backgroundColor: "#EFF3FA", display: "flex", justifyContent: "center", alignItems: "center", width: 30, height: 30, borderRadius: 100, marginRight: 10 }}>
                            <FontAwesome name="picture-o" size={18} color="#292D32" />
                        </View>

                        <View>
                            <Text style={{color:isDarkTheme&&"white"}}>Your account has been booked</Text>
                            <Text style={{ color: "#828080", marginTop: 3, flexWrap: "wrap", }} numberOfLines={2} ellipsizeMode="tail">Your order GF36EDBC has just arr...</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor:isDarkTheme?"#292929":"#ffff", borderRadius: 15, padding: 10, marginTop: 10, display: "flex", alignItems: "center", flexDirection: "row" }}>

                        <View style={{ backgroundColor: "#FD4747", display: "flex", justifyContent: "center", alignItems: "center", width: 30, height: 30, borderRadius: 100, marginRight: 10 }}>
                            <Entypo name="cross" size={24} color="white" />
                        </View>

                        <View>
                            <Text style={{color:isDarkTheme&&"white"}}>Your account has been booked</Text>
                            <Text style={{ color: "#828080", marginTop: 3, flexWrap: "wrap", }} numberOfLines={2} ellipsizeMode="tail">Your order GF36EDBC has just arr...</Text>
                        </View>

                    </View>


                    <Text style={{ color: "#828080", marginBottom: 10 }}>Yesterday</Text>

                    <View style={{ backgroundColor: isDarkTheme?"#292929":"#ffff", borderRadius: 15, padding: 10, marginTop: 10, display: "flex", alignItems: "center", flexDirection: "row" }}>

                        <View style={{ backgroundColor: "#EFF3FA", display: "flex", justifyContent: "center", alignItems: "center", width: 30, height: 30, borderRadius: 100, marginRight: 10 }}>
                            <Text>✅</Text>
                        </View>

                        <View>
                            <Text style={{color:isDarkTheme&&"white"}}>Your account has been booked</Text>
                            <Text style={{ color: "#828080", marginTop: 3, flexWrap: "wrap", }} numberOfLines={2} ellipsizeMode="tail">Your order GF36EDBC has just arr...</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: isDarkTheme?"#292929":"#ffff", borderRadius: 15, padding: 10, marginTop: 10, display: "flex", alignItems: "center", flexDirection: "row" }}>

                        <View style={{ backgroundColor: "#FD4747", display: "flex", justifyContent: "center", alignItems: "center", width: 30, height: 30, borderRadius: 100, marginRight: 10 }}>
                            <Entypo name="cross" size={24} color="white" />
                        </View>

                        <View>
                            <Text style={{color:isDarkTheme&&"white"}}>Your account has been booked</Text>
                            <Text style={{ color: "#828080", marginTop: 3, flexWrap: "wrap", }} numberOfLines={2} ellipsizeMode="tail">Your order GF36EDBC has just arr...</Text>
                        </View>

                    </View>


                </View>



            </ScrollView>




            <BottomNav />
        </View>
    )
}

export default notification
