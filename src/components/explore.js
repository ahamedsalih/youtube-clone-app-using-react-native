import React from "react";
import styled from "styled-components";
import { WebView } from 'react-native-webview';
import { Button, View,Text } from "react-native";
import AdMobb from "./add";




class Explore extends React.Component{
  render(){
    return(

   


<View style={{flex:1}}>
 <WebView source={{uri:"http://kayalpatnam.com/news.asp"}} style={{flex: 1}}
                        startInLoadingState
                        scalesPageToFit
                        />


                     <AdMobb/>   


</View>



    );
  }
}

export default Explore;