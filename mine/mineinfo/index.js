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
import perfectinfo1 from './perfectinfo1';
import addressManage from './addressRanage'
import newAddressManage from './newAddressRanage'
import Route from "../../route";

class MineInfo extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this._route = new Route();
      }
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                        this._route.pushToNext(perfectinfo1)
                    }}
                >
                    <Text>完善信息</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        this._route.pushToNext(addressManage)
                    }}
                >
                    <Text>新增地址</Text>
                </TouchableOpacity>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ffffff',
    },
})


function initState(store) {
    return {
        store: store,
        visible: store.MineReducer.visible,
    }
}


export default connect(initState)(MineInfo);