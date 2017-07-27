/**
 * Created by Administrator on 2017/7/24.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export  default class NearItem extends Component{

    static defaultProps={
        rowDate:{},
    }

    render(){


        return(
            <View style={styles.outViewStyle}>
                {/*左边*/}

                <View style={styles.view1Style}>
                    <Image style={styles.imageStyle} source={{uri:this.props.rowDate.icon}}></Image>
                </View>

                {/*右边*/}
                <View style={styles.view2Style}>
                    {/*上*/}
                    <View style={styles.viewTopStyle}>

                        {/*左边*/}
                        <View style={styles.viewTitleStyle}>
                            <Text numberOfLines={1}>{this.props.rowDate.storeName}</Text>

                            {this.renderTags(this.props.rowDate.tagIcons)}

                        </View>
                        {/*右边*/}
                        <View>
                            <Text>{this.props.rowDate.distance}</Text>
                        </View>
                    </View>


                    {/*中*/}
                    <View style={styles.viewCenterStyle}>
                        <Image style={{width:60,height:12,marginRight:5,resizeMode:'contain'}}
                               source={{uri:this.props.rowDate.starIcon}}></Image>
                        <Text style={styles.textDescrptionStyle}>人均价:¥{this.props.rowDate.price}</Text>
                    </View>

                    {/*下*/}
                    <View style={styles.viewBottonStyle}>
                        <Text style={styles.textDescrptionStyle}>{this.props.rowDate.descrption}</Text>
                    </View>
                </View>

            </View>
        )
    }

    /**
     * 渲染多个Tag
     * @param tagIcons
     * @returns {Array}
     */
    renderTags(tagIcons){
        if(tagIcons.length<=0)
            return;
        // console.log("tagIcons="+tagIcons.length);

        //1.定义一个组件数组
        var Tags=[];
        for(var i=0;i<tagIcons.length;i++){
            var imgUrl=tagIcons[i];
            //2.添加组件数组
            Tags.push(
                <Image key={i} style={{width:13,height:13,marginRight:3,resizeMode:'contain'}}
                       source={{uri:imgUrl}}></Image>
            )
        }

        //3返回组件数组
        return Tags;

    }

}

const  styles=StyleSheet.create({


    outViewStyle:{
        height:100,
        backgroundColor:'#F5FCFF',
        borderBottomWidth:1,
        borderBottomColor:'#dddddd',
        flexDirection:'row'

    },
    view1Style:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:6
    },
    imageStyle:{
        width:90,
        height:90,

    },
    view2Style:{
        flex:2,

    },
    viewTopStyle:{
        flex:1,

        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'

    },
    viewTitleStyle:{
        maxWidth:110,
        flexDirection:'row',
        alignItems:'center'


    },
    viewCenterStyle:{
        flex:1,

        flexDirection:'row',
        alignItems:'center'
    },
    textDescrptionStyle:{
        fontSize:12,
        color:'#9F9F9F',

    },
    viewBottonStyle:{
        flex:1,

        alignItems:'center',
        flexDirection:'row'

    }

})