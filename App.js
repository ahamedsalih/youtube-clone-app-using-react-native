import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from  "./src/components/home";
import SearchScreen from "./src/components/search";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from './src/components/explore';
import Subscribe from './src/components/subscribe';
import {AntDesign,Ionicons,MaterialCommunityIcons} from "@expo/vector-icons";
import {Provider} from "react-redux";
import {createStore} from "redux";
import VideoPlayer from "./src/components/videoplayer";



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



const initialState = [];
const reducer=(state=initialState,action)=>{
     if(action.type==='ADD'){
         return action.payload
     }
    return state
}
 

const database=createStore(reducer);





const RootHome=()=>{
  return (
    <Tab.Navigator
    initialRouteName="home"
    tabBarOptions={{
      activeTintColor: '#14D1DB',
      inactiveTintColor: 'black'
    }}
  >
    <Tab.Screen
      name="home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="explore"
      component={Explore}
      options={{
        tabBarLabel: 'kayal news',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="book-open" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="subscribe"
      component={Subscribe}
      options={{
        tabBarLabel: 'About-Kpm',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={28} />
        ),
      }}
    />
  </Tab.Navigator>
      
  )
}




function App() {
  return (
    <Provider store={database}>
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="roothome" component={RootHome} />
        <Stack.Screen name="search" component={SearchScreen} />
        <Stack.Screen name="videoplayer" component={VideoPlayer} />
        </Stack.Navigator>
     </NavigationContainer>
    </Provider>
  );
}
export default App;



