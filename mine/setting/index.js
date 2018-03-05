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
    Dimensions
} from 'react-native';
import PullToRefreshScrollView from '../../components/PullToRefreshScrollView';
import {connect} from 'react-redux'
import Route from "../../route";
import Header from '../../components/header';
import CusCellLine from '../../components/cellline/CusCellLine';
import CusButton from '../../components/button';
const itemName = ['通知提醒', '服务条款', '关于询配', '清理缓存', '版本更新', ];
import about from './about'
var routePage = [about,about,about,about];
class setting extends Component {


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
            <ScrollView style={styles.container}>
                <Header
                    renderTitle = { () => {
                        return <Text style={styles.baise}>设置</Text>
                    }}
                />
                <View style={styles.wodezujian}>
                    <View>
                        {this._rendersetting()}
                    </View>

                    <CusButton
                        renderText='安全退出'
                    />

                </View>

            </ScrollView>
        );
    }
    _renderUpdata() {
        return (
            <View style={styles.new_box}>
                <Text style={styles.leftzi}>版本更新</Text>
                <Text style={styles.new_zi}>New</Text>
            </View>

        )
    }

    _rendersetting = () => {
        let arr = [];
        itemName.map((index, value) => {
            if (value == 4) {
                arr.push(
                    <CusCellLine
                        key={value}
                        renderLeftImg={()=>{}}
                        renderRightText={() => <Text style={styles.leftzi}>2.0.25</Text>}
                        renderLeftText={()=> this._renderUpdata()}
                    />
                )
            } else {
                arr.push(
                    <CusCellLine
                        key={value}
                        renderLeftImg={()=>{}}
                        renderLeftText={() => <Text style={styles.leftzi}>{index}</Text>}

                        onPressCell={() => {
                            this._route.pushToNext(routePage[value]);
                        }}
                    />
                )
            }
        })
        return arr;
    }

}

function initState(store) {
    return {
        store: store,
        visible: store.MineReducer.visible,
    }
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f4f4f4'
    },
    new_box:{
        flexDirection: 'row',
    },
    new_zi:{
        paddingBottom:2,
        paddingTop:0,
        paddingLeft:5,
        paddingRight:5,
        backgroundColor:'#ff5959',
        color:'#fff',
        borderRadius:50,
        marginLeft:0,
        position:'relative',
        bottom:10,
    },
    baise:{
        color:'#fff',
        fontSize:18
    },
    wodezujian:{
        marginTop:12,
    },
    red_new:{

    }

})

function initState(store) {
    return {
        store: store,
        visible: store.MineReducer.visible,
    }
}

export default connect(initState)(setting)