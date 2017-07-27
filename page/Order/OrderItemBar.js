/**
 * Created by Administrator on 2017/7/24.
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

export  default  class OrderItemBar extends Component{

    static defaultProps={
        orderbars:null,
    }



    render(){
        // console.log("orderbars="+this.props.orderbars);

        return(
            <View style={styles.viewStyle}>
                {this.renderItems(this.props.orderbars)}
            </View>
        )
    }

    /**
     * 渲染多个Items
     * @param orderbars
     */
    renderItems(orderbars){

        //1.定义一个组件数组
        var Items=[];
        for(var i=0;i<orderbars.length;i++){
            var bar=orderbars[i];

            if(bar.hasMsg){
                Items.push(
                    <View key={i} style={styles.outViewStyle}>
                        <View style={styles.innerViewStyle}>
                            <Image style={{width:30,height:30}} source={{uri:bar.icon}}></Image>
                            <Text>{bar.title}</Text>
                        </View>

                        {/*小圆点*/}
                        <Text style={styles.textCirleStyle}>{bar.msgNumber}</Text>
                    </View>
                )
            }else{
                Items.push(
                    <View key={i} style={styles.outViewStyle}>
                        <View style={styles.innerViewStyle}>
                            <Image style={{width:30,height:30}} source={{uri:bar.icon}}></Image>
                            <Text>{bar.title}</Text>
                        </View>
                    </View>
                )
            }



        }

        return Items;
    }
}

const  styles=StyleSheet.create({

    viewStyle:{
        height:55,
        flexDirection:'row',
        backgroundColor:'#F5FCFF',
        marginBottom:10

    },
    outViewStyle:{
        flex:1,
        alignItems:'center',
        backgroundColor:'white',
        marginTop:5

    },
    innerViewStyle:{

        alignItems:'center',

    },
    textCirleStyle:{
        width:11,
        height:11,
        backgroundColor:'red',
        color:'white',
        fontSize:8,

        /*定位*/
        position:'absolute',
        top:2,
        right:25,

        borderRadius:8,
        textAlign:'center'
    }
})