import React from 'react'
import ExpensesItem from "./ExpensesItem"

const Expenses = (props) => {
    return (
        <>
            <ExpensesItem title={props.expenseData[0].title} price={props.expenseData[0].amount} date={props.expenseData[0].date} />
            <ExpensesItem title={props.expenseData[1].title} price={props.expenseData[1].amount} date={props.expenseData[1].date} />
            <ExpensesItem title={props.expenseData[2].title} price={props.expenseData[2].amount} date={props.expenseData[2].date} />
            <ExpensesItem title={props.expenseData[3].title} price={props.expenseData[3].amount} date={props.expenseData[3].date} />
            <ExpensesItem title={props.expenseData[4].title} price={props.expenseData[4].amount} date={props.expenseData[4].date} />
        </>
    )
}

export default Expenses