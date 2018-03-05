/**
 * Created by zheng on 2017/11/11.
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    NativeModules,
    BackAndroid,
    ToastAndroid, TouchableOpacity
} from 'react-native';
import {CusCellLine} from '../components';
import PullToRefreshScrollView from '../components/PullToRefreshScrollView';
import Page2 from "../textpages/page2";
import EditView from "./EditView";
import AlertScannerView from "../scanner/components/alertscanner/AlertScannerView";
import AlertRecordView from "../scanner/components/alertrecord/AlertRecordView";
import {connect} from 'react-redux';
import {MineActions} from "./action/index";
import Route from "../route";

class text extends Component{

    constructor(props) {
        super(props);
        this._route = new Route();
        // 初始状态
        this.state = {
            isRefreshing: false,
        };
    }

    render(){
        return(
            <View style={{flex:1,backgroundColor:'green'}}>

                <TouchableOpacity
                    onPress={() => {
                        this.props.dispatch({type: 'changeloading', visible: true});
                        this._alertView.setRefrshState(this.props.visible);
                    }}>
                    <Text>点我军还没不能</Text>
                </TouchableOpacity>

                <PullToRefreshScrollView
                    ref={ (ref) => this._alertView = ref }
                    refeshState = {this.props.visible}
                    onRefreshCallBack={(succ) => {
                        setInterval(()=>{
                            this._alertView.setRefrshState(!succ);
                        },3000)

                    }}
                >
                    <TouchableOpacity onPress={()=>this.editView.show()}>
                        <Text>我的</Text>
                    </TouchableOpacity>
                    <View style={{height:50,width:global.__WIDTH__,padding:3,flexDirection:'row',backgroundColor:'red'}}>
                        <View style={{backgroundColor:'#e65e5e',alignItems:'center',justifyContent:'center'}}>
                            <Text>ooaidslkfj</Text>
                            <Text>ooaidslkfj</Text>
                        </View>

                        <View style={{flex:1,backgroundColor:'#e4e525',alignItems:'center',justifyContent:'center'}}>
                            <Text>啊哈噶</Text>
                        </View>
                    </View>
                    <CusCellLine />
                    <CusCellLine />
                    <CusCellLine />

                    <CusCellLine />
                    <CusCellLine />
                    <CusCellLine />
                    <CusCellLine />

                    <CusCellLine />
                    <CusCellLine />
                    <CusCellLine />
                    <CusCellLine />

                    <CusCellLine />
                    <CusCellLine />
                    <CusCellLine />
                    <CusCellLine />
                </PullToRefreshScrollView>
                <EditView
                    // 在组件中使用this.editView即可访拿到EditView组件
                    ref={editView => this.editView = editView}
                    inputText={this.state.name}
                    titleTxt={'修改XXX'}
                    ensureCallback={name => this.setState({name})}
                />
            </View>

        )
    }

}

function initState(store) {
    return {
        store: store,
        visible: store.MineReducer.visible,
    }

}

export default connect(initState)(text);