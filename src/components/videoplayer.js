import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,ScrollView,TextInput,StatusBar,FlatList,ActivityIndicator } from 'react-native';
import {AntDesign,Ionicons,MaterialCommunityIcons} from "@expo/vector-icons";
import { WebView } from 'react-native-webview';

import Ad1 from "./ad1";





const VideoPlayer=({route},props)=>{
    const {videoId,title,carousel}=route.params;
    
    return(
        <View style={{flex:1}}>
        <View style={{width:"100%",height:300,backgroundColor:"black"}}>
        <WebView source={{uri:`https://www.youtube.com/embed/${videoId}`}}
            nativeConfig={true}
            javascriptEnabled={true}
            domStorageEnabled={true}
            
        />
        </View>
        <View style={{height:50,width:"100%",backgroundColor:"#e6e6e6"}}>
        <Text style={{fontSize:17,marginLeft:5}}
     ellipsizeMode="tail" numberOfLines={2}>
      {title}
     </Text>
        </View>
        <View>
        {carousel}
        </View>
        <View style={{marginTop:60}}>
        <Ad1 />
        </View>
        
        </View>
    )
}
export default VideoPlayer;