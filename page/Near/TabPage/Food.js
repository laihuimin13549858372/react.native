/**
 * Created by Administrator on 2017/7/24.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
    Alert,
} from 'react-native';

import NearItem from '../NearItem';
import Screen from  '../../../utils/Screen';

var cls=4;
var viewWidth=70;
var viewMaringTop=10;
var viewMarginLeft=(Screen.x - viewWidth*cls) / (cls+1);

export  default class Food extends  Component{

    static  defaultProps={
        url:'http://47.93.30.78:8080/MeiTuan/near'
    }

    constructor(props){
        super(props)
        //1.创建数据源
        var ds=new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2});

        /***状态机*/
        this.state= {
            dataSource:ds,
            headerSelectedIndex:0,
            itemBean:this.props.itemBean,
        }

    }

    render(){

        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={ (rowDate)=> this.renderItem(rowDate) }

                renderHeader={ ()=> this.renderHeaderItem(this.state.itemBean.topLables)}
            >

            </ListView>
        )
    }

    componentDidMount() {
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(this.state.itemBean.nearbeans),
        })
    }

    /***
     * 渲染头部的Item
     * @param topLables
     */
    renderHeaderItem(topLables){
        if(topLables==null)
            return;

        return (
            <View style={styles.viewHeaderStyle}>
                {this.renderHeaderTags(topLables)}
            </View>
        )

    }

    renderHeaderTags(topLables){

        //1.定义一个组件数组
        var headerTags=[];
        for(var i=0;i<topLables.length;i++){
            var str=topLables[i];

            headerTags.push(
                this.renderTag(str,i)
            )

        }
        return headerTags;
    }


    renderTag(str,i){

        var bgColor=this.state.headerSelectedIndex==i?'#FF4644':'white'
        var textColor=this.state.headerSelectedIndex==i?'white':'gray';

        return (
            <TouchableOpacity key={i} style={[styles.viewHeaderTagStyle,{backgroundColor:bgColor}]}
                              activeOpacity={0.7}
                              onPress={ ()=>this.onTagClick(str,i) }
            >
                <Text style={[styles.textTagStyle,{color:textColor}]}>{str}</Text>
            </TouchableOpacity>
        )
    }


    /**
     * 处理点击事件
     * @param str
     * @param i
     */
    onTagClick(str,i){
        // alert(str+i);
        this.setState({
            headerSelectedIndex:i,
        })

        /***发起一个网络请求*/
        fetch(this.props.url,{
            method:'GET'
        })
            .then( (response)=> response.json() )
            .then( (responseJson)=>{
                console.log("responseJson="+responseJson);

                this.setState({
                    itemBean:responseJson.hotelItem,
                    dataSource:this.state.dataSource.cloneWithRows(responseJson.hotelItem.nearbeans),
                })

            } )
            .catch( (error)=>{
                alert(error);
            } )

    }

    /**
     * 渲染每一个Item
     */
    renderItem(rowDate){

        return (
            <TouchableOpacity activeOpacity={0.7} onPress={ ()=> this.onItemClick(rowDate)}>
                <NearItem rowDate={rowDate}></NearItem>
            </TouchableOpacity>

        )

    }


    /***
     * 处理item的点击事件
     */
    onItemClick(rowDate){
        // alert(rowDate.storeName);
        Alert.alert(
            'Alert Title',
            rowDate.storeName,
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ]
        )


    }


}

const  styles=StyleSheet.create({

    viewHeaderStyle:{
        height:70,
        backgroundColor:'#dddddd',
        flexDirection:'row',
        flexWrap:'wrap'

    },

    viewHeaderTagStyle:{
        width:viewWidth,
        height:20,
        borderRadius:10,
        marginLeft:viewMarginLeft,
        marginTop:viewMaringTop,
    },
    textTagStyle:{
        fontSize:12,
        textAlign:'center',
        width:viewWidth,
        paddingTop:1

    }

})