import React,{Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TextInput,

} from 'react-native';
import Header from '../../components/header/index';
import ImgTextInput from '../mineinfo/components/ImgtextInput'
import Cusbutton from '../../components/button'
export default class register extends Component{

    render(){
        return(
            <View style={{flex: 1, backgroundColor: '#f9f9f9'}}>
                <Header
                    renderTitle={ () => {
                        return <Text style={styles.analysis_result_text}>新用户注册</Text>
                    }}
                    renderRight={()=>{
                        return <Text style={styles.register_referrer}>已有账户</Text>
                    }}
                />
                <View style={styles.buyer_seller}>
                    <View style={styles.buyer_view}>
                        <Image/>
                        <Text >我是买家</Text>
                    </View>
                    <View style={styles.seller_view}>
                        <Image/>
                        <Text>我是卖家</Text>
                    </View>
                </View>
                {/*{this._number()}*/}
                <ImgTextInput

                    renderImage={()=>{
                        return<Image style={styles.Img_icon} source={require('../images/ipone.png')}/>
                    }}
                    renderText={()=>{
                        return<TextInput
                            underlineColorAndroid={'transparent'} //输入框的线框为透明
                                            placeholder="请输入您的手机号"
                                            placeholderTextColor='#e2e2e2'
                            style={styles.T_input}/>
                    }}
                />
                <View style={styles.verification_View}>
                    <TextInput
                        style={styles.verification_input}
                        underlineColorAndroid={'transparent'} //输入框的线框为透明
                        placeholder="请输入您的手机号"
                        placeholderTextColor='#e2e2e2'
                    />
                    <View style={styles.verification_text_view}>
                        <Text style={styles.verification_text_string}>获取验证码</Text>
                    </View>
                </View>
                <ImgTextInput
                    renderImage={()=>{
                        return<Image style={styles.Img_icon} source={require('../images/lock.png')}/>
                    }}
                    renderText={()=>{
                        return<TextInput
                            underlineColorAndroid={'transparent'} //输入框的线框为透明
                            placeholder="请输入6-16位包含数字,字母的密码"
                            placeholderTextColor='#e2e2e2'
                            style={styles.T_input}/>
                    }}
                />
                <ImgTextInput
                    renderImage={()=>{
                        return<Image style={styles.Img_icon} source={require('../images/lock.png')}/>
                    }}
                    renderText={()=>{
                        return<TextInput
                            underlineColorAndroid={'transparent'} //输入框的线框为透明
                            placeholder="请再次输入密码"
                            placeholderTextColor='#e2e2e2'
                            style={styles.T_input}/>
                    }}
                />
                <View style={styles.agree_contain}>
                    <Image />
                    <Text >同意</Text>
                    <Text style={styles.agree_agreement}>《询配用户注册协议》</Text>
                </View>
                <Cusbutton
                    sty={styles.button_submit}
                    renderText='马上注册'
                />


            </View>
        )
    }
    // _number=()=>{
    //    return(
    //        <View style={styles.TextInput_contain}>
    //            <Image style={styles.Img_icon} source={require('../images/ipone.png')} />
    //            <TextInput
    //                style={styles.T_input}
    //                underlineColorAndroid={'transparent'} //输入框的线框为透明
    //                placeholder="请输入您的手机号"
    //                placeholderTextColor='#e2e2e2'
    //            />
    //        </View>
    //
    //    )
    // }
}

const styles=StyleSheet.create({
    button_submit:{
        marginTop:20,
    },
    agree_agreement:{
        color:'#00a8fd'
    },
    agree_contain:{
         flexDirection:'row',
        marginLeft:10,
        paddingLeft:10,

    },
    verification_text_string:{
        color:'white',

    },
    verification_text_view:{
        flex:2,
        backgroundColor:'#03a9f5',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        marginLeft:10,
    },
    verification_input:{
        flex:5,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#e5e5e5',
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'white'
    },
    verification_View:{
         margin:10,
        flexDirection:'row',
        height:40,
    },

    T_input:{
        flex:1,
    },
    Img_icon:{
        width:25,
        height:25,
       // backgroundColor:'pink',
        marginTop:-6,
    },
    TextInput_contain:{
        flexDirection:'row',
        margin:10,
        //padding:10,
        paddingLeft:10,
        paddingRight:10,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#e5e5e5',
        backgroundColor:'white',
    },

    seller_view:{
        flex:1,
       // backgroundColor:'pink',
        alignItems:'center',
    },
    buyer_view:{
        flex:1,
        alignItems:'center',
    },
    buyer_seller:{
        width:global.__WIDTH__,
        padding:12,
        margin:10,
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#e5e5e5',

    },
    register_referrer:{
        color: 'white',
    },
    analysis_result_text: {
        color: 'white',
        //fontWeight:'bold',
        fontSize: 18,
    },
})