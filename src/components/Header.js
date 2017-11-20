import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <div>
        <header>
            <h1>Expendify</h1>
                <NavLink activeClassName="is-active" exact={ true } to="/">Dashboard</NavLink>
                <NavLink activeClassName="is-active" to="/create">Create Expense</NavLink>
                <NavLink activeClassName="is-active" to="/edit">Edit Expense</NavLink>
                <NavLink activeClassName="is-active" to="/help">HelpPage</NavLink>
        </header>
    </div>
)

export default Header