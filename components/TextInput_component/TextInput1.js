import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    TextInput
} from 'react-native';

export default class TextInput1 extends Component{

    static defaultProps ={
        renderImg:null,
        renderTextInput:null,
    };
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };
    }


    render(){
        return (
            <View  style={styles.TextInput_contain}>
                {this._renderImg()}
                {this._renderTextInput()}
            </View>
        )
    }
    _renderImg =() =>{
        if(this.props.renderImg){
            return (
                <View style={styles.TextInput_icon}>
                    {this.props.renderImg()}
                </View>
            );
        }else{
            return (
                <View style={styles.TextInput_icon}>

                </View>
            );
        }
    }
    _renderTextInput =() =>{
        if(this.props.renderTextInput){
            return (
                <View style={styles.TextInput_textinput}>
                    {this.props.renderTextInput()}
                </View>
            );
        }else{
            return (
                <View style={styles.TextInput_textinput}>

                </View>
            );
        }
    }

}
const styles =StyleSheet.create({
    TextInput_textinput:{
        flex:1,
        height:40,
        //paddingTop:10,
        marginLeft:7,
    },
    TextInput_icon:{
        width:25,
        height:25,
        resizeMode:'contain',
        marginLeft:10,
        // backgroundColor:'gray'
    },
    TextInput_contain:{
        width:'100%',
        height:40,
        borderColor:'#e5e5e5',
        borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:5,
        backgroundColor:'white'
    },

})