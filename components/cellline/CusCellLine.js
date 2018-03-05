/**
 * Created by zheng on 2017/11/16.
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

export default class CusCellLine extends Component {

    static defaultProps = {
        renderLeftImg: null,
        renderLeftText: null,
        renderRightImg: null,
        renderRightText: null,
        onPressCell:null
    };

    render() {
        return (
        <TouchableOpacity
            onPress={() => this._onPressCell()}
            activeOpacity={0.8}>
            <View style={styles.containerbox} >
                <View style={styles.container} >
                    <View style={styles.leftContainer}>
                        <View style={styles.viewParent}>
                            {this._renderLeft()}
                        </View>
                    </View>
                    <View style={styles.rightContainer}>
                        <View style={styles.viewParent}>
                            {this._renderRight()}
                        </View>
                    </View>

                </View>
            </View>
        </TouchableOpacity>

        )
    }

    _onPressCell(){
        if(this.props.onPressCell){
            this.props.onPressCell();
        }else {
           // alert(1);
        }
    }

    _renderLeft = () => {
        let arr = [];

        if (this.props.renderLeftImg) {
            arr.push(this.props.renderLeftImg())
        } else {
            arr.push(this._renderLeftImg());
        }


        if (this.props.renderLeftText) {
            arr.push(this.props.renderLeftText())
        } else {
            arr.push(this._renderLeftText());
        }
        return arr;
    }

    _renderLeftImg = () => {
        return (
            <Image
                style={styles.defaultImg}
                source={require('./you.png')}
            />
        )
    }

    _renderLeftText = () => {
        return (
            <Text></Text>
        )
    }

    _renderRight = () => {
        let arr = [];

        if (this.props.renderRightText) {
            arr.push(this.props.renderRightText())
        } else {
            arr.push(this._renderRightText());
        }

        if (this.props.renderRightImg) {
            arr.push(this.props.renderRightImg())
        } else {
            arr.push(this._renderRightImg());
        }
        return arr;
    }

    _renderRightImg = () => {
        return (
            <Image
                style={styles.defaultImg}
                source={require('./you.png')}
            />
        )
    }

    _renderRightText = () => {
        return (
            <Text></Text>
        )
    }
}

const styles = StyleSheet.create({
    containerbox:{
        width:'100%',
        backgroundColor:'#fff',
        alignItems: 'center',
    },
    container: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#fff',
        borderBottomWidth:1,
        borderColor:'#f2f2f2',
        width:'96%'
    },
    leftContainer: {
        height: 50,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        paddingLeft: 5,
        backgroundColor: 'transparent'
    },
    defaultImg: {
        width: 7,
        height: 12,
        marginTop:4,
        marginLeft:5
    },
    rightContainer: {
        height: 50,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        right: 0,
        paddingRight: 10,
        backgroundColor: 'transparent'
    },
    viewParent: {
        flexDirection: 'row'
    },


})