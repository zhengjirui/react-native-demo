/**
 * Created by zheng on 2017/11/21.
 */
import React, {Component} from 'react';
import {
    ScrollView,
    View,
    TouchableOpacity,
    Image,
    Text,
    StyleSheet,
    NativeModules,
    BackAndroid,
    ToastAndroid,
    Dimensions
} from 'react-native';
import {connect} from "react-redux";
import Header from '../../components/header';
import CusCellLine from '../../components/cellline/CusCellLine';

class settingabout extends Component {
    render() {
        return (
            <View style={[styles.container,{backgroundColor: '#f9f9f9'}]} >
                <Header
                    renderTitle = { () => {
                        return <Text style={styles.baise}>关于询配</Text>
                    }}
                />
                <View style={styles.abouttop}>
                    <Image
                        source={require("../images/xunpei.png")}
                        style={styles.abouttopimg}
                    />
                    <View style={styles.aboutinner}>
                        <Text>版本</Text>
                        <Text>1.1.1</Text>
                    </View>
                    <View style={styles.aboutinner}>
                        <Text>讯配修车网</Text>
                        <Text>版权所有</Text>
                    </View>
                </View>


                <View style={styles.aboutmiddle}>
                    <CusCellLine
                        renderLeftImg={() => {}}
                        renderRightImg={() => {}}
                        renderLeftText={() => <Text style={styles.leftzi}>公司名称</Text>}
                        renderRightText={() => <Text style={styles.leftzi}>中汽联合（北京）科技有限公司</Text>}
                    />
                    <CusCellLine
                        renderLeftImg={() => {}}
                        renderRightImg={() => {}}
                        renderLeftText={() => <Text style={styles.leftzi}>电话</Text>}
                        renderRightText={() => <Text style={styles.leftzi}>400-816-1039</Text>}
                    />
                </View>

                <View style={styles.aboutjieshaobox}>
                    <View style={styles.aboutjieshao}>
                        <Text style={styles.aboutleft}>公司介绍</Text>
                        <Text style={styles.aboutright}>中汽联合（北京）科技有限公司旗下询配修车网是汽修企业一站式联合集中采购的平台，致力于, 联合修车企业建立共享集团采购机制，提升自身品牌竞争优势，为汽修汽配商家沉淀商业信用资本，抱团互通共建汽修汽配商圈新生态。</Text>
                    </View>
                    <View style={styles.aboutjieshaodi}>
                        <Text style={styles.aboutleft}>地址</Text>
                        <Text style={styles.aboutrightdi}>北京</Text>
                    </View>
                </View>




            </View>
        );
    }




}


var {height, width} = Dimensions.get('window');
const styles =StyleSheet.create({
    baise:{
        color:'#fff',
        fontSize:18,
    },
    abouttop:{
        width:'100%',
        height:175,
        borderBottomWidth:1,
        borderColor:'#f2f2f2',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    abouttopimg:{
        width:192,
        height:84,
        marginTop:22,
    },
    aboutinner:{
        flexDirection:'row',
        paddingTop:8,
    },
    aboutmiddle:{
        marginTop:12,
        borderTopWidth:1,
        borderColor:'#f2f2f2',

    },
    aboutjieshao:{
        width: '96%',
        flexDirection:'row',
        paddingTop:8,
        paddingBottom:8,
        marginLeft:'2%',
        borderBottomWidth:1,
        borderColor:'#f2f2f2',
    },
    aboutjieshaobox:{
        width:'100%',
        backgroundColor:'#fff',
        marginTop:12,
        borderWidth:1,
        borderColor:'#f2f2f2'
    },
    aboutleft:{
        width:'18%',
        marginLeft:5,
    },
    aboutright:{
        width:'81%',


    },
    aboutjieshaodi:{
        width: '96%',
        height:44,
        flexDirection:'row',
        paddingTop:8,
        paddingBottom:8,
        marginLeft:'2%',
        alignItems:'center'
    },
    aboutrightdi:{
        position: 'absolute',
        right:0,
    }
})

function initState(store) {
    return {
        store: store,
        visible: store.MineReducer.visible,
    }
}

export default connect(initState)(settingabout)