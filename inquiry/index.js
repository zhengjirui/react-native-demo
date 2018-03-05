/**
 * Created by zheng on 2017/11/11.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    NativeModules,
    DeviceEventEmitter,
    ToastAndroid,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import page1 from '../components/PullToRefreshScrollView';
import Route from '../route';
import SplashScreen from 'react-native-splash-screen'
import {Loading} from '../components';
import {connect} from 'react-redux';
import {InquiryActions} from './action';
import Header from '../components/header';
import scanner from '../scanner';
import aksjdkm from '../scanner/analyInfo'

import Swiper from 'react-native-swiper'
import information from "../scanner/nameplate_result";


const Images = [{src: require('../res/images/index/lunbo_3x.png')},
    {src: require('../res/images/index/lunbo_3x.png')},
    {src: require('../res/images/index/lunbo_3x.png')},
    {src: require('../res/images/index/lunbo_3x.png')},]

class inquiry extends Component {
    // 构造
    constructor(props) {
        super(props);
        this._route = new Route();
        // 初始状态
        this.state = {};
    }

    componentDidMount() {
        SplashScreen.hide();//关闭启动屏幕
        // setInterval(() => {
        //     // 方式一：
        //     // this.props.dispatch(this._changeVisible(this.props.dispatch));
        //
        //
        //     //方式二：
        //     // this.props.dispatch(dispatch => {
        //     //     return dispatch({type: 'pushtonext', visible: false});
        //     // });
        //     // 方式三：
        //     this.props.dispatch(InquiryActions({type: 'changeloading', visible: false}));
        //
        // }, 5000);

        DeviceEventEmitter.addListener('EventName', (msg) => {
            this._route.pushToNext(information)
        });

    }

    _renderSwiper() {

        return (
            <Swiper
                style={styles.swiperStyle}
                height={200}
                width={global.__WIDTH__}
                horizontal={true}
                autoplay={true}
                autoplayTimeout={3}
                loop={true}
                paginationStyle={{bottom: 10}}
                dotStyle={{backgroundColor: 'rgba(0,0,0,.2)', width: 6, height: 6}}
                activeDotStyle={{backgroundColor: 'rgba(0,0,0,.5)', width: 6, height: 6}}>
                <View style={styles.swiperItem}>
                    <Image style={styles.imageStyle} source={Images[0].src}></Image>
                </View>
                <View style={styles.swiperItem}>
                    <Image style={styles.imageStyle} source={Images[1].src}></Image>
                </View>
                <View style={styles.swiperItem}>
                    <Image style={styles.imageStyle} source={Images[2].src}></Image>
                </View>
                <View style={styles.swiperItem}>
                    <Image style={styles.imageStyle} source={Images[3].src}></Image>
                </View>
            </Swiper>

        )
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
        if (DeviceEventEmitter) {

        }
    }


    render() {
        return (
            <View style={styles.container_wrap}>
                {this.props.visible == true ? (<Loading/>) : null }
                {/*<Header style={styles.header}*/}
                        {/*renderTitle={ () => {*/}
                            {/*return <Text style={styles.xunjia_font}>询价</Text>*/}
                        {/*}}*/}
                        {/*renderLeft={() => {*/}
                            {/*return <View ><Image resizeMode={Image.resizeMode.contain} style={styles.icon_ren}*/}
                                                 {/*source={require("../res/images/index/ren_3x.png")}/></View>*/}
                        {/*}}*/}
                {/*/>*/}
                <StatusBar
                    style={styles.sta_bar}
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                    hidden={false}  //是否隐藏状态栏。
                    backgroundColor={'transparent'} //状态栏的背景色color="#facb27"
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
                    barStyle={'default'} // enum('default', 'light-content', 'dark-content')
                ></StatusBar>


                <ScrollView
                    style={styles.container}>
                    {this._renderSwiper()}
                    <Image style={styles.background_image} source={require("../res/images/index/bg_3x.png")}>
                        <View style={styles.help_font_view}>
                            <View style={styles.wenhao_view}>
                                <Text style={styles.wenhao_text}>?</Text>
                            </View>
                            <Text style={styles.help_font}>如何找到汽车铭牌中的17位VIN码</Text>
                        </View>
                        <View style={styles.sao_view}>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => {
                                    // this._route.pushToNext(scanner);
                                    NativeModules.MyMapIntentModule.startActivityByClassname('com.hxscan.zheng.CaptureActivity', 1);
                                }}>
                                <Image
                                    style={styles.sao}
                                    source={require("../res/images/index/sao_3x.png")}
                                />
                            </TouchableOpacity>
                            <Text style={[styles.sao_font, styles.saoyisao_font]}>扫一扫</Text>
                            <View style={styles.VIN_view}><Text style={[styles.sao_font]}>请录入铭牌上17位VIN查询</Text></View>
                            <View style={styles.search_view}>
                                <View style={styles.peijian_View}><Text style={[styles.sao_font]}>配件查询</Text></View>
                                <View style={styles.tulie_View}><Text style={[styles.sao_font]}>图列查询</Text></View>
                            </View>

                        </View>
                    </Image>
                    <View style={styles.xunpei_View}>
                        <Image style={styles.xunpei_icon} source={require("../res/images/index/xunpei_3x.png")}/>
                        <View style={styles.swiperStyle_View}>
                            <Swiper
                                style={styles.swiperStyle_Swiper}
                                height={50}
                                width={200}
                                horizontal={false}
                                autoplay={true}
                                autoplayTimeout={3}
                                showsPagination={false}

                            >
                                <View style={styles.swiperItem}>
                                    <Text style={styles.swiperItem_font}>高先生下单霸道"凸轮轴，轮胎..."</Text>
                                </View>
                                <View style={styles.swiperItem}>
                                    <Text style={styles.swiperItem_font}>高先生下单霸道"凸轮轴，轮胎..."</Text>
                                </View>
                                <View style={styles.swiperItem}>
                                    <Text style={styles.swiperItem_font}>高先生下单霸道"凸轮轴，轮胎..."</Text>
                                </View>
                                <View style={styles.swiperItem}>
                                    <Text style={styles.swiperItem_font}>高先生下单霸道"凸轮轴，轮胎..."</Text>
                                </View>
                            </Swiper>
                        </View>
                    </View>
                    <Image style={styles.middle_image} source={require("../res/images/index/middle_3x.png")}/>

                    <View style={styles.function_component}>
                        <View style={styles.function_component_Top}>
                            <View style={styles.function_component_list}>
                                <Image style={styles.function_component_img}
                                       source={require("../res/images/index/list1_3x.png")}/>
                                <Text style={styles.function_component_text}>发动机</Text>
                            </View>
                            <View style={styles.function_component_list}>
                                <Image style={styles.function_component_img}
                                       source={require("../res/images/index/list2_3x.png")}/>
                                <Text style={styles.function_component_text}>底盘</Text>
                            </View>
                            <View style={styles.function_component_list}>
                                <Image style={styles.function_component_img}
                                       source={require("../res/images/index/list3_3x.png")}/>
                                <Text style={styles.function_component_text}>车身</Text>
                            </View>
                            <View style={styles.function_component_list}>
                                <Image style={styles.function_component_img}
                                       source={require("../res/images/index/list4_3x.png")}/>
                                <Text style={styles.function_component_text}>ABS</Text>
                            </View>
                            <View style={styles.function_component_list}>
                                <Image style={styles.function_component_img}
                                       source={require("../res/images/index/list5_3x.png")}/>
                                <Text style={styles.function_component_text}>轮胎</Text>
                            </View>
                        </View>
                        <View style={styles.function_component_Top}>
                            <View style={styles.function_component_list}>
                                <Image style={styles.function_component_img}
                                       source={require("../res/images/index/list6_3x.png")}/>
                                <Text style={styles.function_component_text}>车灯</Text>
                            </View>
                            <View style={styles.function_component_list}>
                                <Image style={styles.function_component_img}
                                       source={require("../res/images/index/list7_3x.png")}/>
                                <Text style={styles.function_component_text}>发电机</Text>
                            </View>
                            <View style={styles.function_component_list}>
                                <Image style={styles.function_component_img}
                                       source={require("../res/images/index/list8_3x.png")}/>
                                <Text style={styles.function_component_text}>喇叭</Text>
                            </View>
                            <View style={styles.function_component_list}>
                                <Image style={styles.function_component_img}
                                       source={require("../res/images/index/list9_3x.png")}/>
                                <Text style={styles.function_component_text}>轴承</Text>
                            </View>
                            <View style={styles.function_component_list}>
                                <Image style={styles.function_component_img}
                                       source={require("../res/images/index/list10_3x.png")}/>
                                <Text style={styles.function_component_text}>座椅</Text>
                            </View>
                        </View>
                    </View>
                    <Image style={styles.middle2_image} source={require("../res/images/index/middle2_3x.png")}/>

                </ScrollView>


                {/*<Text onPress={() => {*/}
                    {/*this._route.pushToPage(aksjdkm)*/}
                    {/*// NativeModules.MyMapIntentModule.startActivityByClassname('com.hxscan.zheng.CaptureActivity',1);*/}
                {/*}}>{this.props.varsss}</Text>*/}


            </View>

        )

    }
}

