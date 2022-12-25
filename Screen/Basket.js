import React,{Component} from 'react';
import { StyleSheet,Cursor,StatusBar,Title,Image, Text,TextInput , View, TouchableOpacity, ImageBackground, ScrollView,FlatList} from 'react-native';
import SearchWeather from '../Data/SearchWeather.json'

// const img= {uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Thanh_Hoa_City_By_Night.jpg/432px-Thanh_Hoa_City_By_Night.jpg'}
// const icon2 = {uri: 'http://openweathermap.org/img/wn/10d@2x.png'}
export default class Basket extends Component {
    constructor(props){
        super(props); 
        this.navigation = props.navigation;
        this.state = { 
            SearchWeather: SearchWeather.SearchCity,
            CitiesFiler: SearchWeather.SearchCity
        }
        this.renderCityWeather  = this.renderCityWeather.bind(this);
        this.toDetail = this.toDetail.bind(this);
    }
    toDetail(SearchWeather){ 
        this.navigation.navigate('Detail',{SearchWeather}) 
    }
    renderCityWeather({item,index}){ 
        return(
        <TouchableOpacity onPress={() => this.toDetail(item)}>
            <View style={{flexDirection: 'row',backgroundColor:'white',borderRadius: 20,marginTop: 10,marginLeft: 10,marginRight:10}}>
                <View style={{width: 160,marginTop: 10}}>
                        <Image source={{uri:item.ImageCity}} style={{width: 110,height:110,marginLeft: 10,borderRadius: 100}}/>
                </View>
                <View style={{width: '100%'}}>
                    <Text style={{color: 'white',backgroundColor: '#eb6e4b',marginLeft: 40,fontSize: 16,fontWeight: 'bold',width: 120,textAlign: 'center',padding: 7,borderRadius:20,marginTop:5}}>{item.name}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Image source={{uri:item.icon}} style={{width: 90,height: 90}}/>
                <View styles={{flexDirection: 'column'}}>
                        <Text style={styles.Temp}>Day - {item.night}&#176;C</Text>
                        <Text style={styles.Temp}>Night - {item.day}&#176;C</Text>
                        </View>
                    </View>
                </View>
            </View> 
        </TouchableOpacity>
        )
    }
    SearchCityText(CitiesFiler){
        this.setState({
            CitiesFiler: this.state.SearchWeather.filter(i => 
                i.name.toLocaleLowerCase().includes(CitiesFiler),
                ),
        })
    }
    render(){
        return(
            <View style={styles.Container}>
                <View style={{alignItems: 'center',padding: 10,backgroundColor: '#3c3c44',width: '100%',flexDirection: 'row'}}>
                <TextInput
                style={styles.input}
                placeholder="Search City"
                onChangeText={text=>{this.SearchCityText(text)}}
                />
                </View>
                <View style={{backgroundColor: '#3c3c44',borderTopLeftRadius: 20,borderTopRightRadius: 20,marginTop:20,width: '100%',height: 598}}>
                    <ScrollView showsHorizontalScrollIndicator={false}>
                        {/* <TouchableOpacity>
                        <View style={{flexDirection: 'row',marginTop: 10,marginLeft: 10,marginRight:10}}>
                        <View style={{width: 160}}>
                            <Image source={img} style={{width: 100,height:100,borderRadius: 100}}/>
                        </View>
                        <View style={{width: '100%'}}>
                            <Text style={{color: 'black',fontSize: 16,fontWeight: 'bold',marginLeft: 50}}>Thanh Hóa</Text>
                            <View style={{flexDirection: 'row'}}>
                            <Image source={icon2} style={{width: 90,height: 90}}/>
                                <View styles={{flexDirection: 'column'}}>
                                <Text style={styles.Temp}>Day 32&#176;C</Text>
                                <Text style={styles.Temp}>Night 32&#176;C</Text>
                                </View>
                            </View>
                        </View>
                        </View>  
                        </TouchableOpacity> */}
                       
                        <FlatList onPress={() => this.toDetail()}
                            numColumns={1}
                            data={this.state.CitiesFiler}
                            renderItem={this.renderCityWeather}
                            keyExtractor={item => item.key}
                            />       
                    </ScrollView>
                </View>
            </View>
        )
    }
} 
const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        borderColor: 'white',
        width: 370,
        color: 'black',
        borderRadius: 15
          
    },
    Temp: {
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 15
    }
  });