/**
 * Created by zheng on 2017/11/11.
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    NativeModules
} from 'react-native';
import Header from '../components/header/index';
import CusInfoSure from '../scanner/components/infosure/CusInfoSure'
import CusInputGroup from '../scanner/components/infosure/CusInputGroup'
import xunpei_Orders from "../inquiry/xunpei_Orders";
import analyInfo from "./analyInfo";
import AlertRecordView from "./components/alertrecord/AlertRecordView";
import Route from "../route";
import AlertTextInput from "./components/alertrecord/AlertTextInput";
import DialogView from "../components/dialog/DialogView";
export default class information extends Component {


    constructor(props) {
        super(props);
        this._route = new Route();
        // 初始状态
        this.state = {};
    }


    render() {
        return (
            <View style={{flex:1,backgroundColor: '#f3f3f3'}}>

                <Header
                    renderTitle = { () => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={ () => {}}
                            >
                                <Text style={styles.analysis_result_text}>铭牌辅助解析结果</Text>
                            </TouchableOpacity>
                        )
                    }}

                    renderRight={() => {
                        return <View><Image style={styles.analysis_result_icon}
                                            source={require("../res/images/xunpei_Order/wenhaodeng.png")}/></View>
                    }}
                />

                <ScrollView>
                    <View style={styles.nameplate_View}>
                        <Image style={styles.nameplate_img} source={require("../res/images/xunpei_Order/jiexi.png")}/>
                    </View>
                    <View style={styles.infomation_font_View}>
                        <Text style={styles.infomation_font_text}>点击方框内信息，可进行修改</Text>
                    </View>
                    <View style={styles.brand_info_view}>
                        <Text style={styles.brand_info_font}>品牌信息:</Text>
                        <Text style={styles.brand_info_text}>丰田-TOYOTA</Text>
                        <View style={styles.update_font_view}>
                            <Text style={styles.update_font_text}>修改</Text>
                        </View>
                    </View>

                    <View>
                        <CusInfoSure
                            renderTopText={() => {
                                return <Text>请核对车辆识别代码(VIN)信息，确认无误</Text>
                            }}
                            renderMiddleImg={() => {
                                return <Image style={styles.VIN_info_img}
                                              source={require("../res/images/xunpei_Order/jiexi2.png")}/>
                            }}
                            renderBottomInput={() => {
                                return <CusInputGroup
                                    numberInput={4}
                                />
                            }}
                        />
                    </View>
                    <View>
                        <CusInfoSure
                            renderTopText={() => {
                                return <Text>请核对车辆识别代码(VIN)信息，确认无误</Text>
                            }}
                            renderMiddleImg={() => {
                                return <Image style={styles.VIN_info_img}
                                              source={require("../res/images/xunpei_Order/jiexi2.png")}/>
                            }}
                            renderBottomInput={() => {
                                return <CusInputGroup
                                    numberInput={4}
                                />
                            }}
                        />
                    </View>
                    <View>
                        <CusInfoSure
                            renderTopText={() => {
                                return <Text>请核对车辆识别代码(VIN)信息，确认无误</Text>
                            }}
                            renderMiddleImg={() => {
                                return <Image style={styles.VIN_info_img}
                                              source={require("../res/images/xunpei_Order/jiexi2.png")}/>
                            }}
                            renderBottomInput={() => {
                                return <CusInputGroup
                                    numberInput={4}
                                />
                            }}
                        />
                    </View>
                    <View>
                        <CusInfoSure
                            renderTopText={() => {
                                return <Text>请核对车辆识别代码(VIN)信息，确认无误</Text>
                            }}
                            renderMiddleImg={() => {
                                return <Image style={styles.VIN_info_img}
                                              source={require("../res/images/xunpei_Order/jiexi2.png")}/>
                            }}
                            renderBottomInput={() => {
                                return <CusInputGroup
                                    numberInput={4}
                                />
                            }}
                        />
                    </View>
                    <View style={styles.jiexi_result}>
                        <Text style={styles.jiexi_result_text}>解析结果</Text>
                        <TouchableOpacity
                            style={{position:'absolute',right:10,top:5}}
                            onPress={() => this._route.pushToPage(analyInfo) }
                        >
                            <Text style={{color:'#28D2DB'}}>查看解析详情</Text>
                        </TouchableOpacity>

                    </View>
                    {this._renderCarInfoType()}


                    <View style={styles.bottom_view}>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            // onPress={() => {this._route.pushToPage(xunpei_Orders)}}
                             onPress={() => {
                                 NativeModules.MyMapIntentModule.startActivityByClassname('com.hxscan.zheng.CaptureActivity', 1);
                                this._route.popToLast()
                             }}
                            style={{flex: 1}}
                        >

                            <View style={styles.bottom_view_anewbutton}>
                                <Text>从新扫描</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {this._alertView.show()}}
                            style={{flex: 1}}
                        >

                            <View style={styles.bottom_view_nextbutton}>
                                <Text style={styles.bottom_view_nextfont}>下一步</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
                {/*<AlertRecordView*/}
                    {/*ref={ alertView => this._alertView = alertView }*/}
                    {/*style={{position:'absolute'}}*/}
                {/*/>*/}

                <DialogView
                    ref={ alertView => this._alertView = alertView }
                    renderContent={() => this._renderDialogView()}
                />


            </View>

        )
    }

    _renderCarInfoType = () => {
        return (
            <View style={styles.renderCarInfoType_view}>

                <View style={styles.carTypeView1}>
                    <Text style={styles.carLabel1}>厂&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        牌:</Text>
                    <Text style={styles.carLabel}>丰田/TOTYTA</Text>
                </View>
                <View style={styles.carTypeView1}>
                    <Text style={styles.carLabel1}>车&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        系:</Text>
                    <Text style={styles.carLabel}>霸道/LAND CRUISER PRADO</Text>
                </View>
                <View style={styles.carTypeView1}>
                    <Text style={styles.carLabel1}>生产/停产:</Text>
                    <Text style={styles.carLabel}>2006.11-2011.11</Text>
                </View>

                {/*<View style={styles.carTypeView}>*/}
                {/*<Text style={styles.carSeries}>请对照您车辆铭牌选择并确定</Text>*/}
                {/*</View>*/}
                {/*<View style={styles.carTypeView}>*/}
                {/*<Text style={styles.carRangeDate}>请对照您车辆铭牌选择并确定</Text>*/}
                {/*</View>*/}
                {/*<View style={styles.carTypeView}>*/}
                {/*<Text style={styles.txtHint}>请对照您车辆铭牌选择并确定</Text>*/}
                {/*</View>*/}
            </View>

        )
    }


    _renderDialogView = () => {
        return (
            <View style={styles.subView}>
                <View style={[{
                    height: 50, borderBottomWidth: 1,
                    borderColor: '#e5e5e5'
                }, styles.viewCenter]}>
                    <Text>填写车辆信息备忘录</Text>
                </View>
                {this._renderInput('车牌号:', '请填写您的车牌号')}
                {this._renderInput('联系人:', '请填写您的车牌号')}
                {this._renderInput('手机号:', '请填写您的车牌号')}
                {this._renderInput('当前公里数:', '请填写您的车牌号')}
                {this._renderInput('上次保养公里数:', '请填写您的车牌号')}
                {this._renderInput('上次保养时间:', '请填写您的车牌号')}
                {this._renderInput('保险到期时间:', '请填写您的车牌号')}
                <View style={styles.viewCenter}>
                    <Text>确定</Text>
                </View>

            </View>
        )
    }

    _renderInput = (leftTxt, rigthText) => {
        return (
            <AlertTextInput
                renderLeftText={leftTxt}
                renderRightInputText={rigthText}
            />
        )
    }

}
const styles = StyleSheet.create({
    carTypeView1: {
        marginTop: 5,
        flexDirection: 'row',
    },
    bottom_view_nextfont: {
        color: 'white'
    },
    bottom_view_nextbutton: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#2d8ef3',
        alignItems: 'center',

    },
    bottom_view_anewbutton: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
    },
    bottom_view: {
        width: global.__WIDTH__,
        height: 50,
        flexDirection: 'row',
        marginTop: 10,
    },
    carLabel1: {
        marginRight: 10,
    },
    renderCarInfoType_view: {
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'white',
    },
    jiexi_result_text: {
        fontSize: 13,
    },
    jiexi_result: {
        padding: 5,
        paddingLeft: 5,
        flexDirection:'row'
    },

    carModels: {
        color: '#000000',
        fontSize: 14,
        marginTop: 5,
        marginBottom: 5
    },
    carTypeView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    carLabel: {
        color: '#000000',
        fontSize: 12,
        marginTop: 2,
        marginBottom: 2
    },
    carSeries: {
        color: '#000000',
        fontSize: 12,
        marginTop: 2,
        marginBottom: 2
    },
    carRangeDate: {
        color: '#000000',
        fontSize: 12,
        marginTop: 2,
        marginBottom: 2
    },
    VIN_info_img: {
        width: global.__WIDTH__,
        height: 50,
        resizeMode: 'contain',


    },
    VIN_info_text: {
        fontSize: 13,
    },
    VIN_info: {
        padding: 10,
        backgroundColor: 'white',
    },
    update_font_text: {
        fontSize: 13,
        color: '#00a0e9',
    },
    update_font_view: {
        flex: 1,
        flexDirection: 'row-reverse',
    },
    brand_info_text: {
        marginLeft: 10,
        color: '#00a0e9',
        fontSize: 15,
    },
    brand_info_font: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    brand_info_view: {
        width: global.__WIDTH__,

        backgroundColor: '#f3f3f3',
        flexDirection: 'row',
        padding: 10,
    },
    infomation_font_text: {
        fontSize: 13,
        color: '#00a0e9',
    },
    infomation_font_View: {
        width: global.__WIDTH__,
        height: 24,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameplate_img: {
        width: global.__WIDTH__,
        height: 180,
        resizeMode: 'stretch'
    },
    nameplate_View: {
        padding: 10,
        width: global.__WIDTH__,
        height: 200,
        backgroundColor: 'white',
    },
    analysis_result_icon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    back_iocn: {
        width: 25,
        height: 25,
        marginLeft: 10,
    },
    analysis_result_text: {
        color: 'white',
        //fontWeight:'bold',
        fontSize: 18,
    },





    subView: {
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#ccc',
        padding: 10,
    },
    viewCenter: {
        alignItems: 'center',
        justifyContent: 'center'
    },
});