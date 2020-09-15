import React, { useEffect, Component } from "react";
import {AdMobBanner,AdMobInterstitial} from 'expo-ads-admob';


  


class AdMobbb extends Component{
    async componentDidMount(){
        await AdMobInterstitial.setAdUnitID('ca-app-pub-3689443750072931/3682171749'); // Test ID, Replace with your-admob-unit-id
        await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
        await AdMobInterstitial.showAdAsync();
    }
       
    render(){


       

   
  
    return(

       
<>
     

        <AdMobBanner
  bannerSize="fullBanner"
  adUnitID="ca-app-pub-3689443750072931/8442941196" // Test ID, Replace with your-admob-unit-id
  servePersonalizedAds // true or false
   />

   </>


  
    )
    }
}

export default AdMobbb;
//ca-app-pub-3689443750072931/8442941196