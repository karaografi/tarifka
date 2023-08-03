import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center",
        borderTopLeftRadius:60,
        borderBottomLeftRadius:60,
        borderRadius:8,
        marginBottom:10,
        padding:8,
        margin:10
    },
    title:{
        fontSize:22,
        paddingLeft:10,
        fontWeight:"bold",
        
    },
    image:{
        width:100,
        height:100,
        resizeMode:"center",
        borderRadius:20,
    }
})