import React, {Component} from 'react'
import {View} from 'react-native'
import { StackNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';
import Routes from './app/routeConfig'
import {connect} from 'react-redux'

const AppNavigator = StackNavigator({
    ...Routes
  }, {
	navigationOptions: {
		headerStyle: {
			backgroundColor: 'yellow'
		}
	}
});
// 这样配置有问题 https://github.com/react-community/react-navigation/issues/1357 在配合是TabNavigation时候
// const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('CounterApp'));
// 暂如下配置
const initialNavState=AppNavigator.router.getStateForAction(NavigationActions.reset({
	index: 0,
	actions: [
	  NavigationActions.navigate({
		routeName: 'Home',
	  }),
	],
}))
export const navReducer = (state = initialNavState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

class App extends React.Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});
export default connect(mapStateToProps)(App);