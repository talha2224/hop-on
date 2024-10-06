const { StyleSheet } = require("react-native");

const locationStyle = StyleSheet.create({

    container: {
        backgroundColor: "#fcfdff",
        flex: 1,
        position:"relative",
    },
    Scrollcontainer: {
        flex:1,
        position:"relative",
    },
    map: {
        width: '100%',
        height: '50%',
    },
    map2: {
        width: '100%',
        height: '65%',
    },
    topBar:{
        position:"relative",
        top:40,
        left:0,
        right:0,
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        paddingHorizontal:20,
        zIndex:1000
    },
    cards: {
        flexDirection: "row",
        padding: 2,
        margin: 20,
    },
    popupContainer:{
        position:"absolute",
        top:0,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    popu:{
        backgroundColor:"#fff",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"
    }
    

})

export default locationStyle