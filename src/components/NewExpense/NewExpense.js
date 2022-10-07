import React from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredSavedExpenseData) => {
        const expenseData = {
            ...enteredSavedExpenseData, id: (Math.floor(Math.random() * 100000) + 1).toString()
        }
        props.onAddExpense(expenseData);

    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense