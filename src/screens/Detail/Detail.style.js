import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:10,
        marginBottom:5
    },
    title:{
        fontSize:22,
        fontWeight:"bold",
        color:"red",
        marginBottom:20
    },
    image:{
        width:Dimensions.get("screen").width ,
        height:Dimensions.get("screen").height / 2,
        resizeMode:"contain",
    },
    buttonText:{
        padding:20,
        backgroundColor:"red",
        borderRadius:15,
        textAlign:"center",
        color:"white",
        fontWeight:"bold",
        fontSize:18,
        marginHorizontal:25
    }
})