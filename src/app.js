import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from './selectors/expenses'

const store = configureStore()


store.dispatch(addExpense({description: 'water bill', amount: 14000, createdAt: 32}))
store.dispatch(addExpense({description: 'gas bill', amount: 4000, createdAt: 3000}))
store.dispatch(addExpense({description: 'chocolate bill', amount: 9000, createdAt: 400000}))
store.dispatch(setTextFilter('bill'))

// console.log(store);
const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(state);
// console.log(visibleExpenses);


const jsx = (
  <div>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </div>
)

ReactDOM.render(jsx, document.getElementById('app'));