
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import {connect} from "react-redux";
import PullToRefreshScrollView from "../components/PullToRefreshScrollView";
import Header from '../components/header';
import Inquirying from './inquirying';
import Purchase from './purchase';
import Completed from './completed';
import Unpaid from './unpaid';
class order extends Component {

// 构造函数
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    }

    // 绘制View
    render() {
        return (
            <View style={styles.container}>

                <Header style={styles.header}
                        renderLeft={() => {
                        }}
                        renderTitle={ () => {
                            return <Text style={{
                                color: 'white',
                                fontSize: 18,
                            }}>采购订单</Text>
                        }}
                />

                <PullToRefreshScrollView
                    ref={ (ref) => this._pullToRefresh = ref }
                    refeshState={false}
                >
                    {this._renderTabView()}
                    {this._renderTabListView()}
                </PullToRefreshScrollView>

            </View>
        );
    }

    _renderTabView() {
        return (
            <View style={styles.tabView}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this._renderPage('Inquiry')}
                    style={styles.tabViewTouch}
                >
                    <View style={this._selectStyleView('Inquiry')}>
                        <Text style={this._selectStyleText('Inquiry')}>询价中</Text>
                    </View>
                </TouchableOpacity>



                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this._renderPage('Unpaid')}
                    style={styles.tabViewTouch}>
                    <View style={this._selectStyleView('Unpaid')}>
                        <Text style={this._selectStyleText('Unpaid')}>待付款</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this._renderPage('Purchase')}
                    style={styles.tabViewTouch}>
                    <View style={this._selectStyleView('Purchase')}>
                        <Text style={this._selectStyleText('Purchase')}>采购中</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this._renderPage('Completed')}
                    style={styles.tabViewTouch}>
                    <View style={this._selectStyleView('Completed')}>
                        <Text style={this._selectStyleText('Completed')}>已完成</Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }

    _renderTabListView() {
        let renderPage = this.props.renderPage;
        switch (renderPage) {
            case 'Inquiry':
                return this._renderInquiry();
            case 'Unpaid':
                return this._renderUnpaid();
            case 'Purchase':
                return this._renderPurchase();
            case 'Completed':
                return this._renderCompleted()

        }
    }

    _renderInquiry = () => {
        return <Inquirying />
    }

    _renderUnpaid = () => {
        return <Unpaid />
    }

    _renderPurchase = () => {
        return <Purchase />
    }

    _renderCompleted = () => {
        return <Completed />
    }

    _renderPage(name) {
        this.props.dispatch({type: 'renderPage', page_name: name})
    }

    _selectStyleView = (pageName) => {
        let renderPage = this.props.renderPage;
        if(pageName === renderPage){
            return styles.tabViewSelectChild;
        }else {
            return styles.tabViewNomalChild;
        }
    }
    _selectStyleText = (pageName) => {
        let renderPage = this.props.renderPage;
        if(pageName === renderPage){
            return styles.tabViewTextSelect;
        }else {
            return styles.tabViewTextNomal;
        }
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#ECECF0',
        },
        tabView: {
            height: 50,
            width: global.__WIDTH__,
            flexDirection: 'row',
        },
        tabViewTouch: {
            flex: 1
        },
        tabViewNomalChild: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#ffffff',
            borderBottomWidth: 1
        },
        tabViewSelectChild:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#01b0ff',
            borderBottomWidth: 1,
        },
        tabViewTextNomal:{
            color:'#000000'
        },
        tabViewTextSelect:{
            color:'#01b0ff'
        },


    });

function initState(store) {
    return {
        renderPage: store.OrderReducer.renderPage,
        store: store
    }

}

export default connect(initState)(order);