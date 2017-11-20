import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('should setup a remove for an expense', () => {
  const action = removeExpense({ id: 'Joe' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'Joe'
  })
})

test('edit expense action should be setup', () => {
  const action = editExpense(991, { description: 'update', amount: 9000 })
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 991,
    updates: {
      description: 'update',
      amount: 9000,
    }
  })
})

test('should setup addExpense with provided values', () => {
  const expenseData = {
    description: 'NewDesc',
    amount: 9000,
    createdAt: 1000000000,
    note: "this is for the test"
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should addexpense action pass through default values', () => {
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description : '',
      note : '',
      amount : 0,
      createdAt : 0,
    }
  })
})