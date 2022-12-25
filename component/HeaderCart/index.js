import React,{Component} from 'react';
import {connect} from 'react-redux'
import {View,ScrollView,Text,Image,TouchableOpacity,FlatList,SafeAreaView,TouchableWithoutFeedback} from 'react-native'

export class HeaderCart extends Component {
    render(){  
        return (
            <View style={{borderBottomWidth:1}}>
                <View style={{padding:20,flexDirection:'row',justifyContent: 'center'}}>
                    <Text style={{fontSize:20,fontWeight:'bold',marginLeft: 25}}>THEO DÕI </Text>
                    {/* ({this.props.numberCart}) */}
                </View>
            </View>
        )
    }
}

const mapStateToProps = state =>{
    return{
        numberCart:state._todoProduct.numberCart
    }
}
export default connect(mapStateToProps,null)(HeaderCart)
