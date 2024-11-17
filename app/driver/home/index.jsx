import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View, Pressable } from 'react-native';
import style from '../../../style/rider/home/home';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import UserImage from '../../../assets/images/user.png';
import CarImage from '../../../assets/images/car.png';
import LocationImage from '../../../assets/images/location.png';
import OnboardImage from '../../../assets/images/onboard.png';
import OfflineImage from '../../../assets/images/offline.png';
import OnlineImage from '../../../assets/images/online.png';
import BottomNav from '../../../components/BottomNav';
import { useRouter } from 'expo-router';
import { AntDesign, Feather } from '@expo/vector-icons';
import GroupImage from '../../../assets/images/group.png';
import BottomNav2 from '../../../components/BottomNav2';
import { useTheme } from '../../../hooks/themeContext';

const darkMapStyle = [
    {
      elementType: 'geometry',
      stylers: [{ color: '#212121' }],
    },
    {
      elementType: 'labels.icon',
      stylers: [{ visibility: 'off' }],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [{ color: '#757575' }],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#212121' }],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry',
      stylers: [{ color: '#757575' }],
    },
    {
      featureType: 'administrative.country',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#9e9e9e' }],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#bdbdbd' }],
    },
    {
      featureType: 'road',
      elementType: 'geometry.fill',
      stylers: [{ color: '#2c2c2c' }],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#8a8a8a' }],
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [{ color: '#373737' }],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{ color: '#3c3c3c' }],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#212121' }],
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'geometry',
      stylers: [{ color: '#4e4e4e' }],
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#616161' }],
    },
    {
      featureType: 'transit',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#757575' }],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#000000' }],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#3d3d3d' }],
    },
  ];
  


