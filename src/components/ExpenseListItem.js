import React from 'react'
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ history, id, description, amount, createdAt, dispatch }) => {
  return (
    <div>
      <ul>
        <Link to={`/edit/${id}`} >
          <li>{description}</li>
        </Link>
        <li>{amount}</li>
        <li>{createdAt}</li>
        <button onClick={() => {
          dispatch(removeExpense({ id }))
        }}>Remove</button>
      </ul>
    </div>
  )
}

export default connect()(ExpenseListItem)