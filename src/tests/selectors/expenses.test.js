import selectExpenses from "../../selectors/expenses";
import moment from 'moment'

const expenses = [{
  description: 'itam 1',
  note: '',
  amount: 1,
  createdAt: 0,
  id: '020'
},
//expenses[1]
{
  description: 'item 2',
  note: '',
  amount: 2,
  createdAt: moment(0).add(4,'days').valueOf(),
  id: '021'
},
//expenses[2]
{
  description: 'item 3',
  note: '',
  amount: 0,
  createdAt: moment(0).subtract(4,'days').valueOf(),
  id: '201'
}
]

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  }
  const result = selectExpenses(expenses, filters)

  expect(result).toEqual([expenses[1], expenses[2]])

})

test('should filter by start date value', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: undefined,
  }
  const result = selectExpenses(expenses, filters)

  expect(result).toEqual([expenses[1], expenses[0]])

})

//should filter by end date
test('should filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: moment(0),
  }
  const result = selectExpenses(expenses, filters)

  expect(result).toEqual([expenses[0], expenses[2]])

})

//sort by date
test('should filter by date value', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  }
  const result = selectExpenses(expenses, filters)

  expect(result).toEqual([expenses[1], expenses[0], expenses[2]])

})
//sort by amount
test('should filter by amount value', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  }
  const result = selectExpenses(expenses, filters)

  expect(result).toEqual([expenses[1], expenses[0], expenses[2]])

})