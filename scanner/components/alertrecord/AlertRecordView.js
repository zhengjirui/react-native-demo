/**
 * Created by zheng on 2017/11/16.
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    Modal,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import AlertTextInput from './AlertTextInput';

//http://www.jianshu.com/p/e9c3642025fe     扩展资源
//http://blog.csdn.net/syg90178aw/article/details/51647262      参考资源
//http://www.jianshu.com/p/fa5814afac7d     参数详解
export default class AlertView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    }

// 显示/隐藏 modal
    setModalVisible() {
        let isShow = this.state.show;
        this.setState({
            show: !isShow,
        });
    }

    // 绘制View
    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.show}
                    onShow={() => {
                    }}
                    onRequestClose={() => {
                    }}>
                    <TouchableOpacity
                        style={{flex: 1}}
                        activeOpacity={0}
                        onPress={() => this.setModalVisible()}
                    >
                        <View style={styles.modalStyle}>
                            <View style={styles.subView}>
                                <View style={[{
                                    height: 50, borderBottomWidth: 1,
                                    borderColor: '#e5e5e5'
                                }, styles.viewCenter]}>
                                    <Text>填写车辆信息备忘录</Text>
                                </View>
                                {this._renderInput('车牌号:', '请填写您的车牌号')}
                                {this._renderInput('联系人:', '请填写您的车牌号')}
                                {this._renderInput('手机号:', '请填写您的车牌号')}
                                {this._renderInput('当前公里数:', '请填写您的车牌号')}
                                {this._renderInput('上次保养公里数:', '请填写您的车牌号')}
                                {this._renderInput('上次保养时间:', '请填写您的车牌号')}
                                {this._renderInput('保险到期时间:', '请填写您的车牌号')}
                                <View style={styles.viewCenter}>
                                    <Text>确定</Text>
                                </View>

                            </View>

                        </View>
                    </TouchableOpacity>
                </Modal>
            </View>
        );
    }

    _renderInput = (leftTxt, rigthText) => {
        return (
            <AlertTextInput
                renderLeftText={leftTxt}
                renderRightInputText={rigthText}
            />
        )
    }
}


// css样式
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECECF0',
    },
    viewCenter: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    // modal的样式
    modalStyle: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        width: global.__WIDTH__,
        height: global.__HEIGHT__,
    },
    // modal上子View的样式
    subView: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#ccc',
        padding: 10,
        backgroundColor: 'red'
    },


});