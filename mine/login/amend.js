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
import PullToRefreshScrollView from '../../components/PullToRefreshScrollView';
import CusButton from '../../components/button';
import {connect} from 'react-redux'
import Route from "../../route";
import amendnew from './amendnew';
import Header from '../../components/header';
export default class amend extends Component {

    constructor(props){
        super(props);
        this._route = new Route();
        // 初始状态
        this.state = {
            isRefreshing: false,
        };

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
                    <View style={{width:width,backgroundColor:'#f2f2f2',height:12,borderBottomColor:'#eee',borderBottomWidth:1}}></View>
                    <View style={styles.amendTopBox}>
                        <View style={styles.kuaibox}>
                            <View style={styles.kuai1}></View>
                            <View style={styles.kuai2}></View>
                            <View style={styles.kuai2}></View>
                            <View style={styles.kuai2}></View>
                            <View style={[styles.kuai1,styles.huise]}></View>
                            <View style={[styles.kuai2,styles.huise]}></View>
                            <View style={[styles.kuai2,styles.huise]}></View>
                            <View style={[styles.kuai2,styles.huise]}></View>
                            <View style={[styles.kuai1,styles.huise]}></View>
                        </View>
                        <View style={styles.bangzibox}>
                            <Text style={styles.bangzi}>验证身份</Text>
                            <Text style={styles.bangzi}>设置新手机</Text>
                            <Text style={styles.bangzi}>绑定成功</Text>
                        </View>
                    </View>
                    <View style={{width:width,backgroundColor:'#f2f2f2',height:12,borderBottomColor:'#eee',borderBottomWidth:1}}></View>
                    <View>
                        <View style={styles.amendInputbox}>
                            <TextInput
                                keyboard='phone-pad'
                                placeholder="请输入旧手机号"
                                autoCapitalize='characters'
                                underlineColorAndroid='transparent'
                                style={styles.amendInput}
                            />
                        </View>
                        <View style={[styles.amendInputbox,styles.amendInputbox2]}>
                            <View style={[styles.amendInputleft,styles.amendInputleft2]}>
                                <TextInput
                                    keyboard='phone-pad'
                                    placeholder="请输入验证码"
                                    autoCapitalize='characters'
                                    underlineColorAndroid='transparent'
                                    style={styles.amendInput}
                                />
                            </View>

                            <TouchableOpacity
                                onPress={()=>{
                                    if(this.state.data === '获取验证码' || this.state.data === '重新发送'){
                                        this._eventTime()
                                    }
                                }}
                                style={styles.amendInputright}
                            >
                                <Text style={styles.forgetzi}>{this.state.data}</Text>
                            </TouchableOpacity>


                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                this._route.pushToNext(amendnew);
                            }}
                            activeOpacity={0.8}
                        >
                           <CusButton
                               renderText={'下一步'}
                           />

                        </TouchableOpacity>
                    </View>

                </PullToRefreshScrollView>
            </View>
        );
    }

    _eventTime() {

        let time=59;
        this._timer=setInterval(()=>{
            this.setState({data:time--});
            if(time<=0){
                this._timer && clearInterval(this._timer);
                this.setState({data:'重新发送'});
            }
        },1000);
    }

    stopTime(){
        this._timer && clearInterval(this._timer);
    }

    componentWillUnmount() {
        this._timer && clearInterval(this._timer);
    }


}


function initState(store) {
    return {
        store: store,
        visible: store.MineReducer.visible,
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
    amendTopBox:{
        height:70,
        backgroundColor:'#fff',
        borderBottomWidth:1,
        borderColor:'#eee',
    },
    kuaibox:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:18,
    },
    kuai1:{
        width:10,
        height:10,
        backgroundColor:'#03a9f4',
        borderRadius:50,
        marginLeft:10,
        marginRight:10,
    },
    kuai2:{
        width:5,
        height:5,
        backgroundColor:'#03a9f4',
        borderRadius:50,
        marginLeft:10,
        marginRight:10,
    },
    huise:{
        backgroundColor:'#cecece',
    },
    bangzibox:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:10,
    },
    bangzi:{
        marginRight:21,
        marginLeft:21,
    },
    amendInputbox:{
        width:'90%',
        height:44,
        marginTop:20,
        marginLeft:'5%',
        backgroundColor:'#fff',
        borderRadius:6,
        borderWidth:1,
        borderColor:'#eee',
    },
    amendInputbox2:{
        flexDirection:'row',
        alignItems:'center',
        borderWidth:0,
    },
    amendInput:{
        marginLeft:5,
    },
    amendInputleft:{
        width:'65%',
        marginRight:'5%'

    },
    amendInputright:{
        borderColor:'#03a9f4',
        borderWidth:1,
        height:44,
        width:'30%',
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center'
    },

    amendInputleft2:{
        borderColor:'#eee',
        borderWidth:1,
        borderRadius:6,
    }

})

