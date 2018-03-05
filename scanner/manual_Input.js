
import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    NativeModules,
    BackAndroid,
    ToastAndroid,
    TextInput
} from 'react-native';
import Header from '../components/header';
export default class information extends Component{
    render(){
        return(
            <View style={{flex:1}}>
               <Header
                   renderTitle = { () => {
                       return <View style={styles.TextInput_view}><TextInput
                           style={styles.TextInput_}
                           underlineColorAndroid='transparent'
                           placeholder="请输入汽车铭牌的17位VIN码"
                           placeholderTextColor="#e5e5e5"
                           keyboardType='name-phone-pad'
                       ></TextInput>
                       </View>
                   }}
                   renderLeft ={()=>{
                       return  <View ><Image style={styles.back_iocn} source={require("../res/images/xunpei_Order/back.png")} /></View>
                   }}
                   renderRight={()=> {
                       return <View><Text style={styles.number_text}>0位</Text></View>
                   }}
               />

            </View>

        )
    }
}
const styles =StyleSheet.create({
    TextInput_:{
        marginTop:-7,
        paddingLeft:5,
        width:250,
        height:50,
    },
    TextInput_view:{
        marginLeft:-50,
        width:250,
        height:35,
        backgroundColor:'white',
        borderRadius:5,
    },
    number_text:{
        paddingLeft:18,
        paddingRight:18,
        padding:8,
        backgroundColor:'white',
        color:'#2f91f4',
        borderRadius:5,
    },
    back_iocn:{
        width:25,
        height:25,
       // backgroundColor:'white'
    },
});
