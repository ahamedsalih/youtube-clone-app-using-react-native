import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,Dimensions} from 'react-native';
import {AntDesign,Ionicons,MaterialCommunityIcons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

//const widthMob=Dimensions.get("window").width;



export default function Cards(props) {
  

  const navigation = useNavigation();
   return (
    <TouchableOpacity onPress={()=>navigation.navigate("videoplayer",{videoId:props.videoId,title:props.title,carousel:props.ExploreCardData})}>
    <View style={{width:"100%",height:285,backgroundColor:"white",marginTop:0,elevation:4,marginBottom:0}}>

     <Image source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}
     } style={{width:"100%",height:"73%"}}/>
     <View style={{height:70,flexDirection:"row",marginLeft:10}}>
     <MaterialCommunityIcons name="account-circle" size={35} color="#14D1DB" style={{marginLeft:-5,padding:10}} />
     <View>
     <Text style={{fontSize:15,marginTop:7,width:Dimensions.get("screen").width/1.2}}
     ellipsizeMode="tail"
      numberOfLines={2}>
      {props.title}
     </Text>
     <Text >
       {props.channelTitle}
     </Text>
     </View>
    
     </View>
    </View>
    </TouchableOpacity>
  
  )}



  const ExploreCardData=[{pic:"https://lh3.googleusercontent.com/proxy/sEgMcc3xCc8UwOjnwjMI3KaKPlCkxognrtYpv2Za8peebkU1vJmzRRVBjEoI-HCqBKuafp5vJdCNrUQ"}
  ,{pic:"https://pbs.twimg.com/media/EFJKKNVUUAAWthn.jpg"},
  {pic:"https://cdn2-img.pressreader.com/pressdisplay/docserver/getimage.aspx?regionKey=F6n0HuZRibwA3olOmj4FoQ%3D%3D"},
  {pic:"https://www.veethi.com/watermark.php?path=images/city-images/fullsize/Thoothukudi-713.jpg"},
  {pic:"https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/87225049_199727631094766_3127095663682895677_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=Q5Dm_LhC3RoAX8YfePA&oh=1110ee7a4e76996377cb76e14d508647&oe=5E95A162"},
  {pic:"https://www.qsl.net/vu2sdu/jpg/usc/usc1752008.jpg"},
  {pic:"https://i.ytimg.com/vi/o3o0_ZiBd7s/maxresdefault.jpg"},
  {pic:"https://2.bp.blogspot.com/-0pUrsOSuMr4/U8PtFhoCr0I/AAAAAAAAAmw/5PaC6TPZc7Y/s1600/20140713_212806_resized.jpg"},
  {pic:"https://lh3.googleusercontent.com/proxy/LTMqRTK4yE0lDXR7MDiHrxFoxP83D5gtQYw28VnRXFOx5m-bSzujSELcpRmO5889YF38gJimGmDEVl2qkm1FVYMMH5Zy6pgOLbiw"}];


  


