/**
 * Created by zheng on 2017/11/11.
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    Modal
} from 'react-native';

export default class page2 extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            modeShow:true
        };
      }

    render(){
        return (
            <View style={{flex:1}}>
                <Modal
                    visible={this.state.modeShow}
                    animationType={'none'}
                    transparent = {true}
                    onRequestClose={()=> this.onRequestClose()}
                >
                    <TouchableOpacity
                        style={{flex:1}}
                        onPress={()=>{
                            this.setState({
                                modeShow:false
                            })
                        }}
                    >
                        <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)'}}>
                            <View style={ [{width:100,height: 100,backgroundColor:'red'}, { position:'absolute',top:this.state.y } ]}>


                            </View>
                        </View>
                    </TouchableOpacity>
                </Modal>

            </View>
        )
    }


}
