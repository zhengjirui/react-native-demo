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
    Dimensions,
    TextInput
} from 'react-native';
import {connect} from "react-redux";
import Header from '../../components/header';
import CusCellLine from '../../components/cellline/CusCellLine';
import CusButton from '../../components/button';

var {height, width} = Dimensions.get('window');
class name extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Header
                    renderTitle = { () => {
                        return <Text style={styles.baise}>设置昵称</Text>
                    }}
                />


                <View style={styles.namebox}>
                    <View style={styles.passboxlist}>
                        <Text style={styles.passtext}>昵称</Text>
                        <View style={styles.passipt}>
                            <TextInput
                                keyboard='phone-pad'
                                placeholder="仅支持中英文、数字"
                                autoCapitalize='characters'
                                underlineColorAndroid='transparent'
                                style={styles.forgetInput}
                            />
                        </View>

                            <Image
                                style={styles.passimg}
                                source={require("../images/xxx.png")}/>

                    </View>
                </View>

                <CusButton
                    renderText={'确认'}
                />

            </ScrollView>
        );
    }




}



const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f4f4f4'
    },
    baise:{
        color:'#fff',
        fontSize:18
    },
    passboxlist:{
        width:'96%',
        marginLeft:'2%',

        height:54,
        flexDirection:'row',
        alignItems:'center',
    },
    passtext:{
        fontSize:16,
        color:'#333',
        marginLeft:2,
        width:'10%',
    },
    passipt:{
        width:'70%',
        marginLeft:'5%'
    },
    passimg:{
        width:14,
        height:14,
        position:'absolute',
        right:10
    },
    namebox:{
        borderWidth:1,
        borderColor:'#eee',
        marginTop:12,
        backgroundColor:'#fff'
    },


})

function initState(store) {
    return {
        store: store,
        visible: store.MineReducer.visible,
    }
}

export default connect(initState)(name)