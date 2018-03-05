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
    ToastAndroid,
    TextInput,
} from 'react-native';
import Header from '../../components/header/index';
import Text_input from '../../components/TextInput_component/TextInput1';
import CheckBox from 'react-native-check-box';
import CusButton from '../../components/button'
import Enroll from '../login/enroll'

export default class information extends Component{

    constructor(props){
        super(props)
        this.state = {
            checkState:false

        }
    }



    render(){
        return(
            <View style={{flex:1,backgroundColor: '#f9f9f9'}}>

                <Header
                    renderTitle = { () => {
                        return <Text style={styles.login_text} >登录</Text>
                    }}
                    // renderLeft ={()=>{
                    //     return  <Image style={styles.back_iocn} source={require("../../res/images/xunpei_Order/back.png")} />
                    // }}
                    renderRight={()=> {
                        onPress= () => this._route.pushToNext(newAddressManage)

                        return <Text style={styles.sign_in_text}>免费注册</Text>
                    }}
                />
                <View style={styles.UserName_contain}>
                 <Text_input
                     renderImg={()=>{
                         return <Image style={styles.icon_textinput} source={require("../../res/images/login/head_portrait.png")}  />
                     }}
                     renderTextInput={()=>{
                         return <TextInput
                             underlineColorAndroid='transparent'
                             placeholder="用户名"
                             placeholderTextColor="#e5e5e5"
                             keyboardType='name-phone-pad'
                         />
                     }}
                 />
                </View>
                <View style={styles.UserName_contain}>
                    <Text_input
                        renderImg={()=>{
                            return <Image style={styles.icon_textinput} source={require("../../res/images/login/lock.png")}  />
                        }}
                        renderTextInput={()=>{
                            return <TextInput
                                underlineColorAndroid='transparent'
                                placeholder="密码"
                                placeholderTextColor="#e5e5e5"
                                keyboardType='name-phone-pad'

                            />
                        }}
                    />
                </View>
                <View style={styles.remember_passwprd_View}>
                    <View style={styles.remember_passwprd_view_checkbox}>
                        <CheckBox
                            style={styles.remember_passwprd_checkbox}
                            onClick={(checkState) => this.changeCheckSate(checkState)}
                            isChecked={this.state.checkState}
                            checkedImage={()=>{
                                return <Image style={styles.checkedImage} source={require("../../mine/login/img/checked.png")}  />
                            }}
                            unCheckedImage={()=>{
                                return <Image style={styles.unCheckedImage} source={require("../../mine/login/img/unchecked.png")}  />
                            }}
                        />
                        <Text style={styles.remember_passwprd_text} >记住密码</Text>
                    </View>
                    <View style={styles.forget_password_View}>
                        <Text >忘记密码?</Text>
                    </View>

                </View>
                {/*<View style={styles.button}>*/}
                    {/*<Text style={styles.button_text}>登录</Text>*/}
                {/*</View>*/}
                <CusButton
                    renderText='登录'
                />
                <View style={styles.other_login_text_view}>
                    <View style={styles.line_one}></View>
                    <Text style={styles.line_middle}>其他方式登录</Text>
                    <View style={styles.line_one}></View>
                </View>
                <View style={styles.icon_View}>
                    <Image style={styles.icon_img1} source={require("../../res/images/login/wechat.png")} />
                    <Image style={styles.icon_img1} source={require("../../res/images/login/QQ.png")}/>
                </View>

            </View>

        )
    }

    changeCheckSate (checkState) {

        this.setState({
            checkState:checkState
        })
    }



}

const styles =StyleSheet.create({

    icon_img1:{
        width:30,
        height:30,
        marginLeft:10,
        marginRight:10,
        //backgroundColor:'pink',
        resizeMode:'contain'
    },
    icon_View:{
        width:global.__WIDTH__,
        flexDirection:'row',
        justifyContent:'center',
    },
    line_middle:{
        marginLeft:10,
        marginRight:10,
        color:'#6a6a6a',

    },
    line_one:{
        flex:1,
        height:1,
        backgroundColor:'#dedede'
    },
    other_login_text_view:{
        width:global.__WIDTH__,
        height:40,
        flexDirection:'row',
        alignItems:'center',
        marginLeft:20,
        marginRight:20,
    },
    // button_text:{
    //    color:'white' ,
    //     fontSize:15,
    // },
    // button:{
    //     width:global.__WIDTH__,
    //     height:40,
    //     margin:10,
    //     backgroundColor:'#03a9f5',
    //     alignItems:'center',
    //     justifyContent:'center',
    //     borderRadius:5,
    // },
    forget_password_View:{
        flex:1,
      //  flexDirection:'flex-end',
        flexDirection:'row-reverse',
       // backgroundColor:'gray'
    },
    remember_passwprd_text:{
        fontSize:16,

    },
    remember_passwprd_checkbox:{


    },
    remember_passwprd_view_checkbox:{
        flexDirection:'row',
    },
    remember_passwprd_View:{
       width:global.__WIDTH__,
        padding:10,
     //   backgroundColor:'pink',
        flexDirection:'row'
    },
    icon_textinput:{
        width:25,
        height:25,
        resizeMode:'contain',

      // backgroundColor:'pink'
    },

    UserName_contain:{
        width:global.__WIDTH__,
        padding:9,
        marginTop:5,
    },
    TextInput:{
        flex:1,
    },
    icon_img:{
        width:10,
        height:10,
    },
    sign_in_text:{
        fontSize:14,
        color:'#ffffff',

    },
    back_iocn:{
        width:25,
        height:25,
    },
    login_text:{
        fontSize:18,
        color:'white',
       // fontWeight:'bold'
    },
});