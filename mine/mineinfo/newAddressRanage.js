import React,{Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,

} from 'react-native';
import Header from '../../components/header/index';
import CusTextInput from './components/CusTextInput'
import CusButton from '../../components/button';
import PullToRefreshScrollView from '../../components/PullToRefreshScrollView'

const titleName=['收货人:','手机号:','身份证号:','省/市/区:','详细地址:','默认地址:'];
const titleInput=['请输入真实姓名','请输入手机号码','请输入身份证号码','请选择地区','请输入您的详细地址','每次下单默认使用该地址'];
export default class newAddressManage extends Component{
   render(){
       return(
           <View style={{flex:1,backgroundColor:'#f9f9f9'}}>
               <Header
                   renderTitle = { () => {
                       return <Text style={styles.analysis_result_text}>新增收货地址</Text>
                   }}
               />
               <PullToRefreshScrollView

                   ref={ (ref) => this._refresh = ref }
                   refeshState={false}
                   onRefreshCallBack={(succ) => {

                   }}>
                     <View style={styles.container_view}>
                         <CusTextInput
                             key={0}
                            title={titleName[0]}
                            placetxt={titleInput[0]}
                             callBackValue={(text)=>{
                                 console.warn(text)
                             }}
                         >
                         </CusTextInput>
                         <CusTextInput
                             key={1}
                             title={titleName[1]}
                             placetxt={titleInput[1]}
                         >
                         </CusTextInput>
                         <CusTextInput
                             key={2}
                             title={titleName[2]}
                             placetxt={titleInput[2]}
                         >
                         </CusTextInput>
                         <CusTextInput
                             key={3}
                             title={titleName[3]}
                             placetxt={titleInput[3]}
                         >
                         </CusTextInput>
                         <CusTextInput
                             key={4}
                             title={titleName[4]}
                             placetxt={titleInput[4]}
                         >
                         </CusTextInput>
                         <CusTextInput
                             key={5}
                             title={titleName[5]}
                             placetxt={titleInput[5]}
                         >
                         </CusTextInput>

                     </View>
                   <CusButton
                       sty={styles.cusButton_style}
                       renderText='保存'
                   />



               </PullToRefreshScrollView>
           </View>
       )
   }
}
const styles =StyleSheet.create({

    cusButton_style:{
        marginTop:30,
    },
    container_view:{
        width:global.__WIDTH__,
        marginTop:10,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'white'
    },
    back_iocn:{
        width:25,
        height:25,
        marginLeft:10,
    },
    analysis_result_text:{
        color:'white',
        //fontWeight:'bold',
        fontSize:18,
    },

});