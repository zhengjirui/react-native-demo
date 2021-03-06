/**
 * Created by zheng on 2017/8/29.
 */
const InquiryActions = (actions = {}) => {
    switch (actions.type){
        case 'changeloading':
            return (dispatch) => {
                return dispatch({type: actions.type, visible: actions.visible});
            }
    }
}

export {
    InquiryActions
}