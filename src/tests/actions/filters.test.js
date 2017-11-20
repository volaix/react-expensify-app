import {
  setEndDate, 
  setStartDate, 
  setTextFilter, 
  sortByAmount, 
  sortByDate
} from '../../actions/filters'
import moment from 'moment'

test('should generate end date action', ()=>{
  const action = setEndDate(moment(232))
  expect(action).toEqual({
   type: 'SET_END_DATE',
    endDate: moment(232)
  })
})

test('should generate start date action', ()=>{
  const action = setStartDate(moment(0))
  expect(action).toEqual({
   type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('should generate setup for textfilter', () => {
  const text = "something in"
  const action = setTextFilter(text)
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  })

})

test('should generate default action setup for textfilter', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('should generate sortbyamount action', () => {
  const action = sortByAmount()
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  })
})

test('should generate sortbydate', () => {
  const action = sortByDate()
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })
})