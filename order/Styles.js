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
        right: 4,
        color: '#0D92F8'
    },
    itemViewLine1_RightText2: {
        position: 'absolute',
        right: 68,
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
        flex: 3,
        alignItems: 'center',
        flexDirection: 'row'
    },
    temViewLine3_RightView: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    itemViewLine3_ViewText: {
        marginLeft:5,
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
    wuliu:{
        width:15,
        height:15,
        marginRight:8,
    },
    liangduan:{
        justifyContent:'space-between'
    },
    hengxiang:{
        flexDirection:'row'
    },
    caigouzi:{
        paddingLeft:8,
    },
    caigouing1:{
        flex:3,
    },
    caigouing2:{
        flex:2,
        borderRightWidth:1,
        borderLeftWidth:1,
        borderColor:'#eee',
    },
    caigouing3:{
        flex:5,
    },
    caiimg:{
        width:15,
        height:15,
    },
    caigouings:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    }

})

export {Styles as default};