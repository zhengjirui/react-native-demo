import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

export default class CusButton extends Component {

    render() {
        return (
            <View style={[styles.Cusbutton,this.props.sty ? this.props.sty : null]}>
                <Text style={styles.button_text}>
                    {this.props.renderText}
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    button_text: {
        color: 'white',
        fontSize: 15,
    },
    Cusbutton: {
        width: global.__WIDTH__,
        height: 40,
        margin: 10,
        backgroundColor: '#03a9f5',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
})