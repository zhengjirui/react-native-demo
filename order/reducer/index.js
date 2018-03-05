/**
 * Created by zheng on 2017/8/29.
 */

const initState = {
    visible: false,
    renderPage:'Inquiry',//询价中（inquiry），采购中（Purchase），已完成（Completed）
}

const OrderReducer = (state = initState, actions) => {
    switch (actions.type) {
        case 'renderPage':
            let page_name = actions.page_name;
            return {
                renderPage:page_name,
                visible: state.visible,
            }

        case 'changeloading':
            return {
                visible: actions.visible,
                renderPage:state.renderPage
            }

        default :
            return initState;
    }
}

export {
    OrderReducer
}