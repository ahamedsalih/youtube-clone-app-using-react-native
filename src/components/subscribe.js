import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import {AntDesign,Ionicons,MaterialCommunityIcons} from "@expo/vector-icons";

import Header from "./header";
import AdMobbb from "./addd";



const Subscribe=()=>{

    return(
         
        <View style={{flex:1}}>
        
        <Header/>
        <AdMobbb/>
        <View style={{justifyContent:"center",alignItems:"center"}}>
        
        <View style={{width:"90%",height:435,backgroundColor:"skyblue",borderRadius:10,marginTop:30,alignItems:"center",elevation:10}}>
        
        <Text style={{fontSize:32,color:"black"}}>
        kayalpatnam 
        </Text>

        


        <Text style={{marginLeft:9,marginTop:18}}>
          kayalpatnam is referred to in Marco Polo's[1] travel diaries dating to 1298 AD. Korkai[2] or Kayal was an ancient port dating to the 1st centuries of the common era and was contemporaneous to the existence of Kollam, another Pandyan port.According to 2011 census, Kayalpattinam had a population of 40,588 with a sex-ratio of 1,082 females for every 1,000 males, much above the national average of 929.[4] A total of 4,995 were under the age of six, constituting 2,548 males and 2,447 females. Scheduled Castes and Scheduled Tribes accounted for 7.37% and .01% of the population respectively 
        </Text>
        <Text style={{marginLeft:9,marginTop:20}}>
         
         Religious census
         Religion		Percent(%)
         Hindu	
          
         24.09%
         Muslim	
          
         70.01%
         Christian	
          
         05.07%
         Jain	
          
         0.03%
         Other	
          
         03.00%
         
         </Text>

      

        <View style={{width:"100%",height:117,backgroundColor:"white",borderBottomStartRadius:10,borderBottomEndRadius:10,alignItems:"center",elevation:10}}>


        <MaterialCommunityIcons name="account-circle" size={33} color="black" style={{marginLeft:-10}}/>
        

        <Text style={{marginTop:9}}>
         ADMIN
         @
        </Text>
        <Text style={{marginTop:9}}>
         AHAMED SALIH
        </Text>
        </View>

  

        </View>

  
        </View>

        



        </View>


    )
}


export default Subscribe;