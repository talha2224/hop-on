import React from 'react'
import { Image, StatusBar, Text, View } from 'react-native'
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import GroupImage from '../../../assets/images/group.png';
import { useTheme } from '../../../hooks/themeContext';

const feedback = () => {
    const { isDarkTheme } = useTheme();
    const router = useRouter()
    const data = [1, 2, 3, 4, 5]

    return (
        <View style={{ backgroundColor:isDarkTheme?"black":"#fcfdff", flex: 1, alignItems: "center" }}>

            <StatusBar hidden={true} />

            <View style={{ backgroundColor:isDarkTheme?"#2E2D2D": "black", width: "100%", paddingBottom: 10, }}>
                <Text style={{ textAlign: "center", color: "white", marginBottom: 10, fontWeight: "800", fontSize: 16, marginTop: 30 }}>Thanks for riding, Flora</Text>
                <Text style={{ color: "#aeaeae", textAlign: "center" }}>We hope you enjoyed your trip</Text>
            </View>


            <View style={{ marginTop: 10, backgroundColor:isDarkTheme?"#292929":"#FAFAFA", padding: 10, width: "95%", margin: 10,borderRadius:isDarkTheme&&10 }}>

                <View style={{ alignItems: "center", flexDirection: "row", marginHorizontal: 20 }}>
                    <Image source={GroupImage} />
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ marginTop: 10,color:isDarkTheme&&'white' }}>Cinema</Text>
                        <Text style={{ color: "#A0A1A3", marginTop: 5 }}>310, Jane Ave, Maryland</Text>
                        <Text style={{ marginTop: 10,color:isDarkTheme&&'white' }}>Jekad Store</Text>
                        <Text style={{ color: "#A0A1A3", marginTop: 5 }}>310, Jane Ave, Maryland</Text>
                    </View>
                </View>

                <Text style={{ color: isDarkTheme?"white":"#2666cf", marginHorizontal: 20, marginTop: 10 }}>14th September, 2024</Text>



            </View>


            <Text style={{ textAlign: "center", color: "#727272", marginVertical: 10 }}>How would you rate the driver?</Text>
            <View style={{ flexDirection: "row",justifyContent:"center",alignItems:"center" }}>
                {
                    data.map((i) => (
                        <AntDesign key={i} name="star" size={15} color={i < 4 ? "#51D476" : "#E4E4E4"} style={{ marginTop: 5, marginRight: 3 }} />
                    ))
                }
            </View>

            <Text style={{ textAlign: "center", color:isDarkTheme?"white":"#727272", marginVertical: 10 }}>Add a tip for daniel</Text>


            

            <View style={{ marginTop: 10, justifyContent: "space-between", alignItems: "center", flexDirection: "row", padding: 10, width: "95%", margin: 10 }}>
                <View style={{ backgroundColor:isDarkTheme?"#292929":"#F1F1F1", padding: 10, marginRight: 10, borderRadius: 10, justifyContent: "center", alignItems: "center", width: 70 }}>
                    <Text style={{color:isDarkTheme&&"white"}}>$5</Text>
                </View>
                <View style={{ backgroundColor:isDarkTheme?"#292929":"#F1F1F1", padding: 10, marginRight: 10, borderRadius: 10, justifyContent: "center", alignItems: "center", width: 70 }}>
                    <Text style={{color:isDarkTheme&&"white"}}>$10</Text>
                </View>
                <View style={{ backgroundColor:isDarkTheme?"#292929":"#F1F1F1", padding: 10, marginRight: 10, borderRadius: 10, justifyContent: "center", alignItems: "center", width: 70 }}>
                    <Text style={{color:isDarkTheme&&"white"}}>$15</Text>
                </View>
                <View style={{ backgroundColor:isDarkTheme?"#292929":"#F1F1F1", padding: 10, marginRight: 10, borderRadius: 10, justifyContent: "center", alignItems: "center", width: 70 }}>
                    <Text style={{color:isDarkTheme&&"white"}}>$20</Text>
                </View>
            </View>

            <View style={{ backgroundColor: "#2666cf", width: "95%", height: 40, justifyContent: "center", alignItems: "center", marginVertical: 13, borderRadius: 8 }}>
                <Text onPress={() => router.push("/rider/home")} style={{ color: "#fff" }}>Done</Text>
            </View>

        </View>
    )
}

export default feedback