import React,{Component} from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Store from '../Screen/Store.js'
import Basket from '../Screen/Basket.js';
import Account from '../Screen/Account.js';
import order from '../Screen/oder'
import HistoryS from '../Screen/HistoryS'
import CartS from '../Screen/CartS.js';
const Tab = createBottomTabNavigator();
const ScreenOptionStyle={
    headerShown: false,
}
const BottomTab=()=> {
    return(
    <Tab.Navigator screenOptions={ScreenOptionStyle}>
        <Tab.Screen name="Home" component={Store} options={{tabBarLabel: 'Home',tabBarIcon: ()=>    <FontAwesome name="home" size={25}/>}}/>
        <Tab.Screen name="Search" component={Basket} options={{tabBarLabel: 'Search',tabBarIcon: ()=>    <FontAwesome name="search" size={25}/>}}/>
        <Tab.Screen name="News" component={order} options={{tabBarLabel: 'News',tabBarIcon: ()=>    <FontAwesome name="sticky-note" size={25}/>}}/>
        <Tab.Screen name="History" component={HistoryS} options={{tabBarLabel: 'History',tabBarIcon: ()=>    <FontAwesome name="history" size={25}/>}}/>
        <Tab.Screen name="Follow" component={CartS} options={{tabBarLabel: 'Follow',tabBarIcon: ()=>    <FontAwesome name="heart" size={25}/>}}/>

    </Tab.Navigator>
    )
}
export default BottomTab
