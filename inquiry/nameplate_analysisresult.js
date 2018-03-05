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
    ScrollView,
    TextInput,
    StatusBar,
} from 'react-native';
import Header from '../components/header';
export default class information extends Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#f3f3f3'}}>
                <StatusBar
                    style={styles.sta_bar}
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                    hidden={false}  //是否隐藏状态栏。
                    backgroundColor={'transparent'} //状态栏的背景色color="#facb27"
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
                    barStyle={'default'} // enum('default', 'light-content', 'dark-content')
                ></StatusBar>
                <Header
                    renderTitle = { () => {
                        return <Text style={styles.analysis_result_text}>铭牌辅助解析结果</Text>
                    }}
                    renderLeft ={()=>{
                        return  <View ><Image style={styles.back_iocn} source={require("../res/images/xunpei_Order/back.png")} /></View>
                    }}
                    renderRight={()=> {
                        return <View><Image style={styles.analysis_result_icon} source={require("../res/images/xunpei_Order/wenhaodeng.png")} /></View>
                    }}
                />
                <ScrollView>
                    <View style={styles.nameplate_View} >
                        <Image style={styles.nameplate_img} source={require("../res/images/xunpei_Order/jiexi.png")}/>
                    </View>
                    <View style={styles.infomation_font_View}>
                        <Text style={styles.infomation_font_text} >点击方框内信息，可进行修改</Text>
                    </View>
                    <View style={styles.brand_info_view}>
                        <Text style={styles.brand_info_font}>品牌信息:</Text>
                        <Text style={styles.brand_info_text}>丰田-TOYOTA</Text>
                        <View style={styles.update_font_view}>
                            <Text style={styles.update_font_text}>修改</Text>
                        </View>
                    </View>

                    <View style={styles.VIN_info}>
                       <Text  style={styles.VIN_info_text}>请核对车辆识别代码(VIN)信息，确认无误</Text>
                        <Image style={styles.VIN_info_img} source={require("../res/images/xunpei_Order/jiexi2.png")}/>
                        <View style={styles.VIN_info_analysisResult}>
                            <View  style={styles.VIN_info_analysisResult_view}>
                                <TextInput underlineColorAndroid='transparent' style={styles.VIN_info_analysisResult_textInput}>LFM</TextInput>
                            </View>
                            <View style={styles.VIN_info_analysisResult_view}>
                                <TextInput style={styles.VIN_info_analysisResult_textInput}>GJK74</TextInput>
                            </View>
                            <View style={styles.VIN_info_analysisResult_view}>
                                <TextInput style={styles.VIN_info_analysisResult_textInput}>XE30</TextInput>
                            </View>



                            {this.textinput()}


                        </View>

                    </View>

                </ScrollView>

            </View>

        )
    }

    textinput = () => {
        return (
            <View style={styles.VIN_info_analysisResult_view}>
                <TextInput style={styles.VIN_info_analysisResult_textInput}>32912</TextInput>
            </View>
        )
    }
}
const styles =StyleSheet.create({
    VIN_info_analysisResult_textInput:{
        width:'100%',

    },
    VIN_info_analysisResult_view:{
       // borderWidth:1,
        //borderColor:'#e5e5e5',
        borderRightWidth:1,
        borderRightColor:'#e5e5e5',
        padding:5,
        flex:1,
        alignItems:'center',
       // justifyContent:'center',
    },
    VIN_info_analysisResult:{
       // padding:5,
        borderWidth:1,
        borderColor:'#e5e5e5',
        flexDirection:'row',
        borderRightWidth:0,
    },
    VIN_info_img:{
        width:global.__WIDTH__,
        height:50,
        resizeMode:'contain',
        marginTop:5,
        marginBottom:5,
    },
    VIN_info_text:{
        fontSize:13,
    },
    VIN_info:{
        padding:10,
        backgroundColor:'white',
    },
    update_font_text:{
          fontSize:13,
        color:'#00a0e9',
    },
    update_font_view:{
          flex:1,
        flexDirection:'row-reverse',
    },
    brand_info_text:{
        marginLeft:10,
        color:'#00a0e9',
        fontSize:15,
    },
    brand_info_font:{
        fontSize:15,
        fontWeight:'bold',
    },
    brand_info_view:{
        width:global.__WIDTH__,

        backgroundColor:'#f3f3f3',
        flexDirection:'row',
        padding:10,
    },
    infomation_font_text:{
        fontSize:13,
        color:'#00a0e9',
    },
    infomation_font_View:{
        width:global.__WIDTH__,
        height:24,
        backgroundColor:'#e5e5e5',
        alignItems:'center',
        justifyContent:'center',
    },
    nameplate_img:{
         width:global.__WIDTH__,
        height:180,
        resizeMode:'stretch'
    },
    nameplate_View:{
        padding:10,
        width:global.__WIDTH__,
        height:200,
        backgroundColor:'white',
    },
    analysis_result_icon:{
        width:25,
        height:25,
        resizeMode:'contain',
    },
    back_iocn:{
        width:25,
        height:25,
        marginLeft:10,
    },
    analysis_result_text:{
          color:'white',
         //fontWeight:'bold',
        fontSize:18,
    },
});