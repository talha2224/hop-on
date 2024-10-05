const { StyleSheet } = require("react-native");

const phoneStyle = StyleSheet.create({
    container:{
        backgroundColor:"#fcfdff",
        flex:1,
        // justifyContent:"center",
        // alignItems:"center",
        paddingHorizontal:20,
        paddingVertical:50
    },
    iconContainer:{
        backgroundColor:"#F4F4F4",
        padding:5,
        borderRadius:8,
        width:35,
        marginBottom:20
    },
    numberTxt:{
        color:"#454f60",
    },
    txt:{
        marginBottom:20,
        fontSize:20,
        fontWeight:"bold",
    },
    label:{
        color:"gray",
        marginBottom:5
    },
    label2:{
        color:"gray",
        marginTop:20,
        marginBottom:5
    },
    country:{
        marginRight:5,
        backgroundColor:"#F4F4F4",
        width:50,
        height:50,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"
    },
    input:{
        backgroundColor:"#F4F4F4",
        borderRadius:10,
        width:50,
        height:50,
        paddingHorizontal:20
    },
    btn:{
        backgroundColor:"#2666CF",
        height:50,
        justifyContent:"center",
        alignItems:"center",
        marginTop:20,
        borderRadius:5
    },
    btnTxt:{
        color:"#ffff",
        fontWeight:"bold",
        fontSize:15
    },
    phoneContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:10,
        height:50
    },
})

export default phoneStyle