function initState(store) {
    return {
        visible: store.InquiryReducer.visible,
        varsss: store.InquiryReducer.varsss,
        store: store
    }

}

const styles = StyleSheet.create({
    sta_bar:{
        opacity:0.5,
    },
    middle2_image: {
        width: global.__WIDTH__,
        height: 50,
        resizeMode: 'stretch',
        marginTop: 10,
        marginBottom: 10,
    },
    function_component_text: {
        marginTop: 5,
        fontSize: 12,
    },
    function_component_img: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
    },
    function_component_list: {
        flex: 1,
        // backgroundColor:'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    function_component_Top: {
        width: global.__WIDTH__,
        height: 100,
        // backgroundColor:'pink',
        flexDirection: 'row',
    },
    function_component: {
        width: global.__WIDTH__,
        height: 200,
        backgroundColor: 'white',
        marginTop: 10,
    },
    middle_image: {
        width: global.__WIDTH__,
        height: 50,
        resizeMode: 'stretch',
    },
    swiperStyle_Swiper: {
        flexDirection: 'column',
    },
    swiperStyle_View: {
        marginLeft: 30,
    },
    xunpei_icon: {
        width: 100,
        height: 40,
        resizeMode: 'stretch',
        marginTop: 5,
    },
    xunpei_View: {
        width: global.__WIDTH__,
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginTop: 10,
    },
    swiperItem_font: {
        fontSize: 12,
    },
    tulie_View: {
        padding: 5,
        borderWidth: 2,
        alignItems: 'center',
        marginTop: 5,
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: 5,
        borderRadius: 5,
        borderColor: '#bfdaff',
        backgroundColor: '#e3f5ff',
    },
    peijian_View: {
        padding: 5,
        borderWidth: 2,
        alignItems: 'center',
        marginTop: 5,
        paddingLeft: 20,
        paddingRight: 20,
        marginRight: 5,
        borderRadius: 5,
        borderColor: '#bfdaff',
        backgroundColor: '#e3f5ff',
    },
    VIN_view: {
        padding: 5,
        borderWidth: 2,
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 5,
        borderColor: '#bfdaff',
        backgroundColor: '#e3f5ff',
        marginTop: 25,
        marginBottom: 10,
    },
    search_view: {
        width: global.__WIDTH__,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sao_font: {
        color: '#969696',

    },
    saoyisao_font: {
        fontWeight: 'bold',
        marginTop: 5
    },
    sao: {
        width: 95,
        height: 95,
        marginTop: 8
    },
    sao_view: {
        width: global.__WIDTH__,
        height: 90,
        alignItems: 'center'
    },
    help_font_view: {
        flexDirection: 'row',
        width: global.__WIDTH__,
        height: 25,
        alignItems: 'center',
        margin: 6
    },
    help_font: {
        fontSize: 15,
        color: '#3fb2ed',

    },
    wenhao_text: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold'

    },
    wenhao_view: {
        width: 15,
        height: 15,
        backgroundColor: '#01b0ff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,

    },


    container_wrap: {
        flex: 1,
        backgroundColor: '#f7f7f7',

    },
    header: {
        backgroundColor: '#01b0ff'
    },
    xunjia_font: {
        color: 'white',
        fontSize: 18,
        //fontWeight:'bold', 字体加粗
    },
    icon_ren: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },
    swiperStyle: {},
    swiperItem: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    imageStyle: {

        resizeMode: 'cover',
        height: 200,
        width: global.__WIDTH__

    },
    background_image: {
        width: global.__WIDTH__,
        height: 300,
        resizeMode: 'cover',
        // backgroundColor:'red',
        // shadowColor:'black',
        // shadowOffset:{h:10,w:10},


    },
});

export default connect(initState)(inquiry);