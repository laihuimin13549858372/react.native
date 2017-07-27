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

export  default  class  DividingLine extends  Component{

    render(){
        return(
            <View style={styles.topBarStyle}>
            </View>
        )
    }
}

const  styles=StyleSheet.create({

    topBarStyle:{
        height:10,
        backgroundColor:'#dddddd',
    },


})
