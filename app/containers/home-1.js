/*
 * @Author: aran.hu 
 * @Date: 2017-06-01 10:59:32 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2017-06-01 14:07:09
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
	Button,
	ScrollView,
	Image,
	Platform,
	Animated,
	Easing
} from 'react-native';
import { 
	StackNavigator, 
	TabNavigator, 
	DrawerNavigator,
	DrawerItems,
	NavigationActions
 } from 'react-navigation'
class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('DrawerOpen')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyApp = DrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
},{
	drawerWidth: 200,
  drawerPosition: 'right',
	contentComponent: props => <ScrollView><DrawerItems {...props} /></ScrollView>,
	contentOptions: {
		activeTintColor: '#e91e63',
		style: {
			marginVertical: 0,
		}
	}
});
export default MyApp