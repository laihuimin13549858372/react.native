/**
 * Created by Administrator on 2017/7/21.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

export  default  class HomeCenter extends Component{

    /**
     * 定义一个变量
     * @type {{items: Array}}
     */
    static defaultProps={
        items:[]
    }


    /***
     * 渲染界面
     */
    render(){
        return(
            <View style={styles.viewStyle}>
                {this.renderItems()}
            </View>
        )
    }

    /***
     * 渲染多个Items
     */
    renderItems(){
        var items=this.props.items;
        if(items.length<=0)
            return;
        //如果items不为空
        //1.定义组件数组
        var Items=[];
        for(var i=0;i<items.length;i++){
            //2.拿到每一个item的数据
            var item=items[i];

            //计算边界的颜色
            var borderRightColor= i==(items.length-1)?'white':'#dddddd'
            //3.给组件数组添加组件
            Items.push(
                this.renderItem(item,i,borderRightColor)
            )
        }
        //4.返回组件数组
        return Items;
    }

    /***
     * 处理点击事件
     */
    onClickItem(item){
        alert(item.title);
    }

    /***
     * 渲染每一个Item
     * @param item
     * @param i
     * @param borderRightColor
     * @returns {XML}
     */
    renderItem(item,i,borderRightColor){
        return(
            <TouchableOpacity key={i}
                              style={[styles.outViewStyle, {borderRightWidth:1,borderRightColor:borderRightColor} ]}
                              activeOpacity={0.7}
                              onPress={ () =>this.onClickItem(item)}
            >
                <Text style={styles.titltTextStyle}>{item.title}</Text>
                <Text style={[styles.descriptionStyle,{color:item.deccrptionColor} ]}>{item.descrption}</Text>
                <Image style={styles.imageStyle}
                       source={{uri:item.imageUrl}}></Image>

            </TouchableOpacity>
        )
    }




}

const styles=StyleSheet.create({

    viewStyle:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#dddddd'
    },
    outViewStyle:{
        flex:1,
        flexDirection:'column',
        alignItems:'center'
    },
    imageStyle:{
        width:50,
        height:50,
        borderRadius:30,
        marginBottom:10,
        marginTop:6
    },
    titltTextStyle:{
        marginTop:6,
        fontSize:15,
    },
    descriptionStyle:{
        fontSize:12,
    }


})