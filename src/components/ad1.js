import React, { Component } from "react";
import {AdMobBanner,AdMobInterstitial,AdMobRewarded} from 'expo-ads-admob';



class Ad1 extends Component{

    async componentDidMount(){
        await AdMobInterstitial.setAdUnitID('ca-app-pub-3689443750072931/3151688703'); // Test ID, Replace with your-admob-unit-id
        await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
        await AdMobInterstitial.showAdAsync();

       
    }
  

    render(){
        return(
       
            <AdMobBanner
      bannerSize="fullBanner"
      adUnitID="ca-app-pub-3689443750072931/6707790335" // Test ID, Replace with your-admob-unit-id
      servePersonalizedAds // true or false
       />
    
    
      
        )
    }
    }
  

export default Ad1;
//ca-app-pub-3689443750072931/8442941196
//ca-app-pub-3689443750072931/4596083575