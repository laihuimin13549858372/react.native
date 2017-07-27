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

export  default class OrderItemView extends Component{

    render(){
        return(
            <View style={styles.outViewStyle}>
                {/*左边*/}
                <View style={styles.view1Style}>

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
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:'#dddddd'
    },
    view1Style:{
        width:150,
        height:35,
        flexDirection:'row',
        alignItems:'center'
    },

    leftTextStyle:{
        fontSize:14,
        color:'#4E4E4E',
        marginLeft:10,
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