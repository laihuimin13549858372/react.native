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
    Platform,

} from 'react-native';

import  HomePage from '../Home/HomePage';
import  NearPage from '../Near/NearPage';
import  ShopPage from '../Shop/ShopPage';
import  OrderPage from '../Order/OrderPage';
import  MinePage from '../Mine/MinePage';

import  TabNavigator from 'react-native-tab-navigator';

//jsx:自定义一个组件
export  default class MainPage extends Component{

    constructor(props){
        super(props)
        this.state={
            selected:'首页'
        }
    }

    render(){
        return(
            <TabNavigator
                tabBarStyle={styles.tabBarStyle}
            >
                {/*item1*/}
                <TabNavigator.Item
                    title='首页'
                    renderIcon={ ()=> <Image style={styles.imageStyle}
                                source={{uri:'ic_vector_home_normal'}}></Image> }

                    renderSelectedIcon={ ()=> <Image style={styles.imageStyle}
                                source={{uri:'ic_vector_home_pressed'}}></Image> }
                    selectedTitleStyle={{color:'gray'}}

                    selected={this.state.selected=='首页'}
                    onPress={ ()=> this.setState({
                        selected:'首页'
                    }) }
                >
                    {/*内容部分*/}
                    {/*将MainPage中的propss属性里的所有的值都传递给HomePage,例如:navigator*/}
                    <HomePage {...this.props}></HomePage>

                </TabNavigator.Item>

                {/*item2*/}
                <TabNavigator.Item
                    title='附近'
                    renderIcon={ ()=> <Image style={styles.imageStyle}
                                source={{uri:'ic_vector_nearby_normal'}}></Image> }

                    renderSelectedIcon={ ()=> <Image style={styles.imageStyle}
                                source={{uri:'ic_vector_nearby_pressed'}}></Image> }
                    selectedTitleStyle={{color:'gray'}}

                    selected={this.state.selected=='附近'}
                    onPress={ ()=> this.setState({
                        selected:'附近'
                    }) }

                >
                    <NearPage {...this.props}></NearPage>
                </TabNavigator.Item>

                {/*item3*/}
                <TabNavigator.Item
                    title='逛一逛'
                    renderIcon={ ()=> <Image style={styles.imageStyle}
                                source={{uri:'ic_vector_discover_normal'}}></Image> }

                    renderSelectedIcon={ ()=> <Image style={styles.imageStyle}
                                source={{uri:'ic_vector_discover_pressed'}}></Image> }
                    selectedTitleStyle={{color:'gray'}}

                    selected={this.state.selected=='逛一逛'}
                    onPress={ ()=> this.setState({
                        selected:'逛一逛'
                    }) }


                >
                    <ShopPage {...this.props}></ShopPage>
                </TabNavigator.Item>

                {/*item4*/}
                <TabNavigator.Item
                    title='订单'
                    renderIcon={ ()=> <Image style={styles.imageStyle}
                                source={{uri:'ic_vector_order_normal'}}></Image> }
                    renderSelectedIcon={ ()=> <Image style={styles.imageStyle}
                                source={{uri:'ic_vector_order_pressed'}}></Image> }
                    selectedTitleStyle={{color:'gray'}}

                    selected={this.state.selected=='订单'}
                    onPress={ ()=> this.setState({
                        selected:'订单'
                    }) }

                >
                    <OrderPage {...this.props}></OrderPage>
                </TabNavigator.Item>

                {/*item5*/}
                <TabNavigator.Item
                    title='我的'
                    renderIcon={ ()=> <Image style={styles.imageStyle}
                                source={{uri:'ic_vector_mine_normal'}}></Image> }

                    renderSelectedIcon={ ()=> <Image style={styles.imageStyle}
                                source={{uri:'ic_vector_mine_pressed'}}></Image> }
                    selectedTitleStyle={{color:'gray'}}


                    selected={this.state.selected=='我的'}
                    onPress={ ()=> this.setState({
                        selected:'我的'
                    }) }

                >
                    {/*将MainPage中的props属性里的所有的值都传递给MinePage,例如:navigator*/}
                    <MinePage {...this.props}></MinePage>
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}

//创建样式

const styles=StyleSheet.create({

    tabBarStyle:{
        height:50,
    },
    imageStyle:{
        width:Platform.OS=='ios'?30:25,
        height:Platform.OS=='ios'?30:25,
    }
})
