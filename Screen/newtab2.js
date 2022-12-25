import React,{Component} from 'react';
import { StyleSheet,StatusBar,Image, Text, View, TouchableOpacity, ImageBackground, ScrollView,FlatList} from 'react-native';
import Video from "react-native-video"
import Newstab2 from "../Data/Newstab2.json" 
const img = require('../assets/weather.png')
export default class newtab2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            Newstab2: Newstab2.Tab2
        }
        this.renderTab2  = this.renderTab2.bind(this);
    }
    renderTab2({item,index}){
        return(
        <View style={{backgroundColor: '#00000033',width: 400,height: 150,marginTop: 10,flexDirection: 'row'}}>
            <View>
                 <Image style={{width: 200,height: 150}} source={{uri: item.image}}></Image>
            </View>              
            <View style={{width: 300,height: 150}}>
                <Text style={{fontWeight: 'bold',marginLeft: 10,fontSize: 20}}>{item.Title}</Text>
            </View>
        </View>
        )
    }
    render(){
        return(
            // <View style={{backgroundColor: '#00000033',width: 400,height: 150,flexDirection: 'row'}}>
            //     <View>
            //          <Image source={img} style={{width: 130,height: 150}}/>
            //     </View>
            //     <View style={{width: 300,height: 150}}>
            //         <Text style={{fontWeight: 'bold'}}>{item.Title}</Text>
            //     </View>
            // </View>
            <FlatList horizontal={false}
                            numColumns={1}
                            data={this.state.Newstab2}
                            renderItem={this.renderTab2}
                            keyExtractor={item => item.key}
            />
        )
    }
} 
const styles = StyleSheet.create({
    
});