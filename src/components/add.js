import React, { Component } from "react";
import {AdMobBanner,AdMobInterstitial,AdMobRewarded} from 'expo-ads-admob';



class AdMobb extends Component{

    async componentDidMount(){
       

        await AdMobRewarded.setAdUnitID('ca-app-pub-3689443750072931/4596083575'); // Test ID, Replace with your-admob-unit-id
        await AdMobRewarded.requestAdAsync();
        await AdMobRewarded.showAdAsync();
    }
  

    render(){
        return(
       
            <AdMobBanner
      bannerSize="fullBanner"
      adUnitID="ca-app-pub-3689443750072931/6902574912" // Test ID, Replace with your-admob-unit-id
      servePersonalizedAds // true or false
       />
    
    
      
        )
    }
    }
  

export default AdMobb;
//ca-app-pub-3689443750072931/8442941196
//ca-app-pub-3689443750072931/4596083575