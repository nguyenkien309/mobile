import React, { Component } from "react";
import {View,Text,StyleSheet, Image,TextInput, TouchableOpacity, ScrollView,FlatList} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const data=require("../Data/qa.json");
// const img = require("../../assets/antisocial2.jpg");
export default class HistoryS extends Component{
    constructor(props){
        super(props);
        this.navigation = props.navigation;
        this.gotoDetail = this.gotoDetail.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.state = {
            data: data.History,
        };
        
    }
    gotoDetail(data) {
        this.navigation.navigate("DetailHistory",{data});
    }
    renderItem({ item ,index}) {
            return (
                <View style={{backgroundColor: 'white',flex: 0.99,flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => this.gotoDetail(item)}>
                    <View style={{ width: '100%',marginLeft: 15, height: 280}}>
                        <View style={{width: 180,height:180,alignItems: 'center',marginTop: 10}}>
                            <Image source={{uri: item.img}} style={{backgroundColor: 'red',width: 150,marginRight: 10,height: 150,resizeMode: 'cover'}}/>
                        </View>
                        <View style={{width: 180,height: 70,backgroundColor: 'white'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 17,opacity: 0.8,marginTop: 7,textAlign: 'center'}}>{item.Name}</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 17,marginTop: 5,textAlign: 'center'}}>{item.price}</Text>
                        </View>
                    </View>
                </TouchableOpacity> 
            </View> 
              ); 
        }
    render(){
        return(      
            <View style={{flex: 1,backgroundColor: '#00000033'}}>
                <View style={{backgroundColor: 'white',width: 400.,height: 90,flexDirection: 'row'}}>
                    <TextInput
                    style={styles.input}
                    placeholder="Search"
                    />
                    <TouchableOpacity >
                    <FontAwesome name="star" size={32} style={{marginTop: 28,marginLeft: 15, color: '#eb6e4b'}}/>
                    </TouchableOpacity>
                </View>
                
                    <ScrollView horizontal>
                            <FlatList
                            numColumns={2}
                            data={this.state.data}
                            renderItem={this.renderItem}
                            keyExtractor={(item) => item.Id.toString()}
                        />
                    </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    products: {
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        width: 80,
        textAlign: 'center'
    },
    input: {
        backgroundColor: '#00000015',
        padding: 10,
        borderColor: 'white',
        width: 330,
        height: 40,
        color: 'black',
        borderRadius: 20,
        marginTop: 25,
        marginLeft: 7,  
    },
    btn: {
        height: 30,
        width: 80,
        backgroundColor: 'black',
        borderRadius: 7,
        marginLeft: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})