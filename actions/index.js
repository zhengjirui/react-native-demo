/**
 * Created by zheng on 2017/8/23.
 */
import * as ToastAndroid from "react-native/Libraries/Components/ToastAndroid/ToastAndroid.android";
import * as ToastIos from "react-native/Libraries/Components/ToastAndroid/ToastAndroid.ios";


const ShowToast = (showText) => {
    if(global.__ANDROID__){
        ToastAndroid.show(showText, ToastAndroid.SHORT);
    }
    if(global.__IOS__){
        ToastIos.show(showText, ToastAndroid.SHORT);
    }

}

export {
    ShowToast
}