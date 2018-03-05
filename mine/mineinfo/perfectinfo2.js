/**
 * Created by zheng on 2017/11/21.
 */
import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import {connect} from "react-redux";
import {Header} from '../../components';
import CusTextInput from './components/CusTextInput';
import CusButton from "../../components/button";
import PullToRefreshScrollView from "../../components/PullToRefreshScrollView";
import Route from "../../route";
import perfectinfo3 from "./perfectinfo3";

const {width, height} = Dimensions.get('window');
const titleName = ['商家简称:', '业务类型:', '主营车型:', '主营配件:', '联系人:',
    '联系人电话:', '省/市/区:', '详细地址:', '门店照片:'];
const titleHolder = ['请填写商家简称:', '请填写公司业务类型', '请填写擅长类型:', '请输入主营配件:', '请填写联系人姓名:',
    '请填写法人身份证号:', '请填写联系电话:', '请选择地区:', '请填写公司的详细地址:', '只能现场拍照不能长传,记录位置3张'];


class perfectinfo2 extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            businessAlias: '',//商家简称
            businessType: '',//业务类型
            carType: '',//主要车型
            parts: '',//主要配件
            contacts: '',//联系人
            contactsNum: '',//联系人电话
            regionBig: '',//省市区
            regionSmall: '',//详细地址
            storeImg: '',//门店照片
        };
        this._route = new Route();
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    title='完善资料'
                />
                <PullToRefreshScrollView
                    ref={ (ref) => this._refresh = ref }
                    refeshState={false}
                    onRefreshCallBack={(succ) => {

                    }}
                >

                    {this._renderContentInput()}
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => this._nextEvent()}
                    >
                        <CusButton
                            sty={styles.btn}
                            renderText='确定'
                        />
                    </TouchableOpacity>
                    <View style={styles.bottomView}>
                        <Text style={styles.bottomViewTxt1}>公司信息认证></Text>
                        <Text style={styles.bottomViewTxt2}>门店认证</Text>
                    </View>
                </PullToRefreshScrollView>
            </View>
        )
    }

    _renderContentInput = () => {
        return (
            <View style={styles.contentInputView}>
                <CusTextInput
                    key={0}
                    title={titleName[0]}
                    placetxt={titleHolder[0]}
                    callBackValue={(text) => {
                        this.setState({
                            businessAlias: text
                        })
                    }}
                />
                <CusTextInput
                    key={1}
                    title={titleName[1]}
                    placetxt={titleHolder[1]}
                    callBackValue={(text) => {
                        this.setState({
                            businessType: text
                        })
                    }}
                />
                <CusTextInput
                    key={2}
                    title={titleName[2]}
                    placetxt={titleHolder[2]}
                    callBackValue={(text) => {
                        this.setState({
                            carType: text
                        })
                    }}
                />
                <CusTextInput
                    key={3}
                    title={titleName[3]}
                    placetxt={titleHolder[3]}
                    callBackValue={(text) => {
                        this.setState({
                            parts: text
                        })
                    }}
                />
                <CusTextInput
                    key={4}
                    title={titleName[4]}
                    placetxt={titleHolder[4]}
                    callBackValue={(text) => {
                        this.setState({
                            contacts: text
                        })
                    }}
                />
                <CusTextInput
                    key={5}
                    title={titleName[5]}
                    placetxt={titleHolder[5]}
                    callBackValue={(text) => {
                        this.setState({
                            contactsNum: text
                        })
                    }}
                />
                <CusTextInput
                    key={6}
                    title={titleName[6]}
                    placetxt={titleHolder[6]}
                    callBackValue={(text) => {
                        this.setState({
                            regionBig: text
                        })
                    }}
                />
                <CusTextInput
                    key={7}
                    title={titleName[7]}
                    placetxt={titleHolder[7]}
                    callBackValue={(text) => {
                        this.setState({
                            regionSmall: text
                        })
                    }}
                />
                <CusTextInput
                    key={8}
                    title={titleName[8]}
                    placetxt={titleHolder[8]}
                    callBackValue={(text) => {
                        this.setState({
                            storeImg: text
                        })
                    }}
                />
            </View>

        )

    }

    _nextEvent() {
        this._route.pushToNext(perfectinfo3)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAEAEA',
    },
    contentInputView: {
        padding: 5,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 10,
        backgroundColor: '#ffffff',
        borderColor: '#ECECEC',
        borderWidth: 1,
        borderRadius: 1
    },
    titleTxt: {
        margin: 10,
        color: '#999999',
        fontSize: 15
    },
    lineView: {
        width: global.__WIDTH__,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    line: {
        backgroundColor: '#489AEF',
        width: width / 6,
        height: 1
    },
    txt: {
        marginLeft: 10,
        marginRight: 10
    },
    btn: {
        marginTop: 20
    },
    bottomView: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom:20
    },
    bottomViewTxt1: {
        color: '#489AEF'
    },
    bottomViewTxt2: {
        color: '#7D7D7D'
    },
})


function initState(store) {
    return {
        store: store,
        visible: store.MineReducer.visible,
    }
}


export default connect(initState)(perfectinfo2);