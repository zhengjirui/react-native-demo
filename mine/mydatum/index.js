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
    StatusBar,
} from 'react-native';
import PullToRefreshScrollView from '../../components/PullToRefreshScrollView';
import {connect} from 'react-redux';
import Route from "../../route";
import Header from '../../components/header';
import CusCellLine from '../../components/cellline/CusCellLine';
import name from './name'
import AlertPassword from '../login/AlertPassword'
import amend from '../login/amend'
import AddressManage from '../mineinfo/addressRanage'
import Perfect from '../mineinfo/perfectinfo1'


class mydatum extends Component {

    constructor(props) {
        super(props);
        this._route = new Route();
        // 初始状态
        this.state = {
            isRefreshing: false,
        };

    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor={'#2d8ff4'}
                    barStyle={'light-content'}
                    translucent={true}
                ></StatusBar>
                <Header
                    renderTitle = { () => {
                        return <Text style={styles.baise}>我的资料</Text>
                    }}
                />

                <View style={styles.toubox}>
                    <Text style={styles.toutext}>头像</Text>
                    <Image source={require("../images/tou.png")}
                           style={styles.touimg}/>
                </View>


                <View style={styles.wodezujian}>
                    <CusCellLine
                        renderLeftImg={()=>{}}
                        renderLeftText={() => <Text style={styles.leftzi}>昵称</Text>}
                        renderRightText={() => <Text style={styles.leftzi}>毛毛</Text>}
                        onPressCell={() => {
                            this._route.pushToNext(name);
                        }}
                    />
                    <CusCellLine
                        renderLeftImg={()=>{}}
                        renderLeftText={() => <Text style={styles.leftzi}>性别</Text>}
                        renderRightText={() => <Text style={styles.leftzi}>女</Text>}
                    />
                    <CusCellLine
                        renderLeftImg={()=>{}}
                        renderLeftText={() => <Text style={styles.leftzi}>认证信息</Text>}
                        renderRightText={() => <Text style={styles.leftzi}>去完善</Text>}
                        onPressCell={() => {
                            this._route.pushToNext(Perfect);
                        }}

                    />
                    <CusCellLine
                        renderLeftImg={()=>{}}
                        renderLeftText={() => <Text style={styles.leftzi}>地区</Text>}
                        renderRightText={() => <Text style={styles.leftzi}>北京朝阳</Text>}
                    />
                    <CusCellLine
                        renderLeftImg={()=>{}}
                        renderLeftText={() => <Text style={styles.leftzi}>收货地址</Text>}
                        renderRightText={() => <Text style={styles.leftzi}>默认/新增收货地址</Text>}
                        onPressCell={() => {
                            this._route.pushToNext(AddressManage);
                        }}
                    />
                    <CusCellLine
                        renderLeftImg={()=>{}}
                        renderLeftText={() => <Text style={styles.leftzi}>绑定手机号</Text>}
                        renderRightText={() => <Text style={styles.leftzi}>15845985625</Text>}
                        onPressCell={() => {
                            this._route.pushToNext(amend);
                        }}
                    />
                    <CusCellLine
                        renderLeftImg={()=>{}}
                        renderLeftText={() => <Text style={styles.leftzi}>修改密码</Text>}
                        renderRightText={() => <Text style={styles.leftzi}>设置</Text>}
                        onPressCell={() => {
                            this._route.pushToNext(AlertPassword);
                        }}
                    />

                </View>

            </View>
        );
    }




}


function initState(store) {
    return {
        store: store,
        visible: store.MineReducer.visible,
    }
}

export default connect(initState)(mydatum);


const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    new_box:{
        flexDirection: 'row',
    },
    new_zi:{
        paddingBottom:2,
        paddingTop:0,
        paddingLeft:5,
        paddingRight:5,
        backgroundColor:'#ff5959',
        color:'#fff',
        borderRadius:50,
        marginLeft:0,
        position:'relative',
        bottom:10,
    },
    baise:{
        color:'#fff',
        fontSize:18
    },
    anniuBox:{
        color:'#fff',
        fontSize:16,
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
    },
    anniu:{
        width:'90%',
        height:44,
        backgroundColor:'#01B0FF',
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        borderRadius:6,
    },
    anniuzi:{
        color:'#fff',
        fontSize:15,
    },
    toubox:{
        width:'96%',
        marginLeft:'2%',
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2',
        height:75,
        flexDirection:'row',
        alignItems:'center'
    },
    toutext:{

    },
    touimg:{
        width:60,
        height:60,
        position:'absolute',
        right:5,

    }

})

function initState(store) {
    return {
        store: store,
        visible: store.MineReducer.visible,
    }
}

