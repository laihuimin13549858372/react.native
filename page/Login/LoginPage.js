/**
 * Created by Administrator on 2017/7/20.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    BackAndroid,
    Platform,
    Image,
    TextInput,
    TouchableOpacity

} from 'react-native';

import  Screen from '../../utils/Screen';
import  OrderBar from '../../components/OrderBar';







var option={
    leftName:'登录',
    hasArrow:true
}
//jsx:自定义一个组件
export  default class LoginPage extends Component{

    constructor(props){
        super(props)
    }

    /***
     * 状态机
     * @type {{}}
     */
    state={
        userName:'',
        passWord:''
    }

    render(){
        return(
            <View style={styles.viewStyle}>
                {/*bar*/}
                <OrderBar option={option} navigator={this.props.navigator}></OrderBar>

                {/*登录界面的内容*/}
                <View style={styles.container}>
                    {/*logo*/}
                    <Image source={require('../../image/header_icon.png')}
                           style={styles.ImageStyle}></Image>
                    {/*输入用户名和密码*/}
                    <View style={{marginTop:20}}>
                        <TextInput
                            underlineColorAndroid={'transparent'}
                            placeholder='输入用户名'
                            style={styles.text1Input}
                            onChangeText={ (username)=>this.setState({
                                userName:username
                            }) }
                        >
                        </TextInput>
                        <TextInput
                            underlineColorAndroid={'transparent'}
                            placeholder='输入密码'
                            secureTextEntry={true}
                            style={styles.text1Input}
                            onChangeText={ (password)=>this.setState({
                                passWord:password
                            }) }
                        >
                        </TextInput>
                    </View>

                    {/*登录按钮*/}
                    <TouchableOpacity activeOpacity={0.7} onPress={ ()=>this.loginIn() }>
                        <Text style={styles.loginStyle}>登录</Text>
                    </TouchableOpacity>

                    {/*设计*/}
                    <View style={styles.viewSettingStyle}>
                        <Text style={styles.textOutLogin} >无法登录</Text>
                        <Text style={[styles.textOutLogin,{textAlign:'right'}]} >新用户</Text>
                    </View>

                    {/*其它登录方式*/}
                    <View style={styles.viewOtherStyle}>
                        <Text>其他登录方式</Text>
                        <Image source={require('../../image/share_ic_base_share_qq.png')}
                               style={styles.loginImage}></Image>
                        <Image source={require('../../image/share_ic_base_share_sina_weibo.png')}
                               style={styles.loginImage}></Image>
                        <Image source={require('../../image/share_ic_base_share_weixin.png')}
                               style={styles.loginImage}></Image>
                    </View>
                </View>

            </View>
        )
    }


    /**
     * 登录
     */
    loginIn(){
        // alert( this.state.userName+'  '+this.state.passWord);

        var username=this.state.userName;
        var passworld=this.state.passWord;
        //如果用户名和密码不为空,进行网络请求:username=xiaomage&password=123456
        if(username!=''&& passworld!=''){
            fetch('http://47.93.30.78:8080/MeiTuan/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'username='+username+'&password='+passworld,
            })
                .then( (response)=> response.json())
                .then( (responseJson)=>{
                    // console.log(responseJson);
                    if(responseJson.state==200){
                        //判断上一个界面是否传递getUser这个函数
                        if(this.props.getUser){
                            //调用getUser这个函数
                            this.props.getUser(responseJson);
                        }

                        //如果登录成功,返回上一个界面
                        this.props.navigator.pop();

                    }else{
                        alert(responseJson.result);
                    }

                    this.showToast();
                } )

        }else{
            //提示用户,请输入用户名和密码
            alert('请输入用户名和密码');
        }



    }

    /***
     * 显示Toast
     */
    showToast(){
        // let toast = Toast.show('This is a message', {
        //     duration: Toast.durations.LONG,
        //     position: Toast.positions.BOTTOM,
        //     shadow: true,
        //     animation: true,
        //     hideOnPress: true,
        //     delay: 0,
        // });
    }


    /***
     * 界面渲染完毕之后调用
     */
    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    /**
     * 实现界面返回
     * @returns {boolean}
     */
    onBackAndroid =  () =>  {
        const navigator  = this.props.navigator;
        const routers = navigator.getCurrentRoutes();
        console.log('当前路由长度：'+routers.length);

        if (routers.length > 1) {
            navigator.pop();
            return true;//接管默认行为
        }
        return false;//默认行为
    };

}

//创建样式
const styles=StyleSheet.create({

    viewStyle:{
        backgroundColor:'#dddddd',
        flex:1
    },


    container: {
        flex:1,
        flexDirection:'column',
        alignItems: 'center'
    },
    ImageStyle: {
        width: 90,
        height: 90,
        marginTop:40,
        borderRadius:50,
    },
    text1Input: {
        borderWidth: 0,
        borderColor: 'gray',
        width: Screen.x - 20,
        height: 30,
        padding: 0,
        marginTop: 10,
        paddingLeft: 10,
        backgroundColor: 'white',
        borderRadius:6,
    },
    loginStyle: {
        width: Screen.x  - 20,
        height: 30,
        borderWidth: 0,
        backgroundColor: '#49A0F8',
        marginTop:20,
        borderRadius:5,
        color:'white',
        fontSize:14,
        textAlign:'center',
        paddingTop:6,
    },
    viewSettingStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
        width:Screen.x -20
    },
    textOutLogin:{
        color:'#49A0F8',
        flex:1,
    },
    viewOtherStyle:{
        width:Screen.x -20,
        height:40,
        position:'relative',
        top:100,

        //主轴方向为水平
        flexDirection:'row',
        //它里面的内容垂直居中
        alignItems:'center'
    },
    loginImage: {
        width: 35,
        height: 35,
        marginLeft: 8,
    },
})
