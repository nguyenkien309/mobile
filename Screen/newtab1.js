import React,{Component} from 'react';
import { StyleSheet,StatusBar,Image, Text, View, TouchableOpacity, ImageBackground, ScrollView,FlatList} from 'react-native';
import Newstab1 from '../Data/Newstab1.json'
export default class newtab1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            Newstab1: Newstab1.News
        }
        this.renderNews  = this.renderNews.bind(this);
    }
    renderNews({item,index}){
        return(
            <TouchableOpacity>
                <ImageBackground style={{width: 400,height: 207}} source={{uri: item.newsImage}}>
                    <View style={{flexDirection: 'row'}}>
                    <View style={{backgroundColor: '#fff',width: 150,height:30,marginTop: 175,alignItems: 'center'}}>
                        <Text style={{color: 'blue',fontWeight: 'bold',lineHeight: 25}}>{item.descImage}</Text>
                    </View>
                    <View style={{color: 'white', marginTop: 182,marginLeft: 25}}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 8}}>{item.By}</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{marginLeft: 10,marginRight: 10,marginTop: 10}}>
                    <Text style={{fontSize: 24,fontWeight: 'bold',marginLeft: 5,marginRight: 5}}>{item.Title}</Text>
                </View>
                <View style={{borderWidth: 0.5,width: 150,height: 1,marginLeft: 16,marginRight: 10,marginTop: 10}}></View>
                <View style={{width: 360,height: 100,flexDirection: 'row'}}>
                        <View style={{borderRadius: 20,marginLeft: 16,marginTop: 30,backgroundColor: '#4d4dff',width: 8, height: 8}}>
                        </View>
                        <Text style={{marginTop: 22,marginLeft: 10,fontSize: 14, fontWeight: '400'}}>{item.Related1}</Text>
                </View>
                <View style={{width: 360,height: 70,flexDirection: 'row'}}>
                        <View style={{marginTop: 6,borderRadius: 20,marginLeft: 16,backgroundColor: '#4d4dff',width: 8, height: 8}}>
                        </View>
                        <Text style={{marginLeft: 10,fontSize: 14, fontWeight: '400'}}>{item.Related2}</Text>
                </View>
                </TouchableOpacity>
        )
    }
    render(){
        return(
            <View style={{backgroundColor: 'white',width: '100%',height: '100%'}}> 
                {/* <TouchableOpacity>
                <ImageBackground style={{width: 400,height: 207}} source={{uri: 'https://media-cldnry.s-nbcnews.com/image/upload/t_focal-758x379,f_auto,q_auto:best/newscms/2021_40/3449499/210211-donald-trump-jan-6-ew-501p.jpg'}}>
                    <View style={{flexDirection: 'row'}}>
                    <View style={{backgroundColor: '#fff',width: 150,height:30,marginTop: 175,alignItems: 'center'}}>
                        <Text style={{color: 'blue',fontWeight: 'bold',lineHeight: 25}}>EXCLUSIVE</Text>
                    </View>
                    <View style={{color: 'white', marginTop: 182,marginLeft: 25}}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 8}}>Brendan Smialowski / AFP - Getty Images file</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{marginLeft: 10,marginRight: 10,marginTop: 10}}>
                    <Text style={{fontSize: 24,fontWeight: 'bold',marginLeft: 5,marginRight: 5}}>Biden rejects Trump request to withhold White House records from Jan. 6 committee</Text>
                </View>
                <View style={{borderWidth: 0.5,width: 150,height: 1,marginLeft: 16,marginRight: 10,marginTop: 10}}></View>
                <View style={{width: 360,height: 100,flexDirection: 'row'}}>
                        <View style={{borderRadius: 20,marginLeft: 16,marginTop: 30,backgroundColor: '#4d4dff',width: 8, height: 8}}>
                        </View>
                        <Text style={{marginTop: 22,marginLeft: 10,fontSize: 14, fontWeight: '400'}}>Trump misled public about Washington hotel finances, House panel says</Text>
                </View>
                <View style={{width: 360,height: 70,flexDirection: 'row'}}>
                        <View style={{marginTop: 6,borderRadius: 20,marginLeft: 16,backgroundColor: '#4d4dff',width: 8, height: 8}}>
                        </View>
                        <Text style={{marginLeft: 10,fontSize: 14, fontWeight: '400'}}>Trump misled public about Washington hotel finances, House panel says</Text>
                </View>
                </TouchableOpacity> */}
                <FlatList horizontal={false}
                            numColumns={1}
                            data={this.state.Newstab1}
                            renderItem={this.renderNews}
                            keyExtractor={item => item.key}
                    />
            </View>
        )
    }
} 
const styles = StyleSheet.create({
    
});