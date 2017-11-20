import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { removeExpense, editExpense } from "../actions/expenses";

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense))
                    props.history.push('/')
                }}
                expense={props.expense} />
            <button onClick={() => {
                props.dispatch(removeExpense({ id: props.expense.id }))
                console.log(props.expense.id)
                    props.history.push('/')
            }}>Remove</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
        // expense: props.match.params.id
    }
}
export default connect(mapStateToProps)(EditExpensePage)