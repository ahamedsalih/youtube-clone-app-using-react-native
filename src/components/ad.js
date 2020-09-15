import React, { Component } from "react";
import {AdMobBanner,AdMobRewarded} from 'expo-ads-admob';
import { render } from "react-dom";



class AdMob extends Component{

    async componentDidMount(){
        await AdMobRewarded.setAdUnitID('ca-app-pub-3689443750072931/5262846724'); // Test ID, Replace with your-admob-unit-id
        await AdMobRewarded.requestAdAsync();
        await AdMobRewarded.showAdAsync();
    }

    render(){
    return(
        <AdMobBanner
  bannerSize="fullBanner"
  adUnitID="ca-app-pub-3689443750072931/5724444368" // Test ID, Replace with your-admob-unit-id
  servePersonalizedAds // true or false
   />
    )
    }
}

export default AdMob;
//ca-app-pub-3689443750072931/5262846724