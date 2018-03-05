/**
 * Created by zheng on 2017/8/29.
 */

const initState = {
    visible: false,
    varsss: '询价'
}

const InquiryReducer = (state = initState, actions) => {
    switch (actions.type) {

        case 'changeloading':


            return {
                visible: actions.visible,
                varsss: initState.varsss,
            }

        default :
            return initState;
    }
}

export {
    InquiryReducer
}