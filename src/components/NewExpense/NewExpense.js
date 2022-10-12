import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"
import NewExpenseStart from './NewExpenseStart'

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const clickHandler = () => setShowForm(!showForm);
    const saveExpenseDataHandler = (enteredSavedExpenseData) => {
        const expenseData = {
            ...enteredSavedExpenseData, id: (Math.floor(Math.random() * 100000) + 1).toString()
        }
        props.onAddExpense(expenseData);

    }

    return (
        <div className='new-expense'>
            {!showForm && <NewExpenseStart onClick={clickHandler} />}
            {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelClick={clickHandler} />}
        </div>
    )
}

export default NewExpense