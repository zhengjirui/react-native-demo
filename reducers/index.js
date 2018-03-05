/**
 * Created by zheng on 2017/8/22.
 */
import {combineReducers} from 'redux';
import {InquiryReducer} from '../inquiry/reducer';
import {MineReducer} from "../mine/reducer/index";
import {OrderReducer} from "../order/reducer/index";

const initVariable = {

};
function GlobalVariable(state = initVariable, action) {
    switch (action.type) {
        default:
            return initVariable
    }
}

/*以上为全局变量state*/

const rootReducer = combineReducers({
    //全局变量
    GlobalVariable,

    //局部变量
    InquiryReducer,
    MineReducer,
    OrderReducer

})

export default rootReducer;