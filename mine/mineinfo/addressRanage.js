import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,

} from 'react-native';
import Header from '../../components/header/index';
import CusButton from '../../components/button';
import Route from "../../route";
import newAddressManage from "./newAddressRanage"
import PullToRefreshScrollView from "../../components/PullToRefreshScrollView";
export default class addressManage extends Component {
// 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this._route = new Route();
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#f9f9f9'}}>
                <Header
                    renderTitle={ () => {
                        return <Text style={styles.analysis_result_text}>收货地址管理</Text>
                    }}
                />
                <PullToRefreshScrollView

                    ref={ (ref) => this._refresh = ref }
                    refeshState={false}
                    onRefreshCallBack={(succ) => {

                    }}>
                    {this._default_contain()}

                    {this._undefault_contain()}

                    <View style={styles.hint_container}>
                        <View style={styles.hint_container_view}>
                            <Image style={styles.hint_icon}
                                   source={require("../../res/images/addressManage/hint.png")}/>
                            <Text style={styles.hint_font}>温馨提示:最多保持5个有效地址，每月只能新增或修改5次</Text>
                        </View>
                        <Text style={styles.hint_font}>您本月已新增或修改0次</Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={
                            () => this._route.pushToNext(newAddressManage)
                        }
                    >
                        <CusButton
                            sty={styles.cusButton_style}
                            renderText='新增地址'
                        />
                    </TouchableOpacity>
                </PullToRefreshScrollView>
            </View>
        )

    }

    _default_contain = () => {
        return (

            <View style={styles.default_contain_view}>
                <View style={styles.default_one}>
                    <View style={styles.default_one_left}>
                        <Text style={styles.default_one_font}>喵先生</Text>
                        <Text style={styles.default_font_text}>默认</Text>
                    </View>
                    <View style={styles.default_one_right}>
                        <Text style={styles.default_one_font}>15110710511</Text>
                    </View>
                </View>
                <View style={styles.default_two}>
                    <Text style={styles.default_two_three}>北京市市辖区-朝阳区 管庄乡北岛大厦B座201室</Text>
                </View>

                <View style={styles.default_bottom}>
                    <View style={styles.default_bottom_left}>

                    </View>
                    <TouchableOpacity
                        activeOpacity={0.9}
                    >
                        <View style={styles.default_bottom_middle}>
                            <Image style={styles.default_bottom_img}
                                   source={require("../../res/images/addressManage/edit.png")}/>
                            <Text>编写</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.9}
                    >
                        <View style={styles.default_bottom_right}>
                            <Image style={styles.default_bottom_img}
                                   source={require("../../res/images/addressManage/delete.png")}/>
                            <Text>删除</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    _undefault_contain = () => {
        return (
            <View style={styles.default_contain_view}>
                <View style={styles.default_one}>
                    <View style={styles.default_one_left}>
                        <Text style={styles.default_one_font}>喵先生</Text>
                    </View>
                    <View style={styles.default_one_right}>
                        <Text style={styles.default_one_font}>15110710511</Text>
                    </View>
                </View>
                <View style={styles.default_two}>
                    <Text style={styles.default_two_three}>北京市市辖区-朝阳区 管庄乡北岛大厦B座201室</Text>
                </View>
                <View style={styles.default_bottom}>
                    <View style={styles.default_bottom_left}>

                    </View>
                    <TouchableOpacity
                        activeOpacity={0.9}
                    >
                        <View style={styles.default_bottom_middle}>
                            <Image style={styles.default_bottom_img}
                                   source={require("../../res/images/addressManage/edit.png")}/>
                            <Text>编写</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.9}
                    >
                        <View style={styles.default_bottom_right}>
                            <Image style={styles.default_bottom_img}
                                   source={require("../../res/images/addressManage/delete.png")}/>
                            <Text>删除</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

}
const styles = StyleSheet.create({
    cusButton_style: {
        marginTop: 30,
    },
    hint_font: {
        fontSize: 10,
    },
    hint_icon: {
        width: 12,
        height: 12,
        margin: 5,
        marginTop: 1.5,
    },
    hint_container_view: {
        flexDirection: 'row',
    },
    hint_container: {
        width: global.__WIDTH__,
        alignItems: 'center',
        marginTop: 10,
    },



    default_bottom_img: {
        width: 20,
        height: 20,
        marginRight: 8,
    },
    default_bottom_right: {
        flex: 1,

        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    default_bottom_middle: {
        flex: 1,
        flexDirection: 'row',
    },
    default_bottom_left: {
        flex: 3,
        backgroundColor: 'pink'
    },
    default_two_three: {
        color: '#656565',
    },
    default_bottom: {
        width: global.__WIDTH__,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#eeeeee',
        paddingTop: 5,

    },
    default_autonym: {

        fontSize: 8,
        color: '#cf0000',
    },
    default_autonym_view: {
        marginTop: 3,
        marginLeft: 6,
        width: 30,
        height: 13,
        borderColor: '#cf0000',
        borderWidth: 1,
        //backgroundColor:'#cf0000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 9,
    },

    default_two: {
        width: global.__WIDTH__,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 5,
    },
    default_one_font: {
        color: 'black',
        fontSize: 16,
    },
    default_font_text: {
        backgroundColor: '#cf0000',
        fontSize: 8,
        color: 'white',
        padding: 1,
        borderRadius: 7,
        paddingRight: 5,
        paddingLeft: 5,
        marginLeft: 8,
    },
    default_one_right: {
        flex: 1,
    },
    default_one_left: {
        flex: 1,
        flexDirection: 'row',
        //  justifyContent:'center'
        alignItems: 'center'
    },
    default_one: {
        width: global.__WIDTH__,
        flexDirection: 'row'
    },
    default_contain_view: {
        marginTop: 10,
        padding: 10,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: '#f0f0f0',
        borderBottomColor: '#f0f0f0',
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


})