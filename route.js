/**
 * Created by zheng on 2017/11/11.
 */
let instance = null;     // 工具类单例对象
let navigators = null;    // 单例中保存的Navigator对象

export default class Route {
    // 在构造函数中实现单例
    constructor() {
        if(!instance){
            instance = this;
        }
        return instance;
    }
    // 为单例对象保存Navigator
    setNavigator = (navigator) => {
        navigators = navigator;
    }

    //传递参数拼接
    _parmsMosaic = (component, params) => {
        if (!params) {
            params = {};
        }
        let route = {
            component: component,
            params: params,
        };
        return route;
    }


    pushToPage = (component, params) => {
        if (navigators) {
            navigators.push(this._parmsMosaic(component, params))
        }
    }

    pushToNext(component, params){
        if (navigators) {
            navigators.push(this._parmsMosaic(component, params))
        }
    }

    popToLast(params){
        if (navigators) {
            navigators.pop();
        }
    }


}