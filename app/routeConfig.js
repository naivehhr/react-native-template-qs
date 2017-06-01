/*
 * @Author: aran.hu 
 * @Date: 2017-06-01 14:07:31 
 * @Last Modified by:   aran.hu 
 * @Last Modified time: 2017-06-01 14:07:31 
 */
import {CounterApp} from './index'
import Home from './containers/home'
import H1 from './containers/home-1'
const routes = {
	Home: { 
		screen: Home,
		navigationOptions: {
			title: 'Home'
		}
	},
	CounterApp: { 
		screen: CounterApp,
		navigationOptions: {
			title: 'Home'
		}
	},
	H1: { 
		screen: H1,
		navigationOptions: {
			title: 'H1'
		}
	},
}
export default routes