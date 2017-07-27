/**
 * Created by Administrator on 2017/7/20.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    RefreshControl
} from 'react-native';

import  OrderBar from  '../../components/OrderBar';
var option={
    leftName:'订单'
}

import OrderItemView from './OrderItemView';

var items=[
    {titleLeft:'我的订单', titleRight:'全部订单'},
    {titleLeft:'最近浏览', titleRight:'查看全部'},
]

var orderPageBean=require('../../date/OrderPageBean.json');

import OrderItemBar from './OrderItemBar';
import  NearItem from '../Near/NearItem';

//jsx:自定义一个组件
export  default class OrderPage extends Component{


    static defaultProps={
        url:'http://47.93.30.78:8080/MeiTuan/order'
    }

   constructor(props){

        super(props)
       /***
        * 状态机
        * @type {{orderPage}}
        */
       this.state={
           orderPage:orderPageBean,
           isRefreshing: false,
       }

       _this=this;

   }

    onRefresh(){
        //正在下拉刷新
        _this.setState({isRefreshing: true});

        //请求网络
        fetch('http://47.93.30.78:8080/MeiTuan/order')
            .then( (response)=>response.json() )
            .then( (responseJson)=>{
                //如果请求网络成功,
                //停止下拉刷新
                _this.setState({
                    isRefreshing: false,
                    orderPage:responseJson
                });
                // alert("网络成功")

            })

    }

    render(){
        return(
            <View style={styles.viewStyle}>
                <OrderBar option={option} ></OrderBar>

                <ScrollView

                    refreshControl={
                          <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this.onRefresh}

                            tintColor="#ff0000"
                            title="Loading..."
                            titleColor="#00ff00"

                            colors={['red']}
                            progressBackgroundColor="white"
                          />
                    }
                >


                    {/*我的订单*/}
                    <OrderItemView option={items[0]}></OrderItemView>
                    {/* 代付款,待使用,待评价,退款/稍后 */}
                    <OrderItemBar orderbars={this.state.orderPage.orderbars}></OrderItemBar>

                    {/*最近订单*/}
                    <Text style={{fontSize:12,backgroundColor:'#dddddd',
                    height:22,paddingTop:3,paddingLeft:10}}>最近订单</Text>

                    {/*最近订单中的列表*/}
                    {this.renderOrderItems(this.state.orderPage.nearOrder)}

                    {/*最近浏览*/}
                    <OrderItemView option={items[1]}></OrderItemView>

                    {/*最近订单中的列表*/}
                    {this.renderOrderItems(this.state.orderPage.nearBeans)}

                </ScrollView>




            </View>
        )
    }

    /**
     * 渲染最近订单
     * @param nearOrders
     * @returns {Array}
     */
    renderOrderItems(nearOrders){

        //1.创建组件数组
        var Items=[];
        for(var i=0;i<nearOrders.length;i++){
            var order=nearOrders[i];
            Items.push(
                <NearItem key={i} rowDate={order}></NearItem>
            )

        }
        return Items;

    }
}

//创建样式
const styles=StyleSheet.create({

    viewStyle:{
        backgroundColor:'#F5FCFF',
        flex:1
    }

})
