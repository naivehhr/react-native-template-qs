import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import { 
	StackNavigator, 
	TabNavigator, 
	DrawerNavigator,
	DrawerItems,
  NavigationActions
 } from 'react-navigation'

import H1 from './home-1';
import { connect } from 'react-redux';
class A extends Component {

  static navigationOptions = {
    tabBarVisible: true,
    title: 'Home Screen',
    tabBarLabel: 'Home',
  }

  componentDidMount() {
    console.log('====================================');
    console.log('Home did mount');
    console.log('====================================');
  }

  componentWillUnmount () {
    console.log('====================================');
    console.log('Home will unmount');
    console.log('====================================');
  }
  

  goTo = () => {
    const { navigation } = this.props
		const { navigate } = navigation
    navigate('H1')

    // const navigateAction = NavigationActions.navigate({
		// 	routeName: 'H1',
		// 	params: {id: 'huhaoran'},
		// 	action: NavigationActions.navigate({ routeName: 'H1'})
		// })
		// this.props.navigation.dispatch(navigateAction)
  }

  render() {
    const { navigate } = this.props.navigation
    console.log('====================================');
    console.log('====================================');
    return (
      <View style={styles.container}>
        <Button 
          title='Go to Next'
          onPress={this.goTo} 
        />
        <Button 
          title='Switch to List'
          onPress={() => { navigate('T3') }} 
        />
      </View>
    )
  }
}

class B extends Component {
	render() {
		return (
			<View>
				<Text>B</Text>
			</View>
		)
	}
}

class C extends Component {
	render() {
		return (
			<View>
				<Text>C</Text>
			</View>
		)
	}
}
const Home = TabNavigator({
  T1: { screen: A },
  T2: { screen: B },
  T3: { screen: C },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  icon: {
    width: 26,
    height: 26,
  },
});
function mapStateToProps(state) {
  return {
    counter: state.counter,
    state
  };
}

export default Home