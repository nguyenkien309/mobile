import React,{Component,useEffect, useState} from 'react'; 
import { StyleSheet,StatusBar,Image, Text, View, TouchableOpacity, ImageBackground, ScrollView,FlatList} from 'react-native';
// import WeatherForeCast from '../Data/WeatherForeCast.json'
import * as Location from 'expo-location';
import DateTime from '../component/DateTime';
import WeatherScroll from '../component/WeatherScroll'; 
const img = require('../assets/weather.png')
const icon = {uri: 'http://openweathermap.org/img/wn/10d@2x.png'}
const API_KEY ='7b6484b55a9123e9979462b1cbb08806';

export default function App() {
    const [data, setData] = useState({});
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        console.log(status);
        if (status == 'granted') {
          fetchDataFromApi("13", "108")
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        fetchDataFromApi(location.coords.latitude, location.coords.longitude);
      })();
    }, [])
   
    const fetchDataFromApi = (latitude, longitude) => {
      if(latitude && longitude) {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
        .then(res => res.json()).then(data => {
        //console.log(data)
        setData(data)
        })
      }
       
    } 
  
    return (
      <View style={styles.container}> 
        <ImageBackground source={img} style={styles.image} >
          <DateTime current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon}/>
          <WeatherScroll weatherData={data.daily}/> 
        </ImageBackground>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    
    },
    image: {
        flex: 1,
        //resizeMod: "cover",
        //justifyContent: "center"
    },
    FutureForecastItemContainer: {
        flex: 1,
        backgroundColor: '#00000033',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        marginLeft: 20,
        padding: 25,
        borderColor: '#eee',
        marginBottom: 5,
        marginTop: 5
        
    },
    current: {
        fontSize: 20,
        color: 'white',
        backgroundColor: '#3c3c44',
        padding: 10,
        textAlign:"center",
        borderRadius: 50,
        fontWeight: '200',
    },
    temp: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        textAlign:'center'
    }
    
  });