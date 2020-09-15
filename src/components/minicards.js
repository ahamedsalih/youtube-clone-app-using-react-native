import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,ScrollView,TextInput,StatusBar,Dimensions,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';




const MiniCards=(props)=>{
  const navigation = useNavigation();

    return(
      <TouchableOpacity onPress={()=>navigation.navigate("videoplayer",{videoId:props.videoId,title:props.title})}>

     <View style={{flexDirection:"row",marginTop:5,marginBottom:5}}>

     <Image source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}
     } style={{width:"45%",height:100,marginLeft:5}}/>

    <View style={{marginLeft:10}}
    >
    <Text style={{fontSize:15,width:Dimensions.get("screen").width/2}}
    ellipsizeMode="tail"
    numberOfLines={2}>
      {props.title}
     </Text>
     <Text style={{fontSize:15}}>
       {props.channelTitle}
     </Text>
     </View>

     </View>
     </TouchableOpacity>

    )
}


export default MiniCards;