import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View,Image,ScrollView,TextInput,StatusBar,FlatList,ActivityIndicator } from 'react-native';
import {AntDesign,Ionicons,MaterialCommunityIcons} from "@expo/vector-icons";
import {useSelector,useDispatch} from "react-redux";

import MiniCards from "./minicards";
import Cards from "./cards";
import AdMobbb from "./addd";







const  SearchScreen=({navigation})=>{

  

 const [value,setValue]=useState("kayalpatnam");
   // const [miniCardData,setMiniCards]=useState("");
   const dispatch= useDispatch()
   const miniCardData= useSelector(state=>{
       return state
   })

    const [loading,setLoading]=useState(false);

//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=songs&type=video&key=[YOUR_API_KEY]
    const fetchData=()=>{
       
        setLoading(true)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=Snippet&maxResults=50&q=${value}&type=Video&key=AIzaSyBZopnMGWho35HWfzKENZWBAQ3XQjTN1lw`)
        .then(res=>res.json())
        .then(data=>{
            setLoading(false)
           // setMiniCards(data.items)
            dispatch({type:'ADD',payload:data.items})
            return <Cards/>
        }
        
           
            
                  )
    }
 
   
   

    return( 
        <View style={{flex:1}}>
        <StatusBar hidden/>
         
        

        <View style={{width:"100%",height:50,elevation:4,backgroundColor:"#14D1DB"}}>
       
        
        <View style={{flexDirection:"row",marginLeft:10,marginTop:10}}>
        

         <MaterialCommunityIcons name="keyboard-backspace" color="black" size={28}style={{marginRight:8}} onPress={()=>navigation.goBack()} />
         <TextInput style={{width:"75%",backgroundColor:"#e6e6e6"}} placeholder="search for everything"

         Value={value}
         onChangeText={(text)=>setValue(text)}/>

       <MaterialCommunityIcons name="send" color="balck" size={28} style={{marginLeft:15}}  onPress={()=>fetchData()}/>

       

       </View>

       </View>

       <ScrollView>

      {loading ? <ActivityIndicator size="large" color="red"/>:false} 

       <FlatList
           data={miniCardData}
           renderItem={({item})=>{

               return <MiniCards
                   videoId={item.id.videoId}
                   title={item.snippet.title}
                   channel={item.snippet.channelTitle}
               />
           }}

           keyExtractor={item=>item.id.videoId}
       />
 </ScrollView>

     
  <AdMobbb/>
      
        
        </View>
    )
}

export default SearchScreen;