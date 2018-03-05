/**
 * Created by zheng on 2017/11/21.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import {connect} from "react-redux";
import CusTextInput from './components/CusTextInput';
import CusButton from "../../components/button";
import {Header} from '../../components';
import Route from "../../route";
import perfectinfo2 from './perfectinfo2';
import PullToRefreshScrollView from "../../components/PullToRefreshScrollView";

const titleName = ['公司名称:', '工商执照号:', '工商执照照片:', '法人姓名:', '身份证号:'];
const titleHolder = ['请填写公司名称:', '请填写工商执照号:', '点击上传图片:', '请填写法人姓名:', '请填写法人身份证号:'];
const {width, height} = Dimensions.get('window');

class perfectinfo1 extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            companyName: '',//公司名称
            businessNum: '',//工商执照号
            businessImg: '',//工商执照照片
            lawyerName: '',//法人姓名
            idNum: ''//身份证号
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
                    <Text style={styles.titleTxt}>根据《互联网信息服务管理办法》保障信息交易的安全实名制认证</Text>
                    <View style={styles.lineView}>
                        <View style={styles.line}></View>
                        <Text style={styles.txt}>买家认证</Text>
                        <View style={styles.line}></View>
                    </View>
                    {this._renderContentInput()}
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => this._nextEvent()}
                    >
                        <CusButton
                            sty={styles.btn}
                            renderText='下一步'
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
                            companyName: text
                        })
                    }}
                />
                <CusTextInput
                    key={1}
                    title={titleName[1]}
                    placetxt={titleHolder[1]}
                    callBackValue={(text) => {
                        this.setState({
                            businessNum: text
                        })
                    }}
                />
                <CusTextInput
                    key={2}
                    title={titleName[2]}
                    placetxt={titleHolder[2]}
                    callBackValue={(text) => {
                        this.setState({
                            businessImg: text
                        })
                    }}
                />
                <CusTextInput
                    key={3}
                    title={titleName[3]}
                    placetxt={titleHolder[3]}
                    callBackValue={(text) => {
                        this.setState({
                            lawyerName: text
                        })
                    }}
                />
                <CusTextInput
                    key={4}
                    title={titleName[4]}
                    placetxt={titleHolder[4]}
                    callBackValue={(text) => {
                        this.setState({
                            idNum: text
                        })
                    }}
                />
            </View>

        )

    }

    _nextEvent() {
        this._route.pushToNext(perfectinfo2)
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAEAEA'
    },
    contentInputView: {
        padding: 5,
        marginRight: 5,
        marginLeft: 5,
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


export default connect(initState)(perfectinfo1);