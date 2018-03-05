
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
import SingleRadio from "../components/SingleRadio";
import Route from "../../route";
import InquiryInfor from './InquiryInfor';
import styles from "../Styles";

class inquirying extends Component {

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
                <View style={styles.checkBoxView}>
                    {this._renderCheckBox()}
                </View>
                {this._renderContentList()}
                {/*{this._renderContentItem()}*/}

                {/*{this._renderContentItem()}*/}
                {/*{this._renderContentItem()}*/}
                {/*{this._renderContentItem()}*/}


            </View>
        )
    }

    _renderCheckBox = () => {

        return (
            <SingleRadio
                radioLeftCheck={true}
                radioRightCheck={false}
            />
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
                <TouchableOpacity
                    key={parms}
                    onPress={()=>{this._route.pushToNext(InquiryInfor,{kaldj:parms})}}
                    activeOpacity={0.9}
                >
                <View style={styles.itemViewLine1}>
                    <Text style={styles.itemViewLine1_LeftText}>NO.AH18734917</Text>

                    <Text style={styles.itemViewLine1_RightText}>查看详情</Text>

                </View>
                </TouchableOpacity>


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
                        <Text style={styles.itemViewLine3_ViewText}>4项</Text>
                    </View>
                </View>

                <View style={styles.itemViewLine4}>
                    <View style={styles.itemViewLine4_View}>
                        <Image
                            style={styles.itemViewLine4_ViewImg}
                            source={require('../../res/images/main/qianlan.png')}
                        />
                        <Text style={styles.itemViewLine4_LeftText}>已有四个报价</Text>
                        <View style={styles.itemViewLine4_UnreadText}>
                            <Text style={{color: '#ffffff'}}>1</Text>
                        </View>

                    </View>
                    <View style={styles.itemViewLine4_View}>
                        <Image
                            style={styles.itemViewLine4_ViewImg}
                            source={require('../../res/images/main/xiaoxilan.png')}
                        />
                        <Text style={styles.itemViewLine4_RightText}>一条未读消息</Text>
                    </View>
                </View>
            </View>
        )
    }
}


function initState(store) {
    return {
        store: store
    }

}

export default connect(initState)(inquirying)
