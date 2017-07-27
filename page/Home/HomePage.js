/**
 * Created by Administrator on 2017/7/20.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

import  TopBar from '../../components/TopBar';
import  HomeTop from './HomeTop';
import  HomeCenter from './HomeCenter';
import  DividingLine from  '../../components/DividingLine';
import  HomeBottom from  './HomeBottom';

//jsx:自定义一个组件
export  default class HomePage extends Component{

    /***
     * 定义属性,这些属性只有get方法,没有set方法
     * @type {{url: string}}
     */
    static  defaultProps={
        url:'http://47.93.30.78:8080/MeiTuan/home',
    }

    /***
     * 定义一个状态机
     * @type {{}}
     */
    state={
        categorys:[],
        thridItems:[],
        fourItems:[],
        goods:[]
    }

    render(){
        return(
            <View style={styles.viewStyle}>
                <TopBar></TopBar>
                <ScrollView >
                    {/*顶部分类*/}
                    <HomeTop categorys={this.state.categorys}></HomeTop>
                    {/*分界线*/}
                    <DividingLine></DividingLine>
                    {/*中间内容*/}
                    <HomeCenter items={this.state.thridItems}></HomeCenter>
                    {/*中间内容*/}
                    <HomeCenter items={this.state.fourItems}></HomeCenter>
                    {/*分界线*/}
                    <DividingLine></DividingLine>

                    {/*猜你喜欢*/}
                    <Text style={styles.textStyle}>-猜你喜欢-</Text>

                    {/*商品列表*/}
                    <HomeBottom goods={this.state.goods}></HomeBottom>

                </ScrollView>


            </View>
        )
    }

    /***
     * 界面渲染完毕之后调用
     */
    componentDidMount() {
        //请求网络
        fetch(this.props.url)
            .then( (response)=> response.json()  )
            .then( (responseJson) =>{
                //请求网络成功
                // console.log(responseJson);
                this.setState({
                    categorys:responseJson.categorys,
                    thridItems:responseJson.thridItems,
                    fourItems:responseJson.fourItems,
                    goods:responseJson.goods
                })
            } )
            .catch( (error)=>{
                //请求失败
                alert('服务器异常'+error)
            })
    }
}

//创建样式
const styles=StyleSheet.create({

    viewStyle:{
        backgroundColor:'#F5FCFF',
        flex:1
    },
    textStyle:{
        fontSize:13,
        marginTop:6,
        marginBottom:6,
        textAlign:'center',
    }
})
