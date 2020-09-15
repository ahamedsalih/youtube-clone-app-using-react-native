import React from 'react';
import { StyleSheet, Text, View,Image,StatusBar } from 'react-native';
import {AntDesign,Ionicons,MaterialCommunityIcons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


export default function Header() {
  const navigation = useNavigation();
  return (
     
    <View style={{height:50,backgroundColor:"white",width:"100%",elevation:6,marginTop:0}}>
    <StatusBar hidden/>
     <View style={{flexDirection:"row",marginTop:10,marginLeft:12}}>


    <AntDesign name="youtube" color="#14D1DB" size={40} style={{margin:9,marginTop:-1}}/>

     <Text style={{fontSize:22,marginTop:2,marginLeft:-5}}>
     KayalTube
     </Text>


     </View>

     <View style={{flexDirection:"row",marginTop:-53,marginLeft:310}}>

     
     <Ionicons name="md-search" size={33} color="black" style={{padding:10,marginTop:-5}} onPress={()=>navigation.navigate("search")} />
     

     </View>

     </View>
     
    
  );
}
