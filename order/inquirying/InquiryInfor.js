import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import {connect} from "react-redux";
import Header from '../../components/header';
import PullToRefreshScrollView from "../../components/PullToRefreshScrollView";

class InquiryInfor extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Header style={styles.header}
                        renderRight={ () => this._renderRightImg()}
                        renderTitle={ () => {
                            return <Text style={{
                                color: 'white',
                                fontSize: 18,
                            }}>询价详情</Text>
                        }}
                />
                <PullToRefreshScrollView
                    ref={ (ref) => this._pullToRefresh = ref }
                    refeshState={false}
                >

                    <View style={styles.hintView}>
                        <Text style={styles.hintView_txt}>NO.LAKDJ847&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            2017/01/01&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10:00&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;共五项
                        </Text>
                    </View>

                    <View style={styles.hintBottomView}>
                        <View style={styles.hintBottomViewLeft}>
                            <View style={[styles.hintBottomViewLeftView, {marginTop: 15}]}>
                                <Text style={styles.hintBottomViewLeftText}>丰田霸道&nbsp;&nbsp;AKJD87</Text>
                            </View>
                            <View style={[styles.hintBottomViewLeftView, {marginTop: 10}]}>
                                <Text style={styles.hintBottomViewLeftText}>VIN:87243987</Text>
                            </View>
                        </View>
                        <View style={styles.hintBottomViewRight}>
                            <Text style={styles.hintBottomViewRightText}>已有四项报价</Text>
                        </View>
                    </View>

                    {this._renderContentItemss()}
                </PullToRefreshScrollView>
            </View>

        )
    }

    _renderRightImg = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                    alert(1)
                }}
            >
                <Image
                    style={styles.defaultImg}
                    source={require('../../res/images/main/icon_mine_select.png')}
                />
            </TouchableOpacity>

        )
    }

    _renderContentItemss = () => {
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(
                this._renderContentItem(i)
            )
        }
        return arr;

    }

    _renderContentItem = () => {
        return (
            <View style={styles.contentItemView}>
                <View style={styles.contentItemTitle}>
                    <Text style={styles.contentItemTitleText}>1306</Text>
                    <Text style={[styles.contentItemTitleText, {marginLeft: 20}]}>图凸轮</Text>
                    <View style={{flexDirection: 'row-reverse', position: 'absolute', right: 0}}>
                        <View style={[styles.contentItemTitleView, {width: 50}]}>
                            <Text style={styles.contentItemTitleText}>2件</Text>
                        </View>
                        <View style={[styles.contentItemTitleView, {width: 80}]}>
                            <Text style={styles.contentItemTitleText}>原厂原件</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.contentItemMiddleView}>

                    <View style={styles.contentItemMiddleLeft}>
                        <Image
                            style={styles.duotu}
                            source={require('../../res/images/login/tu.png')}
                        />
                        <Image
                            style={styles.duotu}
                            source={require('../../res/images/login/tu.png')}
                        />
                        <Image
                            style={styles.duotu}
                            source={require('../../res/images/login/tu.png')}
                        />

                        <View style={styles.hongred}><Text style={styles.hongred3}>3</Text></View>
                    </View>

                    <View style={styles.contentItemMiddleRight}>

                        <View style={styles.contentItemMiddleRightL}>
                            <View style={styles.contentItemMiddleRight1}>
                                <Text style={[styles.contentItemMiddleRightTxt,{backgroundColor:'#eee'}]}>零件编号</Text>
                            </View>
                            <View style={styles.contentItemMiddleRight2}>
                                <View style={styles.contentItemMiddleRightCir}>
                                    <Text>2</Text>
                                </View>

                                <Text style={styles.contentItemMiddleRightTxt}>备注</Text>
                            </View>
                            <View style={styles.contentItemMiddleRight3}>
                                <View style={styles.contentItemMiddleRightCir}>
                                    <Text>3</Text>
                                </View>
                                <Text style={styles.contentItemMiddleRightTxt}>备注</Text>
                            </View>
                        </View>
                        <View style={styles.contentItemMiddleRightR}>
                            <View style={styles.contentItemMiddleRight1}>
                                <Text style={[styles.contentItemMiddleRightTxt,{backgroundColor:'#eee'}]}>备注</Text>
                            </View>
                            <View style={styles.contentItemMiddleRight2}>
                                <View style={styles.contentItemMiddleRightCir}>
                                    <Text>1</Text>
                                </View>
                                <Text style={styles.contentItemMiddleRightTxt}>备注</Text>
                            </View>
                            <View style={styles.contentItemMiddleRight3}>
                                <View style={styles.contentItemMiddleRightCir}>
                                    <Text>2</Text>
                                </View>
                                <Text style={styles.contentItemMiddleRightTxt}>备注</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.contentItemBottomView}>
                    <View style={styles.contentItemBottomLRView}>
                        <View style={[styles.contentItemBottomBtn,{backgroundColor:'#ff9bad'}]}>
                            <Text style={styles.contentItemBottomBtnzizi}>取消询价</Text>
                        </View>
                    </View>
                    <View style={styles.contentItemBottomLRView}>
                        <View style={styles.contentItemBottomBtn}>
                            <Text style={styles.contentItemBottomBtnzizi}>重新询价</Text>
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
        backgroundColor: '#F3F3F3',
    },
    defaultImg: {
        width: 20,
        height: 20
    },
    hintView: {
        width: global.__WIDTH__,
        height: 40,
        backgroundColor: '#ffffff',
        alignItems:'center',
        flexDirection: 'row',
        marginTop:14,
        paddingLeft:10,
    },
    hintView_txt: {},
    contentItemMiddleView: {
        width: global.__WIDTH__,
        height: 150,
        flexDirection: 'row',
        paddingTop:12,
        paddingBottom:12,
        backgroundColor:'#fff'
    },
    contentItemMiddleLeft: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent:'center',
    },
    contentItemMiddleRight: {
        flex: 2.5,
        flexDirection: 'row'
    },
    contentItemMiddleRightL: {
        flex: 1,

    },
    contentItemMiddleRightR: {
        flex: 1,
        borderColor: '#EDEDED',
        borderRightWidth: 1,
    },

    contentItemMiddleRight1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EDEDED',
        flexDirection:'row'
    },
    contentItemMiddleRight2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#EFEFEF',

        borderLeftWidth:1,
        borderBottomWidth: 1,
        flexDirection:'row',
        backgroundColor:'#fff'
    },
    contentItemMiddleRight3: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#EFEFEF',

        borderLeftWidth:1,
        borderBottomWidth: 1,
        flexDirection:'row',
        backgroundColor:'#fff'
    },
    contentItemBottomBtnzizi:{
        color:'#fff',
        borderRadius:5,
    },
    contentItemMiddleRightCir: {
        width:20,
        height:20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#000',
        justifyContent:'center',
        alignItems:'center'
    },
    contentItemMiddleRightTxt: {
    },


    hintBottomView: {
        width: global.__WIDTH__,
        height: 70,
        backgroundColor: '#EEEEEE',
        flexDirection: 'row'
    },
    hintBottomViewLeft: {
        height: 70,
        marginLeft: 5
    },
    hintBottomViewLeftView: {
        height: 16,
        justifyContent: 'center',
    },
    hintBottomViewLeftText: {},
    hintBottomViewRight: {
        height: 35,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        right: 10,
        borderRadius: 2,
        backgroundColor: '#FF7C55',
        padding: 5,
        top: 20
    },
    hintBottomViewRightText: {
        color: '#ffffff'
    },


    contentItemView: {
        width: global.__WIDTH__,
        height: 260,
        marginBottom:14,
    },
    contentItemTitle: {
        width: global.__WIDTH__,
        height: 50,
        backgroundColor: '#4BC3FA',
        alignItems: 'center',
        flexDirection: 'row'
    },
    contentItemTitleText: {
        color: '#ffffff'
    },
    contentItemTitleView: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderColor: '#ffffff',
    },


    contentItemBottomLRView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentItemBottomBtn: {
        width: 80,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#03a9f4',
        borderRadius: 2,
    },
    contentItemBottomView: {
        width: global.__WIDTH__,
        height: 60,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#E8E8E8',
        backgroundColor:'#fff'
    },
    duotu:{
        width:70,
        height:58,
        position:'absolute',
        top:50,
    },
    hongred:{
        maxWidth:25,
        height:17,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ff5959',
        borderRadius:50,
        position:'absolute',
        top:42,
        minWidth:17,
        right:6,
    },
    hongred3:{
        color:'#fff',
    }
})

function initState(store) {
    return {
        store: store
    }

}

export default connect(initState)(InquiryInfor)