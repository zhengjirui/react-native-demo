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
    StatusBar,
} from 'react-native';
import Header from '../components/header';
export default class xunpei_Orders extends Component{
    render(){
        return(
            <View style={{flex:1,}}>
                <StatusBar
                    animated={true}
                    backgroundColor={'#2d8ff4'}
                    barStyle={'light-content'}
                ></StatusBar>
                <Header
                        renderTitle = { () => {
                            return <Text style={styles.xunpei_text}>询配下单</Text>
                        }}
                        renderLeft ={()=>{
                            return  <View ><Image style={styles.back_iocn} source={require("../res/images/xunpei_Order/back.png")} /></View>
                        }}
                        renderRight={()=> {
                            return <View><Image style={styles.share_icon} source={require("../res/images/xunpei_Order/share.png")} /></View>
                        }}
                />

                <View style={styles.brand}>
                    <View style={styles.brand_View}>
                        <Text style={styles.brand_font}>厂        牌:</Text>
                        <Text style={[styles.brand_font,styles.brand_font_Text]}>丰田/TOYOTA</Text>
                    </View>
                    <View style={styles.brand_View}>
                        <Text style={styles.brand_font}>车        系:</Text>
                        <Text style={[styles.brand_font,styles.brand_font_Text]}>霸道/LAND CRUISER PRADO</Text>
                    </View>
                    <View style={styles.brand_View}>
                        <Text style={styles.brand_font}>车型代码:</Text>
                        <Text style={[styles.brand_font,styles.brand_font_Text]}>ZWE1821-GEXEBC</Text>
                        <View style={styles.brand_font_view}>
                            <Text style={[styles.brand_font,styles.font_verification]}>(781350)</Text>
                        </View>
                    </View>
                    <View style={styles.down_view}>
                        <Image style={styles.down_icon} source={require("../res/images/xunpei_Order/down2.png")}/>
                    </View>
                </View>

                <View style={styles.search_View}>
                    <View style={styles.search_View_view}>
                        <Image style={styles.search_icon} source={require("../res/images/xunpei_Order/search.png")}/>
                        <TextInput underlineColorAndroid='transparent'
                                   keyboard='phone-pad'
                                   placeholder="请输入关键字"
                                   returnKeyType='search'
                              //     placeholderTextColor='red'
                                   autoCapitalize='characters'
                           style={styles.search_textinput}
                        />
                    </View>
                </View>


            </View>

        )
    }
}
const styles=StyleSheet.create({

    search_textinput:{
        flex:1,
       // backgroundColor:'gray',
        marginTop:9,
       // keyboardType:'decimal-pad',
       // color:'white',

    },
    search_icon:{
        width:23,
        height:23,
      //  backgroundColor:'pink',
    },
    search_View_view:{
       flex:1,
        backgroundColor:'#4cc7ff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#308ef2',
        padding:5,
       justifyContent:'center',
        flexDirection:'row'
        //alignItems:'center',
    },
    search_View:{
        width:global.__WIDTH__,
        height:55,
        padding:10,
      //  backgroundColor:'pink',
    },
    down_icon:{
        width:15,
        height:10,

    },
    down_view:{
        width:global.__WIDTH__,
        height:10,
      // backgroundColor:'pink',
        alignItems:'center',
    },
    brand_font_Text:{
        marginLeft:10,
    },
    font_verification:{

    },
    brand_font_view:{
         flex:1,
        flexDirection:'row-reverse',

        //backgroundColor:'pink',
    },
    brand_View:{
        flexDirection:'row',
        marginTop:3,
    },
    brand_font:{
        color:'white',
        fontSize:12,
    },
    brand:{
        marginTop:10,
        backgroundColor:'#361415',
        width:global.__WIDTH__,
        height:80,
        borderRadius:3,
        paddingTop:5,
        paddingLeft:12,
        paddingRight:10,
          // shadowColor:'black',
          // shadowOffset:{height:10,width:global.__WIDTH__},
          elevation: 5,
    },
    share_icon:{
        width:30,
        height:30,
    },
    back_iocn:{
        width:25,
        height:25,
        marginLeft:10,
    },
    xunpei_text:{
        color:'white',
    },
});