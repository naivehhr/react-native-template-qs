import React, {Component} from 'react'
import {View} from 'react-native'
import { addNavigationHelpers } from 'react-navigation';
import Routes from './app/routeConfig'
import {connect} from 'react-redux'
import { 
	StackNavigator, 
 } from 'react-navigation'

const AppNavigator = StackNavigator({
    ...Routes
  }, {
	navigationOptions: {
		headerStyle: {
			backgroundColor: 'yellow'
		}
	}
});

const initialState = AppNavigator.router
.getStateForAction(AppNavigator.router.getActionForPathAndParams('CounterApp'));

export const navReducer = (state = initialState, action) => {
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