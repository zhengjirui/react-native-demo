/**
 * Created by zheng on 2017/11/21.
 */
import React, {Component} from 'react';
import {
    ScrollView,
    View,
    TouchableOpacity,
    Image,
    Text,
    StyleSheet,
    NativeModules,
    BackAndroid,
    ToastAndroid,
    Dimensions,
    TextInput,
    StatusBar,
} from 'react-native';
import {connect} from "react-redux";
import Header from '../../components/header';
import CusCellLine from '../../components/cellline/CusCellLine';
import PullToRefreshScrollView from "../../components/PullToRefreshScrollView";
import CusButton from "../../components/button";
export default class AlertPassword extends Component {



    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor={'#2d8ff4'}
                    barStyle={'light-content'}
                ></StatusBar>
                <PullToRefreshScrollView
                    ref={(ref) => this._alertView = ref}
                    refeshState={false}>
                    <Header
                        renderTitle = { () => {
                            return <Text style={styles.baise}>修改密码</Text>
                        }}
                    />
                    <View style={styles.passbox}>
                        <View style={styles.passboxlist}>
                            <Text style={styles.passtext}>旧密码</Text>
                            <View style={styles.passipt}>
                                <TextInput
                                    keyboard='phone-pad'
                                    placeholder="请输入旧密码"
                                    autoCapitalize='characters'
                                    underlineColorAndroid='transparent'
                                    style={styles.forgetInput}
                                />
                            </View>
                        </View>
                        <View style={styles.passboxlist}>
                            <Text style={styles.passtext}>验证码</Text>
                            <View style={[styles.passipt,{width:'50%'}]}>
                                <TextInput
                                    keyboard='phone-pad'
                                    placeholder="请输入验证码"
                                    autoCapitalize='characters'
                                    underlineColorAndroid='transparent'
                                    style={styles.forgetInput}
                                />
                            </View>
                            <View style={styles.passimgbox}>
                                <Image
                                    style={styles.passimg}
                                    source={require("./img/shuzi.png")}/>
                            </View>
                        </View>
                        <View style={styles.passboxlist}>
                            <Text style={styles.passtext}>新密码</Text>
                            <View style={styles.passipt}>
                                <TextInput
                                    keyboard='phone-pad'
                                    placeholder="请输入新密码"
                                    autoCapitalize='characters'
                                    underlineColorAndroid='transparent'
                                    style={styles.forgetInput}
                                />
                            </View>
                        </View>
                        <View style={styles.passboxlist}>
                            <Text style={styles.passtext}>确认密码</Text>
                            <View style={styles.passipt}>
                                <TextInput
                                    keyboard='phone-pad'
                                    placeholder="请输入确认密码"
                                    autoCapitalize='characters'
                                    underlineColorAndroid='transparent'
                                    style={styles.forgetInput}
                                />
                            </View>
                        </View>

                    </View>


                    <CusButton
                        renderText='保存'
                    />

                </PullToRefreshScrollView>
            </View>
        );
    }




}

var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f4f4f4'
    },
    baise:{
        color:'#fff',
        fontSize:18,
    },
    passbox:{
        width:width,
        backgroundColor:'#fff'
    },
    passboxlist:{
        width:'96%',
        marginLeft:'2%',
        borderBottomWidth:1,
        borderColor:'#eee',
        height:44,
        flexDirection:'row',
        alignItems:'center',
    },
    passtext:{
        fontSize:16,
        color:'#333',
        marginLeft:2,
        width:'20%',
    },
    passipt:{
        width:'70%',
        marginLeft:'5%'
    },
    forgetInput:{
        width:'100%'
    },
    passimgbox:{
        width:44,
        height:26,
        position:'absolute',
        right:5,
    },
    passimg:{
        width:44,
        height:26,
    },



})

