/*
 * @Author: aran.hu 
 * @Date: 2017-06-01 10:53:02 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2017-06-01 14:06:29
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Platform
} from 'react-native';
import { 
	StackNavigator, 
	TabNavigator, 
	DrawerNavigator,
	DrawerItems
 } from 'react-navigation'

import Home from './home'
// import H1 from './home-1';
// import L1 from './list-1';
// import A1 from './account-1';

const App = StackNavigator({
  Home: { screen: Home },
}, {
  initialRouteName: 'Home',
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
  headerMode: 'none',
})
export default App