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

export  default  class  TopBar extends  Component{

    render(){
        return(
            <View style={styles.topBarStyle}>
                {/*左*/}
                <TouchableOpacity style={styles.view1Style} activeOpacity={0.5}>
                    <Text style={styles.textLeftStyle}>广州</Text>
                    <Image style={styles.imageStyle}
                           source={require('../image/trip_train_arrow.png')}></Image>
                </TouchableOpacity>

                {/*中*/}
                <View style={styles.view2Style}>
                    <TextInput
                        style={styles.textInputStyle}
                        underlineColorAndroid={'transparent'}
                        placeholder={'糕点 商圈'}
                    >

                    </TextInput>
                    <Image style={styles.searchImageStyle} source={require('../image/search.png')}></Image>
                </View>

                {/*右*/}
                <View style={styles.view3Style}>
                    <Image style={styles.imageScanStyle}
                           source={require('../image/scan.png')}></Image>
                    <Text style={styles.textLeftStyle}>扫码</Text>

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
        flex:1,
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
        flex:3,
        backgroundColor:'white',
        borderRadius:15,
        height:28,

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

    view3Style:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',

    },
    imageScanStyle:{
        width:19,
        height:19,
        marginLeft:5
    }



})
