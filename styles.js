
import {StyleSheet} from "react-native"
export default StyleSheet.create({
    container:{height:"100%",paddingTop:45 ,paddingHorizontal:10},
    boxStyle:{height:100,width:100,backgroundColor:"yellow",zIndex:1} ,
    boxStyle2:{height:50,width:50,backgroundColor:"green",position:"absolute",bottom:0},
    itemStyle:{
      backgroundColor:"skyblue",
      padding:15,
      marginBottom:5
    },
    headerStyle:{
      backgroundColor:"steelblue",
      padding:15,
      marginBottom:8,
      color:"white",
      fontWeight:"900",
      fontSize:20,
      textAlign:'center'
    },
    btnContainer:{
      backgroundColor: "rgba(55, 155, 162, 0.8)",
      marginHorizontal: 60,
      marginTop: 10, 
      paddingVertical: 8,
      borderRadius: 20,
      alignItems: "center", 
      flexDirection: "column", 
    

    },
    imageBackground: {
      flex: 1,
      resizeMode: 'cover', 
     
    },
gotouserbtn:{
backgroundColor:"rgba(55, 155, 162, 0.8)",
marginTop:20,
padding: 10,
width:"50%",
borderRadius:20,
justifyContent:"center",
marginLeft:"25%"
},
gotouser:{
  fontWeight: 'bold',
  textAlign: 'center',
  padding: 5,
  fontSize: 18,
},
welcome:{
  color:"black",
  textAlign:"center",
  fontWeight:"bold",
  fontSize:30,
  marginTop:280,




},


input: {
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  marginBottom: 16,
  paddingHorizontal: 10,
},

    TitleStyle:{
      color:"white",
      textAlign:"center",
      fontWeight:"700",
      fontSize:20
    }
  
  })
  