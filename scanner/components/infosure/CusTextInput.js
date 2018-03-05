/**
 * Created by zheng on 2017/11/16.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    TextInput
} from 'react-native';

export default class CusTextInput extends Component {

    static defaultProps = {
        txtValue:''.toLocaleUpperCase()
    };
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            txtValue: this.props.txtValue,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    underlineColorAndroid={'transparent'}
                    style={[styles.inputStyle]}
                    maxLength={10}
                    autoCapitalize={'sentences'}
                    onChangeText={(text) => {
                        let textRes = text.toLocaleUpperCase();
                        this.setState({
                            txtValue: textRes
                        })
                    }}
                    value={this.state.txtValue}
                />
                 </View>
        )
    }

    getTextView(){
        return this.state.txtValue;
    }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        height: 35,
    },
    inputStyle: {
        borderRightWidth: 1,
        borderColor:'gray',
        color:'#51A7F9',
        textAlign:'center',
    }
})