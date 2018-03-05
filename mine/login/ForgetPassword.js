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

export default class ForgetPassword extends Component {

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
                        return <Text style={styles.baise}>忘记密码</Text>
                    }}
                />

                <View>
                    <View style={styles.forgetbox}>
                        <Image
                            style={styles.forgetImg}
                            source={require("./img/shouji.png")}/>
                        <TextInput
                                   keyboard='phone-pad'
                                   placeholder="请输入手机号"
                                   autoCapitalize='characters'
                                   underlineColorAndroid='transparent'
                                   style={styles.forgetInput}
                        />
                    </View>
                    <View style={styles.forgetyanma}>

                        <View style={styles.forgetyanbox}>
                            <TextInput
                                placeholder="请输入验证码"
                               style={{paddingLeft:10}}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={()=>{
                                if(this.state.data === '获取验证码' || this.state.data === '重新发送'){
                                    this._eventTime()
                                }
                            }}
                            style={styles.forgetma}
                        >
                            <Text style={styles.forgetzi}>{this.state.data}</Text>
                        </TouchableOpacity>


                    </View>
                    <View style={styles.forgetbox}>
                        <Image
                            style={styles.forgetImg}
                            source={require("./img/suo.png")}/>
                        <TextInput
                            keyboard='phone-pad'
                            placeholder="请输入6-16位包含数字、字母的密码"
                            autoCapitalize='characters'
                            underlineColorAndroid='transparent'
                            style={styles.forgetInput}
                        />
                    </View>
                    <View style={styles.forgetbox}>
                        <Image
                            style={styles.forgetImg}
                            source={require("./img/suo.png")}/>
                        <TextInput
                            keyboard='phone-pad'
                            placeholder="请再次输入密码"
                            autoCapitalize='characters'
                            underlineColorAndroid='transparent'
                            style={styles.forgetInput}
                        />
                    </View>


                    <View style={styles.querenbox}>
                        <Text style={styles.queren}>确认</Text>
                    </View>

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


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f4f4f4'
    },
    baise:{
        color:'#fff',
        fontSize:18,
    },
    forgetbox:{
       flexDirection:'row',
        width:'94%',
        borderWidth:1,
        borderColor:'#ddd',
        marginLeft:'3%',
        borderRadius:6,
        marginTop:16,
        alignItems:'center'
    },
    forgetyanma:{
        flexDirection:'row',
        width:'94%',
        marginLeft:'3%',
        marginTop:16,
        alignItems:'center'
    },
    forgetyanbox:{
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:6,
        height:44,
        width:'55%',
        marginRight:'5%'
    },
    forgetma:{
        borderRadius:6,
        height:44,
        width:'40%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#03a9f4'
    },
    forgetzi:{
      color:'#fff',
        fontSize:16
    },
    forgetImg:{
        width:14,
        height:17,
        marginLeft:6,
    },
    forgetInput:{
        width:'90%',
        height:44,
        borderWidth:0,
        marginLeft:6
    },
    forgetyan:{
        width:'50%'
    },
    querenbox:{
        width:'94%',
        marginLeft:'3%',
        height:44,
        backgroundColor:'#03a9f4',
        justifyContent:'center',
        alignItems:'center',
        marginTop:16,
        borderRadius:6,
    },
    queren:{
        color:'#fff',
        fontSize:16
    }

})

