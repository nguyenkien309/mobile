import React,{Component} from 'react';
import {createStackNavigator} from "@react-navigation/stack";
//import Store from '../screen/Store'
import Detail from '../Screen/Detail.js'
import Basket from '../Screen/Basket.js';
import BottomTab from './BottomTab';
import infomartion from '../Screen/Information'
import intro from '../Screen/intro'
import register from '../Screen/Information'
// import HistoryS from '../Screen/HistoryS'
import DetailHistory from '../Screen/DetailHistory';
const Stack = createStackNavigator();

const HomeNavigator=()=>{
    return(
        <Stack.Navigator initialRouteName="infomartion" screenOptions={{headerShown: false, }}>
            <Stack.Screen name="DailyForecastWeather" component={BottomTab}/>
            <Stack.Screen name="Basket" component={Basket}/>
            <Stack.Screen name="Detail" component={Detail}/>
            <Stack.Screen name="register" component={register}/>
            <Stack.Screen name="infomartion" component={infomartion}/>
            {/* <Stack.Screen name="HistoryS" component={HistoryS}/> */}
            <Stack.Screen name="DetailHistory" component={DetailHistory}/>
            <Stack.Screen name="intro" component={intro}/>

        </Stack.Navigator>
    )
}
export default HomeNavigator