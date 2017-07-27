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

export  default  class  MineBar extends  Component{


    render(){
        return(
            <View style={styles.topBarStyle}>

                {/*<View style={styles.viewStyle}>
                    <Image style={styles.imageStyle}  source={{uri:'mine_clothes'}}  ></Image>
                </View>

                <View style={styles.viewStyle}>
                    <Image style={styles.imageStyle}  source={{uri:'mine_setting'}}  ></Image>
                </View>

                <View style={styles.viewStyle}>
                    <Image style={styles.imageStyle}  source={{uri:'mine_setting'}}  ></Image>
                </View>*/}
                {this.renderItems()}

            </View>
        )
    }

    /**
     * 渲染Items
     */
    renderItems(){
        var Icons=this.props.icons;
        // alert(Icons.length);
        //1.定义一个组件数组
        var Items=[];

        for(var i=0;i<Icons.length;i++){
            //2.拿到每一张图片信息
            var img=Icons[i];
            //3.给组件数组添加组件
            if(img.hasMsg){
                Items.push(
                    <View  key={i} style={styles.viewStyle}>
                        <Image style={styles.imageStyle}  source={{uri:img.icon}}  ></Image>
                        <Text style={styles.textStyle}>{img.msgNumber}</Text>
                    </View>
                )
            }else{
                Items.push(
                    <View  key={i} style={styles.viewStyle}>
                        <Image style={styles.imageStyle}  source={{uri:img.icon}}  ></Image>
                    </View>
                )
            }
        }

        return Items;


    }
}

const  styles=StyleSheet.create({

    topBarStyle:{
        height:40,
        backgroundColor:'#06C1AE',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    imageStyle:{
        width:22,
        height:22
    },
    viewStyle:{
        marginRight:8,
        height:28,
        justifyContent:'center'

    },
    textStyle:{
        width:11,
        height:11,
        borderRadius:6,
        backgroundColor:'red',
        fontSize:9,
        textAlign:'center',

        /*定位*/
        position:'absolute',
        top:0,
        right:0,
        color:'white'

    },


})
