import React from 'react'
import "./ExpenseForm.css"

const ExpenseForm = () => {
    return (
        <form className='form'>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor='title'>Title:</label>
                    <input id="title" type="text" autoFocus />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor='amount'>Amount:</label>
                    <input id="amount" type="number" min="0.01" step="0.01" />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor='date'>Date:</label>
                    <input id='date' type="date" min="2019-01-01" max="2022-12-31" />
                </div>
                <div className='new-expense__action'>
                    <button className='btn' type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm