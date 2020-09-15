import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Image,ScrollView,FlatList,ActivityIndicator,Dimensions } from 'react-native';
import Header from "./header";
import Cards from "./cards";
import {useSelector,useDispatch} from "react-redux";
//import {AdMobBanner} from "expo-ads-admob";
import AdMob from "./ad";


const widthMob=Dimensions.get("window").width;


//import {AdMobBanner} from 'expo-ads-admob';



export default function Home(props) {
 // const cardData=useSelector(state=>{
  //  return state;
  //});

 
  const [cardData,setCardData]=useState([]);
  const [value,setValue]=useState("kayalpatnam");
  const [loading,setLoading]=useState(false);
  
  
  useEffect(()=>{

    setLoading(true)
    fetch(`https://www.googleapis.com/youtube/v3/search?part=Snippet&maxResults=50&q=${value}&type=Video&key=AIzaSyBZopnMGWho35HWfzKENZWBAQ3XQjTN1lw`)
    .then(res=>res.json())
    .then(data=>{
      setLoading(false)
      setCardData(data.items)
        
        //dispatch({type:'ADD',payload:data.items})
      })},[])
  return (
    <View style={{flex:1}}>
       
       <Header/>
       
       
       <ScrollView showsVerticalScrollIndicator={false}>
   
       {loading ? <ActivityIndicator  size="large" color="red"/>:false} 
    
        <FlatList
           data={cardData}
           renderItem={({item})=>{

               return <Cards
                   videoId={item.id.videoId}
                   title={item.snippet.title}
                   channel={item.snippet.channelTitle}
               />
           }}

           keyExtractor={item=>item.id.videoId}

       />

          
       </ScrollView>

   <AdMob/>
      
      
      
      
    </View>
  );
}
 //ca-app-pub-3689443750072931/5724444368