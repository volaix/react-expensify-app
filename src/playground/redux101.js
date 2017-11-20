import React from 'react';
import { createStore } from 'redux'

const countReducer = (state = { count:1, something: "else" }, action)=> {
  switch (action.type){
    case 'INCREMENT': 
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'RESET':
      return {
        count: 0
      }
    case 'SET':
      return {
        count : action.setBy
      }
      default:
        return state
  }
}
//why does replacing store with createStore(countReducer) return nothing
const store = createStore(countReducer)

const unsubscribe = store.subscribe(()=>{
  console.log(store.getState())
})

const setCount = ({setBy = 1}) => ( {
  type: 'SET',
  setBy
} )
const decrementCount = ({decrementBy = 1}) => ({
  type: 'DECREMENT',
  decrementBy
})
const incrementCount = ({incrementBy = 1}) => ({
  type: 'INCREMENT',
  incrementBy 
})
const resetCount = () => ( {
 type: 'RESET'
} )

store.dispatch(incrementCount({ incrementBy: 99})) 
console.log(createStore(countReducer));

store.dispatch(decrementCount({ decrementBy: 43})) 
store.dispatch(resetCount())
store.dispatch(setCount({setBy: 244}))