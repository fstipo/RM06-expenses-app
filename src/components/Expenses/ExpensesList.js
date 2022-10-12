import React from 'react'
import ExpensesItem from "./ExpensesItem"

const ExpensesList = (props) => {
    const hasExpenses = props.items.length === 0 ? <p className='card expense-items__message'>No expenses to display for selected year</p> : props.items.map((data) => <ExpensesItem title={data.title} price={data.amount} date={data.date} key={data.id} />);

    // // Second version 
    // let expensesContent = <p className='card expense-items__message'>No expenses to display for selected year</p>;
    // if (filteredExpenses.length > 0) {
    //     expensesContent = filteredExpenses.map((data) => <ExpensesItem title={data.title} price={data.amount} date={data.date} key={data.id} />)
    // }
    return (
        <ul>
            {hasExpenses}
        </ul>
        // {/* {filteredExpenses.length === 0 && <p className='card expense-items__message'>No expenses to display for selected year</p>}
        //     {filteredExpenses.length > 0 && filteredExpenses.map((data) => <ExpensesItem title={data.title} price={data.amount} date={data.date} key={data.id} />)} */}

    )
}

export default ExpensesList