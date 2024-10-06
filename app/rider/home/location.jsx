import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import style from '../../../style/rider/home/location';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import UserImage from '../../../assets/images/user.png';
import CarImage from '../../../assets/images/car.png';
import OldImage from '../../../assets/images/old.png';
import GroupImage from '../../../assets/images/group.png';
import AlertImage from '../../../assets/images/alert.png';

import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


const Index = () => {
    const router = useRouter()
    const [mapRegion, setMapRegion] = useState({ latitude: 37.78825, longitude: -122.4325, latitudeDelta: 0.0922, longitudeDelta: 0.0421 });
    const [drivers, setDrivers] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);
    const [showLocation, setShowLocation] = useState(true)
    const [count, setCount] = useState(0)
    const data = [1, 2, 3, 4, 5]
    const [singleCar, setSingleCar] = useState(false)
    const [pay, setPay] = useState(false)
    const [detailView, setDetailView] = useState(false)
    const [end, setEnd] = useState(false)
    const [confirm, setConfirm] = useState(false)


    const userLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setMapRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        });

        // Example: Generate random driver locations for testing
        const generatedDrivers = Array.from({ length: 5 }).map((_, index) => ({
            id: index, // Unique identifier for each driver
            latitude: location.coords.latitude + (Math.random() * 0.02 - 0.01), // Random offset for testing
            longitude: location.coords.longitude + (Math.random() * 0.02 - 0.01)
        }));

        setDrivers(generatedDrivers); // Set generated drivers
    };

    useEffect(() => {
        userLocation();
    }, []);

    return (
        <View style={style.container}>


            <ScrollView contentContainerStyle={style.Scrollcontainer}>

                {/* TOPBAR  */}

                {
                    (!showLocation && count == 1) && (
                        <View style={style.topBar}>

                            <AntDesign onPress={() => router.push("/rider/home")} name="arrowleft" size={24} color="black" />

                            <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "white", paddingVertical: 5, borderRadius: 20, paddingHorizontal: 10 }}>
                                <MaterialCommunityIcons name="target" size={24} color="black" />
                                <Text style={{ marginLeft: 10 }}>Location</Text>
                            </View>


                        </View>
                    )
                }

                {
                    showLocation && count == 0 && (
                        <View style={{ padding: 20, position: "relative", flex: 1 }}>
                            <AntDesign onPress={() => router.push("/rider/home")} name="arrowleft" size={24} color="black" />

                            <Text style={{ marginTop: 10, color: "#A0A1A3" }}>Current Address</Text>
                            <TextInput placeholder='Earthcare scapes church god' style={{ marginTop: 5, borderBottomWidth: 1, height: 40, borderBottomColor: "#A0A1A3" }} />
                            <Text style={{ marginTop: 10, color: "#A0A1A3" }}>Drop Off</Text>
                            <TextInput placeholder='Earthcare scapes church god' style={{ marginTop: 5, borderBottomWidth: 1, borderBottomColor: "#A0A1A3" }} />

                            {
                                data.map((i) => (
                                    <View key={i} style={{ display: "flex", alignItems: "center", flexDirection: "row", marginTop: 10 }}>
                                        <Image source={OldImage} />
                                        <Text style={{ color: "#71757b", marginLeft: 8 }}>Cinema</Text>
                                    </View>
                                ))
                            }

                            <View style={{ backgroundColor: "#2666cf", width: "100%", height: 40, justifyContent: "center", alignItems: "center", marginTop: 10, borderRadius: 8, position: "absolute", bottom: 40, left: 20 }}>
                                <Text onPress={() => setCount(1)} style={{ color: "#fff" }}>Confirm location</Text>
                            </View>
                        </View>
                    )
                }

                {
                    (showLocation && count == 1 && !singleCar) && (
                        <View style={{ flex: 1 }}>
                            <AntDesign style={{ paddingTop: 20, paddingHorizontal: 20 }} onPress={() => router.push("/rider/home")} name="arrowleft" size={24} color="black" />

                            <View style={{ alignItems: "center", flexDirection: "row", marginHorizontal: 20 }}>
                                <Image source={GroupImage} />
                                <View style={{ marginLeft: 20 }}>
                                    <Text style={{ marginTop: 10, color: "#A0A1A3" }}>Current Address</Text>
                                    <TextInput placeholder='Earthcare scapes church god' style={{ marginTop: 5, borderBottomWidth: 1, height: 40, borderBottomColor: "#A0A1A3" }} />
                                    <Text style={{ marginTop: 10, color: "#A0A1A3" }}>Drop Off</Text>
                                    <TextInput placeholder='Earthcare scapes church god' style={{ marginTop: 5, paddingBottom: 20 }} />
                                </View>
                            </View>

                            <MapView style={style.map} region={mapRegion} showsUserLocation showsMyLocationButton={false} customMapStyle={[{ featureType: "all", elementType: "labels", stylers: [{ visibility: "off" }] }]}>

                                <Marker coordinate={mapRegion}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Image source={UserImage} />
                                    </View>
                                </Marker>

                                {drivers.map(driver => (
                                    <Marker key={driver.id} coordinate={{ latitude: driver.latitude, longitude: driver.longitude }}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Image source={CarImage} style={{ width: 40, height: 40 }} />
                                        </View>
                                    </Marker>
                                ))}
                            </MapView>

                            {/* CARS  */}

                            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={style.cards}>

                                {
                                    data.map((i) => (
                                        <View key={i} style={{ backgroundColor: "white", padding: 10, marginRight: 20, width: 250, borderRadius: 5, borderWidth: 0.3, borderColor: "#A0A1A3" }}>

                                            <View style={{ flexDirection: "row" }}>

                                                <View style={{ backgroundColor: "#F1F1F1", padding: 3, borderRadius: 10, marginRight: 20 }}>
                                                    <Image source={CarImage} style={{ width: 60, height: 60 }} />
                                                </View>
                                                <View>
                                                    <Text style={{ fontWeight: "bold" }}>Premium - Car</Text>
                                                    <Text style={{ marginTop: 5, color: "#6a6a6a" }}>Price:  $5/km</Text>
                                                    <View style={{ flexDirection: "row" }}>
                                                        {
                                                            data.map((i) => (
                                                                <AntDesign key={i} name="star" size={15} color={i < 4 ? "#51D476" : "#E4E4E4"} style={{ marginTop: 5, marginRight: 3 }} />
                                                            ))
                                                        }
                                                    </View>

                                                </View>

                                            </View>

                                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 5 }}>
                                                <View style={{ backgroundColor: "#F1F1F1", padding: 10, marginRight: 10, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                                    <Text onPress={() => setSingleCar(true)}>2 min</Text>
                                                </View>
                                                <View style={{ backgroundColor: "#F1F1F1", padding: 10, marginRight: 10, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                                    <Text onPress={() => setSingleCar(true)}>2 Gear</Text>
                                                </View>
                                                <View style={{ backgroundColor: "#F1F1F1", padding: 10, marginRight: 10, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                                    <Text onPress={() => setSingleCar(true)}>2 KM</Text>
                                                </View>
                                            </View>


                                        </View>
                                    ))
                                }


                            </ScrollView>

                        </View>
                    )
                }

                {
                    (showLocation && count == 1 && singleCar) && (
                        <View style={{ flex: 1 }}>

                            <View style={style.topBar}>

                                <AntDesign onPress={() => router.push("/rider/home")} name="arrowleft" size={24} color="black" />

                                <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "white", paddingVertical: 5, borderRadius: 20, paddingHorizontal: 10 }}>
                                    <MaterialCommunityIcons name="target" size={24} color="black" />
                                    <Text style={{ marginLeft: 10 }}>Location</Text>
                                </View>


                            </View>

                            <MapView style={style.map2} region={mapRegion} showsUserLocation showsMyLocationButton={false} customMapStyle={[{ featureType: "all", elementType: "labels", stylers: [{ visibility: "off" }] }]}>

                                <Marker coordinate={mapRegion}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Image source={UserImage} />
                                    </View>
                                </Marker>

                                <Marker coordinate={{ latitude: drivers[0].latitude, longitude: drivers[0].longitude }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Image source={CarImage} style={{ width: 40, height: 40 }} />
                                    </View>
                                </Marker>

                                <Polyline coordinates={[{ latitude: mapRegion.latitude, longitude: mapRegion.longitude }, { latitude: drivers[0].latitude, longitude: drivers[0].longitude }]} strokeColor="black" strokeWidth={1} />
                            </MapView>

                            {/* CARS  */}

                            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={style.cards}>

                                {
                                    !pay ?
                                        <View style={{ backgroundColor: "white", padding: 10, marginRight: 20, width: 320, borderRadius: 5, borderWidth: 0.3, borderColor: "#A0A1A3" }}>

                                            <View style={{ flexDirection: "row" }}>

                                                <View style={{ backgroundColor: "#F1F1F1", padding: 3, borderRadius: 10, marginRight: 20 }}>
                                                    <Image source={CarImage} style={{ width: 60, height: 60 }} />
                                                </View>
                                                <View>
                                                    <Text style={{ fontWeight: "bold" }}>Premium - Car</Text>
                                                    <Text style={{ marginTop: 5, color: "#6a6a6a" }}>Price:  $5/km</Text>
                                                    <View style={{ flexDirection: "row" }}>
                                                        {
                                                            data.map((i) => (
                                                                <AntDesign key={i} name="star" size={15} color={i < 4 ? "#51D476" : "#E4E4E4"} style={{ marginTop: 5, marginRight: 3 }} />
                                                            ))
                                                        }
                                                    </View>

                                                </View>

                                            </View>

                                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 5 }}>
                                                <View style={{ backgroundColor: "#F1F1F1", padding: 10, marginRight: 10, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                                    <Text onPress={() => setSingleCar(true)}>2 min</Text>
                                                </View>
                                                <View style={{ backgroundColor: "#F1F1F1", padding: 10, marginRight: 10, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                                    <Text onPress={() => setSingleCar(true)}>2 Gear</Text>
                                                </View>
                                                <View style={{ backgroundColor: "#F1F1F1", padding: 10, marginRight: 10, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                                    <Text onPress={() => setSingleCar(true)}>2 KM</Text>
                                                </View>
                                            </View>


                                            <View style={{ backgroundColor: "#2666cf", width: "100%", height: 40, justifyContent: "center", alignItems: "center", marginTop: 13, borderRadius: 8 }}>
                                                <Text onPress={() => setPay(true)} style={{ color: "#fff" }}>Book Ride ($100)</Text>
                                            </View>


                                        </View> :
                                        <View style={{ backgroundColor: "white", padding: 10, marginRight: 20, width: 320, borderRadius: 5, borderWidth: 0.3, borderColor: "#A0A1A3" }}>

                                            <Text style={{ textAlign: "center", color: "#767575", marginBottom: 10 }}>How would you like to pay?</Text>
                                            <Text style={{ textAlign: "center", fontWeight: "800", marginBottom: 10 }}>$100</Text>


                                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 5 }}>
                                                <View style={{ backgroundColor: "#F1F1F1", padding: 10, marginRight: 10, borderRadius: 10, justifyContent: "center", alignItems: "center", flex: 1 }}>
                                                    <Text onPress={() => setSingleCar(true)}>Wallet </Text>
                                                </View>
                                                <View style={{ backgroundColor: "#F1F1F1", padding: 10, marginRight: 10, borderRadius: 10, justifyContent: "center", alignItems: "center", flex: 1 }}>
                                                    <Text onPress={() => setSingleCar(true)}>Cash</Text>
                                                </View>
                                            </View>


                                            <View style={{ backgroundColor: "#2666cf", width: "100%", height: 40, justifyContent: "center", alignItems: "center", marginTop: 13, borderRadius: 8 }}>
                                                <Text onPress={() => setDetailView(true)} style={{ color: "#fff" }}>Proceed</Text>
                                            </View>


                                        </View>
                                }



                            </ScrollView>

                        </View>
                    )
                }


                {
                    detailView && (

                        <View style={[style.popupContainer, { width: "100%", height: "100%" }]}>
                            <View style={[style.popu, { width: "90%" }]}>
                                <View style={{ backgroundColor: "black", width: "100%", borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingBottom: 10 }}>
                                    <Text style={{ textAlign: "center", color: "white", marginVertical: 10, fontWeight: "800", fontSize: 16 }}>Meet Daniel Graver at the pickup point</Text>
                                    <Text style={{ color: "#aeaeae", textAlign: "center" }}>Your ride is arriving in 5 mins</Text>
                                </View>

                                <View style={{ marginTop: 10, justifyContent: "space-between", alignItems: "center", flexDirection: "row", backgroundColor: "#FAFAFA", padding: 10, width: "95%", margin: 10 }}>

                                    <View style={{ alignItems: "center", flexDirection: "row" }}>
                                        <Image source={UserImage} />
                                        <View style={{ marginLeft: 10 }}>
                                            <Text>Daniel Graver</Text>
                                            <Text style={{ marginTop: 2, color: "#7c8088" }}>Toyota Venza</Text>
                                        </View>
                                    </View>

                                    <View style={{ alignItems: "center", flexDirection: "row" }}>
                                        <AntDesign name="message1" size={20} color="black" style={{ marginRight: 10 }} />
                                        <Feather name="phone-call" size={20} color="black" />
                                    </View>

                                </View>


                                <View style={{ marginTop: 10, justifyContent: "space-between", alignItems: "center", flexDirection: "row", backgroundColor: "#FAFAFA", padding: 10, width: "95%", margin: 10 }}>

                                    <View style={{ alignItems: "center", flexDirection: "row", marginHorizontal: 20 }}>
                                        <Image source={GroupImage} />
                                        <View style={{ marginLeft: 20 }}>
                                            <Text style={{ marginTop: 10, }}>Cinema</Text>
                                            <Text style={{ color: "#A0A1A3", marginTop: 5 }}>310, Jane Ave, Maryland</Text>
                                            <Text style={{ marginTop: 10, }}>Jekad Store</Text>
                                            <Text style={{ color: "#A0A1A3", marginTop: 5 }}>310, Jane Ave, Maryland</Text>
                                        </View>
                                    </View>

                                </View>

                                <View style={{ marginTop: 10, justifyContent: "space-between", alignItems: "center", flexDirection: "row", backgroundColor: "#FAFAFA", padding: 10, width: "95%", margin: 10 }}>
                                    <Text>Payment</Text>
                                    <Text>$100</Text>
                                </View>

                                <View style={{ marginTop: 10, justifyContent: "space-between", alignItems: "center", flexDirection: "row", backgroundColor: "#FAFAFA", padding: 10, width: "95%", margin: 10 }}>
                                    <View style={{ backgroundColor: "#F1F1F1", padding: 10, marginRight: 10, borderRadius: 10, justifyContent: "center", alignItems: "center", width: 70 }}>
                                        <Text onPress={() => setSingleCar(true)}>Cash </Text>
                                    </View>
                                </View>

                                <View style={{ backgroundColor: "#2666cf", width: "95%", height: 40, justifyContent: "center", alignItems: "center", marginVertical: 13, borderRadius: 8 }}>
                                    <Text onPress={() => { setDetailView(false); setEnd(true) }} style={{ color: "#fff" }}>View trip</Text>
                                </View>
                            </View>
                        </View>
                    )
                }

                {
                    end && (

                        <View style={[style.popupContainer, { width: "100%", height: "100%" }]}>
                            <View style={[style.popu, { width: "90%" }]}>

                                <View style={{ marginTop: 10, justifyContent: "space-between", alignItems: "center", flexDirection: "row", backgroundColor: "#FAFAFA", padding: 10, width: "95%", margin: 10 }}>

                                    <View style={{ alignItems: "center", flexDirection: "row" }}>
                                        <Image source={UserImage} />
                                        <View style={{ marginLeft: 10 }}>
                                            <Text>Daniel Graver</Text>
                                            <Text style={{ marginTop: 2, color: "#7c8088" }}>256 Completed ride</Text>
                                        </View>
                                    </View>

                                    <View style={{ alignItems: "center", flexDirection: "row" }}>
                                        <AntDesign name="message1" size={20} color="black" style={{ marginRight: 10 }} />
                                        <Feather name="phone-call" size={20} color="black" />
                                    </View>

                                </View>


                                <View style={{ width: "95%", height: 40, justifyContent: "center", alignItems: "center", marginVertical: 0, borderRadius: 8, borderWidth: 1, borderColor: "#F1F1F1" }}>
                                    <Text onPress={() => { setConfirm(true); setEnd(false) }} style={{ color: "#FF2929" }}>Cancel trip</Text>
                                </View>


                                <View style={{ width: "95%", height: 40, justifyContent: "center", alignItems: "center", marginTop: 10, borderRadius: 8, borderWidth: 1, borderColor: "#F1F1F1" }}>
                                    <Text onPress={() => { setConfirm(true); setEnd(false) }} style={{ color: "#2666cf" }}>Add stop</Text>
                                </View>


                                <View style={{ backgroundColor: "#2666cf", width: "95%", height: 40, justifyContent: "center", alignItems: "center", marginVertical: 10, borderRadius: 8 }}>
                                    <Text onPress={() => { setConfirm(true); setEnd(false) }} style={{ color: "#fff" }}>End trip</Text>
                                </View>
                            </View>
                        </View>
                    )
                }


                {
                    confirm && (

                        <View style={[style.popupContainer, { width: "100%", height: "100%" }]}>
                            <View style={[style.popu, { width: "90%" }]}>

                                <View style={{ marginTop: 10, justifyContent: "center", alignItems: "center", flexDirection: "row", margin: 10 }}>
                                    <Image source={AlertImage} />
                                </View>

                                <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: "500" }}>Do you want to cancel the ride? </Text>
                                <Text style={{ color: "#a2a4ab" }}>Once cancelled can’t be reversed</Text>


                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginVertical: 20,marginLeft:10 }}>
                                    <View style={{ backgroundColor: "#F1F1F1", padding: 10, marginRight: 10, borderRadius: 10, justifyContent: "center", alignItems: "center", flex: 1 }}>
                                        <Text onPress={() => setConfirm(false)}>No </Text>
                                    </View>
                                    <View style={{ backgroundColor: "#FF2929", padding: 10, marginRight: 10, borderRadius: 10, justifyContent: "center", alignItems: "center", flex: 1 }}>
                                        <Text style={{color:"white"}} onPress={() => {setConfirm(false);router.push("/rider/home/canceled")}}>Yes, cancel</Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                    )
                }



            </ScrollView>





        </View>
    );
};

export default Index;
