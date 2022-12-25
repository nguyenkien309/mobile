import React,{Component} from 'react';
// import SearchWeather from '../Data/SearchWeather.json'
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet,Dimensions,StatusBar,Title,Image, Text,TextInput , View, TouchableOpacity, ImageBackground, ScrollView,FlatList} from 'react-native';
import HourlyForecast from '../Data/HourlyForecast.json';
import daysForecast from '../Data/daysForecast.json';
const icon2 = {uri: 'http://openweathermap.org/img/wn/10d@2x.png'}
const icon3 = {uri: 'http://openweathermap.org/img/wn/04n@2x.png'}
const icon4 = {uri: 'http://openweathermap.org/img/wn/02n@2x.png'}

export default class Detail extends Component {
    constructor(props){
        super(props);
        this.navigation=this.navigation;
        this.state = {
            SearchWeather: props.route.params.SearchWeather,
            HourlyForecast: HourlyForecast.Hourly,
            daysForecast: daysForecast.Future8Days,
        }
        this.renderHourly  = this.renderHourly.bind(this);
        this.daysForecast  = this.render8days.bind(this);
        //console.log(this.state.SearchWeather.latitude);
    } 
    renderHourly({item,index}){
         return(
            <View style={{width: 90,padding: 10,alignItems: 'center',backgroundColor: '#00000033'}}>
                <Text style={{padding: 5,width:50,textAlign: 'center',borderWidth: 1,borderColor: '#eb6e4b',backgroundColor: 'black',borderRadius: 20,color: 'white',fontWeight: 'bold'}}>{item.hour}</Text>
                <Image source={{uri: item.icon}} style={{width: 70,height:70}}/>
                <Text style={{fontWeight: 'bold'}}>{item.day}</Text>
            </View>
         )
    }

