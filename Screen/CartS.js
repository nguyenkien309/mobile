import React, { Component } from "react";
import {View,ScrollView,Text,Image,TouchableOpacity,SafeAreaView,TouchableWithoutFeedback} from 'react-native'
import {IncreaseQuantity,DecreaseQuantity,DeleteCart } from '../component/Action/index';
import HeaderCart from "../component/HeaderCart/index";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux'

const icon2 = {uri: 'http://openweathermap.org/img/wn/10d@2x.png'}
const data=require('../Data/cart.json');


function Cart({items,IncreaseQuantity,DecreaseQuantity,DeleteCart,navigation}){
    let ListCart = [];
    let TotalCart=0;
    Object.keys(items.Carts).forEach(function(item){
        TotalCart+=items.Carts[item].qty * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
        
    });
    return(
        <View style={{flex:1,backgroundColor: 'white'}}>
        <ScrollView style={{marginTop:40}}>
            <HeaderCart/>
            {ListCart.map((item,key)=>{
                console.log(ListCart);
                return(  
                        <View style={{flex: 1,flexDirection: 'row',marginBottom: 5}}>
                            <View style={{margin: 10,width: 375,height: 120,backgroundColor: '#00000015',borderRadius: 20,flexDirection: 'row'}}>
                                <View style={{width: 100,height: 120,marginLeft: 15,justifyContent: 'center'}}>
                                    <Image
                                        source={{uri:item.img}}
                                        style={{width:80, height:100,borderRadius: 5,resizeMode: 'cover'}}
                                    />
                                </View>
                                <View style={{width: 220,marginLeft: 20}}>
                                    <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                                    <Text style={{fontWeight: '100', fontSize: 17,marginTop: 10}}>{item.Name}</Text>
                                    
                                    <TouchableOpacity style={{marginTop: 10}} onPress={()=>DeleteCart(key)}>
                                    <FontAwesome name="times" size={22} style={{marginBottom: 13,color: '#eb6e4b'}}/>
                                    </TouchableOpacity>

                                    </View>
                                    <View style={{flexDirection: 'row',marginTop: 20}}>
                                    <Text style={{fontWeight: 'bold', fontSize: 21}}>{item.day}&#176;C - {item.night}&#176;C</Text>      
                                    </View>
                                </View>
                            </View>
                        </View>
                              
                    )   
            })}
        </ScrollView>
    </View>
    )
}
const mapStateToProps = state =>{
     // console.log(state)
      return{
            items:state._todoProduct,
            numberCart:state._todoProduct.numberCart,
      }
}
export default connect(mapStateToProps,{IncreaseQuantity,DecreaseQuantity,DeleteCart})(Cart);