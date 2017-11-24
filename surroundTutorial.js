//real life cases of using surround
//I wish I had this when I started

//Example A. Reference error. Joe is undefined.
import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('should setup a remove for an expense', () => {
  const action = removeExpense({ id: Joe }) 
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: Joe
  })
})

//Normal VIM commands, but relevant if you don't use it yet
test('should generate end date action', ()=>{
  const action = setEndDate(2302302) //change so setEndDate(moment(232))
)
})

//peek type definition ctrl K, ctrl T

//adding more '' around (around id numbers)
const expenses = [{
  description: 'item 1',
  note: '',
  amount: 1,
  createdAt: 0,
  id: 020
},
{
  description: 'item 2',
  note: '',
  amount: 2,
  createdAt: -100,
  id: 021
},
{
  description: 'item 3',
  note: '',
  amount: 0,
  createdAt: 10000,
  id: 201
}
]

//A valid react element must be returned. Add a bracket after the =>
const Display = (props) => {
  <div>
    <h3>hello world</h3>
  </div> 
 }