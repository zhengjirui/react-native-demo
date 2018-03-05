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
import styles from "./styles";
import Header from '../../components/header';
class details extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Header
                    renderTitle = { () => {
                        return <Text style={styles.baise}>采购订单</Text>
                    }}
                    renderRight = { () => {
                        return <View style={styles.headrigbox}>
                            <Image
                                style={styles.headrigimg}
                                source={require('../../res/images/addressManage/dianhua.png')}
                            />
                            <Image
                                style={styles.headrigimg}
                                source={require('../../res/images/addressManage/fenxiang.png')}
                            />
                        </View>

                    }}
                />

                <View style={styles.caixiagtop}>
                    <Text>丰田霸道 GRW18</Text>
                    <Text style={styles.caixiagtoplan}>取消采购</Text>
                </View>
                <View style={styles.caixiagmid}>
                    <View style={styles.caixiagmid1}>
                        <Text>VIN：<Text>123456</Text></Text>
                    </View>
                    <View style={styles.caixiagmid1}>
                        <View>
                            <Text>订单号：<Text>313121513</Text></Text>
                        </View>
                        <View style={styles.shitime}>
                            <Text style={styles.shitimez}>2017/12/22</Text>
                            <Text style={styles.shitimez}>10:00</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.cailist}>
                    <View style={styles.cailist1}>
                        <View style={styles.cailistcon1}>
                            <Image
                                style={styles.cailisttu}
                                source={require('../../res/images/main/renlan.png')}
                            />
                            <Text style={styles.cailiszi}>朝阳管庄汽修汽配城</Text>
                        </View>
                        <View style={styles.cailistcon1}>
                            <Image
                                style={styles.cailisttu}
                                source={require('../../res/images/main/xiaoxilan.png')}
                            />
                            <Text style={[styles.cailiszi,styles.lansezi]}>联系卖家</Text>
                        </View>
                    </View>
                    <View style={styles.cailist2}>
                        <Text>13050  凸轮轴、大灯、前大灯、空调</Text>
                    </View>

                    <View>
                        {this._cailistbox()}
                    </View>
                </View>



            </View>
        )
    }
    _cailistbox = () => {
        let arr1=[];
        for (let i = 0; i < 4; i++) {
            arr1.push(
                this._caigoulistbox(i)
            )
        }
        return arr1;
    }

    _caigoulistbox () {
        return (
            <View style={styles.cglistbox}>
                <View style={styles.bianhaobox}><Text>88461-60991</Text></View>
                <View>
                    <View style={styles.cgoucon}>
                        <View>
                            <Image
                                style={styles.caiglisttu}
                                source={require('../../res/images/login/tu.png')}
                            />
                        </View>
                        <View style={styles.cgouconr}>
                            <View>
                                <Text style={styles.cuhei}>原厂原商</Text>
                            </View>
                            <View style={styles.cgouconrg}>
                                    <View >
                                        <Text>单价:<Text style={styles.dahong}>￥</Text><Text style={styles.dahong}>99999.99</Text></Text>
                                    </View>
                                    <View style={styles.mar10}>
                                        <Text>合计:<Text style={styles.dahong}>￥</Text><Text style={styles.dahong}>99999.99</Text></Text>
                                    </View>

                                <View style={styles.sansan}>
                                    <Text style={styles.sancon}>3</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.cgoucon}>
                        <View>
                            <Image
                                style={styles.caiglisttu}
                                source={require('../../res/images/login/tu.png')}
                            />
                        </View>
                        <View style={styles.cgouconr}>
                            <View>
                                <Text style={styles.cuhei}>原厂原商</Text>
                            </View>
                            <View style={styles.cgouconrg}>
                                <View >
                                    <Text>单价:<Text style={styles.dahong}>￥</Text><Text style={styles.dahong}>99999.99</Text></Text>
                                </View>
                                <View style={styles.mar10}>
                                    <Text>合计:<Text style={styles.dahong}>￥</Text><Text style={styles.dahong}>99999.99</Text></Text>
                                </View>

                                <View style={styles.sansan}>
                                    <Text style={styles.sancon}>3</Text>
                                </View>
                            </View>
                        </View>
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

export default connect(initState)(details)