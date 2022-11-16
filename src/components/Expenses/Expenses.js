import React, { useState } from 'react'

import ExpenseFilter from "./ExpenseFilter"
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState("2020")
    const selectedYearHandler = (selectedYear) => {
        setFilterYear(selectedYear)
    };
    const filteredExpenses = props.expenseData.filter(el => filterYear === el.date.getFullYear().toString());

    return (
        <>
            <ExpenseFilter onSelectedYear={selectedYearHandler} selected={filterYear} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </>
    )
}

export default Expenses