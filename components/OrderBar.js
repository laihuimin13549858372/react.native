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
    TextInput
} from 'react-native';

export  default  class  OrderBar extends  Component{

    // var option={
    //     leftName:'登录',
    //     hasArrow:true
    // }


    render(){
        return(
            <TouchableOpacity style={styles.topBarStyle}
                              activeOpacity={0.7} onPress={  () => this.goBack()}>
                {/*箭头*/}
                {this.renderArrow()}

                {/*左*/}
                <View style={styles.view1Style} activeOpacity={0.5}>
                    <Text style={styles.textLeftStyle}>{this.props.option.leftName}</Text>
                </View>


            </TouchableOpacity>
        )
    }

    /***
     * 渲染左边的箭头
     */
    renderArrow(){
        if(this.props.option.hasArrow){
            return(
                <Image style={{width:12,height:17,marginLeft:6}}
                       source={require('../image/trip_flight_ic_home_page_back_bt.png')}></Image>
            )
        }
    }

    goBack(){
        this.props.navigator.pop();
    }
}

const  styles=StyleSheet.create({

    topBarStyle:{
        height:40,
        backgroundColor:'#06C1AE',
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#dddddd'

    },

    view1Style:{

        flexDirection:'row',
        alignItems:'center'
    },

    imageStyle:{
        width:13,
        height:8,

    },
    textLeftStyle:{
        color:'white',
        marginLeft:6,
        marginRight:6
    },



})
