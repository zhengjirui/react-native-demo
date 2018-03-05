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
    ToastAndroid
} from 'react-native';

import {connect} from 'react-redux';
import TabNavigator from 'react-native-tab-navigator'
import {
    Inquiry,
    Order,
    Information,
    Mine,
} from '../components';
//import Xunpei from '../inquiry/xunpei_Orders'
 import Engine from '../inquiry/index'
 //import Infrom from '../mine/register/register'

//import Infrom from '../'


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'inquiry'
        }
    }

    componentWillMount() {
        this.listenerBack = BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }

    componentWillUnmount() {
        if(this.listenerBack){
            this.listenerBack.remove();
        }
    }

    onBackAndroid = () => {

        const nav = this.props.navigator;
        const routers = nav.getCurrentRoutes();
        if (routers.length > 1) {
            nav.pop();
            return true;
        }


        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            return false;
        }
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        return true;
    };

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    {/*首页*/}
                    <TabNavigator.Item
                        //设置选中的位置
                        selected={this.state.selectedTab === 'inquiry'}
                        //标题
                        title="询价"
                        //标题样式
                        titleStyle={styles.tabText}
                        //选中时标题文字样式
                        selectedTitleStyle={styles.selectedTabText}
                        //图标
                        renderIcon={() => <Image style={styles.icon} source={require("../res/images/main/icon_price_nomal.png")} />}
                        //选中时图标
                        renderSelectedIcon={() => <Image style={[styles.icon, ]} source={require("../res/images/main/icon_price_select.png")} />}
                        //点击Event
                        onPress={() => this.setState({ selectedTab: 'inquiry' })}>
                        <Engine />

                    </TabNavigator.Item>

                    {/*采购订单*/}
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'order'}
                        title="采购订单"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../res/images/main/icon_order_nomal.png")} />}
                        renderSelectedIcon={() =>  <Image style={[styles.icon, ]} source={require("../res/images/main/icon_orider_select.png")} />}
                        onPress={() => this.setState({ selectedTab: 'order' })}>
                        <Order />
                    </TabNavigator.Item>

                    {/*资讯*/}
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'information'}
                        title="资讯"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../res/images/main/icon_news_nomal.png")} />}
                        renderSelectedIcon={() => <Image style={[styles.icon ]} source={require("../res/images/main/icon_news_select.png")} />}
                        onPress={() => this.setState({ selectedTab: 'information' })}>
                        <Information />
                    </TabNavigator.Item>

                    {/*我的*/}
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'mine'}
                        title="我的"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../res/images/main/icon_mine_nomal.png")} />}
                        renderSelectedIcon={() => <Image style={[styles.icon]} source={require("../res/images/main/icon_mine_select.png")} />}
                        onPress={() => this.setState({ selectedTab: 'mine' })}>
                        <Mine />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabText: {
        fontSize: 10,
        color: '#676767',
        fontSize:12
    },
    selectedTabText: {
        fontSize: 10,
        color: '#01a1df',
        fontSize:12
    },
    icon: {
        width: 22,
        height: 22
    },
    page0: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    page1: {
        flex: 1,
        backgroundColor: 'blue'
    }
});

function initState(store) {
    return {
    }

}

export default connect(initState)(Main);