/**
 * Created by Administrator on 2017/7/20.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    InteractionManager
} from 'react-native';

import  MineBar from '../../components/MineBar';
import  DividingLine from  '../../components/DividingLine';
import  DividingSmallLine from  '../../components/DividingSmallLine';
import  MineItemView from  './MineItemView';
import  LoginPage from '../Login/LoginPage';

var MinePageBean =require('../../date/MineBean1.json');

var Icons=[
    {icon:"mine_clothes",hasMsg:true,msgNumber:'0'},
    {icon:"mine_setting",hasMsg:true,msgNumber:'2'},
    {icon:"mine_alarm",hasMsg:true,msgNumber:'0'}
]

var _this;

//jsx:自定义一个组件
export  default class MinePage extends Component{

    constructor(props){
        super(props)
        /***
         *
         * 状态机
         * @type {{Icons: [*], headerItem, items}}
         */
        this.state={
            Icons:Icons,
            headerItem:MinePageBean.headerItem,
            items:MinePageBean.items,
            userId:''
        }

        _this=this;
    }


    render(){
        return(
            <View style={styles.viewStyle}>
                <MineBar icons={this.state.Icons}></MineBar>
                {/*headerItem*/}
                {this.renderHeaderItem()}

                {/*渲染多个Items*/}
                {this.renderItems()}

            </View>
        )
    }

    /**
     * 渲染多个Items
     */
    renderItems(){
        var TIEMS=this.state.items;
        // alert(TIEMS.length);
        //1.定义一个组件数据
        var Items=[];
        //循环3遍
        for(var i=0;i<TIEMS.length;i++){
            Items.push(
                <View key={i}>
                     <DividingLine></DividingLine>
                </View>
            )
            //每一个ITEM
            var ITEM=TIEMS[i];
            for(var j=0;j<ITEM.length;j++){
                var item=ITEM[j];

                //如果是最后一个item
                if(j==ITEM.length-1){

                    Items.push(
                        <View key={i+""+j}>
                            <MineItemView option={item}></MineItemView>
                        </View>
                    )

                }else{
                    Items.push(
                        <View key={i+""+j}>
                            <MineItemView option={item}></MineItemView>
                            <DividingSmallLine/>
                        </View>
                    )
                }

            }

        }

        Items.push(
            <View key={1000}>
                <DividingLine></DividingLine>
            </View>
        )

        //返回组件数组
        return Items;
    }

    /***
     * 渲染头部
     */
    renderHeaderItem(){
        return (
            <TouchableOpacity style={styles.headerViewStyle} activeOpacity={0.7}
                              onPress={ ()=>this.goToLogin() }>
                {/*左边*/}
                <View >
                    <Image style={styles.headerImageStyle}
                           source={{uri:this.state.headerItem.headerImage}}></Image>
                </View>

                {/*右边*/}
                <View>
                    {/*上*/}
                    <View style={styles.view1Style}>
                        <Text style={{fontSize:16,color:'white'}}>{this.state.headerItem.userName}</Text>
                        <Image style={styles.levelImageStyle}
                               source={{uri:this.state.headerItem.leveImage}}></Image>
                    </View>

                    {/*下*/}
                    <View style={styles.view2Style}>
                        <Text style={{fontSize:12,color:'white'}}>{this.state.headerItem.descrption}</Text>
                        <Image style={{width:6,height:10,marginLeft:5}}
                               source={{uri:'order_ic_vector_my_orders'}}></Image>
                    </View>
                </View>

            </TouchableOpacity>
        )
    }

    /***
     * 跳转到登录界面
     */
    goToLogin(){

        if(this.state.userId==''){
            //登录该界面的动画结束之后进行界面跳转
            InteractionManager.runAfterInteractions(()=>{
                //界面跳转
                this.props.navigator.push({
                    component:LoginPage,
                    title:'LoginPage',
                    params:{
                        id:'12',
                        getUser(user){
                            //获取上一个界面返回的数据,回调
                            //  console.log('user='+user);
                            _this.setState({
                                Icons:user.topBar,
                                headerItem:user.headerItem,
                                items:user.items,
                                userId:user.id
                            })
                        },
                    }
                })

            })
        }

    }

}

//创建样式
const styles=StyleSheet.create({

    viewStyle:{
        backgroundColor:'#F5FCFF',
        flex:1
    },
    headerViewStyle:{
        height:60,
        backgroundColor:'#06C1AE',
        flexDirection:'row',
        alignItems:'center'
    },
    headerImageStyle:{
        width:45,
        height:45,
        marginLeft:10,
        marginRight:10
    },
    view1Style:{
        flexDirection:'row',
        alignItems:'center'
    },
    levelImageStyle:{
        width:16,
        height:16
    },
    view2Style:{
        flexDirection:'row',
        alignItems:'center'
    }
})

