import React,{Component} from 'react';
import { StyleSheet,TextInput,StatusBar,Image, Text, View, TouchableOpacity, ImageBackground, ScrollView,FlatList} from 'react-native';
import { Icon } from 'react-native-elements'
import Newstab3 from '../Data/Newstab3.json'

const imgPlace =require('../assets/boat.jpg')
const imgPlace2 =require('../assets/boat2.jpg')
const imgPlace3 =require('../assets/city.jpg')
const imgPlace4 =require('../assets/tree.jpg')
const location =require('../assets/locationicon.svg')
export default class newtab3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            Newstab3: Newstab3.Places
        }
        this.renderPlaces  = this.renderPlaces.bind(this);
    }
    renderPlaces({item,index}){
        return(
            <TouchableOpacity>
            <View style={{width: 180,height: 180,borderRadius: 20,marginLeft: 10}}>
                        <ImageBackground source={{uri: item.imgPlace}} style={{width: 185,height: 200,marginTop: 10,borderRadius: 20,overflow: 'hidden'}}>
                        <Text style={{color: 'white',fontWeight: 'bold',fontSize: 16,marginLeft: 10}}>{item.Title}</Text>
                        <View style={{flexDirection: 'row',marginTop: 150}}>
                        <Icon
                        name='location'
                        type='evilicon'
                        color='white'
                        style={{fontWeight: 'bold'}}
                        />
                        <Text style={{fontWeight: 'bold',color: 'white'}}>{item.location}</Text>
                        <Icon
                        name='star'
                        type='evilicon'
                        color='white'
                        style={{fontWeight: 'bold',marginLeft: 60}}
                        />
                    <Text style={{color: 'white',fontWeight:'bold'}}>{item.rating}</Text>
                        </View>
                        </ImageBackground>
                    </View>
            </TouchableOpacity>
        )
    }
    renderRecommend({item,index}){
        return(
            <ImageBackground source={{uri: item.recommend}} style={{width: 400,height: 200}}></ImageBackground>
        )
    }
    render(){
        return(
            <View >
                <View style={{backgroundColor: '#04555c',width: 400.,height: 150}}>
                    <Text style={{color: 'white',textAlign: 'center',fontSize: 20,fontWeight: 'bold',marginTop: 15}}>Explore The Beautiful Places</Text>
                    {/* <Text style={{color: 'white',fontSize: 20,fontWeight: 'bold'}}>Beautiful places</Text> */}
                    <TextInput
                    style={styles.input}
                    placeholder="Search Places"
                    onChangeText={text=>{this.SearchCityText(text)}}
                    />
                </View>
                <Text style={{fontWeight: 'bold',marginLeft: 25,marginTop: 10,fontSize: 21}}>Places</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
               <View style={{width: '100%', height: 220,marginRight: 20,flexDirection: 'row'}}>
               {/* <View style={{width: 180,height: 180,borderRadius: 20,marginLeft: 20}}>
                        <ImageBackground source={imgPlace} style={{width: 185,height: 200,marginTop: 10,borderRadius: 20,overflow: 'hidden'}}>
                        <Text style={{color: 'white',fontWeight: 'bold',fontSize: 16,marginLeft: 10}}>Title</Text>
                        <View style={{flexDirection: 'row',marginTop: 150}}>
                        <Icon
                        name='location'
                        type='evilicon'
                        color='white'
                        style={{fontWeight: 'bold'}}
                        />
                        <Text style={{fontWeight: 'bold',color: 'white'}}>Italy</Text>
                        <Icon
                        name='star'
                        type='evilicon'
                        color='white'
                        style={{fontWeight: 'bold',marginLeft: 70}}
                        />
                        <Text style={{color: 'white',fontWeight:'bold'}}>5.0</Text>
                        </View>
                        </ImageBackground>
                    </View> */}
                    <FlatList horizontal={true}
                            numColumns={1}
                            data={this.state.Newstab3}
                            renderItem={this.renderPlaces}
                            keyExtractor={item => item.key}
                    />
               </View>
            </ScrollView >
            <Text style={{fontSize: 21,fontWeight: 'bold',marginLeft: 25}}>Recommend</Text>
            <View style={{width: '100%',height: 200}}>
            <ScrollView showsHorizontalScrollIndicator={false}>
                        <View style={{overflow: 'hidden',height: 180,borderRadius: 15,margin: 20}}>
                        <FlatList horizontal={true}
                            numColumns={1}
                            data={this.state.Newstab3}
                            renderItem={this.renderRecommend}
                            keyExtractor={item => item.key}
                    />
                    </View>
            </ScrollView>
            </View>
            </View>  
        )
    }
} 
const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        padding: 10,
        borderColor: 'white',
        width: 340,
        color: 'black',
        borderRadius: 20,
        marginTop: 20,
        marginLeft: 25,

          
    },
});