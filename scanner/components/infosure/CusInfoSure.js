/**
 * Created by zheng on 2017/11/16.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';


export default class CusInfoSure extends Component {

    static defaultProps = {
        renderTopText: null,
        renderMiddleImg: null,
        renderBottomInput: null
    };

    render() {
        return (
            <View style={styles.container}>
                {this._renderTopText()}
                {this._renderMiddleImg()}
                {this._renderBottomInput()}
            </View>
        )
    }

    _renderTopText = () => {
        if (this.props.renderTopText) {
            return (
                <View style={styles.topTextView}>
                    {this.props.renderTopText()}
                </View>
            )
        } else {
            return (
                <View style={styles.topTextView}>
                </View>
            )
        }
    }

    _renderMiddleImg = () => {
        if (this.props.renderMiddleImg) {
            return (
                <View style={styles.middleMiddleView}>
                    {this.props.renderMiddleImg()}
                </View>
            )
        } else {
            return (
                <View style={styles.middleMiddleView}>
                </View>
            )
        }
    }

    _renderBottomInput = () => {
        if (this.props.renderBottomInput) {
            return (
                <View style={styles.bottomInputView}>
                    {this.props.renderBottomInput()}
                </View>
            )
        } else {
            return (
                <View style={styles.bottomInputView}>
                </View>
            )

        }
    }

}

const styles = StyleSheet.create({
    container: {
        width: global.__WIDTH__,
        height: 100,
        flexDirection: 'column'
    },
    topTextView: {
        width: global.__WIDTH__,
        height: 25,
    },
    middleMiddleView: {
        width: global.__WIDTH__,
        height: 40,
    },
    bottomInputView: {
        width: global.__WIDTH__,
        height: 35,
    }
})