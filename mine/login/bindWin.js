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
import PullToRefreshScrollView from "../../components/PullToRefreshScrollView";

export default class bindWin extends Component {

    constructor(props){
        super(props);
        this.state={
            data:'获取验证码'
        }
        this._index=0;
        this._timer=null;
    }

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
                            return <Text style={styles.baise}>改绑手机号</Text>
                        }}
                    />
                    <View style={styles.bindwin}>
                        <View style={styles.bindwinimgbox}>
                            <Image
                                style={styles.bindwinimg}
                                source={require("./img/erg_03.png")}/>
                        </View>
                        <Text style={styles.chenggong}>绑定成功</Text>
                        <Text>15110710511已成功绑定您的账号。该手机可用于</Text>
                        <Text>登录、接收信息。祝您使用愉快!</Text>
                        <View style={styles.anniubox}>
                            <View style={styles.anniu1}>
                                <Text style={styles.bindwinzis}>返回</Text>
                            </View>
                            <View style={styles.anniu2}>
                                <Text style={styles.bindwinzi}>返回首页</Text>
                            </View>
                        </View>
                    </View>


                </PullToRefreshScrollView>
            </View>
        );
    }

}

var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    baise:{
        color:'#fff',
        fontSize:18,
    },
    bindwin:{
        alignItems:'center'
    },
    bindwinimgbox:{
        width:101,
        height:85,
        marginTop:70,
    },
    bindwinimg:{
        width:101,
        height:85,
    },
    chenggong:{
        fontSize:20,
        marginTop:15,
        marginBottom:20,
        color:'#333'
    },
    anniubox:{
        flexDirection:'row',
        marginTop:28
    },
    anniu1:{
        width:70,
        height:30,
        borderWidth:1,
        borderColor:'#03a9f4',
        justifyContent:'center',
        alignItems:'center',
        color:'#fff',
        borderRadius:50,
        marginRight:20
    },
    anniu2:{
        width:90,
        height:30,
        backgroundColor:'#03a9f4',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50
    },
    bindwinzis:{
        color:'#03a9f4'
    },
    bindwinzi:{
        color:'#fff'
    }


})

