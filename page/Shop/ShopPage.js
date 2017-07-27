/**
 * Created by Administrator on 2017/7/20.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';


import  OrderBar from  '../../components/OrderBar';

var option={
    leftName:'逛一逛'
}

//jsx:自定义一个组件
export  default class ShopPage extends Component{

    state={
        url:'http://i.meituan.com/topic/scene/1?cevent=imt%2Fhomepage%2Fhomeguide4'
    }
    render(){
        return(
            <View style={styles.viewStyle}>
                <OrderBar option={option}></OrderBar>
                <WebView
                    ref={'webView'}
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={{uri: this.state.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                    scalesPageToFit={true}
                />
            </View>
        )
    }
}

//创建样式
const styles=StyleSheet.create({

    viewStyle:{
        backgroundColor:'#F5FCFF',
        flex:1
    },
    webView:{

    }
})
