/**
 * Created by zheng on 2017/11/11.
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    ScrollView,
    RefreshControl,

} from 'react-native';
import Loading from './loading'
export default class PullToRefreshScrollView extends Component {

    static defaultProps = {
        refeshState: false,
        onRefreshCallBack: null,//刷新完成返回true，表示一次刷新完成
    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isRefreshing: this.props.refeshState,
        };
    }

    render() {

        return (
            <View style={{flex:1}}>
                {this.state.isRefreshing == true ? (<Loading/>) : null  }
                <ScrollView style={{flex: 1, backgroundColor: 'transparent'}}
                            refreshControl={
                                <RefreshControl
                                    refreshing={false}
                                    onRefresh={this._onRefreshCallBack}
                                    enabled={false}
                                />
                            }
                >
                    {this.props.children}
                </ScrollView>

            </View>
        )
    }

    _onRefreshCallBack = () => {
        this.setState({
            isRefreshing: true
        })
        let onRefreshCallBack = this.props.onRefreshCallBack;
        //刷新回调。刷新完成返回true，表示一次刷新完成
        onRefreshCallBack && onRefreshCallBack(!this.state.isRefreshing)
    }

    setRefrshState(refreshState) {
        this.setState({
            isRefreshing: refreshState
        })
    }
}
