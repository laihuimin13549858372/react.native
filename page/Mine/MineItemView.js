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

export  default class MineItemView extends Component{

    render(){
        return(
            <View style={styles.outViewStyle}>
                {/*左边*/}
                <View style={styles.view1Style}>
                    <Image style={styles.leftImageStyle} source={{uri:this.props.option.icon}}></Image>
                    <Text style={styles.leftTextStyle}>{this.props.option.titleLeft}</Text>
                </View>

                {/*右边*/}
                <View style={styles.view2Style}>
                    <Text style={styles.rightTextStyle}>{this.props.option.titleRight}</Text>
                    <Image style={styles.rightImageStyle}
                           source={require('../../image/trip_travel__lion_more_date_icon.png')}></Image>
                </View>
            </View>
        )
    }

}

const  styles=StyleSheet.create({

    outViewStyle:{
        height:35,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    view1Style:{
        width:150,
        height:35,
        flexDirection:'row',
        alignItems:'center'
    },
    leftImageStyle:{
        width:18,
        height:18,
        marginLeft:5

    },
    leftTextStyle:{
        fontSize:14,
        color:'#4E4E4E'
    },


    view2Style:{
        width:150,
        height:35,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    rightImageStyle:{
        width:9,
        height:12,
        marginRight:5,
        marginLeft:5
    },
    rightTextStyle:{
        color:'#9F9F9F',
        fontSize:12
    }
})