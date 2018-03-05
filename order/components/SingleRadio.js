/**
 * Created by zheng on 2017/11/20.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

export default class SingleRadio extends Component {

    static defaultProps = {
        radioLeftCheck: false,
        radioRightCheck: true,
    };

    static propTypes = {
        radioLeftCheck: React.PropTypes.bool.isRequired,
        radioRightCheck: React.PropTypes.bool.isRequired,
    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            radioLeftCheck: this.props.radioLeftCheck,
            radioRightCheck: this.props.radioRightCheck,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this._updateSelect(1)}
                    style={styles.touchView}
                >
                    <Image
                        style={styles.circleView}
                        source={this._selectStyle(1)}
                    />
                    <Text style={styles.radioText}>已报价</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this._updateSelect(2)}
                    style={[styles.touchView, {marginLeft: 5, marginRight: 5}]}
                >
                    <Image
                        style={[styles.circleView, {marginLeft: 5}]}
                        source={this._selectStyle(2)}
                    />
                    <Text style={styles.radioText}>已过期</Text>
                </TouchableOpacity>


            </View>
        )
    }

    _selectStyle(number) {
        if (number === 1) {
            let checkState = this.state.radioLeftCheck;
            if (checkState) {
                return require('../../res/images/main/dui.png');
            } else {
                return require('../../res/images/main/kong.png');
            }
        } else if (number === 2) {
            let checkState = this.state.radioRightCheck;
            if (checkState) {
                return require('../../res/images/main/dui.png');
            } else {
                return require('../../res/images/main/kong.png');
            }
        }
    }


    _updateSelect(number) {
        if (number === 1) {
            let checkState = this.state.radioLeftCheck;
            this.setState({
                radioLeftCheck: !checkState,
                radioRightCheck: checkState,
            })
        } else if (number === 2) {
            let checkState = this.state.radioRightCheck;
            this.setState({
                radioRightCheck: !checkState,
                radioLeftCheck: checkState,
            })
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    circleView: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#249EFA'
    },
    radioText: {
        marginLeft: 5
    },
    touchView: {
        flexDirection: 'row'
    }
})