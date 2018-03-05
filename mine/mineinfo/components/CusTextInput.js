/**
 * Created by zheng on 2017/11/21.
 */
/**
 * Created by zheng on 2017/11/21.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    TextInput, Text
} from 'react-native';

export default class CusTextInout extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            txtValue:''
        };
      }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.leftView}>
                    <Text style={styles.leftTxt}>{this.props.title}</Text>
                </View>
                <View style={styles.rightView}>
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={styles.inputStyle}
                        multiline={false}
                        placeholder={this.props.placetxt}
                        placeholderTextColor="#e5e5e5"
                        onChangeText={(text) => {
                            this.props.callBackValue(text);
                            this.setState({
                                txtValue: text
                            })
                        }}
                        value={this.state.txtValue}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width:global.__WIDTH__,
        height:50,
        flexDirection:'row',
        alignItems:'center',
        borderColor:'#e5e5e5',
        borderBottomWidth:1,
    },
    leftView:{
        justifyContent:'center',
        alignItems:'center'
    },
    leftTxt:{

    },
    rightView:{
        alignItems:'center',
        flexDirection:'row',
    },
    rightTxt:{

    },
    inputStyle: {
        color: '#51A7F9',
        flex:1
    },
})



