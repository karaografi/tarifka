import { Dimensions } from 'react-native'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        flex:1,
        marginVertical:10,
        alignItems:"center",
        alignContent:"center",
        
    },
    image:{
        width:Dimensions.get('window').width / 1.12,
        height:Dimensions.get('window').height / 4,
        borderRadius:18
    },
    title:{
    position:"absolute",
    bottom:10,
    color:"white",
    fontSize:22,
    fontWeight:"bold"
    },
    body_container:{
        position:"absolute",
        bottom:0,
        backgroundColor:"black",
        height:50,
        opacity:0.3,
        width:Dimensions.get("screen").width / 1.12 ,
        borderBottomLeftRadius:18,
        borderBottomRightRadius:18,

    }
})