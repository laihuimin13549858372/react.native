/**
 * Created by Administrator on 2017/7/20.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var NearBean =require('../../date/NearBean.json');

import  NearBar from '../../components/NearBar';

import  Food from './TabPage/Food';
import  Hotel from './TabPage/Hotel';
import  Play from './TabPage/Play';
import  All from './TabPage/All';


var option={
    leftName:'大地工业',
    placeHolderName:'找附近 商圈'
}

//引入react-native-scrollable-tab-view组件
// var ScrollableTabView = require('./react-native-scrollable-tab-view');
var ScrollableTabView=require('../../react-native-scrollable-tab-view');

//jsx:自定义一个组件
export  default class NearPage extends Component{


    static  defaultProps={
        url:'http://47.93.30.78:8080/MeiTuan/near'
    }

    /***
     * 状态机
     * @type {{}}
     */
    state={
        foodItem:{},
        hotelItem:{},
        playItem:{},
        allItem:{},
        responseJson:null,
    }

    render(){

        if(this.state.responseJson==null){
            return (
                <View style={styles.view1Style}>
                    <Text>正在加载...</Text>
                </View>
            )
        }

        return(
            <View style={styles.view2Style}>
                <NearBar option={option}></NearBar>

                <ScrollableTabView
                    tabBarBackgroundColor='#F5FCFF'
                    tabBarActiveTextColor='#FF4645'
                    tabBarInactiveTextColor='gray'
                    tabBarUnderlineStyle={{backgroundColor:'#FF4645',height:1}}

                >
                    <Food tabLabel='享美食' itemBean={this.state.foodItem}>享美食</Food>

                    <Food tabLabel='住酒店' itemBean={this.state.hotelItem}>住酒店</Food>
                    <Food tabLabel='爱玩' itemBean={this.state.playItem}>爱玩</Food>
                    <Food tabLabel='全部' itemBean={this.state.allItem}>全部</Food>
                </ScrollableTabView>

            </View>
        )
    }

    /***网络请求*/
    componentDidMount() {

        /***发起一个网络请求*/
        fetch(this.props.url,{
            method:'GET'
        })
            .then( (response)=> response.json() )
            .then( (responseJson)=>{
                console.log("responseJson="+responseJson);

                    this.setState({
                        foodItem:responseJson.foodItem,
                        hotelItem:responseJson.hotelItem,
                        playItem:responseJson.playItem,
                        allItem:responseJson.allItem,
                        responseJson:responseJson,
                    })

            } )
            .catch( (error)=>{
                alert(error);
            } )



    }
}

//创建样式
const styles=StyleSheet.create({

    view1Style:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    view2Style:{
        backgroundColor:'#F5FCFF',
        flex:1
    }
})
