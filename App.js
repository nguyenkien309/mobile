import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import store from './component/Stores/index';
import {Provider} from 'react-redux';
import HomeNavigator from "./navigation/HomeNavigation";
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <HomeNavigator/>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
