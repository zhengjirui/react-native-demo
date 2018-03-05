import React, {StyleSheet} from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    checkBoxView: {
        height: 50,
        width: global.__WIDTH__,
        flexDirection: 'row-reverse',
        backgroundColor: '#F3F3F3',
        alignItems: 'center'
    },
    checkBox: {},
    contentItemView: {
        flex: 1,
        height: 205,
        backgroundColor: '#F3F3F3',

    },

    itemViewLine1: {
        width: global.__WIDTH__,
        height: 44,
        backgroundColor: '#E3F5FF',
        alignItems: 'center',
        flexDirection: 'row',
        borderTopWidth:1,
        borderColor:'#eee'
    },
    itemViewLine1_LeftText: {
        position: 'absolute',
        left: 5
    },
    itemViewLine1_RightText: {
        position: 'absolute',
        right: 5,
        color: '#0D92F8'
    },

    itemViewLine2: {
        width: global.__WIDTH__,
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderColor: '#EEEEEE'
    },
    itemViewLine2_View: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    itemViewLine2_ViewText: {
        marginLeft: 5
    },

    itemViewLine3: {
        width: global.__WIDTH__,
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderColor: '#EEEEEE'
    },
    itemViewLine3_LeftView: {
        flex: 5,
        alignItems: 'center',
        flexDirection: 'row'
    },
    temViewLine3_RightView: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    itemViewLine3_ViewText: {
        marginLeft: 5
    },

    itemViewLine4: {
        width: global.__WIDTH__,
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderColor: '#EEEEEE'
    },
    itemViewLine4_View: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    itemViewLine4_LeftText: {
        color: '#0D92F8'
    },
    itemViewLine4_RightText: {},
    itemViewLine4_ViewImg: {
        height: 20,
        width: 20
    },
    itemViewLine4_UnreadText: {
        height: 15,
        width: 15,
        borderRadius: 7.5,
        backgroundColor: 'red',
        color: '#ffffff',
        position: 'relative',
        left: 5,
        bottom: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pusbox:{
        height:500,
    }

})

export {Styles as default};