import React, { useState } from 'react'
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    const [enterTitle, setEnterTitle] = useState("");
    const [enterAmount, setEnterAmount] = useState("");
    const [enterDate, setEnterDate] = useState("");

    const titleChangeHandler = (e) => setEnterTitle(e.target.value);
    const amountChangeHandler = (e) => setEnterAmount(e.target.value);
    const dateChangeHandler = (e) => setEnterDate(e.target.value);

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enterTitle,
            amount: enterAmount,
            date: enterDate
        }
        props.onSaveExpenseData(expenseData);
        props.onCancelClick()
        setEnterTitle("");
        setEnterAmount("");
        setEnterDate("");
    }



    return (
        <form className='form' onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor='title'>Title:</label>
                    <input id="title" type="text" autoFocus onChange={titleChangeHandler} value={enterTitle} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor='amount'>Amount:</label>
                    <input id="amount" type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enterAmount} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor='date'>Date:</label>
                    <input id='date' type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={enterDate} />
                </div>
                <div className='new-expense__action'>
                    <button className='btn btn-sub' type='submit'>Add Expense</button>
                    <button className='btn btn-alt' type='button' onClick={props.onCancelClick}>Cancel</button>
                </div>
            </div>
        </form >
    )
}

export default ExpenseForm