import React,{Component} from 'react';
import { StyleSheet, Text, View,Image,ImageBackground,TextInput,TouchableOpacity,Alert } from 'react-native';
const data = require('../Data/Login.json')

export default class Account extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            name:'',
            pass:'',
            isSecure: true,
            show:'Show',
            data:data.Login,
            Login:data,
        }
        this.onPressShow = this.onPressShow.bind(this);
        this.onPressLogin = this.onPressLogin.bind(this);
        this.toHome = this.toHome.bind(this);
    }
   
    onPressShow(){
        if(this.state.show === 'Show')
        {
            this.setState({show:'Hide'})
            this.setState({isSecure: false})
        }
        else{
            this.setState({show:'Show'})
            this.setState({isSecure: true})
        }
    }
    onPressRegister(){
        this.navigation.navigate('register')
    }
    toHome(){
        this.navigation.navigate('intro')
    }
    onPressLogin(){
        let data = this.state.Login
        if(this.state.name == '')
        {
            Alert.alert('Please enter your Username')
        }
        else if(this.state.pass == '')
        {
            Alert.alert('Please enter your Password')
        }
        let check = false;
        data.Login.map((item)=>{
            if(this.state.name == item.name && this.state.pass == item.pass){
                let name = this.state.name;
                this.toHome();
                this.setState({name:''})
                this.setState({pass:''})
                check = true;
                console.log(this.state.Login)
                return item;
            }
 
        })

        data.Login.map((item)=>{
            if(this.state.name != item.name && this.state.pass == item.pass && !check){
                Alert.alert('Wrong Username or Password')
                this.setState({name:''})
                this.setState({pass:''})
            }
            else if(this.state.name == item.name && this.state.pass != item.pass && !check){
                Alert.alert('Wrong Password')
                this.setState({pass:''})
            }
        })
    }

    render() {
        return(
            <View>

            <ImageBackground
                source={require('../assets/light-rain.png')}
                style={{width:'100%',height:'100%'}}
            >
            <Image
                source = {require('../assets/72176_base_weather_icon.png')}
                style={{width:130,height:130,alignSelf: 'center',zIndex:2,marginTop:100}}
            />
            <View style={{padding:20,alignItems:'center',alignSelf: 'center',marginTop:40}}>
                <View>
                    <Text style={{fontSize:18,marginRight:210,fontWeight:'bold',color:'#e93434'}}>Username</Text>
                </View>
                <View style={{marginRight:14}}>
                    <TextInput style={{backgroundColor:'#fff',width:280,height:40,padding:10,marginTop:10}} value={this.state.name} onChangeText={(name)=>{this.setState({name})}}></TextInput>
                </View>
                <View style={{marginTop:40}}>
                    <Text style={{fontSize:18,marginRight:210,fontWeight:'bold',color:'#e93434'}}>Password</Text>
                </View>
                <View style={{flexDirection:'row', marginLeft:30}}>
                    <TextInput 
                        secureTextEntry={this.state.isSecure} 
                        style={{backgroundColor:'#fff',width:280,height:40,padding:10,marginTop:10,marginLeft:20}} 
                        value={this.state.pass} 
                        onChangeText={(pass)=>{this.setState({pass})}}>
                    </TextInput>
                    <TouchableOpacity style={{marginLeft:20,marginTop:30}} onPress={()=>this.onPressShow()}>
                        <Text style={{width:40,fontWeight:'bold',color:'#e93434'}}>{this.state.show}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:40}}>
                    <TouchableOpacity style={{backgroundColor:'#e93434',padding:10,width:80}} onPress={()=>this.onPressLogin()}>
                        <Text style={{color:'#fff',marginLeft:10}}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:40}}>
                    <TouchableOpacity style={{padding:10,width:300}} onPress={()=>this.onPressRegister()}>
                        <Text style={{color:'#e93434',marginLeft:10,fontWeight:'bold'}}>You don't have account? Let's register!</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ImageBackground>
            </View>
        )
    }
}