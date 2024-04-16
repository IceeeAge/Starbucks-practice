import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons';
export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.subheaderContainer}>
      <Text style={{color:"white",fontSize:20}}>It’s a greate day for coffee</Text>
      <Fontisto name="coffeescript" size={24} color="black" />
      </View>
     
    </View>
  )
}
const styles = StyleSheet.create({
  headerContainer:{
    height:106,
    backgroundColor:"#116242",
    borderWidth:1
  },
  subheaderContainer:{
    marginTop:40,
  flexDirection:"row",
  alignItems:"center",
  paddingHorizontal:20,
  gap:30
  }
})