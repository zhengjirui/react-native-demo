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
import AlertTextInput from '../alertrecord/AlertTextInput';

//http://www.jianshu.com/p/e9c3642025fe     扩展资源
//http://blog.csdn.net/syg90178aw/article/details/51647262      参考资源
//http://www.jianshu.com/p/fa5814afac7d     参数详解
export default class AlertScannerView extends Component {
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

                    <View style={styles.modalStyle}>
                        <TouchableOpacity
                            activeOpacity={0}
                            onPress={() => this.setModalVisible()}
                        >
                            <View style={{
                                width: global.__WIDTH__,
                                height: global.__HEIGHT__,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'transparent',
                            }}>

                                <View style={styles.subView}>
                                    <View style={[{
                                        height: 50, borderBottomWidth: 1,
                                        borderColor: '#e5e5e5'
                                    }, styles.viewCenter]}>
                                        <Text>系统无法解析到您扫描的名牌信息</Text>
                                        <Text>请填写您的车辆信息(厂牌必填)</Text>
                                    </View>
                                    {this._renderInput('厂牌:', '请填写您的厂牌信息')}
                                    {this._renderInput('车型:', '请填写您的车型信息')}
                                    {this._renderInput('车名:', '请填写您的车名信息')}
                                    <View style={[styles.viewCenter,{height:40,marginTop:5}]}>
                                        <Text>确定</Text>
                                    </View>

                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

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
        padding:10
    },


});