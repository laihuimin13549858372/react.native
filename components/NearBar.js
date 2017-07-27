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

export  default  class  NearBar extends  Component{

    // var option={
    //     leftName:'大地工业',
    //     placeHolderName:'找附近 商圈'
    // }

    render(){
        return(
            <View style={styles.topBarStyle}>
                {/*左*/}
                <TouchableOpacity style={styles.view1Style} activeOpacity={0.5}>
                    <Text style={styles.textLeftStyle}>{this.props.option.leftName}</Text>
                    <Image style={styles.imageStyle}
                           source={require('../image/trip_train_arrow.png')}></Image>
                </TouchableOpacity>

                {/*中*/}
                <View style={styles.view2Style}>
                    <TextInput
                        style={styles.textInputStyle}
                        underlineColorAndroid={'transparent'}
                        placeholder={this.props.option.placeHolderName}
                    >

                    </TextInput>
                    <Image style={styles.searchImageStyle} source={require('../image/search.png')}></Image>
                </View>


            </View>
        )
    }
}

const  styles=StyleSheet.create({

    topBarStyle:{
        height:40,
        backgroundColor:'#06C1AE',
        flexDirection:'row',
        alignItems:'center'

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

    view2Style:{
        flex:1,
        backgroundColor:'white',
        borderRadius:15,
        height:28,
        marginLeft:10,
        marginRight:20

    },
    searchImageStyle:{
        width:18,
        height:18,

        /*定位*/
        position:'absolute',
        top:5,
        left:8,



    },
    textInputStyle:{
        paddingTop:0,
        paddingBottom:0,
        paddingLeft:30,
        color:'gray',
        fontSize:11,


    },


})
