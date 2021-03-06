/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    Navigator
} from 'react-native';

import MainPage from './page/Main/MainPage';

export default class MeiTuan extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{ name: 'MainPage', component: MainPage }}

            configureScene={(route) => {
                            return Navigator.SceneConfigs.PushFromRight;
                        }}

            renderScene={(route, navigator) => {
                            let Component = route.component;
                            return <Component {...route.params} navigator={navigator} />
                        }}
        />
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('MeiTuan', () => MeiTuan);
