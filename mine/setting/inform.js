import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Switch,
} from 'react-native';
import Header from '../../components/header/index';

export default class inform extends Component{

    render(){
        return(
            <View style={{flex:1,backgroundColor:'#f9f9f9'}}>
                <Header
                    renderTitle = { () => {
                        return <Text style={styles.newInfo_text}>通知提醒</Text>
                    }}
                />
                <View style={styles.newInfo}>
                    <Text style={styles.newInfo_string}>新消息提醒</Text>
                    <View style={styles.newInfo_switch_view}>
                        <Switch ></Switch>
                    </View>
                </View>

                <View style={styles.close_hint}>
                    <Text style={styles.close_hint_string}>关闭后，当收到信息时，将不会有任何震动和声音。</Text>
                </View>



            </View>
        )
    }
}
const styles=StyleSheet.create({
    close_hint_string:{
        fontSize:12,
        color:'#979797',
    },
    close_hint:{
        padding:10,
    },
    newInfo_string:{
      // fontWeight:'bold',
        color:'black',
        marginTop:5,
    },
    newInfo_switch_view:{
        flex:1,
        justifyContent:'flex-end',
        //alignItems:'center'

    },
    newInfo:{
        width:global.__WIDTH__,
        padding:10,
        flexDirection:'row',
        backgroundColor:'white',
        marginTop:10,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderTopColor:'#e5e5e5',
        borderBottomColor:'#e5e5e5',
    },
    newInfo_text:{
        justifyContent:'center',
        color:'white',
        //fontWeight:'bold',
        fontSize:18,
    },


})