const index = () => {
    const router = useRouter()
    const [mapRegion, setMapRegion] = useState({ latitude: 37.78825, longitude: -122.4325, latitudeDelta: 0.0922, longitudeDelta: 0.0421 });
    const [drivers, setDrivers] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);
    const [activeStatus, setactiveStatus] = useState('off')
    const [accept, setAccept] = useState(false);
    const [end, setEnd] = useState(false)
    const { isDarkTheme} = useTheme();

    const userLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setMapRegion({
            latitude: location?.coords?.latitude || 100.78825,
            longitude: location?.coords?.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        });

        // Example: Generate random driver locations for testing
        const generatedDrivers = Array.from({ length: 5 }).map((_, index) => ({
            id: index, // Unique identifier for each driver
            latitude: location?.coords?.latitude ||100.78825  + (Math.random() * 0.02 - 0.01), // Random offset for testing
            longitude: location?.coords?.longitude + (Math.random() * 0.02 - 0.01)
        }));

        setDrivers(generatedDrivers); // Set generated drivers
    };

    useEffect(() => {
        userLocation();
    }, []);

    return (
        <View style={isDarkTheme?style.containerDark:style.container}>


            <ScrollView contentContainerStyle={style.Scrollcontainer}>

                {/* TOPBAR  */}
                <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row", paddingHorizontal: 20, paddingVertical: 20 }}>

                    <Image source={UserImage} />

                    <View style={{ flexDirection: "row", alignItems: "center", backgroundColor:isDarkTheme?"#333333":"#F4F4F4", borderRadius: 20, height: 30, width: "auto" }}>
                        <View style={{ marginLeft: 10, marginRight: 10 }}>
                            <Text style={isDarkTheme?style.btn2TxtDark:style.btn2Txt}>Rider</Text>
                        </View>
                        <View style={{ backgroundColor: "#FFFF", paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20, marginRight: 10 }}>
                            <Text>Driver</Text>
                        </View>
                    </View>

                    <Image source={LocationImage} style={{ marginRight: -25 }} />


                </View>

                {/* MAP */}
                {
                    activeStatus == "off" ?
                        <MapView style={style.map} region={mapRegion} showsUserLocation showsMyLocationButton={false} customMapStyle={isDarkTheme&&darkMapStyle}>

                            {
                                activeStatus !== "off" && (
                                    <Marker coordinate={mapRegion}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Image source={UserImage} />
                                        </View>
                                    </Marker>
                                )
                            }

                            {drivers.map(driver => (
                                <Marker key={driver.id} coordinate={{ latitude: driver?.latitude, longitude: driver?.longitude }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Image source={CarImage} style={{ width: 40, height: 40 }} />
                                    </View>
                                </Marker>
                            ))}
                        </MapView> :
                        <MapView style={style.map} region={mapRegion} showsUserLocation showsMyLocationButton={false} customMapStyle={isDarkTheme&&darkMapStyle}>

                            <Marker coordinate={mapRegion}>
                                <View style={{ alignItems: 'center' }}>
                                    <Image source={UserImage} />
                                </View>
                            </Marker>

                            <Marker coordinate={{ latitude: drivers[0]?.latitude, longitude: drivers[0]?.longitude }}>
                                <View style={{ alignItems: 'center' }}>
                                    <Image source={CarImage} style={{ width: 40, height: 40 }} />
                                </View>
                            </Marker>

                            <Polyline coordinates={[{ latitude: mapRegion?.latitude, longitude: mapRegion.longitude }, { latitude: drivers[0]?.latitude, longitude: drivers[0]?.longitude }]} strokeColor="black" strokeWidth={1} />
                        </MapView>
                }

                {/* OBOARD  */}
                {
                    activeStatus == "off" && (
                        <View style={{ position: "absolute", top: 130, left: 0, height: 100, width: "93%", backgroundColor: "#2666CF", marginLeft: 15, marginRight: 15, borderRadius: 10, padding: 5, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                            <View>
                                <Text style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>Welcome Onboard</Text>
                                <Text style={{ color: "#B5D1FF", marginTop: 2 }}>Demand in your area is high, turn on</Text>
                                <Text style={{ color: "#B5D1FF" }}> the active toggle to start earning </Text>
                            </View>
                            <View>
                                <Image source={OnboardImage} />
                            </View>
                        </View>
                    )
                }


                {/* CARD  */}
                {
                    activeStatus == "on" && accept !== null && (
                        <View style={{ width: "100%", position: "absolute", bottom: 150, left: 0, zIndex: 999, display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <View style={[{ width: "90%", backgroundColor:isDarkTheme?"#13182F":"#fff", padding: 10, borderRadius: 10, justifyContent: "center", alignItems: "center" }]}>

                                <View style={{ marginTop: 10, justifyContent: "space-between", alignItems: "center", flexDirection: "row", backgroundColor: !isDarkTheme&&"#FAFAFA", padding: 10, width: "95%", marginVertical: 10 }}>

                                    <View style={{ alignItems: "center", flexDirection: "row" }}>
                                        <Image source={UserImage} />
                                        <View style={{ marginLeft: 10 }}>
                                            <Text style={{color:isDarkTheme&&"white"}}>Daniel Graver</Text>
                                            <View style={{ display: "flex", flexDirection: "row", marginTop: 2 }}>
                                                <AntDesign name="star" size={14} style={{ marginRight: 2 }} color="#51D476" />
                                                <AntDesign name="star" size={14} style={{ marginRight: 2 }} color="#51D476" />
                                                <AntDesign name="star" size={14} style={{ marginRight: 2 }} color="#51D476" />
                                                <AntDesign name="star" size={14} style={{ marginRight: 2 }} color="#E4E4E4" />
                                                <AntDesign name="star" size={14} style={{ marginRight: 2 }} color="#E4E4E4" />

                                            </View>
                                        </View>
                                    </View>

                                </View>

                                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 2, width: "100%" }}>
                                    <Text style={{ color: "#88898a" }}>Pick up location</Text>
                                    <Text style={{ fontWeight: "600",color:isDarkTheme&&"white" }}>23142, James crescent...</Text>
                                </View>
                                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 5, width: "100%" }}>
                                    <Text style={{ color: "#88898a" }}>Fare estimate</Text>
                                    <Text style={{ fontWeight: "600",color:isDarkTheme&&"white" }}>$120</Text>
                                </View>

                                {
                                    accept ?
                                        <View style={[{ width: "100%", backgroundColor: "#2666CF", height: 40, justifyContent: "center", alignItems: "center", marginTop: 20, borderRadius: 5 }]}>
                                            <Text onPress={() => { setAccept(null); setEnd(true) }} style={{ color: "#ffff", fontWeight: "bold", fontSize: 15 }}>Arrive </Text>
                                        </View> :
                                        <View style={[{ width: "100%", backgroundColor: "#2666CF", height: 40, justifyContent: "center", alignItems: "center", marginTop: 20, borderRadius: 5 }]}>
                                            <Text onPress={() => setAccept(true)} style={{ color: "#ffff", fontWeight: "bold", fontSize: 15 }}>Click to accept </Text>
                                        </View>
                                }



                            </View>
                        </View>
                    )
                }

                {
                    end && (
                        <View style={[style.popupContainer, { width: "100%", height: "100%" }]}>
                            <View style={[style.popuDark2, { width: "90%" }]}>

                                <View style={{ backgroundColor: "#EBF9EF", display: "flex", justifyContent: "center", alignItems: "center", padding: 15, width: "100%" }}>

                                    <Text style={{ color: "#1b4949", fontSize: 16, fontWeight: "600" }}>Ride Completed</Text>

                                </View>


                                <View style={{ alignItems: "center", flexDirection: "row", width: "100%" }}>
                                    <Image source={GroupImage} />
                                    <View style={{ marginLeft: 20 }}>
                                        <Text style={{ marginTop: 10,color:isDarkTheme&&"white" }}>Cinema</Text>
                                        <Text style={{ color: "#A0A1A3", marginTop: 5 }}>310, Jane Ave, Maryland</Text>
                                        <Text style={{ marginTop: 10,color:isDarkTheme&&"white" }}>Jekad Store</Text>
                                        <Text style={{ color: "#A0A1A3", marginTop: 5 }}>310, Jane Ave, Maryland</Text>
                                    </View>
                                </View>


                                <View style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 5, flexDirection: "row", backgroundColor: "#F4F3F3", marginTop: 8, borderRadius: 5, width: "100%" }}>
                                    <Text style={{ color: "#2666cf", fontSize: 13 }}>14th September, 2024</Text>
                                    <Text style={{ color: "#2666cf", fontSize: 13 }}>7.7KM (1 Hour 30 mins)</Text>
                                </View>

                                <Text style={{ width: "100%", textAlign: "center", marginVertical: 10, color:isDarkTheme?"white":"#6B6C6D" }}>Leave a review</Text>

                                <View style={{ display: "flex", flexDirection: "row",width:"100%",justifyContent:"center" }}>
                                    <AntDesign name="star" size={18} style={{ marginRight: 2 }} color="#51D476" />
                                    <AntDesign name="star" size={19} style={{ marginRight: 2 }} color="#51D476" />
                                    <AntDesign name="star" size={18} style={{ marginRight: 2 }} color="#51D476" />
                                    <AntDesign name="star" size={18} style={{ marginRight: 2 }} color="#E4E4E4" />
                                    <AntDesign name="star" size={18} style={{ marginRight: 2 }} color="#E4E4E4" />

                                </View>

                                <View style={[{ width: "100%", backgroundColor: "#2666CF", height: 40, justifyContent: "center", alignItems: "center", marginTop: 20, borderRadius: 5 }]}>
                                            <Text onPress={() =>{setEnd(false);setactiveStatus("off")}} style={{ color: "#ffff", fontWeight: "bold", fontSize: 15 }}>Submit</Text>
                                        </View>


                            </View>
                        </View>
                    )
                }


                {/* TOOGLE  */}
                <View style={{ width: "100%", position: "absolute", bottom: 70, left: 0, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Pressable onPress={() => setactiveStatus(activeStatus == "on" ? "off" : "on")}>
                        <Image source={activeStatus == "on" ? OnlineImage : OfflineImage} />
                    </Pressable>
                </View>


            </ScrollView>
            <BottomNav2 />




        </View>
    );
};

export default index;
