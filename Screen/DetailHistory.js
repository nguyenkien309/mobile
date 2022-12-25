import React, { Component } from "react";
import {View,Text,StyleSheet,Image,ScrollView} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { AddCart } from "../component/Action/index"
const icon2 = {uri: 'http://openweathermap.org/img/wn/10d@2x.png'}
const cart=require('../Data/cart.json');
class DetailHistory extends Component{
    constructor(props){
        super(props);
        this.navigation=props.navigation;
        this.pushcart=this.pushcart.bind(this);
        this.state={
            data:props.route.params.data,
            cart:cart,
            
        }
    }
    success(){
        alert("Following")
    }
    pushcart =(Name,price,img)=>{
        let data=this.state.cart;
        let isupdate=false;
        data.cart.map((item)=>{
            if(Name===item.Name)
            {
                isupdate=true;
                ++item.qty;
            }
            return item;
        })
        if(!isupdate){
            data.cart.push({name: Name,price: Price,img: Img,day: Day,night: Night,icon: Icon,"name":Name,"price":Price,"img":Img,"icon": Icon,"day": Day,"night": Night})
        }
        // console.log(this.state.cart);
    }
    render(){ 
        return(
            <View style={{flex: 1,backgroundColor: '#00000033',flexDirection: 'column'}}>
                <View style={{backgroundColor: 'white', width: '100%',height: 25}}></View>
                <View style={{backgroundColor: 'white',flex: 0.4,justifyContent: 'center'}}>
                    <Image source={{uri: this.state.data.img}} style={{width: '100%',height: '100%',backgroundColor: 'red',resizeMode: 'cover'}}/>
                </View> 
                <View style={{backgroundColor: 'white',flex: 0.6,marginTop: 30,borderTopLeftRadius: 25,borderTopRightRadius: 25,marginLeft: 5,marginRight: 5}}>
                    <Text style={{fontWeight: 'bold',fontSize: 25,marginLeft: 15,marginTop: 10}}>{this.state.data.Name}</Text>
                    <Text style={{marginLeft: 15,fontWeight: 'bold',fontSize: 16}}>{this.state.data.price}</Text>
                    <Text style={{fontWeight: 'bold',fontSize: 20,marginLeft: 15,marginTop: 10}}>{this.state.data.Desc}</Text>
                    <View style={{alignItems: 'center',marginTop: 20}}>
                    <View style={{justifyContent: 'center',alignItems: 'center'}}>
                        <Image source={icon2} style={{width: 90,height: 90}}/>
                        <Text style={{fontWeight: 'bold',fontSize: 16}}>{this.state.data.day}&#176;C</Text> 
                    </View>
                    <TouchableOpacity style={{width: 200,height: 50,borderRadius: 10,marginTop: 20,backgroundColor: '#FF6600',justifyContent: 'center'}} onPress={()=>this.props.AddCart(this.state.data)}>
                        <Text style={{color: 'white',textAlign: 'center'}} onPress={() => this.success()}>Theo Dõi</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      _products: state._todoProduct,
    };
  };
  
function mapDispatchToProps(dispatch) {
    return {
      getProduct: () => dispatch(getProduct()),
      AddCart: (item) => dispatch(AddCart(item)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailHistory);
  