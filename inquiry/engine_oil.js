/**
 * Created by zheng on 2017/11/11.
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    NativeModules,
    BackAndroid,
    ToastAndroid,
    ScrollView
} from 'react-native';

export default class information extends Component{
    render(){
        return(
            <ScrollView style={{flex:1,}}>
                <View style={styles.wrap_view}>
                    <View style={styles.wrap_view_Left}>
                       <View style={styles.font_view}>
                           <Text style={styles.font_view_text}>09-01</Text>
                           <Text>随车工具</Text>
                       </View>
                        <Image style={styles.car_tool_img} source={require("../res/images/xunpei_Order/car_tool.png")}/>
                        <View style={styles.font_view_bottom}>
                            <Text style={styles.font_view_bottom_text}>STANDRD TOOL</Text>
                        </View>
                    </View>
                    <View style={styles.wrap_view_Right}>
                        <View style={styles.font_view}>
                            <Text style={styles.font_view_text}>11-01</Text>
                            <Text>发动机</Text>
                        </View>
                        <Image style={styles.car_engine_img} source={require("../res/images/xunpei_Order/engine.png")}/>
                        <View style={styles.font_view_bottom}>
                            <Text style={styles.font_view_bottom_text}>STANDRD TOOL</Text>
                        </View>
                    </View>

                </View>

                <View style={styles.wrap_view}>
                    <View style={styles.wrap_view_Left}>
                        <View style={styles.font_view}>
                            <Text style={styles.font_view_text}>09-01</Text>
                            <Text>随车工具</Text>
                        </View>
                        <Image style={styles.car_tool_img} source={require("../res/images/xunpei_Order/car_tool.png")}/>
                        <View style={styles.font_view_bottom}>
                            <Text style={styles.font_view_bottom_text}>STANDRD TOOL</Text>
                        </View>
                    </View>
                    <View style={styles.wrap_view_Right}>
                        <View style={styles.font_view}>
                            <Text style={styles.font_view_text}>11-01</Text>
                            <Text>发动机</Text>
                        </View>
                        <Image style={styles.car_engine_img} source={require("../res/images/xunpei_Order/engine.png")}/>
                        <View style={styles.font_view_bottom}>
                            <Text style={styles.font_view_bottom_text}>STANDRD TOOL</Text>
                        </View>
                    </View>

                </View>

                <View style={styles.wrap_view}>
                    <View style={styles.wrap_view_Left}>
                        <View style={styles.font_view}>
                            <Text style={styles.font_view_text}>09-01</Text>
                            <Text>随车工具</Text>
                        </View>
                        <Image style={styles.car_tool_img} source={require("../res/images/xunpei_Order/car_tool.png")}/>
                        <View style={styles.font_view_bottom}>
                            <Text style={styles.font_view_bottom_text}>STANDRD TOOL</Text>
                        </View>
                    </View>
                    <View style={styles.wrap_view_Right}>
                        <View style={styles.font_view}>
                            <Text style={styles.font_view_text}>11-01</Text>
                            <Text>发动机</Text>
                        </View>
                        <Image style={styles.car_engine_img} source={require("../res/images/xunpei_Order/engine.png")}/>
                        <View style={styles.font_view_bottom}>
                            <Text style={styles.font_view_bottom_text}>STANDRD TOOL</Text>
                        </View>
                    </View>

                </View>


                <View style={styles.wrap_view}>
                    <View style={styles.wrap_view_Left}>
                        <View style={styles.font_view}>
                            <Text style={styles.font_view_text}>09-01</Text>
                            <Text>随车工具</Text>
                        </View>
                        <Image style={styles.car_tool_img} source={require("../res/images/xunpei_Order/car_tool.png")}/>
                        <View style={styles.font_view_bottom}>
                            <Text style={styles.font_view_bottom_text}>STANDRD TOOL</Text>
                        </View>
                    </View>
                    <View style={styles.wrap_view_Right}>
                        <View style={styles.font_view}>
                            <Text style={styles.font_view_text}>11-01</Text>
                            <Text>发动机</Text>
                        </View>
                        <Image style={styles.car_engine_img} source={require("../res/images/xunpei_Order/engine.png")}/>
                        <View style={styles.font_view_bottom}>
                            <Text style={styles.font_view_bottom_text}>STANDRD TOOL</Text>
                        </View>
                    </View>

                </View>


                <View style={styles.wrap_view}>
                    <View style={styles.wrap_view_Left}>
                        <View style={styles.font_view}>
                            <Text style={styles.font_view_text}>09-01</Text>
                            <Text>随车工具</Text>
                        </View>
                        <Image style={styles.car_tool_img} source={require("../res/images/xunpei_Order/car_tool.png")}/>
                        <View style={styles.font_view_bottom}>
                            <Text style={styles.font_view_bottom_text}>STANDRD TOOL</Text>
                        </View>
                    </View>
                    <View style={styles.wrap_view_Right}>
                        <View style={styles.font_view}>
                            <Text style={styles.font_view_text}>11-01</Text>
                            <Text>发动机</Text>
                        </View>
                        <Image style={styles.car_engine_img} source={require("../res/images/xunpei_Order/engine.png")}/>
                        <View style={styles.font_view_bottom}>
                            <Text style={styles.font_view_bottom_text}>STANDRD TOOL</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        )
    }
}
const styles=StyleSheet.create({
    car_engine_img:{
        width:100,
        height:100,
    },
    font_view_bottom_text:{
        fontSize:13,
    },

    car_tool_img:{
        width:160,
        height:100,
        resizeMode:'stretch'
    },
    font_view_text:{
        marginRight:10,
    },
    font_view:{
        marginTop:2,
        flexDirection:'row',
    },
    wrap_view_Right:{
        width:'50%',
        height:140,
        backgroundColor:'#ffffff',
        marginLeft:4,
        alignItems:'center',
    },
    wrap_view_Left:{
        width:'50%',
        height:140,
        backgroundColor:'#ffffff',
        marginRight:4,
        alignItems:'center',
    },
    wrap_view:{
        width:global.__WIDTH__,
        height:148,
       // backgroundColor:'pink',
        flexDirection:'row',
    },
});