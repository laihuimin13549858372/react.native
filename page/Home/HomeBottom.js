/**
 * Created by Administrator on 2017/7/21.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

export default class HomeBottom extends Component{

    /**
     * 1.定义一下属性,get
     * this.props
     * @type {{}}
     */
    static defaultProps={
        goods:[]
    }

    /***
     * 2.状态机
     * @type {{}}
     */
    // state={
    //
    // }

    constructor(props){
        super(props)
        //1.创建数据源
        var ds=new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2} );
        /*** 2.状态机*/
        this.state={
            dataSource:ds,
        }

    }

    /**
     * 4.界面渲染
     */
    render(){
       console.log(this.props.goods);
       //如果goods等于空
        if(this.props.goods.length<=0)
            return <View/>
        //如果数据不为空,渲染listView

        //1.重新定义状态机
        this.state={
            dataSource:this.state.dataSource.cloneWithRows(this.props.goods),
        }

        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={ (rowDate)=> this.renderItem(rowDate) }
                scrollEnabled={false}
            >

            </ListView>
        )
    }

    /**
     * 渲染每一个Item
     */
    renderItem(itemData){

        return(
            <TouchableOpacity style={styles.viewStyle}
                              activeOpacity={0.7}
                              onPress={ ()=>this.onClickItem(itemData) }>
                {/*左边*/}
                <View style={styles.view1Style}>
                        <Image style={styles.imageStyle}
                                source={{uri:itemData.icon}}></Image>
                </View >

                {/*右边*/}
                <View style={styles.view2Style}>
                    {/*上*/}
                    <View style={styles.viewTopStyle}>
                        <Text>{itemData.storeName}</Text>
                        <Text style={styles.textDecsrptionStyle}>{itemData.distance}</Text>
                    </View>

                    {/*中*/}
                    <View style={styles.viewCenterStyle}>
                        <Text style={styles.textDecsrptionStyle}>{itemData.descrption}</Text>

                    </View>

                    {/*下*/}
                    <View style={styles.viewBottomStyle}>
                        <Text style={styles.textPriceStyle}>¥{itemData.price}</Text>
                        <Text style={styles.textDecsrptionStyle}>门市价:{itemData.marketPrice}</Text>
                        <Text style={styles.textDecsrptionStyle}>销量:{itemData.sales}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    /***
     * 处理点击事件
     * @param itemDate
     */
    onClickItem(itemDate){
        alert(itemDate.storeName)
    }


}

const styles=StyleSheet.create({

    viewStyle:{
        flexDirection:'row',
        height:100,
        borderTopWidth:1,
        borderTopColor:'#dddddd'
    },
    view1Style:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    imageStyle:{
        width:86,
        height:86,
        borderRadius:6,
    },

    view2Style:{
        flex:2,
    },
    viewTopStyle:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    viewCenterStyle:{

        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    textDecsrptionStyle:{
        fontSize:12,
        color:'#9F9F9F'
    }
    ,
    viewBottomStyle:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    textPriceStyle:{
        color:'#06C1AE',
        fontSize:16,
    }
})