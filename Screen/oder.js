import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import newtab1 from './newtab1'
import newtab2 from './newtab2'
import newtab3 from './newtab3'
const Tab = createMaterialTopTabNavigator();
export default class Order extends Component {
    render(){
        return(
            <Tab.Navigator>
                <Tab.Screen name="NEWS" component={newtab1}/>
                <Tab.Screen name="VIDEOS" component={newtab2} />
                <Tab.Screen name="TRAVEL" component={newtab3} />
            </Tab.Navigator>
        )
    }
} 