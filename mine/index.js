/**
 * Created by zheng on 2017/11/11.
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import PullToRefreshScrollView from '../components/PullToRefreshScrollView';
import {connect} from 'react-redux';
import Route from "../route";
import CusCellLine from '../components/cellline/CusCellLine';
const itemName = ['我的资料', '我的活动', '分享给好友', '客服电话', '使用帮助', '意见反馈', '设置',];
const itemImages = [require('./images/wode1.png'), require('./images/wode2.png'), require('./images/wode2.png'), require('./images/wode3.png'),
    require('./images/wode4.png'), require('./images/wode5.png'), require('./images/wode6.png')];

import MineInfo from './mydatum/index';
import Opinion from './opinion/opinion';
import Setting from './setting/index';
import Login from './login/login';

var routePage = [MineInfo,MineInfo,MineInfo,MineInfo,MineInfo,Opinion,Setting];

class mine extends Component {

    constructor(props) {
        super(props);
        this._route = new Route();
        // 初始状态
        this.state = {
            isRefreshing: false,
        };

    }

    render() {
        return (
            <View style={{flex: 1}}>

                <PullToRefreshScrollView
                    ref={ (ref) => this._refresh = ref }
                    refeshState={this.props.visible}
                    onRefreshCallBack={(succ) => {
                        setInterval(() => {
                            this._alertView.setRefrshState(!succ);
                        }, 1000)

                    }}
                >
                    <View style={styles.wo_bg}>
                        <View style={styles.wode_box}>
                            <Image
                                source={require("./images/tou.png")}
                                style={styles.wode}
                            />
                        </View>
                        <TouchableOpacity
                          onPress={()=>{
                               this._route.pushToNext(Login);
                          }}
                        >
                            <View style={styles.wodetop_box}>
                                <View style={styles.wode_top}>
                                    <Text style={styles.wode_font}>我是买家</Text>
                                    <Text style={styles.wode_font}>丨</Text>
                                    <Text style={styles.wode_font}>好先生</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.wode_middle}>
                        <View style={styles.wode_fadongjibox}>
                            <Image source={require("./images/xunjia.png")}
                                   style={styles.wode_fadongji}/>
                            <Text >询价中</Text>
                        </View>
                        <View style={styles.wode_fadongjibox}>
                            <Image source={require("./images/caigou.png")}
                                   style={styles.wode_fadongji}/>
                            <Text >采购中</Text>
                        </View>
                        <View style={styles.wode_fadongjibox}>
                            <Image source={require("./images/wancheng.png")}
                                   style={styles.wode_fadongji}/>
                            <Text >已完成</Text>
                        </View>
                    </View>

                    <View style={styles.wodezujian}>
                        {this._renderMineContentItem()}
                    </View>

                </PullToRefreshScrollView>
            </View>

        )
    }

    _renderMineContentItem = () => {
        let arr = [];
        itemName.map((index, value) => {
            if (value == 3) {
                arr.push(
                    <CusCellLine
                        key={value}
                        renderLeftImg={() => {
                            return (
                                <Image
                                    style={styles.defaultImg}
                                    source={itemImages[value]}
                                />
                            )
                        }}
                        renderRightImg={() => {
                        }}
                        renderRightText={() => <Text style={styles.leftzi}>1873467816</Text>}
                        renderLeftText={() => <Text style={styles.leftzi}>客服电话</Text>}
                        onPressCell={() => {
                            this._route.pushToNext(MineInfo);
                        }}
                    />)
            } else {
                arr.push(
                    <CusCellLine
                        key={value}
                        renderLeftImg={() => {
                            return (
                                <Image
                                    style={styles.defaultImg}
                                    source={itemImages[value]}
                                />
                            )
                        }}
                        renderLeftText={() => <Text style={styles.leftzi}>{index}</Text>}
                        onPressCell={() => {
                            this._route.pushToNext(routePage[value]);
                        }}
                    />);
            }

        })
        return arr;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wo_bg: {
        width: global.__WIDTH__,
        height: 130,
        backgroundColor: '#4da9fb'
    },
    wode_box: {
        alignItems: 'center',
        marginTop: 15,
    },
    wode: {
        width: 67.5,
        height: 67.5,
        borderRadius: 50,
    },
    wodetop_box: {
        alignItems: 'center',
        marginTop: 10,
    },
    wode_top: {
        flexDirection: 'row',
    },
    wode_font: {
        color: '#fff',
    },
    wode_middle: {
        height: 58,
        backgroundColor: 'white',
        marginTop: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#f2f2f2',
    },
    wode_fadongjibox: {
        width: '33.5%',
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 9,

    },
    wode_fadongji: {
        width: 21.5,
        height: 21
    },
    wodezujian: {
        borderWidth: 1,
        borderColor: '#f2f2f2',
    },
    defaultImg: {
        width: 15,
        height: 16,
        marginTop: 3,
    },
    leftzi: {
        marginLeft: 8,
    }

})

function initState(store) {
    return {
        store: store,
        visible: store.MineReducer.visible,
    }
}

export default connect(initState)(mine);