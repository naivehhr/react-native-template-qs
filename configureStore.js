/*
 * @Author: aran.hu 
 * @Date: 2017-04-25 15:42:59 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2017-05-31 13:33:05
 */

import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { CounterReducer } from './app/'
import { navReducer } from './navConfig'

const enhancer = compose(
  applyMiddleware(
    thunk
  )
)

const reducer = combineReducers({
  counter: CounterReducer,
  nav: navReducer
});

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    enhancer
  )
  return store;
}
