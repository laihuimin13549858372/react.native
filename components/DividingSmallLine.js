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

export  default  class  DividingSmallLine extends  Component{

    render(){
        return(
            <View style={styles.topBarStyle}>
                <View style={styles.innerView}></View>
            </View>
        )
    }
}

const  styles=StyleSheet.create({

    topBarStyle:{
        height:1,
        backgroundColor:'white',
    },
    innerView:{
        height:1,
        backgroundColor:'#dddddd',
        marginLeft:10
    }


})
