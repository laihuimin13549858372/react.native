/**
 * Created by Administrator on 2017/7/24.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export  default class Play extends Component{

    render(){
        return(
            <View style={styles.viewStyle}>
                <Text>Play</Text>
            </View>
        )
    }
}

const  styles=StyleSheet.create({
    viewStyle:{
        flex:1,
        backgroundColor:'green'
    }
})