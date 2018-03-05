import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Switch,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Header from '../../components/header/index';
import Cusbutton from '../../components/button'
export default class opinion extends Component {
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#f9f9f9'}}>
                <Header
                    renderTitle = { () => {
                        return <Text style={styles.newInfo_text}>意见反馈</Text>
                    }}
                />
               <View style={styles.opinion_view}>
                 <TextInput
                     style={styles.opinion_textinput}
                     multiline={true} //代表可以输入多行
                     underlineColorAndroid={'transparent'}//输入框的线框为透明
                     maxLength={200}
                     placeholder="请输入关键字"
                     placeholderTextColor='#999999'
                 ></TextInput>
               </View>
                <View style={styles.relation}>
                    <Text>联系方式</Text>
                </View>
               <View>
                   <TextInput
                       style={styles.relation_number}
                       //multiline={true} //代表可以输入多行
                       underlineColorAndroid={'transparent'}//输入框的线框为透明
                       placeholder="请输入您的手机号"
                       placeholderTextColor='#999999'
                   ></TextInput>
               </View>

                <TouchableOpacity
                 activeOpacity={0.9}
                >
                    <Cusbutton
                        sty={styles.button_submit}
                        renderText='提交'

                    />


                </TouchableOpacity>
            </View>
        )

    }
}
const styles=StyleSheet.create({
    button_submit:{
        marginTop:20,
    },
    relation_number:{
          padding:10,
         backgroundColor:'white',
        borderTopWidth:1,
        borderBottomWidth:1,
        borderTopColor:'#f0f0f0',
        borderBottomColor:'#f0f0f0',
    },
    relation:{
        padding:10,
    },
    opinion_textinput:{
        flex:1,
       // backgroundColor:'pink',
        //marginTop:10


    },
    opinion_view:{
        padding:10,
        backgroundColor:'white',
        width:global.__WIDTH__,
        height:150,
        borderBottomWidth:1,
        borderBottomColor:'#f0f0f0',
    },
    newInfo_text:{
        justifyContent:'center',
        color:'white',
        //fontWeight:'bold',
        fontSize:18,
    },
})