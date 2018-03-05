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
import {connect} from "react-redux";
import styles from "../Styles";
import Route from "../../route";
import details from "./details";
class purchase extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            text: ''
        };
        this._route = new Route();

    }
    render() {
        return (
            <View style={styles.container}>

                {this._renderContentList()}


            </View>
        )
    }



    _renderContentList = () => {
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(
                this._renderContentItem(i)
            )
        }
        return arr;

    }


    _renderContentItem(parms) {
        return (
            <View style={styles.contentItemView}>
                <View style={[styles.itemViewLine1,styles.liangduan]}>
                    <View style={styles.hengxiang}>
                        <Text style={styles.caigouzi}>NO.201707110001</Text>
                        <Text style={styles.caigouzi}>17/01/11</Text>
                        <Text style={styles.caigouzi}>10:00</Text>
                    </View>
                    <View style={[styles.hengxiang,{marginRight:3,}]}>
                        <Image
                            style={styles.wuliu}
                            source={require('../../res/images/main/wuliu.png')}
                        />
                        <Image
                            style={styles.wuliu}
                            source={require('../../res/images/main/xiaoxilan.png')}
                        />
                    </View>
                </View>
                <TouchableOpacity
                    onPress={()=>{this._route.pushToNext(details)}}
                    activeOpacity={0.9}
                >
                <View style={styles.itemViewLine2}>
                    <View style={[styles.itemViewLine2_View, {borderRightWidth: 1, borderColor: '#EEEEEE'}]}>
                        <Text style={styles.itemViewLine2_ViewText}>丰田霸道 AKLDFJ</Text>
                    </View>
                    <View style={styles.itemViewLine2_View}>
                        <Text style={styles.itemViewLine2_ViewText}>VIN:827340987</Text>
                    </View>
                </View>


                <View style={styles.itemViewLine3}>
                    <View style={[styles.itemViewLine3_LeftView, {borderRightWidth: 1, borderColor: '#EEEEEE'}]}>
                        <Text style={styles.itemViewLine3_ViewText}>凸轮轴、空调、轮胎</Text>
                    </View>
                    <View style={styles.temViewLine3_RightView}>
                        <Text style={styles.itemViewLine3_ViewText}>12个/4项</Text>
                    </View>
                </View>

                <View style={styles.itemViewLine4}>
                    <View style={[styles.caigouing1,styles.caigouings]}>
                        <Image
                            style={styles.caiimg}
                            source={require('../../res/images/main/qianlan.png')}
                        />
                        <Text>￥<Text>500000.00</Text></Text>
                    </View>
                    <View style={[styles.caigouing2,styles.caigouings]}>
                        <Text>12个/4项</Text>
                    </View>
                    <View style={[styles.caigouing3,styles.caigouings]}>
                        <Image
                            style={styles.caiimg}
                            source={require('../../res/images/main/renlan.png')}
                        />
                        <Text>朝阳区汽修汽配城</Text>
                    </View>
                </View>
                </TouchableOpacity>
            </View>
        )
    }
}

function initState(store) {
    return {
        store: store
    }

}

export default connect(initState)(purchase)
