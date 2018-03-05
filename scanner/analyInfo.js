/**
 * Created by zheng on 2017/11/17.
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    ScrollView,
    TextInput
} from 'react-native';
import {Header, Loading} from '../components';
import {connect} from "react-redux";

class aksjdkm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header style={styles.header}
                        title='解析详情'
                            renderRight={ () => {
                            return <View >
                                <Image resizeMode={Image.resizeMode.contain} style={{
                                    width: 20,
                                    height: 20,
                                    marginLeft: 10,
                                }}
                                       source={require("../res/images/index/ren_3x.png")}/></View>
                        }}
                />
                <ScrollView>
                    <View style={{
                        marginLeft: 5,
                        marginRight: 5
                    }}>


                        {/*{this._renderContent()}*/}
                        {this._renderCarInfoType()}
                        <Text style={styles.txtHint}>请对您的车辆铭牌选择并确定车型代码</Text>
                        {this._card_container_view()}

                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: global.__WIDTH__,
                        height: 50,
                        backgroundColor: "#3fb2ed",
                    }}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 16
                        }}>确认</Text>
                    </View>
                </ScrollView>

            </View>
        )
    }


    _renderCarInfoType = () => {
        return (
            <View>
                <Text style={styles.carModels}>JDLAKLGAJ1341341</Text>

                <View style={styles.carTypeView}>
                    <Text style={styles.carLabel}>厂&nbsp;&nbsp;牌:</Text>
                    <Text style={styles.carLabel}>丰田/TOTYTA</Text>
                </View>

                <View style={styles.carTypeView}>
                    <Text style={styles.carLabel}>车&nbsp;&nbsp;系:</Text>
                    <Text style={styles.carLabel}>霸道/KJDFKAJLK</Text>
                </View>

                <View style={styles.carTypeView}>
                    <Text style={styles.carLabel}>停产/生产:</Text>
                    <Text style={styles.carLabel}>201611-201702</Text>
                </View>

            </View>

        )
    }

    _renderContent = () => {

        return (
            <View style={styles.contentStyle}>
                {this._renderContetntItem()}
            </View>
        )
    }

    _renderContetntItem = () => {
        return (
            <View style={{height:500}}>

            </View>
        )
    }

    _card_container_view=()=>{
        return(
            <View  style={styles.card_container_view} >
                <View style={styles.card_line}>
                    <View>
                        <Text style={[styles.font_color,]}>MODELCODE</Text>
                        <Text style={[styles.font_color,]}>车型代码</Text>
                    </View>
                    <View style={styles.font_title_view}>
                        <Text style={[styles.font_color,styles.font_title]}>ZWE182L-GEXEBC</Text>
                    </View>
                </View>
                <View style={styles.card_line}>
                    <View>
                        <Text style={[styles.font_color,]}>PRODDATE</Text>
                        <Text style={[styles.font_color,]}>制造年月</Text>
                    </View>
                    <View style={styles.font_date_view}>
                        <Text style={[styles.font_color,styles.font_date]}>2017年11月</Text>
                    </View>

                </View>
                <View style={styles.card_line}>
                    <View style={styles.left_view}>
                        <View style={styles.before_middle_view}>
                            <Text style={[styles.font_color,]}>Engine</Text>
                            <Text style={[styles.font_color,]}>发动机</Text>
                        </View>
                        <View style={styles.middle_view}>
                            <Text style={[styles.font_color,styles.font_date]}>8ZRFXE</Text>
                        </View>
                    </View>
                    <View style={styles.right_view}>
                        <Text style={[styles.font_color,]}>1800cc 16-VALVE DOHC EFI</Text>
                        <Text style={[styles.font_color,]}>1.8升 16-气门 双凸轮轴 电喷</Text>
                    </View>
                </View>
                <View style={styles.card_line}>
                    <View style={styles.left_view}>
                        <View style={styles.before_middle_view}>
                            <Text style={[styles.font_color,]}>Body</Text>
                            <Text style={[styles.font_color,]}>车身</Text>
                        </View>
                        <View style={styles.middle_view}>
                            <Text style={[styles.font_color,styles.font_date]}>SEDAN</Text>
                        </View>
                    </View>
                    <View style={styles.right_view}>
                        <Text style={[styles.font_color,]}>SEDAN</Text>
                        <Text style={[styles.font_color,]}>轿车</Text>
                    </View>
                </View>
                <View style={styles.card_line}>
                    <View style={styles.left_view}>
                        <View style={styles.before_middle_view}>
                            <Text style={[styles.font_color,]}>Grade</Text>
                            <Text style={[styles.font_color,]}>等级</Text>
                        </View>
                        <View style={styles.middle_view}>
                            <Text style={[styles.font_color,styles.font_date]}>GLI</Text>
                        </View>
                    </View>
                    <View style={styles.right_view}>
                        <Text style={[styles.font_color,]}>GL TYPE</Text>
                        <Text style={[styles.font_color,]}>GL 型</Text>
                    </View>
                </View>
                <View style={styles.card_line}>
                    <View style={styles.left_view}>
                        <View style={styles.before_middle_view}>
                            <Text style={[styles.font_color,]}>ATM/MTM</Text>
                            <Text style={[styles.font_color,]}>自动/手动</Text>
                        </View>
                        <View style={styles.middle_view}>
                            <Text style={[styles.font_color,styles.font_date]}>GVT</Text>
                        </View>
                    </View>
                    <View style={styles.right_view}>
                        <Text style={[styles.font_color,styles.font_size_long]}>CONTINUOSL VARIABLE TRANSMISSION</Text>
                        <Text style={[styles.font_color,]}>无级变速传动</Text>
                    </View>
                </View>
                <View style={styles.card_line}>
                    <View style={styles.before_middle_view}>
                        <Text style={[styles.font_color,]}>Transm</Text>
                        <Text style={[styles.font_color,]}>变速箱</Text>
                    </View>
                </View>
                <View style={styles.card_line}>
                    <View style={styles.left_view}>
                        <View style={styles.before_middle_view1}>
                            <Text style={[styles.font_color,]}>DESTINATION</Text>
                            <Text style={[styles.font_color,]}>目标 地区</Text>
                        </View>
                        <View style={styles.middle_view}>
                            <Text style={[styles.font_color,styles.font_date]}>CHI</Text>
                        </View>
                    </View>
                    <View style={styles.right_view}>
                        <Text style={[styles.font_color,styles.font_size_long]}>CHINA</Text>
                        <Text style={[styles.font_color,]}>中国</Text>
                    </View>
                </View>
                <View style={styles.card_line}>
                    <View style={styles.left_view}>
                        <View style={styles.before_middle_view1}>
                            <Text style={[styles.font_color,]}>GEAR SHIFT TYPE</Text>
                            <Text style={[styles.font_color,]}>变档杆的位置形式</Text>
                        </View>
                        <View style={styles.middle_view}>
                            <Text style={[styles.font_color,styles.font_date]}>6FC</Text>
                        </View>
                    </View>
                    <View style={styles.right_view}>
                        <Text style={[styles.font_color,styles.font_size_long]}>ATM,4-SPEED FLOOR SHIFT</Text>
                        <Text style={[styles.font_color,]}>自动，6-速 地板上换挡</Text>
                    </View>
                </View>
                <View style={styles.card_line}>
                    <View style={styles.left_view}>
                        <View style={styles.before_middle_view1}>
                            <Text style={[styles.font_color,]}>GEAR SHIFT TYPE</Text>
                            <Text style={[styles.font_color,]}>变档杆的位置形式</Text>
                        </View>
                        <View style={styles.middle_view}>
                            <Text style={[styles.font_color,styles.font_date]}>5D</Text>
                        </View>
                    </View>
                    <View style={styles.right_view}>
                        <Text style={[styles.font_color,styles.font_size_long]}>5-DOOR</Text>
                        <Text style={[styles.font_color,]}>5-门</Text>
                    </View>
                </View>
                <View style={styles.card_line1}>
                    <View style={styles.before_middle_view}>
                        <Text style={[styles.font_color,]}>Transm</Text>
                        <Text style={[styles.font_color,]}>变速箱</Text>
                    </View>
                    <View style={styles.textInput_container_view}>
                        <View style={styles.textInput_view}>
                            <TextInput
                                underlineColorAndroid='transparent'
                                placeholder="FA20"
                                placeholderTextColor="#000"
                                keyboardType='name-phone-pad'
                                style={styles.textInput_text}
                            ></TextInput>
                        </View>
                    </View>
                </View>
                <View style={styles.card_line1}>
                    <View style={styles.before_middle_view}>
                        <Text style={[styles.font_color,]}>Color code</Text>
                        <Text style={[styles.font_color,]}>车身颜色</Text>
                    </View>
                    <View style={styles.textInput_container_view}>
                        <View style={styles.textInput_view}>
                            <TextInput
                                underlineColorAndroid='transparent'
                                placeholder="784"
                                placeholderTextColor="#000"
                                keyboardType='name-phone-pad'
                                style={styles.textInput_text}
                            ></TextInput>
                        </View>
                    </View>
                </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    txtHint: {
        color: '#3fb2ed',
        fontSize: 12,
        marginTop: 5
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
    contentStyle: {
        borderRadius: 5,
        borderColor: '#e5e5e5',
        borderWidth: 1
    },





    affirm_text:{
        color:'white',
        fontSize:18,
    },
    bottom_button:{
        width:global.__WIDTH__,
        height:50,
        backgroundColor:'#2d8ff4',
        alignItems:'center',
        justifyContent:'center',
    },
    textInput_text:{
        padding:3,
        width:40,
        height:25,

    },
    textInput_view:{
        width:50,
        height:25,
        backgroundColor:'white',
        borderRadius:3,
        alignItems:'center',
        justifyContent:'center',
        marginTop:8,
    },
    textInput_container_view:{
        flex:3,
        justifyContent:'center'
    },
    font_size_long:{
        fontSize:8,
    },
    before_middle_view1:{
        flex:2,
        // flexDirection:'row',
        // backgroundColor:'white'
    },
    left_view:{
        flex:1,
        flexDirection:'row',
    },
    right_view:{
        flex:1,
    },
    font_date:{
        fontSize:15,
    },
    before_middle_view:{
        flex:1,
    },
    middle_view:{
        flex:1,
        justifyContent:'center',
    },
    font_date_view:{
        flex:1,
        //alignItems:'center',
        justifyContent:'center',
        marginLeft:30,
    },
    font_title_view:{
        flex:1,
        //alignItems:'center',
        justifyContent:'center',
        marginLeft:20,
    },
    font_title:{
        fontSize:18,

    },
    font_color:{
        color:'white',
        fontSize:12,
    },
    card_line1:{
        flexDirection:'row',
        marginBottom:5,
        borderBottomColor:'#ebe7e8',
    },
    card_line:{

        flexDirection:'row',
        marginBottom:5,
        paddingBottom:5,
        borderBottomWidth:1,
        borderBottomColor:'#ebe7e8',
    },
    card_container_view:{
        margin:10,
        marginTop:5,
        marginBottom:15,
        padding:5,
        backgroundColor:'#2c2628',
        borderRadius:5,
    },
    hint_text:{
        fontSize:12,
        color:'#07a0e3',
    },
    hint_view:{
        marginTop:8,
        marginLeft:10,
    },
    brand_title_font:{
        fontSize:16,
        fontWeight:'bold',
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
        marginLeft:10,
        flex:1,
        //flexDirection:'row-reverse',

        //backgroundColor:'pink',
    },
    brand_View:{
        flexDirection:'row',
        marginTop:3,
    },
    brand_font:{
        fontWeight:'bold',
        fontSize:12,
    },
    brand:{
        marginTop:10,

        width:global.__WIDTH__,

        // borderRadius:3,
        // paddingTop:5,
        paddingLeft:12,
        paddingRight:10,
        // shadowColor:'black',
        // shadowOffset:{height:10,width:global.__WIDTH__},
        // elevation: 5, 阴影
    },
    share_icon:{
        width:25,
        height:25,
        resizeMode:'contain'
    },
    back_iocn:{
        width:25,
        height:25,
        marginLeft:10,
    },
    xunpei_text:{
        fontSize:18,
        color:'white',
    },
})

function initState(store) {
    return {
        // visible: store.InquiryReducer.visible,
        // varsss: store.InquiryReducer.varsss,
        store: store
    }
}

export default connect(initState)(aksjdkm);

