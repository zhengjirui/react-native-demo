/**
 * Created by zheng on 2017/11/11.
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    NativeModules,
    BackAndroid,
    ToastAndroid
} from 'react-native';

export default class information extends Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'blue'}}>
                <Text>资讯</Text>
            </View>

        )
    }
}