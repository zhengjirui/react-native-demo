import React,{Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,

} from 'react-native';

export default class ImgtextInput extends Component{

    static defaultProps={
            renderImage:null,
            renderText:null,
    }

    render(){
        return(
          <View style={styles.TextInput_contain}>
              {this._renderImage()}
              {this._renderText()}
          </View>

        )
    }
    _renderImage(){
        if(this.props.renderImage){
             return(
                 <View style={styles.Img_icon}>
                     {this.props.renderImage()}
                 </View>
             )
        }
    }
    _renderText(){
        if(this.props.renderText){
          return(
              <View style={styles.T_input}>
                  {this.props.renderText()}
              </View>
          )
        }
    }
}
const styles=StyleSheet.create({

    T_input:{
        flex:1,

    },
    Img_icon:{
        width:25,
        height:25,
        // backgroundColor:'pink',
        marginTop:13,
    },
    TextInput_contain:{
        flexDirection:'row',
        margin:10,
        //padding:10,
        paddingLeft:10,
        paddingRight:10,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#e5e5e5',
        backgroundColor:'white',
    },
})