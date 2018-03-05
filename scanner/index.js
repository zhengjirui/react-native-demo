/**
 * Created by zheng on 2017/11/14.
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import {Header, Loading} from '../components';

import CusInputGroup from './components/infosure/CusInputGroup';
import CusInfoSure from './components/infosure/CusInfoSure';

export default class scanner extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Header
                    renderRight={this._renderRight}
                    title={'请对准汽车VIN码'}
                />

                <CusInfoSure
                    renderBottomInput={() => {
                        return (
                            <CusInputGroup/>
                        )
                    }}
                />



            </View>
        )
    }

    _renderRight = () => {
        return (
            <Image
                style={styles.share_img}
                source={require("./images/icon_mine_select.png")}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    share_img: {
        height: 20,
        width: 20,
        marginRight:10,
        backgroundColor:'red'
    }

})