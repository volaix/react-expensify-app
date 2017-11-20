import moment from 'moment'
//Get visible expenses
//first argument is all the expenses, second is the filters
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {

  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt) 
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
    const endDatematch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDatematch && textMatch  
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1
    }

  })
}
export default getVisibleExpenses