    render8days({item,index}){
        return(
                // <View style={{flexDirection: 'row',alignItems: 'center',alignContent: 'center',backgroundColor: '#00000033',padding: 10}}>
                //     <Text style={{fontWeight: 'bold',color: 'white',padding: 20,backgroundColor: 'black',borderRadius: 30,borderWidth: 1,borderColor: '#eb6e4b'}}>{item.date}</Text>
                //     <Image source={{uri: item.icon}} style={{width: 90, height: 90,marginLeft: 50}}/>
                //     <Text style={{fontWeight: 'bold',color: 'black',fontSize: 20,marginLeft: 10}}>{item.day}</Text>
                // </View>
            <View style={{flexDirection: 'row',justifyContent: 'center', alignContent: 'center'}}>
                <View style={{flexDirection: 'row',alignItems: 'center',backgroundColor: '#00000033',padding: 10}}>
                    <Text style={{fontWeight: 'bold',marginLeft:50,color: 'white',padding: 20,backgroundColor: 'black',borderRadius: 30,borderWidth: 1,borderColor: '#eb6e4b'}}>{item.date}</Text>
                </View>
            <View style={{backgroundColor: '#00000033',alignItems: 'center',width: 300,flexDirection: 'row',marginLeft: 0}}>
                <Image source={{uri: item.icon}} style={{width: 90, height: 90,marginLeft: 40}}/>
                <Text style={{fontWeight: 'bold',color: 'black',fontSize: 20,marginLeft: 10}}>{item.day}</Text>
            </View>
            </View>
        )
    }
    render(){
        return( 
            <View style={styles.container}>
                <ScrollView>
                <View style={{backgroundColor: '#00000100',width: 400, height: 300}}>
                    <View style={{marginTop: 25}}>
                        <Text style={{color: '#eb6e4b',fontWeight: 'bold',marginLeft: 10}}>Oct 8, 09:02am</Text>
                        <Text style={{fontSize: 25,fontWeight: '700',marginLeft: 10}}>{this.state.SearchWeather.name}</Text>
                        <Text style={{fontWeight: '700',marginLeft: 10}}>{this.state.SearchWeather.desc}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{alignItems: 'center',width: 150,marginTop: 10}}>
                        {/* <Image source={icon3} style={{width: 100,height: 100}}/>  */}
                        <Image source={{uri: this.state.SearchWeather.ImageCity,}} style={{width: 120,height: 120,borderRadius: 20,marginTop: 10}}/> 
                        <Text style={{fontSize: 36,fontWeight:'bold'}}>{this.state.SearchWeather.day}°C</Text>
                        </View>
                        <View style={{marginTop: 15,color: 'white',borderLeftWidth: 2,borderLeftColor: '#eb6e4b'}}>
                            <Text style={styles.temp}>{this.state.SearchWeather.wind} N</Text>
                            <Text style={styles.temp}>{this.state.SearchWeather.pressure} hPA</Text>
                            <Text style={styles.temp}>Humidity: {this.state.SearchWeather.Humidity}%</Text>
                            <Text style={styles.temp}>UV: {this.state.SearchWeather.UV}</Text>
                            <Text style={styles.temp}>Dew point: {this.state.SearchWeather.Dewpoint}</Text>
                            <Text style={styles.temp}>Visibility: {this.state.SearchWeather.Visibility}km</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity>
      <             MapView style={styles.map} initialRegion={{
                          latitude: parseFloat(this.state.SearchWeather.latitude),
                          longitude: parseFloat(this.state.SearchWeather.longitude),
                          latitudeDelta: parseFloat(this.state.SearchWeather.latitudeDelta),
                          longitudeDelta: parseFloat(this.state.SearchWeather.longitudeDelta),
                    }}>
                        <Marker 
                            coordinate={{
                                latitude: parseFloat(this.state.SearchWeather.latitude),
                                longitude: parseFloat(this.state.SearchWeather.longitude),
                            }}
                            //image={{uri: this.state.SearchWeather.ImageCity}}
                            title={this.state.SearchWeather.name}
                            description="bủh bủh lmao"
                        />
                    </MapView>
                </TouchableOpacity>
                        <Text style={{fontSize: 20,fontWeight: 'bold',backgroundColor: '#eb6e4b',color: 'white',padding: 10}}>Hourly Forecast</Text>
                    <View style={{width: '100%',height:150,flexDirection: 'row'}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {/* <View style={{width: 90,padding: 10,alignItems: 'center',backgroundColor: '#00000033'}}>
                        <Text style={{padding: 5,width:50,textAlign: 'center',borderWidth: 1,borderColor: '#eb6e4b',backgroundColor: 'black',borderRadius: 20,color: 'white',fontWeight: 'bold'}}>1AM</Text>
                        <Image source={icon2} style={{width: 70,height:70}}/>
                        <Text style={{fontWeight: 'bold'}}>29&#176;C</Text>
                        </View>   */}   
                        <FlatList horizontal
                            numColumns={1}
                            data={this.state.HourlyForecast}
                            renderItem={this.renderHourly}
                            keyExtractor={item => item.key}
                            />  
                </ScrollView>
                    </View>
                    <Text style={{fontSize: 20,fontWeight: 'bold',backgroundColor: '#eb6e4b',color: 'white',padding: 10}}>8 Days Forecast</Text>
                <ScrollView showsHorizontalScrollIndicator={false}>
                    {/* <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row',alignItems: 'center',backgroundColor: '#00000033',padding: 10}}>
                            <Text style={{fontWeight: 'bold',color: 'white',padding: 20,backgroundColor: 'black',borderRadius: 30,borderWidth: 1,borderColor: '#eb6e4b'}}>Fri, Oct 08</Text>
                        </View>
                    <View style={{backgroundColor: '#00000033',alignItems: 'center',width: 300,flexDirection: 'row',marginLeft: 0}}>
                        <Image source={icon2} style={{width: 90, height: 90,marginLeft: 55}}/>
                        <Text style={{fontWeight: 'bold',color: 'black',fontSize: 20,marginLeft: 10}}>31/25&#176;C</Text>
                    </View>
                    </View> */}
                    
                
                <FlatList
                            numColumns={1}
                            data={this.state.daysForecast}
                            renderItem={this.render8days}
                            keyExtractor={item => item.key}
                            /> 
                </ScrollView>
            </ScrollView>
        </View>

        )
    }
} 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    map: {
      width: 400,
      height: 300,
      marginTop: 0
    },
    temp: {
        fontWeight: 'bold',
        marginLeft: 20,
        fontSize: 16
    }
  });