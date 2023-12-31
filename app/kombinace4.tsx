import { StyleSheet, ImageBackground, View, Image, Pressable, Text, Animated } from 'react-native'
import { H1, P, } from '../components/Styles'
import React,{useRef, useEffect, useState} from 'react'
import { Link } from 'expo-router'
import Reference from '../components/Reference'
const Schizofrenie = () => {
  const marginLeftAnim = useRef(new Animated.Value(200)).current; // Start position
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [showImage, setShowImage] = useState<boolean>(false);
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

  useEffect(() => {
    Animated.sequence([
      Animated.delay(400),
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
  return (
    <ImageBackground source={require("../assets/blank.jpg")} style={{width:"100%", height:"100%", position:"relative"}}>
      <View style={[{marginLeft:40, marginTop:100}]}>
      <Animated.Text style={{
        marginTop:100,
        marginBottom:40,
        fontSize: 30,
        fontWeight: "bold",
        color: "#07a6a9",
        fontFamily: "Montserrat-bold",
       // opacity: fadeAnim
      }}><Text style={{color:"#f2357f"}}>Pomalá titrace kariprazinu</Text>{"\n"}
      + 1,5 mg týdne zlepšuje tolerabilitu léčby</Animated.Text>
      
       <Animated.Image source={require("../assets/table.png")} style={{
          width:"100%",
          height:140,
          resizeMode:"contain",
          maxWidth:"95%",
          // marginLeft: marginLeftAnim.interpolate({
          //   inputRange: [-50, 100], // Adjust the range for desired movement
          //   outputRange: ['-50%', '0%'],
          // }),
       }}/>
       <Animated.Text style={{
      //  opacity: fadeAnim,
       }}>
       <View style={{
         marginTop:100,
         marginBottom:40,
         flexDirection:"row",
          position:"relative",
          justifyContent:"center",
      }}>
<Text style={{
       
       fontSize:20, marginBottom:10, fontFamily:"Montserrat-regular"
     }}>Cílová dávka se upravuje dle klinické odpovědi pacienta.</Text>
     <Text style={{
        fontSize: 15,
        fontFamily: "Montserrat-regular",

        }}>1</Text>

      </View>
       </Animated.Text>


      </View>
     
      <Link href="/spc" asChild>
       <Pressable style={styles.spc}>
         <Image source={require("../assets/spc.png")}  style={styles.spc}/>
         </Pressable>
      </Link>
      <Link href="/kombinace5" asChild>
       <Pressable style={styles.arrowRight}>
         <Image source={require("../assets/arrow-right.png")}  style={styles.spc}/>
         </Pressable>
      </Link>
      <Link href="/kombinace3" asChild>
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
    backgroundColor:"#ffffffd9"
  }}
  >

<View style={{marginLeft:40, marginTop:20}}>
  <Reference />
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