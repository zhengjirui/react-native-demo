/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 配置初始化和路由navigator以及store绑定
 */
//http://blog.csdn.net/whatofit/article/details/51843287 rn学习网址
import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
} from 'react-native';

import {Provider} from 'react-redux'
import configureStore  from './store'
import { Navigator } from "react-native-deprecated-custom-components"
import Main from './main';
import rootReducers from './reducers';
import Route from './route';
if (!__DEV__) {
    global.console = {
        info: () => {
        },
        log: () => {
        },
        error: () => {
        },
        warn: () => {
        },
    }
}

const {width, height} = Dimensions.get('window');
global.__WIDTH__ = width;
global.__HEIGHT__ = height;

export default class HXqipei extends Component {

    componentDidMount() {
        // NativeModules.SplashScreen.hide();
    }

    render() {
        return (

            <Provider store={configureStore()}>
                <Navigator
                    ref = {(navigator) => {
                        new Route().setNavigator(navigator);
                    }}
                    initialRoute={{title: 'main', component: Main}}
                    configureScene={(route, routeStack) => {
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        // console.warn(Component.title);
                        return <Component {...route.params} navigator={navigator}/>
                    }}
                />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('HXqipei', () => HXqipei);
