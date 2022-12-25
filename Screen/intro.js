import React,{Component} from 'react';
import { StyleSheet,StatusBar,Image, Text, View, TouchableOpacity, ImageBackground, ScrollView,FlatList} from 'react-native';

const img = require('../assets/weather.png')
const introgif = require('../assets/introgif.gif')
const introimage = require('../assets/introimage.jpg')
const introimage2 = require('../assets/introimage2.jpg')
export default class intro extends Component {
    constructor(props){
        super(props);
        this.navigation = props.navigation;
        this.toBottomTab = this.toBottomTab.bind(this)
    }
    toBottomTab(){
        this.navigation.navigate('DailyForecastWeather');
    }
    render(){
        return(
            <View style={{flex: 1}}>
                <ImageBackground source={img} style={{flex: 1}}>
                <View style={styles.Detail}>
                    <Text style={{color: 'white',fontSize: 35,fontWeight: 'bold',marginTop: 39}}>Thanks</Text>
                    {/* <Text style={{color: 'white',fontSize: 35,fontWeight: 'bold'}}>World with us</Text> */}
                    <Text style={{color: 'white',lineHeight: 25,marginTop: 15}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut
                        sem non erat vehicula dignissim. Morbi eget congue ante, feugiat.</Text>
                <TouchableOpacity onPress={()=> this.toBottomTab()}>
                <View style={styles.btn}>
                    <Text style={{fontWeight: 'bold'}}>Get Started</Text>
                    </View>
                </TouchableOpacity>
                </View>
                </ImageBackground>
            </View>
        )
    }
}   

const styles = StyleSheet.create({
    Detail: {
        height: '50%',
        bottom: 0,
        position: 'absolute',
        paddingHorizontal: 40,
        backgroundColor: '#00000033'
    },
    btn: {
        height: 50,
        width: 120,
        backgroundColor: 'white',
        marginTop: 20,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center'
    }
  });