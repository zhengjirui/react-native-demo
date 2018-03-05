/**
 * Created by zheng on 2017/11/16.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    TextInput
} from 'react-native';
import CusTextInput from './CusTextInput';
const wid = global.__WIDTH__ / 4;
export default class CusInputGroup extends Component {

    static defaultProps = {
        numberInput:null,
    };
    static propTypes = {
        numberInput: React.PropTypes.number.isRequired,
    };
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                {this._renderNumInput(this.props.numberInput)}
            </View>
        )
    }

    _renderNumInput = (num) => {
        let arr = [];
        for(let i=0; i < num; i++){
            arr.push(<CusTextInput/>)
        }
        return arr;
    }
}

const styles = StyleSheet.create({
    container: {
        height: 35,
        flexDirection:'row',
        borderColor: 'gray',
        borderLeftWidth:1,
        borderTopWidth:1,
        borderBottomWidth:1,

    },
})