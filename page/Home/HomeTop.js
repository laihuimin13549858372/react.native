/**
 * Created by Administrator on 2017/7/21.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import Screen from  '../../utils/Screen';

var cls=5;
var imageWidth=50;
var marginLeft=(Screen.x-imageWidth*cls) / (cls+1);

class HomeTop extends Component{

    state={
        currentPage:0,

    }

    render(){
        return(
            <View>
                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                onMomentumScrollEnd={  (e)=>this.pageEnd(e) }
                >
                    {/*第一页*/}
                    <View style={styles.viewPageStyle}>
                        {this.renderItems(1)}
                    </View>

                    {/*第二页*/}
                    <View style={styles.viewPageStyle}>
                        {this.renderItems(2)}
                    </View>

                </ScrollView>

                {/*指示器*/}
                <View style={styles.viewCirleStyle}>
                    {this.renderCirles(2)}
                </View>

            </View>
        )
    }

    /***
     * 渲染多个ITems
     */
    renderItems(pageNumber){

        var categorys=this.props.categorys;
        //判断数据是否为空
        if(categorys.length<=0)
            return;
        var numbers=categorys.length;//20
        var Items=[];
        //如果是第一页:0-9
        if(pageNumber==1){
            for(var i=0;i<numbers/2;i++){
                var img=categorys[i];
                Items.push(
                    this.renderPage(i,img)
                )
            }
        //如果是第二页:10-19
        }else{
            for(var i=10;i<numbers;i++){
                var img=categorys[i];
                Items.push(
                    this.renderPage(i,img)
                )
            }
        }
        return Items;
    }

    /***
     * 渲染每一页
     */
    renderPage(i,img){

        return(
            <TouchableOpacity key={i} style={styles.outViewStyle} activeOpacity={0.8} onPress={ ()=> this.OnClickIcon(img)}>
                <Image style={styles.imageStyle}
                       source={{uri:img.icon}}></Image>
                <Text>{img.title}</Text>
            </TouchableOpacity>
        )
    }

    /***
     * 处理点击事件
     * @param img
     * @constructor
     */
    OnClickIcon(img){
        alert(img.title);
    }

    /***
     * 渲染指示器
     */
    renderCirles(number){
        //1.定义一个组件数组
        var Cirles=[];
        for(var i=0;i<number;i++){
            //算出背景颜色
            var bgColor=this.state.currentPage==i?'#06C1AE':'#dddddd';
            //2.给组件数组装组件
            Cirles.push(
                <Text key={i} style={[styles.textCirleStyle,{backgroundColor:bgColor}]}></Text>
            )
        }
        //3.返回组件数组
        return Cirles;
    }

    /**
     * 当页面滑动结束后回调
     */
    pageEnd(even) {
        // alert('even');
        //scrollView X 轴向左边的一个偏移量
        var currentX = even.nativeEvent.contentOffset.x;
        var page = currentX / Screen.x;
        // alert(page);
        this.setState({
            currentPage:page,
        })


    }
}

const styles=StyleSheet.create({

    viewPageStyle:{
        width:Screen.x,
        height:160,
        backgroundColor:'white',
        flexDirection:'row',
        flexWrap:'wrap'

    },
    outViewStyle:{
        width:imageWidth,
        height:70,
        marginLeft:marginLeft,
        marginTop:8,
        alignItems:'center'
    },
    imageStyle:{
        width:imageWidth,
        height:imageWidth,
        borderRadius:40,
    },
    viewCirleStyle:{
        height:20,
        width:Screen.x,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'

    },
    textCirleStyle:{
        width:8,
        height:8,
        marginLeft:5,
        borderRadius:5

    }

})

export  default HomeTop;
