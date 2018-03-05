/**
 * Created by zheng on 2017/8/29.
 */

//初始化当前界面数据
const initState = {
    visible: false,//加载状态
}
//   {type: 'changeloading', visible: false}
const MineReducer = (state = initState, actions) => {
    switch (actions.type) {

        case 'changeloading':
            //执行操作代码
            return {
                visible: actions.visible,
            }

        default :
            return initState;
    }
}

export {
    MineReducer
}