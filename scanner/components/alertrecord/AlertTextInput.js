/**
 * Created by zheng on 2017/11/16.
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';
export default class AlertTextInput extends Component {

    static defaultProps = {
        renderLeftText: '',
        renderRightInputText: ''
    };

    static propTypes = {
        renderLeftText: React.PropTypes.string.isRequired,
        renderRightInputText: React.PropTypes.string.isRequired,
    };


    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            txtValue:''
        };
      }

    render() {
        return (
            <View style={styles.container}>
                    {this._renderLeftText()}
                    {this._renderRigthInput()}
            </View>
        )
    }

    _renderLeftText = () => {
        return (
            <Text>{this.props.renderLeftText}</Text>
        )
    }

    _renderRigthInput = () => {
        return (
            <TextInput
                underlineColorAndroid={'transparent'}
                style={[styles.inputStyle]}
                multiline={false}
                placeholder={this.props.renderRightInputText}
                placeholderTextColor="#e5e5e5"
                autoCapitalize={'sentences'}
                onChangeText={(text) => {
                    this.setState({
                        txtValue: text
                    })
                }}
                value={this.state.txtValue}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: global.__WIDTH__,
        height: 50,
        alignItems: 'center',
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'#e5e5e5'
    },
    inputStyle: {
        color: '#51A7F9',
        flex:1
    },
})