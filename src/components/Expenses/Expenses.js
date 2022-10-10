import React, { useState } from 'react'
import ExpensesItem from "./ExpensesItem"
import ExpenseFilter from "./ExpenseFilter"

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState("2020")
    const selectedYearHandler = (selectedYear) => setFilterYear(selectedYear);
    return (
        <>
            <ExpenseFilter onSelectedYear={selectedYearHandler} selected={filterYear} />
            {props.expenseData.map((data) => <ExpensesItem title={data.title} price={data.amount} date={data.date} key={data.id} />)}
        </>
    )
}

export default Expenses