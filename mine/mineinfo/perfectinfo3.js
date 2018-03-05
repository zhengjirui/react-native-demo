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
    NativeModules,
    BackAndroid,
    ToastAndroid,
} from 'react-native';
import {connect} from "react-redux";
import Route from "../../route";
import PullToRefreshScrollView from "../../components/PullToRefreshScrollView";
import {Header} from '../../components';

class perfectinfo3 extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            companyName: '',//公司名称
            businessNum: '',//工商执照号
            businessImg: '',//工商执照照片
            lawyerName: '',//法人姓名
            idNum: '',//身份证号
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
                    renderRight={() => this._renderRightTxt()}
                />
                <PullToRefreshScrollView
                    ref={ (ref) => this._refresh = ref }
                    refeshState={false}
                    onRefreshCallBack={(succ) => {

                    }}
                >
                    <View style={styles.companyandstoreInfo}>
                        <Text style={styles.companyandstoreInfoTxt}>公司信息</Text>
                    </View>
                    {/*公司信息*/}
                    {this._renderCompanyInfo()}

                    <View style={styles.companyandstoreInfo}>
                        <Text style={styles.companyandstoreInfoTxt}>门店信息</Text>
                    </View>
                    {/*门店信息*/}
                    {this._renderStoreInfo()}
                </PullToRefreshScrollView>
            </View>
        )
    }

    _renderRightTxt = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                    alert('申请变更')
                }}
            >
                <Text style={styles.defaultTxt}>申请变更</Text>
            </TouchableOpacity>

        )
    }

    _renderCompanyInfo() {
        let arr = [];
        for(let i = 0; i < 5;i++){
            arr.push(this._renderItem(i))
        }
        return arr;
    }

    _renderStoreInfo() {
        let arr = [];
        for(let i = 0; i < 5;i++){
            arr.push(this._renderItem(i))
        }
        return arr;
    }

    _renderItem = (i) => {
        return(
            <View style={styles.itemTxtView}>
                <Text style={styles.itemLeftTxt}>公司名称{i}</Text>
                <Text style={styles.itemRightTxt}>中汽联合{i}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    defaultTxt: {
        color: '#fff'
    },
    companyandstoreInfo: {
        width: global.__WIDTH__,
        height: 50,
        backgroundColor: '#F2F2F2',
        flexDirection: 'row',
        alignItems: 'center'
    },
    companyandstoreInfoTxt: {
        marginLeft: 10
    },
    itemTxtView:{
        width: global.__WIDTH__,
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:10,
        marginRight:10,
        borderBottomWidth:1,
        borderColor:'#F2F2F2'
    },
    itemLeftTxt:{

    },
    itemRightTxt:{
        position:'absolute',
        right:0,
    }

})


function initState(store) {
    return {
        store: store,
        visible: store.MineReducer.visible,
    }
}


export default connect(initState)(perfectinfo3);