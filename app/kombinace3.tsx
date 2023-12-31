import { StyleSheet, ImageBackground, View, Image, Pressable, Animated, Text } from 'react-native'
import { H1, } from '../components/Styles'
import React,{useState, useEffect, useRef} from 'react'
import { Link } from 'expo-router'
import Vyhody2 from '../components/Vyhody2'
import Nevyhody2 from '../components/Nevyhody2'
import Reference from '../components/Reference'
const Schizofrenie = () => {
  const [showImage, setShowImage] = useState<boolean>(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const marginLeftAnim = useRef(new Animated.Value(200)).current; // Start position
  useEffect(() => {
    Animated.sequence([
      Animated.delay(5000),
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 1000, // Adjust the duration as needed
          useNativeDriver: true,
        }
      )
    ]).start();
  }, [fadeAnim]);

  useEffect(() => {
    Animated.timing(
      marginLeftAnim,
      {
        toValue: 100, // End position
        duration: 1000, // Adjust the duration as needed
        useNativeDriver: false,
      }
    ).start();
}, [marginLeftAnim]);
  return (
    <ImageBackground source={require("../assets/blank.jpg")} style={{width:"100%", height:"100%", position:"relative"}}>
      <View style={[{}]}>
      <View style={{
         marginTop:100,
         marginBottom:20,
         flexDirection:"row",
          position:"relative",
          justifyContent:"center",
      }}>
<Text style={{
       
        fontSize: 30,
        fontWeight: "bold",
        color: "#07a6a9",
        fontFamily: "Montserrat-bold",
      textAlign:"center",
     }}>Střední vhodnost pro kombinaci s Kariprazinem</Text>
     <Text style={{
        fontSize: 15,
        fontWeight: "bold",
        color: "#07a6a9",
        fontFamily: "Montserrat-bold",

        }}>1</Text>

      </View>
      
       <Animated.Image source={require("../assets/stredni-velikost.png")} style={{
          width:"100%",
          height:300,
          resizeMode:"contain",
          marginLeft: marginLeftAnim.interpolate({
            inputRange: [-50, 100], // Adjust the range for desired movement
            outputRange: ['-50%', '0%'],
          }),
       }}/>
<Animated.View
style={{opacity: fadeAnim}}
><H1 style={{
        marginTop:60,
        marginBottom:10,
        textAlign:"center",
        fontSize:26
      }}>Doporučený postup augmentace či převodu</H1>
        <Image source={require("../assets/agumentace2.png")} style={{
          width:"100%",
          height:150,
          resizeMode:"contain"
       }}/></Animated.View>

      </View>
     
      <Link href="/spc" asChild>
       <Pressable style={styles.spc}>
         <Image source={require("../assets/spc.png")}  style={styles.spc}/>
         </Pressable>
      </Link>
      <Link href="/kombinace4" asChild>
       <Pressable style={styles.arrowRight}>
         <Image source={require("../assets/arrow-right.png")}  style={styles.spc}/>
         </Pressable>
      </Link>
      <Link href="/kombinace2" asChild>
       <Pressable style={styles.arrowLeft}>
         <Image source={require("../assets/arrow-left.png")}  style={styles.spc}/>
         </Pressable>
      </Link>

      <Pressable style={styles.info} onPress={()=>{
        setShowImage(!showImage)
      }}>
        <Image source={require("../assets/info.png")}  style={styles.spc}/>
      </Pressable>

{
  showImage && <Pressable
  onPress={()=>{
    setShowImage(false)
  }}
  style={{
    width:"100%",
    height:"100%",
    position:"absolute",
    top:0,
    left:0,
    backgroundColor:"white"
  }}
  >

<View style={{marginLeft:40, marginTop:20}}>
    <Vyhody2 />
   <Nevyhody2 />

  </View>
  </Pressable>
}
      </ImageBackground>
  )
}

export default Schizofrenie

const styles = StyleSheet.create({
  headline:{
    fontSize:34,
    fontWeight:"bold",
    color:"#07a6a9",
    marginTop:70,
    marginBottom:40
  },
  spc:{
    position:"absolute",
    bottom:0,
    left:0,
    width:100,
    height:60,
    marginLeft:20
  },
  arrowRight:{
    position:"absolute",
    bottom:0,
    right:0,
    width:100,
    height:60,
    marginRight:50
  },
  arrowLeft:{
    position:"absolute",
    bottom:0,
    right:0,
    width:100,
    height:60,
    marginRight:150
  },
 info:{
    position:"absolute",
    bottom:0,
    right:0,
    width:100,
    height:60,
    marginRight:"30%"
  },
popUPImage:{
  width:"100%",
  height:200,
  position:"absolute",
  top:"30%",
  left:0,
  padding:4,
  borderRadius:12,
  borderWidth:2,
  borderColor:"#e3906f",
  maxWidth:"90%",
  resizeMode:"contain",
  marginLeft:27
}
})